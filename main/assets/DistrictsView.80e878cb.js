import { as as defineComponent, b4 as onMounted, aw as openBlock, ay as createElementBlock } from "./vendor.b7cfb440.js";
import { u as useViewsStore, v as viewList } from "./views.d8fd1f08.js";
import { u as usePanelsStore } from "./panels.7ba2b33f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DistrictsView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const panelsStore = usePanelsStore();
    onMounted(() => {
      viewStore.setCurrentView(viewList["districts"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = true;
    });
    const __returned__ = { viewStore, panelsStore };
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
