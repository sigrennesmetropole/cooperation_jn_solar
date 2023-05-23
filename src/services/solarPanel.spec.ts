import { describe, it, vi, expect, beforeEach } from 'vitest'
import {
  filterSolarPanelByMaxSolarPanel,
  generateSolarPanel,
} from '@/services/solarPanel'
import { RennesApp } from '@/services/RennesApp'
import { GeoJSONLayer } from '@vcmap/core'

describe('SolarPanel', () => {
  let rennesApp: RennesApp
  const mockSolarPanelLayer = new GeoJSONLayer({})
  beforeEach(() => {
    rennesApp = new RennesApp({})
    mockSolarPanelLayer.addFeatures(
      generateSolarPanel([
        {
          index: 0,
          x: 50,
          y: 50,
          z: 50,
          pitch: 90,
          roll: 180,
          heading: 0,
        },
        {
          index: 1,
          x: 55,
          y: 55,
          z: 55,
          pitch: 90,
          roll: 180,
          heading: 0,
        },
      ])
    )
    rennesApp.getLayerByKey = () => {
      return Promise.resolve(mockSolarPanelLayer)
    }
  })
  describe('#filterSolarPanelByMaxSolarPanel', () => {
    it('apply filter on filtered solar panel', async () => {
      const spyHidenFeature = vi.spyOn(
        mockSolarPanelLayer.featureVisibility,
        'hideObjects'
      )
      await filterSolarPanelByMaxSolarPanel(rennesApp, 1)
      expect(spyHidenFeature).toHaveBeenCalledWith([expect.any(String)])
      expect(mockSolarPanelLayer.featureVisibility.hiddenObjects).toBeDefined()

      const spyShownFeature = vi.spyOn(
        mockSolarPanelLayer.featureVisibility,
        'showObjects'
      )
      await filterSolarPanelByMaxSolarPanel(rennesApp, 2)
      expect(spyShownFeature).toHaveBeenCalledWith([
        expect.any(String),
        expect.any(String),
      ])
      expect(mockSolarPanelLayer.featureVisibility.hiddenObjects).toBeDefined()
    })
  })
})
