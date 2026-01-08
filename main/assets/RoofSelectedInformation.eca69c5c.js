import { a_ as defineStore, aC as ref, as as defineComponent, a$ as reactive, aw as openBlock, ay as createElementBlock, ax as createVNode, aE as createCommentVNode, au as createBlock, aQ as Fragment, b0 as Viewpoint, b1 as point, b2 as destination, aD as useRouter, aY as onBeforeMount, az as createBaseVNode, av as withCtx, aJ as Xt, aA as createTextVNode } from "./vendor.22051e67.js";
import { u as useViewsStore, v as viewList } from "./views.42744fb8.js";
import { U as UiDisclosure } from "./UiDisclosure.49f307fe.js";
import { B as BoxStep } from "./BoxStep.89fe4393.js";
import { u as usePanelsStore } from "./panels.d664d68a.js";
import { U as UiChartDonut } from "./UiChartDonut.7d6299c1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiSurfaceNumber } from "./UiSurfaceNumber.d2580a5d.js";
import { i as installation } from "./installation.1bf16994.js";
import "./arrow-up.e2a6014f.js";
import "./right-flat-arrow.6196ad91.js";
const useRoofDataStore = defineStore("roof-data", () => {
  const buildingData = ref(null);
  function setBuildingData(data) {
    buildingData.value = data;
  }
  return {
    buildingData,
    setBuildingData
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceChartDonut",
  setup(__props, { expose }) {
    expose();
    const roofDataStore = useRoofDataStore();
    function favorablePercentage() {
      var _a, _b;
      const favorablePercentage2 = ((_a = roofDataStore.buildingData) == null ? void 0 : _a.favorable) / ((_b = roofDataStore.buildingData) == null ? void 0 : _b.total) * 100;
      return Math.round(favorablePercentage2);
    }
    const dataGraph = reactive({
      colors: ["#334155", "#CBD5E1", "#FEF9C3", "#FEF08A"],
      labelTotal: "de surface favorable"
    });
    const __returned__ = { roofDataStore, favorablePercentage, dataGraph, UiChartDonut };
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
      series: (_b = (_a = $setup.roofDataStore.buildingData) == null ? void 0 : _a.values) != null ? _b : []
    }, null, 8, ["dataGraph", "labelTotalValue", "series"])
  ]);
}
_sfc_main$2.__file = "src/components/chart/SurfaceChartDonut.vue";
const SurfaceChartDonut = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/chart/SurfaceChartDonut.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SurfaceNumber",
  setup(__props, { expose }) {
    expose();
    const roofDataStore = useRoofDataStore();
    const __returned__ = { roofDataStore, SurfaceChartDonut, UiSurfaceNumber };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "flex flex-row items-center justify-center"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.roofDataStore.buildingData !== null ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createVNode($setup["SurfaceChartDonut"])
    ])) : createCommentVNode("v-if", true),
    $setup.roofDataStore.buildingData !== null ? (openBlock(), createBlock($setup["UiSurfaceNumber"], {
      key: 1,
      totalArea: $setup.roofDataStore.buildingData.total,
      favorableArea: $setup.roofDataStore.buildingData.favorable
    }, null, 8, ["totalArea", "favorableArea"])) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main$1.__file = "src/components/roof_selection/SurfaceNumber.vue";
const SurfaceNumber = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/SurfaceNumber.vue"]]);
const useRoofsStore = defineStore("roofs", () => {
  const selectedBuildingId = ref(null);
  const buildingRoofsFeatures = ref(null);
  const selectedRoofFeature = ref(null);
  function setBuildingRoofsFeatures(features, buildingId) {
    buildingRoofsFeatures.value = features;
    selectedBuildingId.value = buildingId;
  }
  function setSelectRoofFeature(feature) {
    selectedRoofFeature.value = feature;
  }
  return {
    buildingRoofsFeatures,
    selectRoofFeature: selectedRoofFeature,
    setBuildingRoofsFeatures,
    setSelectRoofFeature
  };
});
const useMapStore = defineStore("map", () => {
  const isInitializeMap = ref(false);
  const viewPoint = ref(null);
  const activeMap = ref("cesium");
  function is3D() {
    return activeMap.value == "cesium";
  }
  function activate2d() {
    activeMap.value = "ol";
  }
  function activate3d() {
    activeMap.value = "cesium";
  }
  return {
    isInitializeMap,
    viewPoint,
    activeMap,
    is3D,
    activate2d,
    activate3d
  };
});
const cameraDistance = 150;
function computeViewPoint(turfPoint, vpJson) {
  const target = destination(
    turfPoint,
    cameraDistance * (Math.SQRT2 / 2),
    180,
    {
      units: "meters"
    }
  );
  vpJson.cameraPosition = [
    target.geometry.coordinates[0],
    target.geometry.coordinates[1],
    cameraDistance
  ];
  vpJson.pitch = -45;
  return new Viewpoint(vpJson);
}
async function createCustomViewpointFromExtent(extent) {
  const vp = Viewpoint.createViewpointFromExtent(extent);
  const vpJson = vp == null ? void 0 : vp.toJSON();
  const turfPoint = point(vp.groundPosition);
  return computeViewPoint(turfPoint, vpJson);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectedInformation",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const panelsStore = usePanelsStore();
    const roofStore = useRoofsStore();
    const mapStore = useMapStore();
    const router = useRouter();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["roof-selected-information"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = false;
      if (roofStore.buildingRoofsFeatures && roofStore.buildingRoofsFeatures.bbox) {
        mapStore.viewPoint = await createCustomViewpointFromExtent(
          roofStore.buildingRoofsFeatures.bbox
        );
      }
    });
    roofStore.$subscribe(async () => {
      if (roofStore.buildingRoofsFeatures && roofStore.buildingRoofsFeatures.bbox) {
        mapStore.viewPoint = await createCustomViewpointFromExtent(
          roofStore.buildingRoofsFeatures.bbox
        );
      }
    });
    const __returned__ = { viewStore, panelsStore, roofStore, mapStore, router, get UiButtonWithTooltip() {
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
      createVNode($setup["SurfaceNumber"])
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
