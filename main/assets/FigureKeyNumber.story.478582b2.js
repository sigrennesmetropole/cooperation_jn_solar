import { ar as openBlock, as as createElementBlock, at as createBaseVNode, aG as renderSlot, aw as defineComponent, aD as resolveComponent, aC as createBlock, aE as withCtx, aF as createVNode } from "./vendor.6fbe23ee.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "flex flex-row items-start p-0 gap-[18px]" };
const _hoisted_2$1 = { class: "flex flex-col items-start p-0 gap-6" };
const _hoisted_3$1 = { class: "flex flex-row items-center p-0 gap-6" };
const _hoisted_4 = { class: "flex flex-col justify-center items-start p-0 w-32" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "image"),
        createBaseVNode("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "text")
        ])
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/pcaet/FigureKeyNumber.vue";
const FigureKeyNumber = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/FigureKeyNumber.vue"]]);
const HourGlass = "/cooperation_jn_solar/main/assets/hour-glass.56931063.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FigureKeyNumber.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { FigureKeyNumber, get HourGlass() {
      return HourGlass;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, "\xC0 l\u2019horizon", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-[44px] leading-10 font-bold" }, "2030", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Figure Key",
    group: "pcaetpage"
  }, {
    default: withCtx(() => [
      createVNode($setup["FigureKeyNumber"], null, {
        image: withCtx(() => [
          createBaseVNode("img", {
            class: "w-32 h-16 max-w-none",
            src: $setup.HourGlass,
            alt: ""
          }, null, 8, _hoisted_1)
        ]),
        text: withCtx(() => [
          _hoisted_2,
          _hoisted_3
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/pcaet/FigureKeyNumber.story.vue";
const FigureKeyNumber_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/FigureKeyNumber.story.vue"]]);
export {
  FigureKeyNumber_story as default
};
