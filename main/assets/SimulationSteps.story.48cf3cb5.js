import { aw as defineComponent, ar as openBlock, as as createElementBlock, aH as createVNode, at as createBaseVNode, aF as resolveComponent, aE as createBlock, aG as withCtx } from "./vendor.5e326ed5.js";
import { S as StepIllustration, p as potentiel } from "./potentiel.ae7a2713.js";
import { R as RightFlatArrow } from "./right-flat-arrow.6196ad91.js";
import { i as installation } from "./installation.1bf16994.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const economies = "/cooperation_jn_solar/main/assets/economies.c0f7935a.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SimulationSteps",
  props: {
    selectedStep: {
      type: Number,
      required: true,
      default: 1
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = { StepIllustration, get RightFlatArrow() {
      return RightFlatArrow;
    }, get installation() {
      return installation;
    }, get potentiel() {
      return potentiel;
    }, get economies() {
      return economies;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "box-border flex items-center p-0s bg-slate-50 border-[1px] border-slate-100 rounded-lg" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["StepIllustration"], {
      image: $setup.potentiel,
      text: "Ensoleillement",
      selected: $props.selectedStep == 1
    }, null, 8, ["image", "selected"]),
    createBaseVNode("img", { src: $setup.RightFlatArrow }, null, 8, _hoisted_2),
    createVNode($setup["StepIllustration"], {
      image: $setup.installation,
      text: "Installation",
      selected: $props.selectedStep == 2
    }, null, 8, ["image", "selected"]),
    createBaseVNode("img", { src: $setup.RightFlatArrow }, null, 8, _hoisted_3),
    createVNode($setup["StepIllustration"], {
      image: $setup.economies,
      text: "\xC9conomies",
      selected: $props.selectedStep == 3
    }, null, 8, ["image", "selected"])
  ]);
}
_sfc_main$1.__file = "src/components/simulation/SimulationSteps.vue";
const SimulationStep = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SimulationSteps.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationSteps.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { SimulationStep };
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
