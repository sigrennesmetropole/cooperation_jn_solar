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
import type { RoofSurfaceModel } from '@/model/roof.model'

vi.mock('vue-router')
vi.mock('@/services/roofInteractionHelper')

describe('#MapComponent', async () => {
  const olMap = new OpenlayersMap({ name: 'ol' }).toJSON()
  const roofLayer: GeoJSONLayer = new GeoJSONLayer({
    name: RENNES_LAYER.roofShape,
    activeOnStartup: true,
  })
  const installationLayer: GeoJSONLayer = new GeoJSONLayer({
    name: RENNES_LAYER.installations,
    activeOnStartup: true,
  })
  const context = new VcsModule({
    layers: [roofLayer.toJSON(), installationLayer.toJSON()],
    viewpoints: [],
    maps: [olMap],
    startingViewpointName: 'rennes',
    startingMapName: 'ol',
  })
  const app = new RennesApp(context)
  await app.addModule(context)
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

  describe('#setupGridInstallation', async () => {
    it('set up the interaction, initialize grid, change the zoom, set center', async () => {
      const geojsonObject: GeoJSONFeatureCollection = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 'photovoltaïque_potentiel_classif_2021.1211602',
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-1.652381, 48.093163],
                  [-1.652381, 48.093163],
                  [-1.652382, 48.093165],
                  [-1.652382, 48.093195],
                  [-1.652382, 48.093195],
                  [-1.652371, 48.093196],
                  [-1.652369, 48.093196],
                  [-1.652367, 48.093196],
                  [-1.652362, 48.093196],
                  [-1.652362, 48.093195],
                  [-1.652355, 48.093195],
                  [-1.652343, 48.093196],
                  [-1.652301, 48.093197],
                  [-1.652297, 48.093197],
                  [-1.652274, 48.093197],
                  [-1.652274, 48.093197],
                  [-1.652273, 48.093164],
                  [-1.652298, 48.093164],
                  [-1.652352, 48.093163],
                  [-1.652366, 48.093162],
                  [-1.652372, 48.093162],
                  [-1.652372, 48.093163],
                  [-1.652381, 48.093163],
                ],
              ],
            },
            properties: {
              uid: 1211602,
              buildingid: '35238_030674',
              surface_id: 354428,
              rang_1: 0.7820897,
              rang_2: 24.899971,
              rang_3: 36.992928,
              rang_4: 37.325012,
              azimuth: 182,
              slope: 22,
              pan_area: 24.055117,
              all_area: 102.121346,
              anamorphos: 100,
            },
            bbox: [-1.652382, 48.093162, -1.652273, 48.093197],
          },
        ],
      }
      const roofSurface: RoofSurfaceModel = {
        surface_id: '354428',
        values: [0.7820897, 24.899971, 36.992928, 37.325012],
        favorable: 17.9,
        total: 24.1,
        orientation: 'SUD',
        azimuth: 182,
        inclinaison: 22,
        total_building: 102.2,
      }
      roofStore.getFeaturesOfSelectedPanRoof = () => geojsonObject
      roofStore.getRoofSurfaceModelOfSelectedPanRoof = () => roofSurface
      roofStore.usableIds = []
      const roofInteractionHelper = await import(
        '@/services/roofInteractionHelper'
      )
      roofInteractionHelper.displayGridOnMap = vi.fn()
      roofInteractionHelper.addRoofInteractionOn2dMap = vi.fn()
      roofInteractionHelper.generateRectangleGrid = vi
        .fn()
        .mockReturnValue({ bbox: [1, 1.5, 1, 2.5] })
      await (wrapper.vm as any).setupGridInstallation() //eslint-disable-line
      expect(
        roofInteractionHelper.addRoofInteractionOn2dMap
      ).toHaveBeenCalledOnce()
      expect(roofInteractionHelper.displayGridOnMap).toHaveBeenCalledOnce()
      expect(app.getOpenlayerMap().getView().getZoom()).toBe(22)
    })
  })
})
