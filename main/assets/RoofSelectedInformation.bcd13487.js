import { ar as defineComponent, a_ as reactive, av as openBlock, ax as createElementBlock, aw as createVNode, ay as createBaseVNode, aP as Fragment, aC as useRouter, aX as onBeforeMount, au as withCtx, aI as Xt, az as createTextVNode } from "./vendor.3e1891ce.js";
import { u as useViewsStore, v as viewList } from "./views.bd201dc2.js";
import { U as UiDisclosure } from "./UiDisclosure.3e9fe1a3.js";
import { B as BoxStep } from "./BoxStep.115e4a01.js";
import { u as usePanelsStore } from "./panels.5bd76558.js";
import { U as UiChartDonut } from "./UiChartDonut.c530cc29.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiSurfaceNumber } from "./UiSurfaceNumber.fa9d78aa.js";
import { i as installation } from "./installation.1bf16994.js";
import "./arrow-up.e2a6014f.js";
import "./right-flat-arrow.6196ad91.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceChartDonut",
  props: {
    roofSurface: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    function favorablePercentage() {
      const total = props.roofSurface.values.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      const favorable = props.roofSurface.values[0] + props.roofSurface.values[1];
      return favorable / total * 100;
    }
    const dataGraph = reactive({
      series: props.roofSurface.values,
      labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
      colors: ["#334155", "#CBD5E1", "#FEF9C3", "#FEF08A"],
      labelTotal: "de surface favorable",
      labelTotalValue: `${favorablePercentage()}`
    });
    const __returned__ = { props, favorablePercentage, dataGraph, UiChartDonut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "mt-12 flex flex-row items-center justify-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode($setup["UiChartDonut"], { dataGraph: $setup.dataGraph }, null, 8, ["dataGraph"])
  ]);
}
_sfc_main$2.__file = "src/components/chart/SurfaceChartDonut.vue";
const SurfaceChartDonut = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/chart/SurfaceChartDonut.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceNumber",
  props: {
    roofSurface: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, SurfaceChartDonut, UiSurfaceNumber };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-row items-center justify-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$1, [
      createVNode($setup["SurfaceChartDonut"], {
        roofSurface: $setup.props.roofSurface
      }, null, 8, ["roofSurface"])
    ]),
    createVNode($setup["UiSurfaceNumber"], {
      totalArea: $setup.props.roofSurface.total,
      favorableArea: $setup.props.roofSurface.favorable
    }, null, 8, ["totalArea", "favorableArea"])
  ], 64);
}
_sfc_main$1.__file = "src/components/roof_selection/SurfaceNumber.vue";
const SurfaceNumber = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/SurfaceNumber.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectedInformation",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const panelsStore = usePanelsStore();
    const router = useRouter();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["roof-selected-information"]);
      panelsStore.setTypePanelDisplay("left");
    });
    const roofSurface = {
      values: [45, 5, 15, 35],
      favorable: 44,
      total: 90,
      orientation: "sud",
      inclinaison: 47
    };
    const __returned__ = { viewStore, panelsStore, router, roofSurface, get UiButtonWithTooltip() {
      return Xt;
    }, UiDisclosure, BoxStep, SurfaceNumber, get iconInstallation() {
      return installation;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mt-12 bg-white border border-slate-100 rounded relative" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base color-black" }, " Comment est calcul\xE9 l\u2019ensolleillement ? ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-sm color-black" }, " L\u2019ensoleillement (ou irradiance) est la quantit\xE9 d\u2019\xE9nergie solaire re\xE7ue par le toit chaque ann\xE9e (en kWh/m2/an). Pour son calcul, la course du soleil et l'ombrage, mais aussi les caract\xE9ristiques du toit (pente, chemin\xE9e, etc.) sont pris en compte. ", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs text-neutral-500" }, " \xC9tape 2 ", -1);
const _hoisted_5 = ["src"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelle production d\u2019\xE9lectricit\xE9 "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" est envisageable ici ? ")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, " Simuler une installation photovolta\xEFque ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode($setup["UiButtonWithTooltip"], {
        widthButton: "4",
        heightButton: "4",
        text: "La surface favorable correspond \xE0 un potentiel sup\xE9rieur \xE0 1200 kWh/m2/an.",
        widthBoxText: "w-[300px]"
      }),
      createVNode($setup["SurfaceNumber"], { roofSurface: $setup.roofSurface })
    ]),
    createVNode($setup["UiDisclosure"], null, {
      title: withCtx(() => [
        _hoisted_2
      ]),
      contents: withCtx(() => [
        _hoisted_3
      ]),
      _: 1
    }),
    createVNode($setup["BoxStep"], {
      onButtonBoxAction: _cache[0] || (_cache[0] = ($event) => $setup.router.push("/step-sunshine"))
    }, {
      nameOfStep: withCtx(() => [
        _hoisted_4
      ]),
      image: withCtx(() => [
        createBaseVNode("img", {
          class: "w-15 h-15 mt-2",
          src: $setup.iconInstallation,
          alt: ""
        }, null, 8, _hoisted_5)
      ]),
      text: withCtx(() => [
        _hoisted_6
      ]),
      buttonContent: withCtx(() => [
        _hoisted_7
      ]),
      _: 1
    })
  ], 64);
}
_sfc_main.__file = "src/views/RoofSelectedInformation.vue";
const RoofSelectedInformation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/RoofSelectedInformation.vue"]]);
export {
  RoofSelectedInformation as default
};
