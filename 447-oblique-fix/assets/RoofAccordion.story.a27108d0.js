import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.85ec6dc1.js";
import { R as RoofAccordion } from "./RoofAccordion.0556ce98.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./arrow-up.e2a6014f.js";
import "./RoofInformationsBox.c3b32180.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofAccordion.story",
  setup(__props, { expose }) {
    expose();
    const roofSurface = {
      surface_id: "1",
      values: [10, 20, 30, 40],
      favorable: 44,
      total: 90,
      orientation: "Sud",
      inclinaison: 47.9
    };
    const __returned__ = { roofSurface, RoofAccordion };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Roof Accordion",
    group: "simulation-step"
  }, {
    default: withCtx(() => [
      createVNode($setup["RoofAccordion"], {
        "roof-surface": $setup.roofSurface,
        class: "w-[468px]",
        label: "Pan de toit n\xB01",
        selected: true,
        "is-open": true,
        "is-recommended": true,
        index: 0
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/simulation/RoofAccordion.story.vue";
const RoofAccordion_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/RoofAccordion.story.vue"]]);
export {
  RoofAccordion_story as default
};
