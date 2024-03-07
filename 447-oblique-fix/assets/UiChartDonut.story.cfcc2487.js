import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode, aP as VueApexCharts } from "./vendor.85ec6dc1.js";
import { U as UiChartDonut } from "./UiChartDonut.952e4445.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiChartDonut.story",
  setup(__props, { expose }) {
    expose();
    function mySetupApp({ app, story, variant }) {
      app.use(VueApexCharts);
    }
    const __returned__ = { mySetupApp, UiChartDonut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiChartDonut",
    group: "ui-base",
    "setup-app": $setup.mySetupApp
  }, {
    default: withCtx(() => [
      createVNode($setup["UiChartDonut"], { dataGraph: {
        series: [35, 15, 5, 45],
        labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
        colors: ["#FEF08A", "#FEF9C3", "#CBD5E1", "#334155"],
        labelTotal: "Surface favorable",
        labelTotalValue: "50"
      } })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiChartDonut.story.vue";
const UiChartDonut_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiChartDonut.story.vue"]]);
export {
  UiChartDonut_story as default
};
