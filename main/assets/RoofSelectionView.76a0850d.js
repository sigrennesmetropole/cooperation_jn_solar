import { ar as defineComponent, a$ as onMounted, av as openBlock, ax as createElementBlock } from "./vendor.3e1891ce.js";
import { u as useViewsStore, v as viewList } from "./views.bd201dc2.js";
import { u as usePanelsStore } from "./panels.5bd76558.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectionView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const panelsStore = usePanelsStore();
    onMounted(() => {
      viewStore.setCurrentView(viewList["roof-selection"]);
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
_sfc_main.__file = "src/views/RoofSelectionView.vue";
const RoofSelectionView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/RoofSelectionView.vue"]]);
export {
  RoofSelectionView as default
};
