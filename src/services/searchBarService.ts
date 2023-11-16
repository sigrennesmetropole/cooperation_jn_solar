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
import pinIcon from '@/assets/illustrations/pinsearch.png'
import type { DataSourceLayer } from '@vcmap/core'
import { RENNES_LAYER } from '@/stores/layers'
import { Entity as CesiumEntity } from '@vcmap-cesium/engine'
import { Cartesian3 } from '@vcmap-cesium/engine'
import { NearFarScalar } from '@vcmap-cesium/engine'
import { DistanceDisplayCondition } from '@vcmap-cesium/engine'
import { Color } from '@vcmap-cesium/engine'

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
  const customLayer: DataSourceLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.customLayerSearchAddress
  ) as DataSourceLayer
  customLayer.entities.removeAll()
}

export async function addPin(
  rennesApp: RennesApp,
  type: string,
  item: AddressRva | AddressOrganization | AddressCommune | AddressStreet
) {
  let coordinates = [0, 0]
  const offsetHeight = 15
  if (type === 'rva') {
    const itemFormatted = item as AddressRva
    coordinates = [+itemFormatted.x, +itemFormatted.y]
  } else if (type === 'organization') {
    const itemFormatted = item as AddressOrganization
    const data_organization = await apiSitesorgService.fetchOrganizationById(
      itemFormatted.id
    )
    const id_site = data_organization.sites[0].idSite.idSite
    const data_site = await apiSitesorgService.fetchSiteById(id_site)
    const feature_site = data_site.features[0]
    coordinates = feature_site.geometry.coordinates
  } else if (type === 'communes') {
    const itemFormatted = item as AddressCommune
    coordinates = calculateBboxCenter(itemFormatted)
  } else if (type === 'streets') {
    const itemFormatted = item as AddressStreet
    coordinates = calculateBboxCenter(itemFormatted)
  }

  // https://groups.google.com/g/cesium-dev/c/GqueAzAkScg
  const customLayer: DataSourceLayer = rennesApp.layers.getByKey(
    RENNES_LAYER.customLayerSearchAddress
  ) as DataSourceLayer

  customLayer.entities.removeAll()

  // TODO: Some times failed to get the terrain height, due to 3d tile failed to load
  const terrainHeight = await rennesApp.getHeight(
    coordinates[0],
    coordinates[1]
  )
  const entity = new CesiumEntity({
    position: Cartesian3.fromDegrees(
      coordinates[0],
      coordinates[1],
      terrainHeight + offsetHeight
    ),

    billboard: {
      image: pinIcon,
      // [min distance, scale for min distance, max distance, scale when max distance]
      scaleByDistance: new NearFarScalar(0, 1.0, 1000, 0.0),
      eyeOffset: new Cartesian3(0, 0, -50),
    },
    polyline: {
      positions: [
        Cartesian3.fromDegrees(coordinates[0], coordinates[1], 0),
        Cartesian3.fromDegrees(
          coordinates[0],
          coordinates[1],
          terrainHeight + offsetHeight
        ),
      ],
      width: 3,
      // Minimum and maximum distance to be displaye
      distanceDisplayCondition: new DistanceDisplayCondition(0, 1000),
      material: Color.fromBytes(224, 13, 40),
    },
  })

  customLayer.addEntity(entity)
}

export async function createVPForTypeAddress(
  rennesApp: RennesApp,
  type: string,
  item: AddressRva | AddressOrganization | AddressCommune | AddressStreet
) {
  const currentVp = await rennesApp.maps?.activeMap!.getViewpoint()
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
