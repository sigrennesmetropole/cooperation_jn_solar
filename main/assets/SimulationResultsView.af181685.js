import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, b1 as onBeforeMount, a$ as onMounted, ax as createVNode } from "./vendor.6a09d00b.js";
import { u as useViewsStore, v as viewList } from "./views.6b3ae85e.js";
import { u as useConsumptionAndProductionStore } from "./consumptionAndProduction.50d8815a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionInformation",
  setup(__props, { expose }) {
    expose();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const __returned__ = { consumptionAndProductionStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 mx-auto shadow-md" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-bold text-base" }, "Votre consommation actuelle", -1);
const _hoisted_3$1 = {
  id: "consumptionValue",
  class: "font-dm-sans font-medium text-sm"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2$1,
    createBaseVNode("p", _hoisted_3$1, toDisplayString($setup.consumptionAndProductionStore.annualConsumption) + " kWh/an ", 1)
  ]);
}
_sfc_main$1.__file = "src/components/results/ConsumptionInformation.vue";
const ConsumptionInformation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ConsumptionInformation.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResultsView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["simulation-results"]);
    });
    onMounted(async () => {
    });
    const __returned__ = { viewStore, ConsumptionInformation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row mx-auto mt-[184px] gap-6 w-[80%] justify-center" };
const _hoisted_2 = { class: "w-[25%] font-dm-sans font-medium flex flex-col gap-6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "w-[55%] font-dm-sans font-medium flex flex-col gap-8" }, [
  /* @__PURE__ */ createBaseVNode("div")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["ConsumptionInformation"])
    ]),
    _hoisted_3
  ]);
}
_sfc_main.__file = "src/views/SimulationResultsView.vue";
const SimulationResultsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationResultsView.vue"]]);
export {
  SimulationResultsView as default
};
