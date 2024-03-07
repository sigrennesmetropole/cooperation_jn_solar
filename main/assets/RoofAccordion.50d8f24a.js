import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aM as withModifiers, aL as toDisplayString, aD as createCommentVNode, ax as createVNode } from "./vendor.08389d7c.js";
import { i as iconArrowDown, a as iconArrowUp } from "./arrow-up.e2a6014f.js";
import { R as RoofInformationsBox } from "./RoofInformationsBox.f6179c30.js";
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
    const __returned__ = { props, get iconArrowDown() {
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
const _hoisted_1 = {
  class: "box-border flex flex-col justify-center py-4 px-3 gap-3 bg-slate-50 border-[1px] border-slate-600 rounded-lg",
  role: "button"
};
const _hoisted_2 = ["aria-expanded"];
const _hoisted_3 = { class: "flex flex-row py-0 px-2 gap-3 grow items-center" };
const _hoisted_4 = { class: "flex flex-row p-0 gap-3 grow items-center" };
const _hoisted_5 = ["id", "checked", "aria-checked", "aria-label"];
const _hoisted_6 = ["for"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "grow" }, null, -1);
const _hoisted_8 = {
  key: 0,
  class: "bg-amber-400 flex flex-row py-1 px-2 gap-2 rounded items-center"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-sm" }, "Recommand\xE9", -1);
const _hoisted_11 = ["src"];
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 0,
  class: "flex flex-col p-0 bg-white"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: "flex flex-row items-center p-0 gap-2",
      "aria-expanded": $setup.props.isOpen == true
    }, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("input", {
            role: "radio",
            type: "radio",
            id: $setup.props.label,
            class: "checked:bg-black checked:hover:bg-black checked:active:bg-black checked:focus:bg-black focus:bg-black focus:outline-none focus:ring-1 focus:ring-black",
            name: "roofSideSelection",
            checked: $setup.props.selected == true,
            "aria-checked": $setup.props.selected == true,
            "aria-label": $setup.props.label,
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("clickRoofAccordion"), ["stop"]))
          }, null, 8, _hoisted_5),
          createBaseVNode("label", {
            for: $setup.props.label,
            class: "font-dm-sans text-base font-medium grow-0 text-left"
          }, toDisplayString($props.label), 9, _hoisted_6)
        ]),
        _hoisted_7,
        $setup.props.isRecommended ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("img", {
            src: $setup.iconStar,
            class: "w-3 h-3"
          }, null, 8, _hoisted_9),
          _hoisted_10
        ])) : createCommentVNode("v-if", true),
        !$setup.props.isOpen ? (openBlock(), createElementBlock("img", {
          key: 1,
          src: $setup.iconArrowDown,
          class: "w-5 h-5"
        }, null, 8, _hoisted_11)) : (openBlock(), createElementBlock("img", {
          key: 2,
          src: $setup.iconArrowUp,
          class: "w-5 h-5"
        }, null, 8, _hoisted_12))
      ])
    ], 8, _hoisted_2),
    $setup.props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_13, [
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
