import { aw as defineComponent, ax as ref, ar as openBlock, as as createElementBlock, at as createBaseVNode, aA as createCommentVNode, aC as Fragment, aD as resolveComponent, aB as createBlock, aE as withCtx, aF as createVNode } from "./vendor.e80ae8f3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconTooltip = "/cooperation_jn_solar/main/assets/icon-tooltip.c10c8daa.svg";
const iconTooltipRed = "/cooperation_jn_solar/main/assets/icon-tooltip-red.92c808db.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiButtonWithTooltip",
  setup(__props, { expose }) {
    expose();
    const displayTooltip = ref(false);
    const __returned__ = { displayTooltip, iconTooltip, iconTooltipRed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "absolute right-2 top-2 z-9 flex" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  key: 0,
  class: "absolute right-2 top-16 z-9 flex w-1/2"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-neutral-800 opacity-80 p-2 gap-3 rounded" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-sm font-normal text-neutral-200" }, " Les niveaux de potentiel solaire sont estim\xE9s sur la base de calculs s'appuyant sur la maquette 3D m\xE9tropolitaine et des donn\xE9es m\xE9t\xE9orologiques. ")
], -1);
const _hoisted_6 = [
  _hoisted_5
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", {
        class: "w-12 h-12 bg-white rounded flex items-center justify-center cursor-pointer",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.displayTooltip = !$setup.displayTooltip)
      }, [
        !$setup.displayTooltip ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $setup.iconTooltip,
          class: "w-5 h-5"
        }, null, 8, _hoisted_2)) : (openBlock(), createElementBlock("img", {
          key: 1,
          src: $setup.iconTooltipRed,
          class: "w-5 h-5"
        }, null, 8, _hoisted_3))
      ])
    ]),
    $setup.displayTooltip ? (openBlock(), createElementBlock("div", _hoisted_4, _hoisted_6)) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main$1.__file = "src/components/ui/UiButtonWithTooltip.vue";
const UiButtonWithTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiButtonWithTooltip.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiButtonWithTooltip.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiButtonWithTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiButtonWithTooltip",
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiButtonWithTooltip"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiButtonWithTooltip.story.vue";
const UiButtonWithTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiButtonWithTooltip.story.vue"]]);
export {
  UiButtonWithTooltip_story as default
};
