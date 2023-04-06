import type {
  AddressRva,
  AddressOrganization,
  AddressCommune,
  AddressStreet,
} from '@/model/address.model'
import { createNewViewpointFromAddress } from '@/services/viewpointHelper'
import type { RennesApp } from '@/services/RennesApp'
import { apiSitesorgService } from '@/services/api-sitesorg'

function midpoint(lat1: number, lon1: number, lat2: number, lon2: number) {
  // Convert input latitudes and longitudes to radians
  const lat1Rad = toRadians(lat1)
  const lon1Rad = toRadians(lon1)
  const lat2Rad = toRadians(lat2)
  const lon2Rad = toRadians(lon2)

  // Calculate midpoint
  const Bx = Math.cos(lat2Rad) * Math.cos(lon2Rad - lon1Rad)
  const By = Math.cos(lat2Rad) * Math.sin(lon2Rad - lon1Rad)
  const latMidRad = Math.atan2(
    Math.sin(lat1Rad) + Math.sin(lat2Rad),
    Math.sqrt((Math.cos(lat1Rad) + Bx) * (Math.cos(lat1Rad) + Bx) + By * By)
  )
  const lonMidRad = lon1Rad + Math.atan2(By, Math.cos(lat1Rad) + Bx)

  // Convert midpoint latitudes and longitudes back to degrees
  const latMid = toDegrees(latMidRad)
  const lonMid = toDegrees(lonMidRad)

  return { latitude: latMid, longitude: lonMid }
}

function toRadians(degrees: number) {
  return degrees * (Math.PI / 180)
}

function toDegrees(radians: number) {
  return radians * (180 / Math.PI)
}

function getCenterFromUpperAndLowerCorner(
  item: AddressCommune | AddressStreet
) {
  let coordinates = item.upperCorner.split(' ')
  const lonUpperCorner = coordinates[0]
  const latUpperCorner = coordinates[1]
  coordinates = item.lowerCorner.split(' ')
  const lonLowerCorner = coordinates[0]
  const latLowerCorner = coordinates[1]
  const midPoint = midpoint(
    +latUpperCorner,
    +lonUpperCorner,
    +latLowerCorner,
    +lonLowerCorner
  )
  return [+midPoint.longitude, +midPoint.latitude]
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
    newVp = createNewViewpointFromAddress(
      currentVp!,
      getCenterFromUpperAndLowerCorner(itemFormatted)
    )
  } else if (type === 'streets') {
    const itemFormatted = item as AddressStreet
    newVp = createNewViewpointFromAddress(
      currentVp!,
      getCenterFromUpperAndLowerCorner(itemFormatted)
    )
  }
  return newVp
}
