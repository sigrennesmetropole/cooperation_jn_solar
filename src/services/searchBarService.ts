import type {
  AddressRva,
  AddressOrganization,
  AddressCommune,
  AddressStreet,
} from '@/model/address.model'
import { createNewViewpointFromAddress } from '@/services/viewPointHelper'
import type { RennesApp } from '@/services/RennesApp'
import { apiSitesorgService } from '@/services/api-sitesorg'
import { createCustomViewpointFromExtent } from '@/services/viewPointHelper'
import { lineString, bbox, distance } from '@turf/turf'
import { cloneViewPointAndResetCameraPosition } from '@/helpers/viewPointHelper'

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
