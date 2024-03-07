import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.f9d91bf7.js";
import { S as SimulationSteps } from "./SimulationSteps.98d73165.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./StepIllustration.eccb1ec4.js";
import "./right-flat-arrow.6196ad91.js";
import "./installation.1bf16994.js";
import "./potentiel.320635bc.js";
import "./economies.0397e19a.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationSteps.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SimulationStep: SimulationSteps };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Simulation Steps",
    group: "simulation-step"
  }, {
    default: withCtx(() => [
      createVNode($setup["SimulationStep"], { class: "w-[402px]" })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/simulation/SimulationSteps.story.vue";
const SimulationSteps_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SimulationSteps.story.vue"]]);
export {
  SimulationSteps_story as default
};
