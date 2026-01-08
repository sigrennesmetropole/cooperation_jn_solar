import { bf as Viewpoint, bg as point, bh as destination } from "./vendor.62ba8b76.js";
import { o as oppositeAzimuth } from "./map.7cd41464.js";
const cameraDistance = 150;
function computeViewPoint(turfPoint, vpJson) {
  const target = destination(
    turfPoint,
    cameraDistance * (Math.SQRT2 / 2),
    180,
    {
      units: "meters"
    }
  );
  vpJson.cameraPosition = [
    target.geometry.coordinates[0],
    target.geometry.coordinates[1],
    cameraDistance
  ];
  vpJson.pitch = -45;
  return new Viewpoint(vpJson);
}
async function createCustomViewpointFromExtent(extent) {
  const vp = Viewpoint.createViewpointFromExtent(extent);
  const vpJson = vp == null ? void 0 : vp.toJSON();
  const turfPoint = point(vp.groundPosition);
  return computeViewPoint(turfPoint, vpJson);
}
async function createViewpointFromRoofFeature(feature) {
  if (feature.bbox === void 0)
    return void 0;
  let vp = Viewpoint.createViewpointFromExtent(feature.bbox);
  const vpJson = vp == null ? void 0 : vp.toJSON();
  vpJson.pitch = -45;
  if (feature.properties === null)
    return void 0;
  vpJson.heading = oppositeAzimuth(feature.properties.azimuth);
  vpJson.distance = cameraDistance * (Math.SQRT2 / 2);
  vp = new Viewpoint(vpJson);
  return vp;
}
export {
  createViewpointFromRoofFeature as a,
  createCustomViewpointFromExtent as c
};
