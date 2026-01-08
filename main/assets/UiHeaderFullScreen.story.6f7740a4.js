import { as as defineComponent, aw as openBlock, aA as createElementBlock, au as createBlock, aQ as resolveDynamicComponent, aE as createCommentVNode, aB as createBaseVNode, aJ as renderSlot, aL as toDisplayString, aK as defineStore, ay as ref, aR as createRouter, aS as createWebHistory, _ as __vitePreload, aT as featureCollection, az as useRouter, av as withCtx, ax as createVNode, aU as useRoute, aV as Fragment, aW as renderList, aI as normalizeClass, aD as withKeys, at as resolveComponent } from "./vendor.9c97a0a0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const solarPanelLogo = "/cooperation_jn_solar/main/assets/solarPanelLogo.fe143f24.svg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UiSolarPanelLogo",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get solarPanelLogo() {
      return solarPanelLogo;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = ["src"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: $setup.solarPanelLogo,
    alt: ""
  }, null, 8, _hoisted_1$5);
}
_sfc_main$5.__file = "src/components/ui/UiSolarPanelLogo.vue";
const UiSolarPanelLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSolarPanelLogo.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UiReturnButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    notification: {
      type: Number
    },
    icon: {
      type: Object
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["disabled"];
const _hoisted_2$4 = { class: "m-auto font-semibold" };
const _hoisted_3$3 = {
  key: 1,
  class: "m-auto mx-1 rounded bg-red-500 px-2 text-white"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", { disabled: $props.disabled }, [
    $props.icon ? (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
      key: 0,
      role: "img",
      class: "m-auto mr-2"
    })) : createCommentVNode("v-if", true),
    createBaseVNode("span", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "default")
    ]),
    $props.notification ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString($props.notification), 1)) : createCommentVNode("v-if", true)
  ], 8, _hoisted_1$4);
}
_sfc_main$4.__file = "src/components/ui/UiReturnButton.vue";
const UiReturnButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiReturnButton.vue"]]);
const iconChevronLeft = "/cooperation_jn_solar/main/assets/chevron-left.e0d526ab.svg";
const useViewsStore = defineStore("views", () => {
  const currentView = ref(null);
  const previousRoute = ref(null);
  function setCurrentView(view) {
    currentView.value = view;
  }
  return { currentView, previousRoute, setCurrentView };
});
const _paq = window._paq = window._paq || [];
const redirectToRoofSelection = (to, from, next) => {
  if ((from.name === void 0 || from.name === null) && to.name !== "home" && to.name !== "roof-selection" && to.name !== "legal-notice") {
    next({ name: "roof-selection" });
  } else {
    next();
  }
};
const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: "Page Home"
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => __vitePreload(() => import("./HomeView.8a4092e6.js"), true ? ["assets/HomeView.8a4092e6.js","assets/vendor.9c97a0a0.js","assets/ButtonWithCheckboxBegin.3aaaeca3.js","assets/CheckBox.6d3bfedc.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/home.183a04bd.js","assets/popUpStore.d89f5462.js","assets/installation.1bf16994.js","assets/potentiel.320635bc.js","assets/economies.0397e19a.js","assets/panels.73172c5f.js","assets/views.model.a1ba4457.js"] : void 0),
    meta: {
      title: "Page Home"
    }
  },
  {
    path: "/roof-selection",
    name: "roof-selection",
    component: () => __vitePreload(() => import("./RoofSelectionView.a9241429.js"), true ? ["assets/RoofSelectionView.a9241429.js","assets/vendor.9c97a0a0.js","assets/views.model.a1ba4457.js","assets/panels.73172c5f.js","assets/hour-glass.c5e8770c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiExplanationTooltip.69100499.js","assets/TextDidYouKnow.ac5a5ce9.js","assets/icon-delete.7df02bd2.js","assets/map.a57db9ad.js"] : void 0),
    meta: {
      title: "Page Roof Selection"
    }
  },
  {
    path: "/roof-selected-information",
    name: "roof-selected-information",
    component: () => __vitePreload(() => import("./RoofSelectedInformation.814088ff.js"), true ? ["assets/RoofSelectedInformation.814088ff.js","assets/vendor.9c97a0a0.js","assets/views.model.a1ba4457.js","assets/UiDisclosure.01bd30d1.js","assets/arrow-up.e2a6014f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/BoxStep.6addc88e.js","assets/panels.73172c5f.js","assets/UiChartDonut.7866d5de.js","assets/UiSurfaceNumber.0eee2d71.js","assets/right-flat-arrow.6196ad91.js","assets/roof.model.951bd55f.js","assets/installation.1bf16994.js","assets/map.a57db9ad.js","assets/viewPointHelper.090a7e02.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/popUpStore.d89f5462.js"] : void 0),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: "Page Roof Selected Information"
    }
  },
  {
    path: "/step-sunshine",
    name: "step-sunshine",
    component: () => __vitePreload(() => import("./StepSunshineView.598aca8a.js"), true ? ["assets/StepSunshineView.598aca8a.js","assets/vendor.9c97a0a0.js","assets/views.model.a1ba4457.js","assets/icon-delete.7df02bd2.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/SimulationSteps.04a43203.js","assets/StepIllustration.09b554fc.js","assets/right-flat-arrow.6196ad91.js","assets/installation.1bf16994.js","assets/potentiel.320635bc.js","assets/economies.0397e19a.js","assets/RoofAccordion.52438064.js","assets/arrow-up.e2a6014f.js","assets/RoofInformationsBox.04c616c4.js","assets/BoxStep.6addc88e.js","assets/SimulationResult.b34b84e2.js","assets/solar-panel.d7f5b63a.js","assets/solarPanel.model.5b355558.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/layers.e7685602.js","assets/CheckBox.6d3bfedc.js","assets/viewPointHelper.090a7e02.js","assets/roof.model.951bd55f.js","assets/map.a57db9ad.js","assets/panels.73172c5f.js"] : void 0),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: "Page Step Sunshine"
    }
  },
  {
    path: "/legalnotice/:legallink",
    name: "legal-notice",
    component: () => __vitePreload(() => import("./LegalNoticeView.0c43a036.js"), true ? ["assets/LegalNoticeView.0c43a036.js","assets/vendor.9c97a0a0.js","assets/views.model.a1ba4457.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: "Page Legal Notice"
    }
  },
  {
    path: "/end-simulation",
    name: "end-simulation",
    component: () => __vitePreload(() => import("./SimulationAutocalsolView.b6ce8e29.js"), true ? ["assets/SimulationAutocalsolView.b6ce8e29.js","assets/vendor.9c97a0a0.js","assets/CheckBox.6d3bfedc.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/LargeFooter.29924852.js","assets/views.model.a1ba4457.js","assets/layers.e7685602.js","assets/solarPanel.model.5b355558.js","assets/panels.73172c5f.js"] : void 0),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: "Page End Simulation"
    }
  },
  {
    path: "/simulation-results",
    name: "simulation-results",
    component: () => __vitePreload(() => import("./SimulationResultsView.70144ce9.js"), true ? ["assets/SimulationResultsView.70144ce9.js","assets/vendor.9c97a0a0.js","assets/views.model.a1ba4457.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/installation.1bf16994.js","assets/solarPanel.model.5b355558.js","assets/solar-panel.d7f5b63a.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/LargeFooter.29924852.js","assets/potentiel.320635bc.js","assets/RoofInformationsBox.04c616c4.js","assets/economies.0397e19a.js","assets/roof.model.951bd55f.js","assets/layers.e7685602.js","assets/home.183a04bd.js","assets/map.a57db9ad.js"] : void 0),
    beforeEnter: redirectToRoofSelection,
    meta: {
      title: "Page Simulation Results"
    }
  }
];
const router = createRouter({
  history: createWebHistory("/cooperation_jn_solar/main/"),
  routes
});
if (router !== void 0) {
  router.afterEach(
    (to, from) => {
      _paq.push(["setCustomUrl", to.fullPath]);
      _paq.push(["setDocumentTitle", to.meta.title || "My New Title"]);
      _paq.push(["trackPageView"]);
      const viewStore = useViewsStore();
      viewStore.previousRoute = from.name;
    }
  );
}
const DEFAULT_CONSUMPTION = 0;
const useSimulationStore = defineStore("simulation", () => {
  const currentStep = ref(1);
  const currentSubStep = ref(1);
  const availableSteps = [
    { step: 1, subStep: 1, isFinal: false },
    { step: 2, subStep: 1, isFinal: false },
    { step: 2, subStep: 2, isFinal: false },
    { step: 2, subStep: 3, isFinal: false },
    { step: 3, subStep: 1, isFinal: false },
    { step: 3, subStep: 2, isFinal: false },
    { step: 3, subStep: 3, isFinal: true },
    { step: 3, subStep: 4, isFinal: true }
  ];
  const restartEndSimulation = ref(false);
  function setCurrentStep(step) {
    currentStep.value = step;
  }
  function setCurrentSubStep(subStep) {
    currentSubStep.value = subStep;
  }
  function indexOfCurrentStepAndSubStep() {
    return availableSteps.findIndex((availableStep) => {
      return availableStep.step == currentStep.value && availableStep.subStep == currentSubStep.value;
    });
  }
  function isCurrentStepFinal() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    return availableSteps[currentIndex].isFinal;
  }
  function getIndexPreviousStepNotFinal(currentIndex) {
    for (let index = currentIndex - 1; index >= 0; index--) {
      if (!availableSteps[index].isFinal) {
        return index;
      }
    }
    return null;
  }
  function goToFinalView() {
    router.push("end-simulation");
  }
  function goToPreviousStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (currentIndex - 1 < 0) {
      return;
    }
    const indexPreviousStepNotFinal = getIndexPreviousStepNotFinal(currentIndex);
    if (indexPreviousStepNotFinal !== null) {
      setCurrentStep(availableSteps[indexPreviousStepNotFinal].step);
      setCurrentSubStep(availableSteps[indexPreviousStepNotFinal].subStep);
    }
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToPreviousStep();
    }
  }
  function goToNextStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (availableSteps[currentIndex].isFinal) {
      goToFinalView();
      return;
    }
    if (currentIndex + 1 >= availableSteps.length) {
      return;
    }
    setCurrentStep(availableSteps[currentIndex + 1].step);
    setCurrentSubStep(availableSteps[currentIndex + 1].subStep);
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToNextStep();
    }
  }
  function resetSimulation() {
    setCurrentStep(1);
    setCurrentSubStep(1);
  }
  function shouldShowSolarPanelLayer() {
    if (currentStep.value === 3) {
      return true;
    }
    if (currentStep.value === 2 && currentSubStep.value === 2) {
      return true;
    }
    return false;
  }
  return {
    currentStep,
    currentSubStep,
    restartEndSimulation,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
    isCurrentStepFinal,
    goToFinalView,
    resetSimulation,
    shouldShowSolarPanelLayer
  };
});
const useAddressStore = defineStore("address", () => {
  const latitude = ref(0);
  const longitude = ref(0);
  const address = ref("");
  const screenshotAddress = ref(null);
  function setLatitudeAndLongitude(new_latitude, new_longitude) {
    latitude.value = new_latitude;
    longitude.value = new_longitude;
  }
  function setAddress(new_address) {
    address.value = new_address;
  }
  function resetLatitureAndLongitude() {
    setLatitudeAndLongitude(0, 0);
  }
  function resetAddress() {
    setAddress("");
  }
  return {
    latitude,
    longitude,
    setLatitudeAndLongitude,
    address,
    setAddress,
    resetAddress,
    resetLatitureAndLongitude,
    screenshotAddress
  };
});
const useAutocalsolStore = defineStore("autocalsolStore", () => {
  const autocalsolResult = ref(null);
  function setAutocalsolResult(result) {
    autocalsolResult.value = result;
  }
  function resetAutocalsolResult() {
    autocalsolResult.value = null;
  }
  return {
    autocalsolResult,
    setAutocalsolResult,
    resetAutocalsolResult
  };
});
const useConsumptionAndProductionStore = defineStore(
  "consumptionAndProduction",
  () => {
    const annualConsumption = ref(0);
    function setAnnualConsumption(new_annual_consumption) {
      annualConsumption.value = new_annual_consumption;
    }
    function resetAnnualConsumption() {
      setAnnualConsumption(0);
    }
    return {
      annualConsumption,
      setAnnualConsumption,
      resetAnnualConsumption
    };
  }
);
const useRoofsStore = defineStore("roofs", () => {
  const selectedBuildingId = ref(null);
  const roofsFeatures = ref(null);
  const roofSurfacesList = ref(null);
  const selectedRoofSurfaceId = ref(null);
  const gridGeom = ref(null);
  const gridMatrix = ref(null);
  const previousGridMatrix = ref(null);
  const previouslySelected = ref(null);
  function setSelectedBuildingId(buildingId) {
    selectedBuildingId.value = buildingId;
  }
  function setRoofsFeatures(features) {
    roofsFeatures.value = features;
  }
  function setRoofSurfacesList(list) {
    roofSurfacesList.value = list;
  }
  function setSelectRoofSurfaceId(surfaceId) {
    selectedRoofSurfaceId.value = surfaceId;
  }
  function getPreviouslySelected() {
    return previouslySelected.value;
  }
  function getFeaturesOfSelectedPanRoof() {
    var _a, _b;
    const features = [];
    (_b = (_a = roofsFeatures.value) == null ? void 0 : _a.features) == null ? void 0 : _b.forEach((f) => {
      var _a2;
      if (((_a2 = f.properties) == null ? void 0 : _a2.surface_id) === selectedRoofSurfaceId.value) {
        features.push(f);
      }
    });
    return featureCollection(features);
  }
  function saveCleanMatrix() {
    previousGridMatrix.value = [];
    for (let x = 0; x < gridMatrix.value.length; x++) {
      previousGridMatrix.value[x] = [];
      for (let y = 0; y < gridMatrix.value[x].length; y++) {
        previousGridMatrix.value[x][y] = { ...gridMatrix.value[x][y] };
      }
    }
  }
  function restoreMatrixToClean() {
    if (gridMatrix.value && previousGridMatrix.value) {
      for (let x = 0; x < previousGridMatrix.value.length; x++) {
        for (let y = 0; y < previousGridMatrix.value[x].length; y++) {
          gridMatrix.value[x][y].usable = previousGridMatrix.value[x][y].usable;
        }
      }
    }
  }
  function getRoofSurfaceModelOfSelectedPanRoof() {
    var _a;
    return (_a = roofSurfacesList.value) == null ? void 0 : _a.find((roofSuface) => {
      return roofSuface.surface_id == selectedRoofSurfaceId.value;
    });
  }
  function resetRoofStore() {
    selectedBuildingId.value = null;
    selectedRoofSurfaceId.value = null;
    roofsFeatures.value = null;
    roofSurfacesList.value = null;
    resetGridAndMatrix();
  }
  function resetGridAndMatrix() {
    gridMatrix.value = null;
    previouslySelected.value = null;
    previousGridMatrix.value = null;
  }
  return {
    roofsFeatures,
    selectedRoofSurfaceId,
    roofSurfacesList,
    selectedBuildingId,
    gridGeom,
    gridMatrix,
    previouslySelected,
    previousGridMatrix,
    setRoofsFeatures,
    setSelectRoofSurfaceId,
    setSelectedBuildingId,
    setRoofSurfacesList,
    getFeaturesOfSelectedPanRoof,
    getRoofSurfaceModelOfSelectedPanRoof,
    getPreviouslySelected,
    resetRoofStore,
    restoreMatrixToClean,
    saveCleanMatrix,
    resetGridAndMatrix
  };
});
const useSolarPanelStore = defineStore("solarPanel", () => {
  const currentNumberSolarPanel = ref(0);
  const solarPanels = ref([]);
  function resetPanelStore() {
    currentNumberSolarPanel.value = 0;
    solarPanels.value = [];
  }
  function maxNumberSolarPanel() {
    return solarPanels.value.length;
  }
  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel,
    resetPanelStore,
    solarPanels
  };
});
const WINDOW_CONFIRM_MESSAGE = "Cette action vous renvoie en d\xE9but de simulation, vos donn\xE9es actuelles seront effac\xE9es";
function resetStores() {
  const simulationStore = useSimulationStore();
  const addressStore = useAddressStore();
  const roofStore = useRoofsStore();
  const consumptionAndProductionStore = useConsumptionAndProductionStore();
  const autocalsolStore = useAutocalsolStore();
  const solarPanelStore = useSolarPanelStore();
  const viewStore = useViewsStore();
  simulationStore.resetSimulation();
  if (viewStore.previousRoute !== "home") {
    addressStore.resetAddress();
  }
  addressStore.resetLatitureAndLongitude();
  roofStore.resetRoofStore();
  consumptionAndProductionStore.resetAnnualConsumption();
  autocalsolStore.resetAutocalsolResult();
  solarPanelStore.resetPanelStore();
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UiHeaderFullScreen",
  props: {
    urlBack: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const viewStore = useViewsStore();
    const simulationStore = useSimulationStore();
    const router2 = useRouter();
    function restartSimulation() {
      simulationStore.restartEndSimulation = true;
      router2.push(props.urlBack);
    }
    function restartHome() {
      if (viewStore.currentView == "legal-notice") {
        window.close();
      } else {
        resetStores();
        router2.push("/home");
      }
    }
    const __returned__ = { viewStore, simulationStore, router: router2, props, restartSimulation, restartHome, UiReturnButton, get iconChevronLeft() {
      return iconChevronLeft;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-[100%] h-[72px] bg-white shadow z-40" };
const _hoisted_2$3 = { class: "flex flex-row items-center" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = { key: 0 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      $setup.viewStore.currentView != "legal-notice" ? (openBlock(), createBlock($setup["UiReturnButton"], {
        key: 0,
        class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.restartSimulation())
      }, {
        default: withCtx(() => [
          createBaseVNode("img", { src: $setup.iconChevronLeft }, null, 8, _hoisted_3$2)
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "title-img")
    ]),
    renderSlot(_ctx.$slots, "mid-content"),
    $setup.viewStore.currentView != "end-simulation" ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.restartHome()),
        class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, [
        renderSlot(_ctx.$slots, "button-content")
      ])
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$3.__file = "src/components/ui/UiHeaderFullScreen.vue";
const UiHeaderFullScreen = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiHeaderFullScreen.vue"]]);
const iconHome = "/cooperation_jn_solar/main/assets/icon-home.692564ca.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderEndSimulation",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSolarPanelLogo, UiHeaderFullScreen, get iconHome() {
      return iconHome;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex items-center p-0 gap-2.5 ml-5" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("h1", { class: "font-dm-sans font-bold text-2xl text-center" }, " Cadastre Solaire ", -1);
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-base font-medium" }, "Retour \xE0 l'accueil", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiHeaderFullScreen"], { urlBack: "/step-sunshine" }, {
    "title-img": withCtx(() => [
      createBaseVNode("div", _hoisted_1$2, [
        createVNode($setup["UiSolarPanelLogo"], { class: "h-10 w-10" }),
        _hoisted_2$2
      ])
    ]),
    "button-content": withCtx(() => [
      createBaseVNode("img", { src: $setup.iconHome }, null, 8, _hoisted_3$1),
      _hoisted_4$1
    ]),
    _: 1
  });
}
_sfc_main$2.__file = "src/components/simulation/HeaderEndSimulation.vue";
const HeaderEndSimulation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/HeaderEndSimulation.vue"]]);
const logoRennes = "data:image/png;base64,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";
const iconMultiplyBlack = "/cooperation_jn_solar/main/assets/icon-multiply-black.572055b3.svg";
const legalList = [
  {
    link: "/legalnotice/mentions-legales",
    slug: "mentions-legales",
    name: "Mentions l\xE9gales"
  },
  {
    link: "/legalnotice/confidentialite",
    slug: "confidentialite",
    name: "Politique de confidentialit\xE9"
  },
  {
    link: "/legalnotice/plan-du-site",
    slug: "plan-du-site",
    name: "Plan du site"
  },
  {
    link: "/legalnotice/accessibilite",
    slug: "accessibilite",
    name: "Accessibilit\xE9: totalement conforme"
  },
  {
    link: "/legalnotice/cookies",
    slug: "cookies",
    name: "Cookies"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderLegalNotice",
  setup(__props, { expose }) {
    expose();
    const router2 = useRouter();
    const { params } = useRoute();
    const routeParams = ref(params);
    const legalLink = routeParams.value.legallink;
    function goTo(link) {
      router2.push(link);
    }
    const __returned__ = { router: router2, params, routeParams, legalLink, goTo, UiHeaderFullScreen, get logoRennes() {
      return logoRennes;
    }, get iconMultiplyBlack() {
      return iconMultiplyBlack;
    }, get legalList() {
      return legalList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = { class: "flex flex-row self-end gap-4" };
const _hoisted_3 = ["onClick", "onKeydown"];
const _hoisted_4 = ["src"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "text-base font-medium" }, "Fermer", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiHeaderFullScreen"], { urlBack: "/home" }, {
    "title-img": withCtx(() => [
      createBaseVNode("img", {
        class: "ml-8",
        src: $setup.logoRennes
      }, null, 8, _hoisted_1$1)
    ]),
    "mid-content": withCtx(() => [
      createBaseVNode("div", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.legalList, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.name,
            class: normalizeClass(["flex flex-row align-center pt-2 pb-4 px-2", $setup.legalLink == item.slug ? "border-black border-b-2" : ""])
          }, [
            createBaseVNode("h4", {
              tabindex: "0",
              class: "text-[18px] leading-6 bold",
              onClick: ($event) => $setup.goTo(item.link),
              onKeydown: withKeys(($event) => $setup.goTo(item.link), ["enter"])
            }, toDisplayString(item.name), 41, _hoisted_3)
          ], 2);
        }), 128))
      ])
    ]),
    "button-content": withCtx(() => [
      createBaseVNode("img", { src: $setup.iconMultiplyBlack }, null, 8, _hoisted_4),
      _hoisted_5
    ]),
    _: 1
  });
}
_sfc_main$1.__file = "src/components/legal/HeaderLegalNotice.vue";
const HeaderLegalNotice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/HeaderLegalNotice.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiHeaderFullScreen.story",
  setup(__props, { expose }) {
    expose();
    function mySetupApp({ app, story, variant }) {
      app.use(router);
    }
    const __returned__ = { mySetupApp, HeaderEndSimulation, HeaderLegalNotice };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { "height": "100px", "position": "relative" } };
const _hoisted_2 = { style: { "height": "100px", "position": "relative" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Header Full Screen",
    layout: {
      type: "grid",
      width: 700
    },
    "setup-app": $setup.mySetupApp
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["HeaderLegalNotice"])
      ]),
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["HeaderEndSimulation"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiHeaderFullScreen.story.vue";
const UiHeaderFullScreen_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiHeaderFullScreen.story.vue"]]);
const UiHeaderFullScreen_story$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UiHeaderFullScreen_story
}, Symbol.toStringTag, { value: "Module" }));
export {
  DEFAULT_CONSUMPTION as D,
  HeaderLegalNotice as H,
  UiSolarPanelLogo as U,
  WINDOW_CONFIRM_MESSAGE as W,
  useAddressStore as a,
  useSimulationStore as b,
  useRoofsStore as c,
  useSolarPanelStore as d,
  useConsumptionAndProductionStore as e,
  useAutocalsolStore as f,
  HeaderEndSimulation as g,
  router as h,
  UiHeaderFullScreen_story$1 as i,
  legalList as l,
  resetStores as r,
  useViewsStore as u
};
