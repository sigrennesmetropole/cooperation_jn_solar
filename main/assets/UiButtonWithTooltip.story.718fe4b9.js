import { aw as defineComponent, ax as ref, aI as computed, ar as openBlock, as as createElementBlock, at as createBaseVNode, aJ as normalizeClass, aK as normalizeStyle, aH as toDisplayString, aB as createCommentVNode, aL as Fragment, aD as resolveComponent, aC as createBlock, aE as withCtx, aF as createVNode } from "./vendor.7f2be85d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconTooltip = "/cooperation_jn_solar/main/assets/icon-tooltip.c10c8daa.svg";
const iconTooltipRed = "/cooperation_jn_solar/main/assets/icon-tooltip-red.92c808db.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiButtonWithTooltip",
  props: {
    text: { type: String, required: true },
    widthButton: { type: String, required: true },
    heightButton: { type: String, required: true },
    widthBoxText: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const displayTooltip = ref(false);
    const classDimensionButton = computed(() => {
      return "w-" + props.widthButton + " h-" + props.heightButton;
    });
    const __returned__ = { props, displayTooltip, classDimensionButton, get iconTooltip() {
      return iconTooltip;
    }, get iconTooltipRed() {
      return iconTooltipRed;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "absolute right-4 top-4 z-9" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "bg-neutral-800 opacity-80 p-2 gap-3 rounded" };
const _hoisted_5 = { class: "text-sm font-normal text-neutral-200" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", {
        class: normalizeClass(["bg-white rounded flex items-center justify-center cursor-pointer", $setup.classDimensionButton]),
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
      ], 2)
    ]),
    $setup.displayTooltip ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["absolute right-4 z-50", $setup.props.widthBoxText]),
      style: normalizeStyle("top: " + (parseInt($setup.props.heightButton) * 4 + 20) + "px;")
    }, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("span", _hoisted_5, toDisplayString($setup.props.text), 1)
      ])
    ], 6)) : createCommentVNode("v-if", true)
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
      createVNode($setup["UiButtonWithTooltip"], {
        widthButton: "4",
        heightButton: "4",
        text: "La surface favorable correspond \xE0 un potentiel sup\xE9rieur \xE0 1200 kWh/m2/an.",
        widthBoxText: "w-[300px]"
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiButtonWithTooltip.story.vue";
const UiButtonWithTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiButtonWithTooltip.story.vue"]]);
export {
  UiButtonWithTooltip_story as default
};
