import { as as defineComponent, aN as nt, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, aM as withModifiers, ax as createVNode, aI as normalizeClass } from "./vendor.c16d0bba.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofInformationsBox",
  props: {
    roofSurface: { type: null, required: true },
    isDisplayBox: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get UiButtonWithTooltip() {
      return nt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row p-0 gap-4" };
const _hoisted_2 = { class: "flex flex-col items-start p-0 grow" };
const _hoisted_3 = { class: "font-dm-sans font-bold text-[28px] leading-7" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-medium text-neutral-900" }, " de surface favorable ", -1);
const _hoisted_5 = { class: "font-dm-sans text-sm font-normal text-neutral-600" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300" }, null, -1);
const _hoisted_7 = { class: "flex flex-row py-0 px-1.5 gap-6" };
const _hoisted_8 = { class: "flex flex-row justify-between items-center p-0 gap-2 grow" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, "Orientation", -1);
const _hoisted_10 = { class: "font-dm-sans font-bold text-base" };
const _hoisted_11 = { class: "flex flex-row justify-between items-center p-0 gap-2 grow" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, "Inclinaison", -1);
const _hoisted_13 = { class: "font-dm-sans font-bold text-base" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "flex flex-col gap-4",
      $setup.props.isDisplayBox ? "box-border  p-5 border-[1px] border-slate-200 rounded-lg" : ""
    ])
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("h3", _hoisted_3, toDisplayString($setup.props.roofSurface.favorable) + " m\xB2 ", 1),
        _hoisted_4,
        createBaseVNode("p", _hoisted_5, " sur " + toDisplayString($setup.props.roofSurface.total) + " m\xB2 ", 1)
      ]),
      createBaseVNode("div", {
        class: "relative flex flex-col p-2 gap-2.5",
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createVNode($setup["UiButtonWithTooltip"], {
          text: "La surface favorable est celle recevant suffisamment d'ensoleillement pour accueillir des panneaux solaires soit, dans notre simulation, un ensoleillement sup\xE9rieur \xE0 1 000 kWh/m2/an. La surface affich\xE9e ici est calcul\xE9e sur le pan de toit s\xE9lectionn\xE9.",
          widthButton: "5",
          heightButton: "5",
          "position-top": "0px",
          "position-right": "0px",
          widthBoxText: "w-[299px]"
        })
      ])
    ]),
    _hoisted_6,
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("div", _hoisted_8, [
        _hoisted_9,
        createBaseVNode("p", _hoisted_10, toDisplayString($setup.props.roofSurface.orientation), 1)
      ]),
      createBaseVNode("div", _hoisted_11, [
        _hoisted_12,
        createBaseVNode("p", _hoisted_13, toDisplayString($setup.props.roofSurface.inclinaison) + "\xB0 ", 1)
      ])
    ])
  ], 2);
}
_sfc_main.__file = "src/components/simulation/RoofInformationsBox.vue";
const RoofInformationsBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/RoofInformationsBox.vue"]]);
export {
  RoofInformationsBox as R
};
