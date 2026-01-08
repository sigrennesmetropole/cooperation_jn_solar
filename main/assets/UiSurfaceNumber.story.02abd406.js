import { aw as defineComponent, ar as openBlock, as as createElementBlock, at as createBaseVNode, aH as toDisplayString, aD as resolveComponent, aC as createBlock, aE as withCtx, aF as createVNode } from "./vendor.b40cbb1c.js";
import { R as RightFlatArrow } from "./right-flat-arrow.6196ad91.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiSurfaceNumber",
  props: {
    totalArea: {
      type: Number,
      required: true
    },
    favorableArea: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get RightFlatArrow() {
      return RightFlatArrow;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row p-4 gap-4 bg-slate-50 rounded-br-lg rounded-bl-lg" };
const _hoisted_2 = { class: "flex flex-col p-0" };
const _hoisted_3 = { class: "font-dm-sans font-bold text-2xl text-center" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-normal text-sm text-neutral-700 text-center" }, " Surface de toiture du b\xE2timent ", -1);
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "font-dm-sans font-bold text-2xl text-center" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-normal text-sm text-neutral-700 text-center" }, " Surface favorable au photovolta\xEFque ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("h2", _hoisted_3, toDisplayString($props.totalArea) + " m\xB2 ", 1),
      _hoisted_4
    ]),
    createBaseVNode("img", { src: $setup.RightFlatArrow }, null, 8, _hoisted_5),
    createBaseVNode("div", null, [
      createBaseVNode("h2", _hoisted_6, toDisplayString($props.favorableArea) + " m\xB2 ", 1),
      _hoisted_7
    ])
  ]);
}
_sfc_main$1.__file = "src/components/roof_selection/UiSurfaceNumber.vue";
const UiSurfaceNumber = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/UiSurfaceNumber.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSurfaceNumber.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSurfaceNumber };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Surface Number",
    group: "roof-selected-information"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiSurfaceNumber"], {
        class: "w-[402px] h-[100px]",
        totalArea: 90,
        favorableArea: 44
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/roof_selection/UiSurfaceNumber.story.vue";
const UiSurfaceNumber_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/UiSurfaceNumber.story.vue"]]);
export {
  UiSurfaceNumber_story as default
};
