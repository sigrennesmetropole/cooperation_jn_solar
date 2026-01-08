import { aw as openBlock, ay as createElementBlock, az as createBaseVNode, aH as renderSlot } from "./vendor.22051e67.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = {};
const _hoisted_1 = { class: "flex flex-row items-start p-0 gap-[18px]" };
const _hoisted_2 = { class: "flex flex-col items-start p-0 gap-6" };
const _hoisted_3 = { class: "flex flex-row items-center p-0 gap-6" };
const _hoisted_4 = { class: "flex flex-col justify-center items-start p-0 w-32" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "image"),
        createBaseVNode("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "text")
        ])
      ])
    ])
  ]);
}
_sfc_main.__file = "src/components/pcaet/FigureKeyNumber.vue";
const FigureKeyNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/FigureKeyNumber.vue"]]);
const HourGlass = "/cooperation_jn_solar/main/assets/hour-glass.56931063.svg";
export {
  FigureKeyNumber as F,
  HourGlass as H
};
