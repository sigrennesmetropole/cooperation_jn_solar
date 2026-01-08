import { as as defineComponent, b0 as reactive, aw as openBlock, aA as createElementBlock, ax as createVNode, ay as ref, aB as createBaseVNode, aS as Fragment, az as useRouter, b1 as onBeforeMount, av as withCtx, aC as createTextVNode, aN as HM } from "./vendor.2f580402.js";
import { u as useViewsStore, v as viewList } from "./views.model.a02db520.js";
import { U as UiDisclosure } from "./UiDisclosure.d1f3fcf7.js";
import { B as BoxStep } from "./BoxStep.26c8759f.js";
import { u as usePanelsStore } from "./panels.fcb08749.js";
import { U as UiChartDonut } from "./UiChartDonut.5d4f3109.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiSurfaceNumber } from "./UiSurfaceNumber.430bfb21.js";
import { g as getDataBuilding } from "./roof.model.a302a967.js";
import { u as useRoofsStore } from "./roof.757a6c0d.js";
import { i as installation } from "./installation.1bf16994.js";
import { u as useMapStore, c as createCustomViewpointFromExtent } from "./viewPointHelper.3c64b14d.js";
import { e as expandIcon } from "./expand-small-bigger-retract-smaller-big.77ae2404.js";
import { u as usePopUpStore } from "./popUpStore.83b71ced.js";
import "./arrow-up.e2a6014f.js";
import "./right-flat-arrow.6196ad91.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceChartDonut",
  props: {
    buildingData: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    function favorablePercentage() {
      var _a, _b;
      const favorablePercentage2 = ((_a = props.buildingData) == null ? void 0 : _a.favorable) / ((_b = props.buildingData) == null ? void 0 : _b.total) * 100;
      return Math.round(favorablePercentage2);
    }
    const dataGraph = reactive({
      colors: ["#334155", "#CBD5E1", "#FEF9C3", "#FEF08A"],
      labelTotal: "de surface favorable"
    });
    const __returned__ = { props, favorablePercentage, dataGraph, UiChartDonut };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "mt-12 flex flex-row items-center justify-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode($setup["UiChartDonut"], {
      dataGraph: $setup.dataGraph,
      labelTotalValue: $setup.favorablePercentage(),
      series: (_b = (_a = $setup.props.buildingData) == null ? void 0 : _a.values) != null ? _b : []
    }, null, 8, ["dataGraph", "labelTotalValue", "series"])
  ]);
}
_sfc_main$2.__file = "src/components/chart/SurfaceChartDonut.vue";
const SurfaceChartDonut = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/chart/SurfaceChartDonut.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceNumber",
  setup(__props, { expose }) {
    expose();
    const roofsStore = useRoofsStore();
    const buildingData = ref(getDataBuilding());
    roofsStore.$subscribe(async () => {
      buildingData.value = getDataBuilding();
    });
    const __returned__ = { roofsStore, buildingData, SurfaceChartDonut, UiSurfaceNumber };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-row items-center justify-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$1, [
      createVNode($setup["SurfaceChartDonut"], { buildingData: $setup.buildingData }, null, 8, ["buildingData"])
    ]),
    createVNode($setup["UiSurfaceNumber"], {
      totalArea: $setup.buildingData.total,
      favorableArea: $setup.buildingData.favorable
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
    const roofStore = useRoofsStore();
    const mapStore = useMapStore();
    const router = useRouter();
    const popUpStore = usePopUpStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["roof-selected-information"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = false;
      if (roofStore.roofsFeatures && roofStore.roofsFeatures.bbox) {
        mapStore.viewPoint = await createCustomViewpointFromExtent(
          roofStore.roofsFeatures.bbox
        );
      }
    });
    roofStore.$subscribe(async () => {
      if (roofStore.roofsFeatures && roofStore.roofsFeatures.bbox) {
        mapStore.viewPoint = await createCustomViewpointFromExtent(
          roofStore.roofsFeatures.bbox
        );
      }
    });
    const __returned__ = { viewStore, panelsStore, roofStore, mapStore, router, popUpStore, get UiButtonWithTooltip() {
      return HM;
    }, UiDisclosure, BoxStep, SurfaceNumber, get iconInstallation() {
      return installation;
    }, get expand() {
      return expandIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mt-12 bg-white border border-slate-100 rounded relative" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base color-black" }, " Comprendre ses chiffres ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm text-slate-900" }, "Qu\u2019est-ce qu\u2019une surface favorable ?", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-slate-600 text-justify" }, " La surface favorable est celle recevant suffisamment d'ensoleillement pour accueillir des panneaux solaires soit dans notre simulation un ensoleillement sup\xE9rieur \xE0 1 000 kWh/m2/an. ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm text-slate-900" }, "Comment est calcul\xE9 l\u2019ensoleillement ?", -1);
const _hoisted_7 = { class: "font-dm-sans font-medium text-sm text-slate-600 text-justify" };
const _hoisted_8 = ["src"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs text-neutral-500" }, " \xC9tape 2 ", -1);
const _hoisted_10 = ["src"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelle production d\u2019\xE9lectricit\xE9 "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" est envisageable ici ? ")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-medium" }, " Simuler une installation photovolta\xEFque ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode($setup["UiButtonWithTooltip"], {
        widthButton: "4",
        heightButton: "4",
        text: "La surface favorable correspond \xE0 un potentiel sup\xE9rieur \xE0 1200 kWh/m2/an.",
        widthBoxText: "w-[300px]"
      }),
      createVNode($setup["SurfaceNumber"])
    ]),
    createVNode($setup["UiDisclosure"], null, {
      title: withCtx(() => [
        _hoisted_2
      ]),
      contents: withCtx(() => [
        createBaseVNode("div", null, [
          _hoisted_3,
          _hoisted_4,
          _hoisted_5,
          _hoisted_6,
          createBaseVNode("p", _hoisted_7, [
            createTextVNode(" L\u2019ensoleillement ou irradiance est la quantit\xE9 d\u2019\xE9nergie solaire re\xE7ue par le toit chaque ann\xE9e (en kWh/m2/an). Pour son calcul, la course du soleil et l'ombrage, mais aussi les caract\xE9ristiques du toit (orientation, inclinaison, surface) sont pris en compte. Les obstacles comme les chemin\xE9es ne sont pas pris en compte \xE0 ce stade (sauf les gros obstacles). "),
            createBaseVNode("a", {
              class: "underline cursor-pointer",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.popUpStore.displayTermsOfUse())
            }, [
              createTextVNode(" D\xE9tails"),
              createBaseVNode("img", {
                src: $setup.expand,
                class: "inline-block ml-1 w-2 h-2"
              }, null, 8, _hoisted_8)
            ])
          ])
        ])
      ]),
      _: 1
    }),
    createVNode($setup["BoxStep"], {
      onButtonBoxAction: _cache[1] || (_cache[1] = ($event) => $setup.router.push("/step-sunshine"))
    }, {
      nameOfStep: withCtx(() => [
        _hoisted_9
      ]),
      image: withCtx(() => [
        createBaseVNode("img", {
          class: "w-15 h-15 mt-2",
          src: $setup.iconInstallation,
          alt: ""
        }, null, 8, _hoisted_10)
      ]),
      text: withCtx(() => [
        _hoisted_11
      ]),
      buttonContent: withCtx(() => [
        _hoisted_12
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
