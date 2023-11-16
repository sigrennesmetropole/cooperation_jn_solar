import type { Feature } from 'ol'
import type { Geometry, Point } from 'ol/geom'
import type { Cartesian2 } from '@vcmap-cesium/engine'
import { getBalloonPosition } from '@/helpers/balloonHelper'
import type { RennesApp } from '@/services/RennesApp'

export function getCartesianPositionFromFeature(
  rennesApp: RennesApp,
  feature: Feature<Geometry>
): Cartesian2 | undefined {
  const point = feature.getGeometry() as Point
  return getBalloonPosition(rennesApp, point.getCoordinates())
}
