import type Feature from 'ol/Feature.js'
import { Pointer as PointerInteraction } from 'ol/interaction.js'
import type { Coordinate } from 'ol/coordinate'
import type { Vector as VectorSource } from 'ol/source.js'
import type { Vector as VectorLayer } from 'ol/layer.js'
import type { Extent } from 'ol/extent'
import { getUid, MapBrowserEvent } from 'ol'
import type { Style } from 'ol/style'
import type { StyleLike } from 'ol/style/Style'
import { RENNES_LAYER } from '@/stores/layers'
import type olFeature from 'ol/Feature'
import type olGeometry from 'ol/geom/Geometry'

export class OlDragSquaresInteraction extends PointerInteraction {
  initialCoordinate_: Coordinate | undefined
  feature_: Feature | undefined
  selected: Feature[]
  persistingSelectedMap: Map<string, Feature>
  gridFeaturesLayer: VectorLayer<VectorSource>
  originalFeatureStyles: Map<string, StyleLike>
  selectedStyle: Style
  isDragging: boolean

  constructor(
    gridFeaturesLayer: VectorLayer<VectorSource>,
    previouslySelected: olFeature<olGeometry>[],
    style: Style
  ) {
    super()
    this.initialCoordinate_ = undefined
    this.feature_ = undefined
    this.selected = []
    this.persistingSelectedMap = new Map<string, Feature>()
    this.gridFeaturesLayer = gridFeaturesLayer
    this.originalFeatureStyles = new Map<string, StyleLike>()
    this.selectedStyle = style
    this.isDragging = false
    previouslySelected.forEach((feature) => {
      gridFeaturesLayer
        .getSource()
        ?.getFeatures()
        .forEach((f) => {
          if (feature.getProperty('center') === f.getProperty('center')) {
            this.persistingSelectedMap.set(getUid(f), f)
            this.applySelectedStyle_(f)
          }
        })
    })
  }

  handleDownEvent(evt: MapBrowserEvent<UIEvent>) {
    const map = evt.map

    const feature = map.forEachFeatureAtPixel(
      evt.pixel,
      function (feature, layer) {
        if (
          // @ts-ignore
          layer[Object.getOwnPropertySymbols(layer)[0]] ===
          RENNES_LAYER.roofSquaresArea
        )
          return feature
      }
    )

    if (feature) {
      this.initialCoordinate_ = evt.coordinate
      this.feature_ = feature as Feature
    }

    return !!feature
  }

  handleDragEvent(evt: MapBrowserEvent<UIEvent>) {
    this.isDragging = true
    const x = evt.coordinate[0]
    const y = evt.coordinate[1]
    const extent: Extent = [
      Math.min(x, this.initialCoordinate_![0]),
      Math.min(y, this.initialCoordinate_![1]),
      Math.max(x, this.initialCoordinate_![0]),
      Math.max(y, this.initialCoordinate_![1]),
    ]
    const featuresInExtent = this.gridFeaturesLayer
      .getSource()
      ?.getFeaturesInExtent(extent)
    if (featuresInExtent) {
      this.selected.forEach((previouslySelectedFeature) => {
        previouslySelectedFeature.setStyle(
          this.originalFeatureStyles.get(getUid(previouslySelectedFeature))
        )
        this.originalFeatureStyles.delete(getUid(previouslySelectedFeature))
      })
      this.selected = []
      featuresInExtent.forEach((feature) => {
        const id = getUid(feature)
        if (!this.persistingSelectedMap.has(id)) {
          this.applySelectedStyle_(feature)
          this.selected.push(feature)
        }
      })
    }
  }

  applySelectedStyle_(feature: Feature) {
    const key = getUid(feature)
    if (!this.originalFeatureStyles.has(key)) {
      this.originalFeatureStyles.set(getUid(feature), feature.getStyle()!)
    }
    feature.setStyle(this.selectedStyle)
  }

  unselectEverything() {
    this.selected = []
    this.isDragging = false
    this.persistingSelectedMap.forEach((feature) => {
      this.restoreOriginalStyle(feature)
    })
    this.persistingSelectedMap.clear()
    this.originalFeatureStyles.clear()
  }

  restoreOriginalStyle(feature: Feature) {
    const id = getUid(feature)
    feature.setStyle(this.originalFeatureStyles.get(id))
    this.originalFeatureStyles.delete(id)
  }

  getSelected(): Feature[] {
    return Array.from(this.persistingSelectedMap.values())
  }

  handleUpEvent() {
    // user is currently dragging, update selectedFeature list
    if (this.isDragging) {
      this.isDragging = false
      this.selected.forEach((selectedFeature) => {
        this.persistingSelectedMap.set(getUid(selectedFeature), selectedFeature)
      })
      this.selected = []
    } else {
      //it was juste a click...
      if (this.feature_) {
        const id = getUid(this.feature_)
        if (this.persistingSelectedMap.has(id)) {
          this.persistingSelectedMap.delete(id)
          this.restoreOriginalStyle(this.feature_)
        } else {
          this.persistingSelectedMap.set(id, this.feature_)
          this.applySelectedStyle_(this.feature_)
        }
      }
    }
    this.initialCoordinate_ = undefined
    this.feature_ = undefined
    return false
  }
}
