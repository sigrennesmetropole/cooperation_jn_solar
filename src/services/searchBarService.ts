import type {
  AddressRva,
  AddressOrganization,
  AddressCommune,
  AddressStreet,
} from '@/model/address.model'
import { createNewViewpointFromAddress } from '@/services/viewPointHelper'
import type { RennesApp } from '@/services/RennesApp'
import { apiSitesorgService } from '@/services/api-sitesorg'
import {
  createCustomViewpointFromExtent,
  cloneViewPointAndResetCameraPosition,
} from '@/services/viewPointHelper'
import { lineString, bbox, distance } from '@turf/turf'
import * as turf from '@turf/turf'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import { Style, Icon } from 'ol/style'
import pinIcon from '@/assets/illustrations/pinsearch.png'
import type { GeoJSONLayer } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'

function extractCoordinatesFromItem(item: AddressCommune | AddressStreet) {
  let coordinates = item.upperCorner.split(' ')
  const lonUpperCorner = coordinates[0]
  const latUpperCorner = coordinates[1]
  coordinates = item.lowerCorner.split(' ')
  const lonLowerCorner = coordinates[0]
  const latLowerCorner = coordinates[1]
  return [
    [+lonUpperCorner, +latUpperCorner],
    [+lonLowerCorner, +latLowerCorner],
  ]
}
async function getViewPointFromBBOX(item: AddressCommune | AddressStreet) {
  const coordinates = extractCoordinatesFromItem(item)
  const line = lineString(coordinates)
  const boundingBox = bbox(line)
  const viewpoint = await createCustomViewpointFromExtent(boundingBox)

  // Calculate the diagonal distance of the bbox
  const topLeft = [boundingBox[0], boundingBox[1]]
  const bottomRight = [boundingBox[2], boundingBox[3]]
  const bboxDiagonalDistance = distance(topLeft, bottomRight, {
    units: 'meters',
  })
  return cloneViewPointAndResetCameraPosition(viewpoint, bboxDiagonalDistance)
}

function calculateBboxCenter(item: AddressCommune | AddressStreet) {
  const [minLon, minLat] = item.lowerCorner.split(' ').map(Number)
  const [maxLon, maxLat] = item.upperCorner.split(' ').map(Number)
  const bboxPolygon = turf.bboxPolygon([minLon, minLat, maxLon, maxLat])
  const center = turf.center(bboxPolygon)
  const coordinates = center.geometry.coordinates
  return coordinates
}

export async function hiddePin(rennesApp: RennesApp) {
  const customLayer: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.customLayerSearchAddress
  )
  customLayer.removeAllFeatures()
}

export async function addPin(
  rennesApp: RennesApp,
  type: string,
  item: AddressRva | AddressOrganization | AddressCommune | AddressStreet
) {
  let point = new Point([0, 0, 0])
  if (type === 'rva') {
    const itemFormatted = item as AddressRva
    point = new Point([+itemFormatted.x, +itemFormatted.y, 150])
  } else if (type === 'organization') {
    const itemFormatted = item as AddressOrganization
    const data_organization = await apiSitesorgService.fetchOrganizationById(
      itemFormatted.id
    )
    const id_site = data_organization.sites[0].idSite.idSite
    const data_site = await apiSitesorgService.fetchSiteById(id_site)
    const feature_site = data_site.features[0]
    const coordinates = feature_site.geometry.coordinates
    const x = coordinates[0]
    const y = coordinates[1]
    point = new Point([x, y, 150])
  } else if (type === 'communes') {
    const itemFormatted = item as AddressCommune
    const coordinates = calculateBboxCenter(itemFormatted)
    point = new Point([coordinates[0], coordinates[1], 150])
  } else if (type === 'streets') {
    const itemFormatted = item as AddressStreet
    const coordinates = calculateBboxCenter(itemFormatted)
    point = new Point([coordinates[0], coordinates[1], 150])
  }

  const customLayer: GeoJSONLayer = await rennesApp.getLayerByKey(
    RENNES_LAYER.customLayerSearchAddress
  )
  const new_feature = new Feature({
    olcs_altitudeMode: 'relativeToGround',
    olcs_heightAboveGround: 15,
    //https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html#eyeOffset
    olcs_eyeOffset: [0, 0, -50],
  })
  new_feature.setGeometry(point)
  new_feature.setStyle(
    new Style({
      image: new Icon({
        src: pinIcon,
        scale: 0.75,
      }),
      zIndex: 10,
    })
  )
  customLayer.removeAllFeatures()
  customLayer.addFeatures([new_feature])
}

export async function createVPForTypeAddress(
  rennesApp: RennesApp,
  type: string,
  item: AddressRva | AddressOrganization | AddressCommune | AddressStreet
) {
  const currentVp = await rennesApp.maps?.activeMap.getViewpoint()
  let newVp
  if (type === 'rva') {
    const itemFormatted = item as AddressRva
    newVp = createNewViewpointFromAddress(currentVp!, [
      +itemFormatted.x,
      +itemFormatted.y,
    ])
  } else if (type === 'organization') {
    const itemFormatted = item as AddressOrganization

    const data_organization = await apiSitesorgService.fetchOrganizationById(
      itemFormatted.id
    )
    const id_site = data_organization.sites[0].idSite.idSite
    const data_site = await apiSitesorgService.fetchSiteById(id_site)
    const feature_site = data_site.features[0]
    const point = feature_site.geometry.coordinates
    const x = point[0]
    const y = point[1]
    newVp = createNewViewpointFromAddress(currentVp!, [+x, +y])
  } else if (type === 'communes') {
    const itemFormatted = item as AddressCommune
    newVp = await getViewPointFromBBOX(itemFormatted)
  } else if (type === 'streets') {
    const itemFormatted = item as AddressStreet
    newVp = await getViewPointFromBBOX(itemFormatted)
  }
  return newVp
}
