import { as as defineComponent, aw as openBlock, aA as createElementBlock, ax as createVNode, aB as createBaseVNode } from "./vendor.36c1cd4e.js";
import { S as StepIllustration } from "./StepIllustration.f58bb333.js";
import { R as RightFlatArrow } from "./right-flat-arrow.6196ad91.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
_sfc_main.__file = "src/components/simulation/SimulationSteps.vue";
const SimulationSteps = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SimulationSteps.vue"]]);
export {
  SimulationSteps as S
};
