import { as as defineComponent, aA as rt, aw as openBlock, aB as createElementBlock, aK as renderSlot, ax as createVNode, av as withCtx } from "./vendor.9bb05c47.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BoxStep",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get UiButton() {
      return rt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-center justify-center border border-slate-600 rounded-lg px-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "nameOfStep"),
    renderSlot(_ctx.$slots, "image"),
    renderSlot(_ctx.$slots, "text"),
    createVNode($setup["UiButton"], {
      class: "mt-4 mb-6 ui-btn-primary gap-3 px-4 py-3 h-12 w-full",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("buttonBoxAction"))
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "buttonContent")
      ]),
      _: 3
    })
  ]);
}
_sfc_main.__file = "src/components/simulation/BoxStep.vue";
const BoxStep = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/BoxStep.vue"]]);
export {
  BoxStep as B
};
