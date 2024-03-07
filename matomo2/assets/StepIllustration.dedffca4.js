import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aH as normalizeClass, aL as toDisplayString } from "./vendor.da1b6b85.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StepIllustration",
  props: {
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-center py-2 px-3 grow" };
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("img", {
      src: $props.image,
      alt: "",
      class: normalizeClass($props.selected ? "" : "opacity-30")
    }, null, 10, _hoisted_2),
    createBaseVNode("p", {
      class: normalizeClass(["font-dm-sans font-medium text-xs", $props.selected ? "" : "text-neutral-400"]),
      id: "step-title"
    }, toDisplayString($props.text), 3)
  ]);
}
_sfc_main.__file = "src/components/simulation/StepIllustration.vue";
const StepIllustration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepIllustration.vue"]]);
export {
  StepIllustration as S
};
