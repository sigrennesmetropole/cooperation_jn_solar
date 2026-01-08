import { as as defineComponent, ay as ref, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, aD as createCommentVNode, ax as createVNode } from "./vendor.6a09d00b.js";
import { i as iconArrowDown, a as iconArrowUp } from "./arrow-up.e2a6014f.js";
import { R as RoofInformationsBox } from "./RoofInformationsBox.264a80e0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconStar = "/cooperation_jn_solar/main/assets/star.f4e485e9.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofAccordion",
  props: {
    roofSurface: { type: null, required: true },
    label: { type: String, required: true },
    selected: { type: null, required: true },
    isOpen: { type: null, required: true },
    isRecommended: { type: null, required: true },
    index: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const displayContents = ref(props.isOpen);
    const __returned__ = { props, displayContents, get iconArrowDown() {
      return iconArrowDown;
    }, get iconArrowUp() {
      return iconArrowUp;
    }, get iconStar() {
      return iconStar;
    }, RoofInformationsBox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["aria-expanded"];
const _hoisted_2 = { class: "flex flex-row py-0 px-2 gap-3 grow items-center" };
const _hoisted_3 = { class: "flex flex-row p-0 gap-3 grow items-center" };
const _hoisted_4 = ["checked", "aria-checked", "aria-label"];
const _hoisted_5 = { class: "font-dm-sans text-base font-medium grow text-left" };
const _hoisted_6 = {
  key: 0,
  class: "bg-amber-400 flex flex-row py-1 px-2 gap-2 rounded items-center"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-sm" }, "Recommand\xE9", -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  key: 0,
  class: "flex flex-col p-0 bg-white"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "box-border flex flex-col justify-center py-4 px-3 gap-3 bg-slate-50 border-[1px] border-slate-600 rounded-lg",
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.displayContents = !$setup.displayContents),
    role: "button"
  }, [
    createBaseVNode("button", {
      class: "flex flex-row items-center p-0 gap-2",
      "aria-expanded": $setup.displayContents == true
    }, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("label", _hoisted_3, [
          createBaseVNode("input", {
            role: "radio",
            type: "radio",
            class: "checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black",
            name: "roofSideSelection",
            checked: $setup.props.selected == true,
            "aria-checked": $setup.props.selected == true,
            "aria-label": $setup.props.label,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("clickRoofAccordion", $setup.props.index))
          }, null, 8, _hoisted_4),
          createBaseVNode("span", _hoisted_5, toDisplayString($props.label), 1)
        ]),
        $setup.props.isRecommended ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("img", {
            src: $setup.iconStar,
            class: "w-3 h-3"
          }, null, 8, _hoisted_7),
          _hoisted_8
        ])) : createCommentVNode("v-if", true),
        !$setup.displayContents ? (openBlock(), createElementBlock("img", {
          key: 1,
          src: $setup.iconArrowDown,
          class: "w-5 h-5"
        }, null, 8, _hoisted_9)) : (openBlock(), createElementBlock("img", {
          key: 2,
          src: $setup.iconArrowUp,
          class: "w-5 h-5"
        }, null, 8, _hoisted_10))
      ])
    ], 8, _hoisted_1),
    $setup.displayContents ? (openBlock(), createElementBlock("div", _hoisted_11, [
      createVNode($setup["RoofInformationsBox"], {
        roofSurface: $setup.props.roofSurface,
        isDisplayBox: true
      }, null, 8, ["roofSurface"])
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/simulation/RoofAccordion.vue";
const RoofAccordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/RoofAccordion.vue"]]);
export {
  RoofAccordion as R
};
