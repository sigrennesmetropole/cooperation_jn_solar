import type { Feature } from 'ol'
import type { Geometry } from 'ol/geom'
import type { Cartesian2 } from '@vcmap-cesium/engine'
import { getBalloonPosition } from '@/helpers/balloonHelper'
import type { RennesApp } from '@/services/RennesApp'

export function getCartesianPositionFromFeature(
  rennesApp: RennesApp,
  feature: Feature<Geometry>
): Cartesian2 | undefined {
  return getBalloonPosition(rennesApp, feature.getGeometry()!.getCoordinates())
}
