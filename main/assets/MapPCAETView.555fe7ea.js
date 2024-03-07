import { ar as defineComponent, av as openBlock, ax as createElementBlock, ay as createBaseVNode, aw as createVNode, au as withCtx, aX as onBeforeMount, aP as Fragment } from "./vendor.6f4bbece.js";
import { F as FooterAreaLink } from "./FooterAreaLink.d9bcbbc3.js";
import { T as TextDidYouKnow } from "./TextDidYouKnow.039d71dc.js";
import { F as FigureKeyNumber, H as HourGlass } from "./hour-glass.c747a784.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useViewsStore, v as viewList } from "./views.30d907df.js";
import { u as usePanelsStore } from "./panels.ebbec8e4.js";
const SolarPanel = "/cooperation_jn_solar/main/assets/solar-panel.a8b17789.svg";
const HousePlant = "/cooperation_jn_solar/main/assets/house-plant.d72d1365.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FigureEnergy",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { FigureKeyNumber, get HourGlass() {
      return HourGlass;
    }, get SolarPanel() {
      return SolarPanel;
    }, get HousePlant() {
      return HousePlant;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col p-0 gap-4" };
const _hoisted_2 = { class: "flex flex-col p-6 gap-6 bg-slate-50 border-slate-100 border-[1px] rounded-lg" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, "\xC0 l\u2019horizon", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-[44px] leading-10 font-bold" }, "2030", -1);
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-3xl font-bold" }, "3x", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, " plus d\u2019\xE9nergies renouvelables ", -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-3xl font-bold" }, "6x", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, " plus de puissance photovolta\xEFque ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["FigureKeyNumber"], null, {
        image: withCtx(() => [
          createBaseVNode("img", {
            class: "w-32 h-16 max-w-none",
            src: $setup.HourGlass,
            alt: ""
          }, null, 8, _hoisted_3)
        ]),
        text: withCtx(() => [
          _hoisted_4,
          _hoisted_5
        ]),
        _: 1
      }),
      createVNode($setup["FigureKeyNumber"], null, {
        image: withCtx(() => [
          createBaseVNode("img", {
            class: "w-32 h-16 max-w-none",
            src: $setup.HousePlant,
            alt: ""
          }, null, 8, _hoisted_6)
        ]),
        text: withCtx(() => [
          _hoisted_7,
          _hoisted_8
        ]),
        _: 1
      }),
      createVNode($setup["FigureKeyNumber"], null, {
        image: withCtx(() => [
          createBaseVNode("img", {
            class: "w-32 h-16 max-w-none",
            src: $setup.SolarPanel,
            alt: ""
          }, null, 8, _hoisted_9)
        ]),
        text: withCtx(() => [
          _hoisted_10,
          _hoisted_11
        ]),
        _: 1
      })
    ])
  ]);
}
_sfc_main$1.__file = "src/components/pcaet/FigureEnergy.vue";
const FigureEnergy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/FigureEnergy.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MapPCAETView",
  setup(__props, { expose }) {
    expose();
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["map-pcaet"]);
      panelsStore.setTypePanelDisplay("left");
    });
    const __returned__ = { panelsStore, viewStore, FooterAreaLink, TextDidYouKnow, FigureEnergy };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["TextDidYouKnow"], { class: "mt-9" }),
    createVNode($setup["FigureEnergy"]),
    createVNode($setup["FooterAreaLink"])
  ], 64);
}
_sfc_main.__file = "src/views/MapPCAETView.vue";
const MapPCAETView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/MapPCAETView.vue"]]);
export {
  MapPCAETView as default
};
