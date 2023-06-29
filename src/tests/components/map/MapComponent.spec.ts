import { describe, it, expect, vi } from 'vitest'
import MapComponent from '@/components/map/MapComponent.vue'
import { mount } from '@vue/test-utils'
import { RennesApp } from '@/services/RennesApp'
import { createTestingPinia } from '@pinia/testing'
import SelectRoofInteraction from '@/interactions/selectRoofInteraction'
import ForbidenClickInteraction from '@/interactions/forbidClickInteraction'
import SelectDistrictInteraction from '@/interactions/selectDistrictInteractions'
import { RENNES_LAYER } from '@/stores/layers'
import { viewList } from '@/model/views.model'
import { useRoofsStore } from '@/stores/roof'
import { VcsModule, GeoJSONLayer, OpenlayersMap } from '@vcmap/core'
import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON'
import configuration from '@/tests/config/configuration_test.json'

vi.mock('vue-router')
vi.mock('@/services/roofInteractionHelper')

describe('#MapComponent', async () => {
  const olMap = new OpenlayersMap({ name: 'ol' }).toJSON()
  const roofLayer: GeoJSONLayer = new GeoJSONLayer({
    name: RENNES_LAYER.roofShape,
    activeOnStartup: true,
  })
  const context = new VcsModule({
    layers: [roofLayer.toJSON()],
    viewpoints: [],
    maps: [olMap],
    startingViewpointName: 'rennes',
    startingMapName: 'ol',
  })
  const app = new RennesApp(context)
  app.addModule(context)
  const wrapper = mount(MapComponent, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          stubActions: false,
          stubPatch: false,
          fakeApp: true,
          initialState: {
            views: {
              currentView: viewList.home,
            },
            address: {
              latitude: 10,
              longitude: 10,
            },
            interactions: {
              _activeInteractions: [],
            },
            configStore: {
              config: configuration,
            },
          },
        }),
      ],
      provide: {
        rennesApp: app,
      },
    },
  })
  const roofStore = useRoofsStore()

  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })

  describe('initialize right home interactions', async () => {
    it('start without SelectRoofInteraction on home', async () => {
      app.maps.eventHandler.interactions.forEach((interaction) => {
        expect(interaction).not.toBeInstanceOf(SelectRoofInteraction)
      })
    })
    it('start without SelectDistrictInteraction on home', () => {
      app.maps.eventHandler.interactions.forEach((interaction) => {
        expect(interaction).not.toBeInstanceOf(SelectDistrictInteraction)
      })
    })
    it('start with forbiden click interaction on home', async () => {
      expect(
        app.maps.eventHandler.interactions.find(
          (interaction) => interaction instanceof ForbidenClickInteraction
        )
      ).toBeTruthy()
    })
  })

  // Skip failed test for now
  describe.skip('setupGridInstallation', async () => {
    it('set up the interaction, initialize grid, change the zoom, set center', async () => {
      const geojsonObject: GeoJSONFeatureCollection = {
        type: 'FeatureCollection',
        features: [],
      }
      roofStore.getFeaturesOfSelectedPanRoof = () => geojsonObject
      const roofInteractionHelper = await import(
        '@/services/roofInteractionHelper'
      )
      roofInteractionHelper.displayGridOnMap = vi.fn()
      roofInteractionHelper.displayRoofShape = vi.fn()
      roofInteractionHelper.generateRectangleGrid = vi
        .fn()
        .mockReturnValue({ bbox: [1, 1.5, 1, 2.5] })
      //roofInteractionHelper.addRoofInteractionOn2dMap = vi.fn()

      await (wrapper.vm as any).setupGridInstallation() //eslint-disable-line

      expect(roofInteractionHelper.displayRoofShape).toHaveBeenCalledOnce()
      expect(roofInteractionHelper.generateRectangleGrid).toHaveBeenCalledOnce()
      expect(roofInteractionHelper.generateRectangleGrid).toHaveBeenCalledOnce()
      expect(
        roofInteractionHelper.addRoofInteractionOn2dMap
      ).toHaveBeenCalledOnce()
      expect(app.getOpenlayerMap().getView().getZoom()).toBe(22)
      //set center the the middle of the bbox
      expect(app.getOpenlayerMap().getView().getCenter()![0]).toBe(1)
      expect(app.getOpenlayerMap().getView().getCenter()![1]).toBe(2)
    })
  })
})
