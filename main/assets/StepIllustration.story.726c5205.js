import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.33105a1a.js";
import { S as StepIllustration } from "./StepIllustration.e97688a2.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StepIllustration.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { StepIllustration, get potentiel() {
      return potentiel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Simulation Illustration Step",
    group: "simulation-step"
  }, {
    default: withCtx(() => [
      createVNode($setup["StepIllustration"], {
        image: $setup.potentiel,
        text: "Ensoleillement",
        selected: true
      }, null, 8, ["image"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/simulation/StepIllustration.story.vue";
const StepIllustration_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepIllustration.story.vue"]]);
export {
  StepIllustration_story as default
};
