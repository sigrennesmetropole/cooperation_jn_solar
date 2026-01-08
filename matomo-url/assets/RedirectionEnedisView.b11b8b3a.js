import { as as defineComponent, aV as useRoute, az as useRouter, bo as onBeforeMount, aw as openBlock, aB as createElementBlock } from "./vendor.7e168ba4.js";
import { g as getDataFromLocalStorage } from "./enedisService.bb1fd281.js";
import { u as useEnedisStore, a as apiEnedisService } from "./api-enedis-dataconnect.d9a75dde.js";
import { e as useConsumptionAndProductionStore } from "./UiHeaderFullScreen.story.5ba4d41c.js";
import { u as useMapStore } from "./roof.model.637830b7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./interactions.5586682e.js";
import "./views.model.93fd8cf1.js";
import "./api.ffca7d14.js";
import "./home.17fdaf89.js";
import "./popUpStore.52e50f7d.js";
import "./panels.dc493893.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RedirectionEnedisView",
  setup(__props, { expose }) {
    expose();
    const route = useRoute();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const enedisStore = useEnedisStore();
    const router = useRouter();
    const mapStore = useMapStore();
    onBeforeMount(async () => {
      mapStore.isLoadingMap = true;
      let prm = route.query.usage_points_id;
      getDataFromLocalStorage();
      if (prm !== void 0 && prm !== null) {
        if (Array.isArray(prm)) {
          prm = prm[0];
        }
        await apiEnedisService.setPRMUser(prm);
        const consumption = await apiEnedisService.getAnnualConsumption();
        if (consumption !== null && consumption.annual_consumption !== void 0) {
          consumptionAndProductionStore.setAnnualConsumption(
            consumption.annual_consumption / 1e3
          );
        }
      }
      enedisStore.setIsEnedisRedirection(true);
      mapStore.isLoadingMap = false;
      router.push("/step-sunshine");
    });
    const __returned__ = { route, consumptionAndProductionStore, enedisStore, router, mapStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
_sfc_main.__file = "src/views/RedirectionEnedisView.vue";
const RedirectionEnedisView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/RedirectionEnedisView.vue"]]);
export {
  RedirectionEnedisView as default
};
