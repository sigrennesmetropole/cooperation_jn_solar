import { aw as openBlock, aA as createElementBlock, aJ as renderSlot, aB as createBaseVNode } from "./vendor.f4e55e85.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {};
const _hoisted_1 = { class: "flex flex-col items-center justify-center border border-slate-600 rounded-lg px-6" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "nameOfStep"),
    renderSlot(_ctx.$slots, "image"),
    renderSlot(_ctx.$slots, "text"),
    createBaseVNode("button", {
      class: "mt-4 mb-6 bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-full",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("buttonBoxAction"))
    }, [
      renderSlot(_ctx.$slots, "buttonContent")
    ])
  ]);
}
_sfc_main.__file = "src/components/simulation/BoxStep.vue";
const BoxStep = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/BoxStep.vue"]]);
export {
  BoxStep as B
};
