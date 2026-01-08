import { as as defineComponent, aF as computed, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aJ as toDisplayString, aE as createCommentVNode, aG as normalizeClass } from "./vendor.60314750.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiExplanationTooltip",
  props: {
    title: String,
    content: String,
    displayCloseButton: Boolean,
    contentCloseButton: String
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const height = computed(() => {
      if (props.displayCloseButton) {
        return "h-[196px]";
      } else {
        return "h-[104px]";
      }
    });
    const __returned__ = { props, height };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mx-6 mt-6 mb-3 font-dm-sans font-bold text-lg text-black" };
const _hoisted_2 = { class: "mx-6 mb-6 font-dm-sans text-sm text-black" };
const _hoisted_3 = {
  key: 0,
  class: "mx-6 mb-6"
};
const _hoisted_4 = { class: "font-dm-sans text-white text-base font-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["bg-slate-50 shadow-lg rounded-lg w-[402px]", $setup.height])
  }, [
    createBaseVNode("h4", _hoisted_1, toDisplayString($setup.props.title), 1),
    createBaseVNode("div", _hoisted_2, toDisplayString($setup.props.content), 1),
    $setup.props.displayCloseButton ? (openBlock(), createElementBlock("div", _hoisted_3, [
      createBaseVNode("button", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center hover:bg-slate-800"
      }, [
        createBaseVNode("span", _hoisted_4, toDisplayString($props.contentCloseButton), 1)
      ])
    ])) : createCommentVNode("v-if", true)
  ], 2);
}
_sfc_main.__file = "src/components/ui/UiExplanationTooltip.vue";
const UiExplanationTooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiExplanationTooltip.vue"]]);
export {
  UiExplanationTooltip as U
};
