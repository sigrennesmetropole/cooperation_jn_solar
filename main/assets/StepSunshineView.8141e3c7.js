var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a_ as defineStore, aC as ref, as as defineComponent, aD as useRouter, aw as openBlock, ay as createElementBlock, az as createBaseVNode, aI as toDisplayString, au as createBlock, aG as normalizeClass, aF as computed, aQ as Fragment, aR as renderList, ax as createVNode, av as withCtx, aE as createCommentVNode, aA as createTextVNode, b5 as withDirectives, b6 as vModelText, b7 as pushScopeId, b8 as popScopeId, b9 as rt, aY as onBeforeMount } from "./vendor.b7cfb440.js";
import { u as usePanelsStore } from "./panels.7ba2b33f.js";
import { u as useViewsStore, v as viewList } from "./views.d8fd1f08.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { S as SimulationSteps } from "./SimulationSteps.525c0fec.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { R as RoofAccordion } from "./RoofAccordion.4ba8fc5f.js";
import { u as useRoofsStore, m as mapRoofSurfaceModel } from "./roof.model.f3995e58.js";
import { B as BoxStep } from "./BoxStep.67824330.js";
import { S as SimulationResult } from "./SimulationResult.54282bff.js";
import { e as expandIcon } from "./expand-small-bigger-retract-smaller-big.77ae2404.js";
import "./StepIllustration.31058efc.js";
import "./right-flat-arrow.6196ad91.js";
import "./arrow-up.e2a6014f.js";
const useSimulationStore = defineStore("simulation", () => {
  const currentStep = ref(1);
  const currentSubStep = ref(1);
  const roofSurface = ref({
    surface_id: "1",
    values: [10, 20, 30, 40],
    favorable: 44,
    total: 90,
    orientation: "Sud",
    inclinaison: 47.9
  });
  const availableSteps = [
    { step: 1, subStep: 1 },
    { step: 2, subStep: 1 },
    { step: 2, subStep: 2 },
    { step: 3, subStep: 1 },
    { step: 3, subStep: 2 },
    { step: 3, subStep: 3 },
    { step: 3, subStep: 4 }
  ];
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
  function goToPreviousStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (currentIndex - 1 < 0) {
      return;
    }
    setCurrentStep(availableSteps[currentIndex - 1].step);
    setCurrentSubStep(availableSteps[currentIndex - 1].subStep);
  }
  function goToNextStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (currentIndex + 1 >= availableSteps.length) {
      return;
    }
    setCurrentStep(availableSteps[currentIndex + 1].step);
    setCurrentSubStep(availableSteps[currentIndex + 1].subStep);
  }
  return {
    currentStep,
    currentSubStep,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
    roofSurface
  };
});
const iconDelete = "/cooperation_jn_solar/main/assets/icon-delete.a0e9c423.svg";
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "LeaveButton",
  setup(__props, { expose }) {
    expose();
    const router = useRouter();
    const __returned__ = { router, get iconDelete() {
      return iconDelete;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = { class: "flex flex-col items-center gap-6 border-b-[1px] border-neutral-100 h-[70px] pb-6" };
const _hoisted_2$8 = { class: "flex flex-row items-stretch py-0 px-6 gap-3" };
const _hoisted_3$8 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-base text-justify w-[325px]" }, " Simuler une installation photovolta\xEFque ", -1);
const _hoisted_4$7 = ["src"];
const _hoisted_5$5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-normal text-xs ml-auto" }, "Quitter", -1);
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createBaseVNode("div", _hoisted_2$8, [
      _hoisted_3$8,
      createBaseVNode("button", {
        class: "flex flex-row items-center pb-1 gap-2.5",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.router.push("/roof-selection"))
      }, [
        createBaseVNode("img", {
          src: $setup.iconDelete,
          class: "w-4 h-4",
          alt: ""
        }, null, 8, _hoisted_4$7),
        _hoisted_5$5
      ])
    ])
  ]);
}
_sfc_main$d.__file = "src/components/simulation/LeaveButton.vue";
const LeaveButton = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/LeaveButton.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "UiStepTitle",
  props: {
    imageSource: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { class: "flex flex-col items-center p-0 gap-1" };
const _hoisted_2$7 = ["src"];
const _hoisted_3$7 = { class: "font-dm-sans font-bold text-[30px] leading-9 text-center" };
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createBaseVNode("img", {
      src: $setup.props.imageSource,
      class: "h-[88px] w-[88px]",
      alt: ""
    }, null, 8, _hoisted_2$7),
    createBaseVNode("h1", _hoisted_3$7, toDisplayString($setup.props.title), 1)
  ]);
}
_sfc_main$c.__file = "src/components/simulation/UiStepTitle.vue";
const UiStepTitle = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/UiStepTitle.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "StepTitle",
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const imageSources = [potentiel, installation, economies];
    const titles = [
      "Votre ensoleillement",
      "Votre installation",
      "Vos \xE9conomies d\u2019\xE9nergie"
    ];
    const __returned__ = { props, imageSources, titles, UiStepTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiStepTitle"], {
    "image-source": $setup.imageSources[$setup.props.step - 1],
    title: $setup.titles[$setup.props.step - 1]
  }, null, 8, ["image-source", "title"]);
}
_sfc_main$b.__file = "src/components/simulation/StepTitle.vue";
const StepTitle = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepTitle.vue"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "StepDescription",
  props: {
    step: {
      type: Number,
      required: true
    },
    substep: {
      type: Number,
      required: false,
      default: 1
    }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const descriptions = {
      1: {
        1: "Je s\xE9lectionne le meilleur pan de toit."
      },
      2: {
        1: "J\u2019identifie les obstacles sur ma toiture.",
        2: "Mon installation photovoltaique simul\xE9e :"
      },
      3: {
        1: "Estimez quelle sera votre production, quelle part vous consommerez directement (en fonction de votre profil de consommation) et quelle part sera inject\xE9e sur le r\xE9seau.",
        2: "Renseignez votre consommation \xE9lectrique annuelle",
        3: "",
        4: ""
      }
    };
    const __returned__ = { props, descriptions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", {
    class: normalizeClass(["font-dm-sans text-base text-center", $setup.props.step == 3 ? "font-normal" : "font-medium"])
  }, toDisplayString($setup.descriptions[$setup.props.step][$setup.props.substep]), 3);
}
_sfc_main$a.__file = "src/components/simulation/StepDescription.vue";
const StepDescription = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepDescription.vue"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RoofAccordionOptions",
  setup(__props, { expose }) {
    expose();
    const roofsStore = useRoofsStore();
    const mapAndSortedRoofs = computed(() => {
      const buildingRoofsFeatures = roofsStore.buildingRoofsFeatures;
      const res = [];
      buildingRoofsFeatures == null ? void 0 : buildingRoofsFeatures.features.forEach((feature) => {
        res.push(mapRoofSurfaceModel(feature));
      });
      return res.sort((a, b) => b.favorable - a.favorable);
    });
    const __returned__ = { roofsStore, mapAndSortedRoofs, RoofAccordion };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = {
  class: "flex flex-col p-0 gap-6",
  role: "radiogroup"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.mapAndSortedRoofs, (roofSurface, index) => {
      return openBlock(), createBlock($setup["RoofAccordion"], {
        key: index,
        "roof-surface": roofSurface,
        label: "Pan de toit n\xB0" + (index + 1),
        selected: index === 0,
        "is-open": index === 0,
        "is-recommended": index === 0
      }, null, 8, ["roof-surface", "label", "selected", "is-open", "is-recommended"]);
    }), 128))
  ]);
}
_sfc_main$9.__file = "src/components/simulation/RoofAccordionOptions.vue";
const RoofAccordionOptions = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/RoofAccordionOptions.vue"]]);
const step2 = "/cooperation_jn_solar/main/assets/Steps.69ebb06f.jpg";
const validation = "/cooperation_jn_solar/main/assets/interface-validation.bd29d758.svg";
const deleted = "/cooperation_jn_solar/main/assets/interface-delete.9cc62749.svg";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ExplanationSelectionObstacles",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get step2() {
      return step2;
    }, get validation() {
      return validation;
    }, get deleted() {
      return deleted;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = ["src"];
const _hoisted_2$6 = { class: "mt-6" };
const _hoisted_3$6 = { class: "flex flex-row items-center mb-2" };
const _hoisted_4$6 = { class: "flex flex-row justify-center items-center bg-lime-200 rounded-full w-2.5 h-2.5 mr-2" };
const _hoisted_5$4 = ["src"];
const _hoisted_6$4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, " Les zones color\xE9es peuvent accueillir des panneaux. ", -1);
const _hoisted_7$4 = { class: "flex flex-row items-center" };
const _hoisted_8$3 = { class: "flex flex-row justify-center items-center bg-rose-200 rounded-full w-2.5 h-2.5 mr-2" };
const _hoisted_9$2 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, " Les zones barr\xE9es ne peuvent pas en accueillir. ", -1);
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("img", {
      class: "w-full",
      src: $setup.step2,
      alt: ""
    }, null, 8, _hoisted_1$7),
    createBaseVNode("div", _hoisted_2$6, [
      createBaseVNode("div", _hoisted_3$6, [
        createBaseVNode("div", _hoisted_4$6, [
          createBaseVNode("img", {
            class: "w-1 h-1",
            src: $setup.validation,
            alt: ""
          }, null, 8, _hoisted_5$4)
        ]),
        _hoisted_6$4
      ]),
      createBaseVNode("div", _hoisted_7$4, [
        createBaseVNode("div", _hoisted_8$3, [
          createBaseVNode("img", {
            class: "w-1 h-1",
            src: $setup.deleted,
            alt: ""
          }, null, 8, _hoisted_9$2)
        ]),
        _hoisted_10
      ])
    ])
  ]);
}
_sfc_main$8.__file = "src/components/simulation/ExplanationSelectionObstacles.vue";
const ExplanationSelectionObstacles = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ExplanationSelectionObstacles.vue"]]);
const useSolarPanelStore = defineStore("solarPanel", () => {
  const maxNumberSolarPanel = ref(0);
  const currentNumberSolarPanel = ref(0);
  return {
    maxNumberSolarPanel,
    currentNumberSolarPanel
  };
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SetUpStep",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const solarPanelStore = useSolarPanelStore();
    function goToThirdStep() {
      simulationStore.goToNextStep();
    }
    const updateCurrentNumSolarPanel = (changes) => {
      solarPanelStore.currentNumberSolarPanel = solarPanelStore.currentNumberSolarPanel + changes;
    };
    const __returned__ = { simulationStore, solarPanelStore, goToThirdStep, updateCurrentNumSolarPanel, ExplanationSelectionObstacles, BoxStep, get economies() {
      return economies;
    }, SimulationResult };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs text-neutral-500" }, " \xC9tape 3 ", -1);
const _hoisted_2$5 = ["src"];
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelles \xE9conomies d'\xE9nergie "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" gr\xE2ce \xE0 cette installation ? ")
], -1);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-medium" }, " Calculer mes \xE9conomies d'\xE9nergie ", -1);
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.simulationStore.currentSubStep == 1 ? (openBlock(), createBlock($setup["ExplanationSelectionObstacles"], { key: 0 })) : $setup.simulationStore.currentSubStep == 2 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    createVNode($setup["SimulationResult"], {
      "max-num-solar-panel": $setup.solarPanelStore.maxNumberSolarPanel,
      "roof-surface": $setup.simulationStore.roofSurface,
      "current-num-solar-panel": $setup.solarPanelStore.currentNumberSolarPanel,
      onSolarPanelChanges: $setup.updateCurrentNumSolarPanel
    }, null, 8, ["max-num-solar-panel", "roof-surface", "current-num-solar-panel"]),
    $setup.simulationStore.currentSubStep == 2 ? (openBlock(), createBlock($setup["BoxStep"], {
      key: 0,
      onButtonBoxAction: _cache[0] || (_cache[0] = ($event) => $setup.goToThirdStep())
    }, {
      nameOfStep: withCtx(() => [
        _hoisted_1$6
      ]),
      image: withCtx(() => [
        createBaseVNode("img", {
          class: "w-[88px] h-[88px] mt-2",
          src: $setup.economies,
          alt: ""
        }, null, 8, _hoisted_2$5)
      ]),
      text: withCtx(() => [
        _hoisted_3$5
      ]),
      buttonContent: withCtx(() => [
        _hoisted_4$5
      ]),
      _: 1
    })) : createCommentVNode("v-if", true)
  ], 64)) : createCommentVNode("v-if", true);
}
_sfc_main$7.__file = "src/components/simulation/SetUpStep.vue";
const SetUpStep = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SetUpStep.vue"]]);
const energySaving1 = "/cooperation_jn_solar/main/assets/energy_saving_1.9fe57917.svg";
const energySaving2 = "/cooperation_jn_solar/main/assets/energy_saving_2.539272d6.svg";
const energySaving3 = "/cooperation_jn_solar/main/assets/energy_saving_3.062cf52b.svg";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "InformationsEnergySaving",
  setup(__props, { expose }) {
    expose();
    const informations = [
      {
        id: 1,
        img: energySaving1,
        title: "Qu\u2019est-ce que l\u2019autoconsommation ?",
        description: "Consommer chez vous l\u2019\xE9lectricit\xE9 que vous avez produite et vendre le surplus sur le r\xE9seau public, c\u2019est ce qu\u2019on appelle l\u2019autoconsommation."
      },
      {
        id: 2,
        img: energySaving2,
        title: "Maitriser au mieux votre budget \xE9lectricit\xE9.",
        description: "En devenant producteur d\u2019une partie de votre \xE9lectricit\xE9,  votre budget \xE9nergie est moins d\xE9pendant des \xE9volutions de prix de votre fournisseur."
      },
      {
        id: 3,
        img: energySaving3,
        title: "Pour aller plus loin",
        description: "Vous pourrez \xE9conomiser davantage d'\xE9nergie si vos appareils \xE9lectriques fonctionnent au moment o\xF9 les panneaux solaires produisent, c\u2019est-\xE0-dire au cours de la journ\xE9e."
      }
    ];
    const currentInfo = ref(1);
    const __returned__ = { informations, currentInfo };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "rounded-lg bg-slate-100 h-[402px] w-full px-6 py-8" };
const _hoisted_2$4 = {
  key: 0,
  class: "flex flex-col justify-center items-center"
};
const _hoisted_3$4 = ["src"];
const _hoisted_4$4 = { class: "font-dm-sans font-bold text-base mt-2" };
const _hoisted_5$3 = { class: "font-dm-sans font-normal text-sm mt-2 text-center h-[80px]" };
const _hoisted_6$3 = { class: "flex flex-row gap-3 mt-4 justify-center items-center" };
const _hoisted_7$3 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    (openBlock(), createElementBlock(Fragment, null, renderList($setup.informations, (info) => {
      return openBlock(), createElementBlock(Fragment, {
        key: info.id
      }, [
        info.id === $setup.currentInfo ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createBaseVNode("img", {
            class: "w-[354px] h-[160px]",
            src: info.img,
            alt: ""
          }, null, 8, _hoisted_3$4),
          createBaseVNode("span", _hoisted_4$4, toDisplayString(info.title), 1),
          createBaseVNode("span", _hoisted_5$3, toDisplayString(info.description), 1)
        ])) : createCommentVNode("v-if", true)
      ], 64);
    }), 64)),
    createBaseVNode("div", _hoisted_6$3, [
      (openBlock(), createElementBlock(Fragment, null, renderList($setup.informations, (info) => {
        return createBaseVNode("div", {
          key: info.id,
          class: normalizeClass([
            "w-6 h-6 rounded-full flex justify-center items-center cursor-pointer",
            info.id === $setup.currentInfo ? "bg-slate-600" : "border border-slate-300"
          ]),
          onClick: ($event) => $setup.currentInfo = info.id
        }, [
          createBaseVNode("span", {
            class: normalizeClass(["font-dm-sans font-bold text-xs", info.id === $setup.currentInfo ? "text-white" : "text-slate-500"])
          }, toDisplayString(info.id), 3)
        ], 10, _hoisted_7$3);
      }), 64))
    ])
  ]);
}
_sfc_main$6.__file = "src/components/simulation/InformationsEnergySaving.vue";
const InformationsEnergySaving = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/InformationsEnergySaving.vue"]]);
const ElectricityConsumptionManual_vue_vue_type_style_index_0_scoped_1452b0f4_lang = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ElectricityConsumptionManual",
  setup(__props, { expose }) {
    expose();
    const consumption = ref("");
    const storeConsumption = () => {
      console.log("personalConsumption", consumption.value);
      return consumption.value;
    };
    function inputIsCompleted() {
      const inputLength = consumption.value.length;
      if (inputLength <= 0) {
        return false;
      } else {
        return true;
      }
    }
    const __returned__ = { consumption, storeConsumption, inputIsCompleted };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1452b0f4"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "flex flex-col gap-1.5 mt-10" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm" }, "Votre consommation annuelle", -1));
const _hoisted_3$3 = { class: "flex flex-row" };
const _hoisted_4$3 = {
  key: 0,
  "append-unit": "kWh",
  class: "text-base font-dm-sans text-medium relative after:content-[attr(append-unit)] after:absolute after:right-2 after:top-2"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$3,
    createBaseVNode("div", _hoisted_3$3, [
      withDirectives(createBaseVNode("input", {
        class: "border border-neutral-400 rounded h-[42px] px-3 py-[9px] text-black font-dm-sans text-medium placeholder:text-neutral-600 placeholder:text-base placeholder:font-dm-sans w-full",
        type: "number",
        placeholder: "kWh",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.consumption = $event),
        onKeyup: $setup.storeConsumption
      }, null, 544), [
        [vModelText, $setup.consumption]
      ]),
      $setup.inputIsCompleted() ? (openBlock(), createElementBlock("div", _hoisted_4$3)) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main$5.__file = "src/components/simulation/ElectricityConsumptionManual.vue";
const ElectricityConsumptionManual = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-1452b0f4"], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ElectricityConsumptionManual.vue"]]);
const rectangle = "/cooperation_jn_solar/main/assets/rectangle.34037dc9.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ElectricityConsumptionButton",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const __returned__ = { simulationStore, get rectangle() {
      return rectangle;
    }, get expandArrow() {
      return expandIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex flex-col gap-2.5 py-6 font-dm-sans" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, "Saisir les informations de ma facture", -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
const _hoisted_4$2 = { class: "flex flex-row justify-between gap-[22px]" };
const _hoisted_5$2 = ["src"];
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("p", { class: "text-sm font-dm-sans font-normal text-neutral-400 my-4" }, "OU", -1);
const _hoisted_7$2 = ["src"];
const _hoisted_8$2 = ["src"];
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-black text-base font-medium" }, "Connecter mon compteur Linky", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("button", {
      class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.simulationStore.currentSubStep = 3)
    }, _hoisted_3$2),
    createBaseVNode("div", _hoisted_4$2, [
      createBaseVNode("img", { src: $setup.rectangle }, null, 8, _hoisted_5$2),
      _hoisted_6$2,
      createBaseVNode("img", { src: $setup.rectangle }, null, 8, _hoisted_7$2)
    ]),
    createBaseVNode("button", {
      class: "border border-black rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.simulationStore.currentSubStep = 4)
    }, [
      createBaseVNode("img", {
        src: $setup.expandArrow,
        class: "h-5 w-5"
      }, null, 8, _hoisted_8$2),
      _hoisted_9$1
    ])
  ]);
}
_sfc_main$4.__file = "src/components/simulation/ElectricityConsumptionButton.vue";
const ElectricityConsumptionButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ElectricityConsumptionButton.vue"]]);
const enedisSignature = "/cooperation_jn_solar/main/assets/enedis-signature.83ee47b1.svg";
const enedisSpace = "/cooperation_jn_solar/main/assets/enedis-personal-space.895856c2.svg";
class RennesNotification {
  constructor(type, text) {
    __publicField(this, "type", "success");
    __publicField(this, "text", "");
    this.type = type;
    this.text = text;
  }
  displayNotification() {
    const { notify } = rt();
    notify({
      type: this.type,
      text: this.text
    });
  }
}
function getEnv() {
  return {}.VITE_ENV;
}
function getUrlBackOffice() {
  return {}.VITE_URL_BACKOFFICE;
}
function getEnedisSandboxPrm() {
  return {}.VITE_ENEDIS_SANDBOX_PRM;
}
class ApiService {
  async callApiPost(url, dataPost, headers) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: "POST",
        headers,
        credentials: "include",
        body: JSON.stringify(dataPost)
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const notif = new RennesNotification(
        "error",
        "Une erreur est survenue, veuillez r\xE9essayer."
      );
      notif.displayNotification();
      throw error;
    }
  }
  async callApiGet(url) {
    try {
      const response = await fetch(getUrlBackOffice() + url, {
        method: "GET",
        credentials: "include"
      });
      if (response.status !== 200) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      const notif = new RennesNotification(
        "error",
        "Une erreur est survenue, veuillez r\xE9essayer."
      );
      notif.displayNotification();
      throw error;
    }
  }
}
const apiService = new ApiService();
class ApiEnedisService {
  constructor() {
    __publicField(this, "baseUrlApi", "/api/enedis/user");
  }
  async getUrlUserAuthorization() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/url-authorization`
    );
    return data.url;
  }
  async getPRMUser() {
    const data = await apiService.callApiGet(`${this.baseUrlApi}/prm`);
    return data.prm;
  }
  async setPRMUser(prm) {
    const data = await apiService.callApiPost(
      `${this.baseUrlApi}/prm`,
      { prm },
      {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    );
    return data.prm;
  }
  async getAnnualConsumption() {
    const data = await apiService.callApiGet(
      `${this.baseUrlApi}/annual-consumption`
    );
    return data.consumption;
  }
}
const apiEnedisService = new ApiEnedisService();
class ApiAutocalsolService {
  async getComputeData() {
    const fakeData = {
      latitude: 48.110694413833,
      longitude: -1.6713621480316,
      slope: 30,
      azimuth: 0,
      annual_consumption: 6e3,
      peak_power: 3
    };
    const url = `/api/autocalsol/data-compute?latitude=${fakeData.latitude}&longitude=${fakeData.longitude}&slope=${fakeData.slope}&azimuth=${fakeData.azimuth}&annual_consumption=${fakeData.annual_consumption}&peak_power=${fakeData.peak_power}`;
    const data = await apiService.callApiGet(url);
    return data.compute;
  }
}
const apiAutocalsolService = new ApiAutocalsolService();
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InformationsLinky",
  setup(__props, { expose }) {
    expose();
    async function goToEnedisWebSite() {
      const url = await apiEnedisService.getUrlUserAuthorization();
      window.location.href = url;
    }
    async function goToEnedisLogin() {
      if (getEnv() == "dev") {
        await apiEnedisService.setPRMUser(getEnedisSandboxPrm());
        const consumption = await apiEnedisService.getAnnualConsumption();
        window.alert(JSON.stringify(consumption));
      } else if (getEnv() == "prod") {
        const prm = await apiEnedisService.getPRMUser();
        if (prm === void 0) {
          await goToEnedisWebSite();
          return;
        }
        const consumption = await apiEnedisService.getAnnualConsumption();
        window.alert(JSON.stringify(consumption));
      }
    }
    const isLoadingAutocalsol = ref(false);
    async function callApiAutocalsol() {
      isLoadingAutocalsol.value = true;
      const computeData = await apiAutocalsolService.getComputeData();
      isLoadingAutocalsol.value = false;
      window.alert(JSON.stringify(computeData));
    }
    const __returned__ = { goToEnedisWebSite, goToEnedisLogin, isLoadingAutocalsol, callApiAutocalsol, get enedisSignature() {
      return enedisSignature;
    }, get enedisSpace() {
      return enedisSpace;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex flex-col gap-6 border border-slate-200 rounded-lg bg-slate-50 h-[451px] w-full px-4 py-6 font-dm-sans text-sm font-normal" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-base font-medium" }, "Comment connecter mon compteur Linky ?", -1);
const _hoisted_3$1 = { class: "flex flex-row gap-4" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("p", null, "Enedis g\xE8re le r\xE9seau d'\xE9lectricit\xE9 jusqu'au compteur.", -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("p", null, " Pour calculer vos \xE9conomies d'\xE9nergie, nous devons acc\xE9der \xE0 vos donn\xE9es Linky g\xE9r\xE9es par Enedis. ", -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", null, " En cliquant sur ce bouton, vous acc\xE9derez \xE0 votre espace client Enedis o\xF9 vous pourrez autoriser Enedis \xE0 nous transmettre votre consommation annuelle. ", -1);
const _hoisted_8$1 = ["src"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, [
  /* @__PURE__ */ createTextVNode(" Vous pourrez changer d'avis et r\xE9voquer "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("votre autorisation \xE0 tout moment. ")
], -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$2, [
      _hoisted_2$1,
      createBaseVNode("div", _hoisted_3$1, [
        createBaseVNode("img", {
          src: $setup.enedisSignature,
          class: "w-[110px] h-[34.43px] my-auto"
        }, null, 8, _hoisted_4$1),
        _hoisted_5$1
      ]),
      _hoisted_6$1,
      _hoisted_7$1,
      createBaseVNode("img", {
        src: $setup.enedisSpace,
        class: "mx-auto cursor-pointer",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToEnedisLogin())
      }, null, 8, _hoisted_8$1),
      _hoisted_9
    ]),
    createBaseVNode("button", {
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.callApiAutocalsol()),
      class: "border"
    }, [
      $setup.isLoadingAutocalsol ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(" Loading ")
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createTextVNode(" CALL API AUTOCALSOL ")
      ], 64))
    ])
  ], 64);
}
_sfc_main$3.__file = "src/components/simulation/InformationsLinky.vue";
const InformationsLinky = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/InformationsLinky.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SavingsStep",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const __returned__ = { simulationStore, InformationsEnergySaving, ElectricityConsumptionManual, ElectricityConsumptionButton, InformationsLinky };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.simulationStore.currentSubStep == 1 ? (openBlock(), createBlock($setup["InformationsEnergySaving"], { key: 0 })) : $setup.simulationStore.currentSubStep == 2 ? (openBlock(), createBlock($setup["ElectricityConsumptionButton"], { key: 1 })) : $setup.simulationStore.currentSubStep == 3 ? (openBlock(), createBlock($setup["ElectricityConsumptionManual"], { key: 2 })) : $setup.simulationStore.currentSubStep === 4 ? (openBlock(), createBlock($setup["InformationsLinky"], { key: 3 })) : createCommentVNode("v-if", true);
}
_sfc_main$2.__file = "src/components/simulation/SavingsStep.vue";
const SavingsStep = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SavingsStep.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterButtons",
  setup(__props, { expose }) {
    expose();
    const router = useRouter();
    const simulationStore = useSimulationStore();
    function clickButtonCancel() {
      router.push("/roof-selection");
    }
    function clickButtonPrevious() {
      simulationStore.goToPreviousStep();
    }
    function clickButtonNext() {
      simulationStore.goToNextStep();
    }
    const __returned__ = { router, simulationStore, clickButtonCancel, clickButtonPrevious, clickButtonNext };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-200 -mx-6" }, null, -1);
const _hoisted_2 = { class: "flex flex-row justify-between mb-4" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-black text-base font-medium" }, " Annuler ", -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-black text-base font-medium" }, " Pr\xE9c\xE9dent ", -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "",
  src: "/cooperation_jn_solar/main/src/assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg",
  alt: ""
}, null, -1);
const _hoisted_8 = { class: "font-dm-sans text-white text-base font-medium" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$1,
    createBaseVNode("div", _hoisted_2, [
      $setup.simulationStore.currentStep == 1 ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.clickButtonCancel()),
        class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_4)) : $setup.simulationStore.currentStep != 1 ? (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.clickButtonPrevious()),
        class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_6)) : createCommentVNode("v-if", true),
      createBaseVNode("button", {
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.clickButtonNext()),
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, [
        _hoisted_7,
        createBaseVNode("span", _hoisted_8, toDisplayString($setup.simulationStore.currentStep == 1 ? "Suivant" : $setup.simulationStore.currentStep == 3 ? "Continuer" : "Valider"), 1)
      ])
    ])
  ], 64);
}
_sfc_main$1.__file = "src/components/simulation/FooterButtons.vue";
const FooterButtons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/FooterButtons.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StepSunshineView",
  setup(__props, { expose }) {
    expose();
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const simulationStore = useSimulationStore();
    function displayFooter() {
      if (simulationStore.currentStep == 2 && simulationStore.currentSubStep == 2) {
        return false;
      } else if (simulationStore.currentStep == 3 && simulationStore.currentSubStep == 2) {
        return false;
      } else if (simulationStore.currentStep == 3 && simulationStore.currentSubStep == 4) {
        return false;
      } else {
        return true;
      }
    }
    onBeforeMount(() => {
      viewStore.setCurrentView(viewList["step-sunshine"]);
      panelsStore.setTypePanelDisplay("right");
    });
    const __returned__ = { panelsStore, viewStore, simulationStore, displayFooter, LeaveButton, SimulationSteps, StepTitle, StepDescription, RoofAccordionOptions, SetUpStep, SavingsStep, FooterButtons };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "h-full" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["LeaveButton"]),
    createVNode($setup["SimulationSteps"], {
      class: "h-[76px]",
      "selected-step": $setup.simulationStore.currentStep
    }, null, 8, ["selected-step"]),
    createVNode($setup["StepTitle"], {
      step: $setup.simulationStore.currentStep
    }, null, 8, ["step"]),
    createVNode($setup["StepDescription"], {
      step: $setup.simulationStore.currentStep,
      substep: $setup.simulationStore.currentSubStep
    }, null, 8, ["step", "substep"]),
    $setup.simulationStore.currentStep === 1 ? (openBlock(), createBlock($setup["RoofAccordionOptions"], { key: 0 })) : $setup.simulationStore.currentStep === 2 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createCommentVNode(" SetUpStep contain all the substep for step 2 "),
      createVNode($setup["SetUpStep"])
    ], 2112)) : $setup.simulationStore.currentStep === 3 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createCommentVNode(" SavingsStep contain all the substep for step 3 "),
      createVNode($setup["SavingsStep"])
    ], 2112)) : createCommentVNode("v-if", true),
    _hoisted_1,
    $setup.displayFooter() ? (openBlock(), createBlock($setup["FooterButtons"], { key: 3 })) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main.__file = "src/views/StepSunshineView.vue";
const StepSunshineView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/StepSunshineView.vue"]]);
export {
  StepSunshineView as default
};
