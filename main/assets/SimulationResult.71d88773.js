import { as as defineComponent, aF as computed, aO as JM, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, ax as createVNode, av as withCtx, aH as normalizeClass, aL as toDisplayString } from "./vendor.a42621f7.js";
import { S as SOLAR_PANEL_SURFACE, a as SOLAR_PANEL_POWER } from "./solarPanel.model.5b355558.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const solarPanel = "/cooperation_jn_solar/main/assets/solar-panel.cbe5f820.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResult",
  props: {
    roofSurface: { type: null, required: true },
    maxNumSolarPanel: { type: Number, required: true },
    currentNumSolarPanel: { type: Number, required: true }
  },
  emits: ["solarPanelChanges"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const minNumSolarPanel = 1;
    const updateCurrentNumSolarPanel = (solarPanelChanges) => {
      if (props.currentNumSolarPanel + solarPanelChanges >= minNumSolarPanel && props.currentNumSolarPanel + solarPanelChanges <= props.maxNumSolarPanel) {
        emit("solarPanelChanges", solarPanelChanges);
      }
    };
    const currentSurface = computed(
      () => props.currentNumSolarPanel * SOLAR_PANEL_SURFACE
    );
    const currentPower = computed(
      () => (props.currentNumSolarPanel * SOLAR_PANEL_POWER).toFixed(2)
    );
    const __returned__ = { props, minNumSolarPanel, emit, updateCurrentNumSolarPanel, currentSurface, currentPower, get UiIconButton() {
      return JM;
    }, get solarPanel() {
      return solarPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "box-border flex flex-col p-5 border-[1px] border-slate-200 rounded-lg gap-4" };
const _hoisted_2 = { class: "flex flex-row justify-center items-center pt-4 px-0 pb-6" };
const _hoisted_3 = {
  width: "20",
  height: "2",
  viewBox: "0 0 20 2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_4 = ["stroke"];
const _hoisted_5 = { class: "flex flex-col items-center p-0" };
const _hoisted_6 = { class: "flex flex-row items-center p-0 gap-2.5" };
const _hoisted_7 = { class: "font-dm-sans font-bold text-[44px] leading-[48px]" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "flex flex-col items-center p-0 gap-1" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h4", { class: "font-dm-sans text-lg text-center font-bold w-[140px]" }, " panneaux photovolta\xEFques ", -1);
const _hoisted_11 = { class: "font-dm-sans font-normal text-xs text-neutral-600" };
const _hoisted_12 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_13 = ["stroke"];
const _hoisted_14 = ["stroke"];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300" }, null, -1);
const _hoisted_16 = { class: "flex py-0 px-1.5 gap-6 items-stretch" };
const _hoisted_17 = { class: "flex flex-col p-0 gap-2 items-start grow" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, "Orientation", -1);
const _hoisted_19 = { class: "font-dm-sans text-base font-bold" };
const _hoisted_20 = { class: "flex flex-col p-0 gap-2 items-center grow" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, "Inclinaison", -1);
const _hoisted_22 = { class: "font-dm-sans text-base font-bold" };
const _hoisted_23 = { class: "flex flex-col p-0 gap-2 items-end grow" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, "Surface", -1);
const _hoisted_25 = { class: "font-dm-sans text-base font-bold" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiIconButton"], {
        class: normalizeClass([
          "rounded-3xl border-[1px]",
          $props.currentNumSolarPanel == $setup.minNumSolarPanel ? "border-neutral-300" : "border-black"
        ]),
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.updateCurrentNumSolarPanel(-1)),
        disabled: $props.currentNumSolarPanel == $setup.minNumSolarPanel
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_3, [
            createBaseVNode("path", {
              d: "M0.714355 1H19.2858",
              stroke: $props.currentNumSolarPanel == $setup.minNumSolarPanel ? "#D4D4D4" : "black",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, _hoisted_4)
          ]))
        ]),
        _: 1
      }, 8, ["disabled", "class"]),
      createBaseVNode("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString($props.currentNumSolarPanel), 1),
          createBaseVNode("img", {
            class: "w-16 h-16",
            src: $setup.solarPanel
          }, null, 8, _hoisted_8)
        ]),
        createBaseVNode("div", _hoisted_9, [
          _hoisted_10,
          createBaseVNode("p", _hoisted_11, " soit " + toDisplayString($setup.currentPower) + " kWc de puissance install\xE9e ", 1)
        ])
      ]),
      createVNode($setup["UiIconButton"], {
        class: normalizeClass([
          "rounded-3xl border-[1px]",
          $props.currentNumSolarPanel == $setup.props.maxNumSolarPanel ? "border-neutral-300" : "border-black"
        ]),
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.updateCurrentNumSolarPanel(1)),
        disabled: $props.currentNumSolarPanel == $setup.props.maxNumSolarPanel
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_12, [
            createBaseVNode("path", {
              d: "M10 0.771484V19.3429",
              stroke: $props.currentNumSolarPanel == $setup.props.maxNumSolarPanel ? "#D4D4D4" : "black",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, _hoisted_13),
            createBaseVNode("path", {
              d: "M0.714355 10H19.2858",
              stroke: $props.currentNumSolarPanel == $setup.props.maxNumSolarPanel ? "#D4D4D4" : "black",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, null, 8, _hoisted_14)
          ]))
        ]),
        _: 1
      }, 8, ["disabled", "class"])
    ]),
    _hoisted_15,
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("div", _hoisted_17, [
        _hoisted_18,
        createBaseVNode("p", _hoisted_19, toDisplayString($setup.props.roofSurface ? $setup.props.roofSurface.orientation : "N/A"), 1)
      ]),
      createBaseVNode("div", _hoisted_20, [
        _hoisted_21,
        createBaseVNode("p", _hoisted_22, toDisplayString($setup.props.roofSurface ? $setup.props.roofSurface.inclinaison : "N/A") + "\xB0 ", 1)
      ]),
      createBaseVNode("div", _hoisted_23, [
        _hoisted_24,
        createBaseVNode("p", _hoisted_25, toDisplayString($setup.currentSurface) + "m\xB2 ", 1)
      ])
    ])
  ]);
}
_sfc_main.__file = "src/components/simulation/SimulationResult.vue";
const SimulationResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SimulationResult.vue"]]);
export {
  SimulationResult as S
};
