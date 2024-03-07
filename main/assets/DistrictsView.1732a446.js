import { bl as CesiumMap, ba as Projection, bm as Cartographic, bn as OpenlayersMap, bo as SceneTransforms, bp as Cartesian2, as as defineComponent, be as inject, a_ as onMounted, aw as openBlock, aB as createElementBlock } from "./vendor.d14075ee.js";
import { u as useViewsStore, v as viewList } from "./views.f22a6b8e.js";
import { u as usePanelsStore } from "./panels.5bf0ebda.js";
import { u as useDistrictStore } from "./districtInformations.278fca87.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
function getBalloonPositionCesium(scene, cartesian) {
  return SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian);
}
function getBalloonPositionOL(olMap, position) {
  const pixel = olMap.getPixelFromCoordinate(position);
  if (pixel) {
    return new Cartesian2(...pixel);
  }
  return void 0;
}
function getBalloonPosition(app, position) {
  var _a;
  const map = app.maps.activeMap;
  let cartesian = void 0;
  if (map instanceof CesiumMap) {
    const wgs84Position = Projection.mercatorToWgs84(position);
    cartesian = Cartographic.toCartesian(
      Cartographic.fromDegrees(
        wgs84Position[0],
        wgs84Position[1],
        Math.max(50, (_a = position[2]) != null ? _a : 0)
      )
    );
    cartesian = getBalloonPositionCesium(map.getScene(), cartesian);
  } else if (map instanceof OpenlayersMap) {
    cartesian = getBalloonPositionOL(map.olMap, position);
  }
  return cartesian;
}
function getCartesianPositionFromFeature(rennesApp, feature) {
  return getBalloonPosition(rennesApp, feature.getGeometry().getCoordinates());
}
function updateDistrictPointCoordinates(rennesApp) {
  const districtStore = useDistrictStore();
  if (districtStore.districtPointFeature !== null) {
    const newCoordinates = getCartesianPositionFromFeature(
      rennesApp,
      districtStore.districtPointFeature
    );
    if (newCoordinates !== void 0) {
      districtStore.setNewCoordinates(newCoordinates.x, newCoordinates.y);
    }
  }
}
function addGenericListenerForUpdatePositions(rennesApp) {
  const districtStore = useDistrictStore();
  const map = rennesApp.maps.activeMap;
  if (!(map instanceof CesiumMap)) {
    return;
  }
  map.getScene().postRender.addEventListener(() => {
    const vp = map.getViewpointSync();
    if (vp === null || vp === void 0) {
      return;
    }
    if (districtStore.previousViewPoint === null || districtStore.previousViewPoint === void 0) {
      districtStore.previousViewPoint = vp;
    }
    for (const i in vp.cameraPosition) {
      if (vp.cameraPosition[i] !== districtStore.previousViewPoint.cameraPosition[i]) {
        districtStore.previousViewPoint = vp;
        updateDistrictPointCoordinates(rennesApp);
        break;
      }
    }
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DistrictsView",
  setup(__props, { expose }) {
    expose();
    const rennesApp = inject("rennesApp");
    const viewStore = useViewsStore();
    const panelsStore = usePanelsStore();
    onMounted(() => {
      viewStore.setCurrentView(viewList["districts"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = true;
      addGenericListenerForUpdatePositions(rennesApp);
    });
    const __returned__ = { rennesApp, viewStore, panelsStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
_sfc_main.__file = "src/views/DistrictsView.vue";
const DistrictsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/DistrictsView.vue"]]);
export {
  DistrictsView as default
};
