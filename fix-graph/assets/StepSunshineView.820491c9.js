var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { as as defineComponent, az as useRouter, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, au as createBlock, aH as normalizeClass, bc as reactive, bd as onBeforeMount, aS as Fragment, aT as renderList, ax as createVNode, av as withCtx, aD as createCommentVNode, aC as createTextVNode, ay as ref, bh as withDirectives, bi as vModelText, bj as createStaticVNode, bk as pushScopeId, bl as popScopeId, aF as computed, b9 as inject, b0 as VectorStyleItem } from "./vendor.2da8e0a3.js";
import { u as useViewsStore, v as viewList } from "./views.model.d37d8e61.js";
import { a as iconDelete, i as iconExternalLink } from "./icon-delete.7df02bd2.js";
import { u as useAddressStore } from "./address.dbe7e023.js";
import { u as useConsumptionAndProductionStore, a as useAutocalsolStore, b as apiService, g as getEnedisSandboxPrm } from "./consumptionAndProduction.0175b461.js";
import { u as useRoofsStore } from "./roof.ac40dce1.js";
import { u as useSolarPanelStore } from "./solarPanels.6045593b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { S as SimulationSteps } from "./SimulationSteps.3a4f4af6.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { R as RoofAccordion } from "./RoofAccordion.0f73568a.js";
import { B as BoxStep } from "./BoxStep.39f3ac46.js";
import { u as useSimulationStore, D as DEFAULT_CONSUMPTION } from "./simulations.5f11c76b.js";
import { S as SimulationResult } from "./SimulationResult.92708beb.js";
import { g as goToBlack } from "./expand-small-bigger-retract-smaller-big.36b4ec1e.js";
import { l as legalList } from "./UiHeaderFullScreen.story.e4faa98f.js";
import { C as CheckBox } from "./CheckBox.aae01cf9.js";
import { R as RENNES_LAYER } from "./layers.18654b09.js";
import { a as createViewpointFromRoofFeature } from "./viewPointHelper.4248ee9d.js";
import { u as useMapStore } from "./map.829699ab.js";
import { u as usePanelsStore } from "./panels.f37efa07.js";
import "./StepIllustration.f0f97b1f.js";
import "./right-flat-arrow.6196ad91.js";
import "./arrow-up.e2a6014f.js";
import "./RoofInformationsBox.029fbf88.js";
import "./solarPanel.model.5b355558.js";
function resetStoresAndRedirect() {
  const addressStore = useAddressStore();
  const roofStore = useRoofsStore();
  const consumptionAndProductionStore = useConsumptionAndProductionStore();
  const autocalsolStore = useAutocalsolStore();
  const solarPanelStore = useSolarPanelStore();
  addressStore.resetAddress();
  roofStore.resetRoofStore();
  consumptionAndProductionStore.resetAnnualConsumption();
  autocalsolStore.resetAutocalsolResult();
  solarPanelStore.resetPanelStore();
}
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LeaveButton",
  setup(__props, { expose }) {
    expose();
    const router = useRouter();
    function displayErrorMessage() {
      if (window.confirm(
        "Cette action vous renvoie en d\xE9but de simulation, vos donn\xE9es actuelles seront effac\xE9es"
      )) {
        resetStoresAndRedirect();
        router.push("/roof-selection");
      }
    }
    const __returned__ = { router, displayErrorMessage, get iconDelete() {
      return iconDelete;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$c = { class: "flex flex-col items-center gap-6 border-b-[1px] border-neutral-100 h-[70px] pb-6" };
const _hoisted_2$a = { class: "flex flex-row items-stretch py-0 px-6 gap-3" };
const _hoisted_3$a = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-base text-justify w-[325px]" }, " Simuler une installation photovolta\xEFque ", -1);
const _hoisted_4$9 = ["src"];
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-normal text-xs ml-auto" }, "Quitter", -1);
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    createBaseVNode("div", _hoisted_2$a, [
      _hoisted_3$a,
      createBaseVNode("button", {
        class: "flex flex-row items-center pb-1 gap-2.5",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.displayErrorMessage())
      }, [
        createBaseVNode("img", {
          src: $setup.iconDelete,
          class: "w-4 h-4",
          alt: ""
        }, null, 8, _hoisted_4$9),
        _hoisted_5$8
      ])
    ])
  ]);
}
_sfc_main$f.__file = "src/components/simulation/LeaveButton.vue";
const LeaveButton = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/LeaveButton.vue"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$b = { class: "flex flex-col items-center p-0 gap-1" };
const _hoisted_2$9 = ["src"];
const _hoisted_3$9 = { class: "font-dm-sans font-bold text-[30px] leading-9 text-center" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    createBaseVNode("img", {
      src: $setup.props.imageSource,
      class: "h-[88px] w-[88px]",
      alt: ""
    }, null, 8, _hoisted_2$9),
    createBaseVNode("h1", _hoisted_3$9, toDisplayString($setup.props.title), 1)
  ]);
}
_sfc_main$e.__file = "src/components/simulation/UiStepTitle.vue";
const UiStepTitle = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/UiStepTitle.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
      "Votre production d\u2019\xE9nergie"
    ];
    const __returned__ = { props, imageSources, titles, UiStepTitle };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiStepTitle"], {
    "image-source": $setup.imageSources[$setup.props.step - 1],
    title: $setup.titles[$setup.props.step - 1]
  }, null, 8, ["image-source", "title"]);
}
_sfc_main$d.__file = "src/components/simulation/StepTitle.vue";
const StepTitle = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepTitle.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
        1: "Je clique sur les \xE9ventuels obstacles emp\xEAchant l'installation de panneaux solaires sur ce pan de toit comme les v\xE9lux ou les chemin\xE9es.",
        2: "Mon installation photovoltaique simul\xE9e :",
        3: "Ce pan de toit ne peut accueillir aucun panneau solaire."
      },
      3: {
        1: "Estimez quelle sera votre production, quelle part vous consommerez directement (en fonction de votre profil de consommation) et quelle part sera inject\xE9e sur le r\xE9seau.",
        2: "Renseignez votre consommation \xE9lectrique annuelle",
        3: "Pour estimer mes \xE9conomies (la part d\u2019\xE9nergie produite consomm\xE9e sur place), je renseigne ma consommation \xE9lectrique annuelle",
        4: ""
      }
    };
    const __returned__ = { props, descriptions };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", {
    class: normalizeClass(["font-dm-sans text-base text-center", $setup.props.step == 3 ? "font-normal" : "font-medium"])
  }, toDisplayString($setup.descriptions[$setup.props.step][$setup.props.substep]), 3);
}
_sfc_main$c.__file = "src/components/simulation/StepDescription.vue";
const StepDescription = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/StepDescription.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "RoofAccordionOptions",
  setup(__props, { expose }) {
    expose();
    const roofsStore = useRoofsStore();
    let roofsSorted;
    let expandedRoofPan = reactive(/* @__PURE__ */ new Set());
    onBeforeMount(() => {
      roofsSorted = mapAndSortedRoofs();
      roofsStore.setSelectRoofSurfaceId(roofsSorted[0].surface_id);
      expandedRoofPan.add(roofsSorted[0].surface_id);
    });
    function mapAndSortedRoofs() {
      const roofsFeaturesGroupBySurfaceId = roofsStore.roofSurfacesList;
      return roofsFeaturesGroupBySurfaceId.sort((a, b) => b.favorable - a.favorable);
    }
    function changeSelectedRoof(selectedRoof) {
      roofsStore.setSelectRoofSurfaceId(selectedRoof.surface_id);
      if (!isRoofExpanded(selectedRoof)) {
        expandItem(selectedRoof);
      }
    }
    function isRoofSelected(roofSurface) {
      return roofSurface.surface_id === roofsStore.selectedRoofSurfaceId;
    }
    function isRoofExpanded(roofSurface) {
      return expandedRoofPan.has(roofSurface.surface_id);
    }
    function expandItem(roofSurface) {
      if (expandedRoofPan.has(roofSurface.surface_id)) {
        expandedRoofPan.delete(roofSurface.surface_id);
      } else {
        expandedRoofPan.add(roofSurface.surface_id);
      }
    }
    roofsStore.$subscribe(async () => {
      changeSelectedRoof(roofsStore.getRoofSurfaceModelOfSelectedPanRoof());
    });
    const __returned__ = { roofsStore, get roofsSorted() {
      return roofsSorted;
    }, set roofsSorted(v) {
      roofsSorted = v;
    }, get expandedRoofPan() {
      return expandedRoofPan;
    }, set expandedRoofPan(v) {
      expandedRoofPan = v;
    }, mapAndSortedRoofs, changeSelectedRoof, isRoofSelected, isRoofExpanded, expandItem, RoofAccordion };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = {
  class: "flex flex-col p-0 gap-6",
  role: "radiogroup"
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.roofsSorted, (roofSurface, index) => {
      return openBlock(), createBlock($setup["RoofAccordion"], {
        key: index,
        "roof-surface": roofSurface,
        label: "Pan de toit n\xB0" + (index + 1),
        selected: $setup.isRoofSelected(roofSurface),
        "is-open": $setup.isRoofExpanded(roofSurface),
        "is-recommended": index === 0,
        index,
        onClickRoofAccordion: ($event) => $setup.changeSelectedRoof(roofSurface),
        onClick: ($event) => $setup.expandItem(roofSurface)
      }, null, 8, ["roof-surface", "label", "selected", "is-open", "is-recommended", "index", "onClickRoofAccordion", "onClick"]);
    }), 128))
  ]);
}
_sfc_main$b.__file = "src/components/simulation/RoofAccordionOptions.vue";
const RoofAccordionOptions = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/RoofAccordionOptions.vue"]]);
const SelectObstacles = "/cooperation_jn_solar/fix-graph/assets/select-obstacles.777917fc.jpg";
const deleted = "/cooperation_jn_solar/fix-graph/assets/interface-delete.9cc62749.svg";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ExplanationSelectionObstacles",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get SelectObstacles() {
      return SelectObstacles;
    }, get deleted() {
      return deleted;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = ["src"];
const _hoisted_2$8 = { class: "mt-6" };
const _hoisted_3$8 = { class: "flex flex-row items-center" };
const _hoisted_4$8 = { class: "flex flex-row justify-center items-center bg-rose-200 rounded-full w-2.5 h-2.5 mr-2" };
const _hoisted_5$7 = ["src"];
const _hoisted_6$6 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-sm font-normal" }, " Zones ne pouvant pas accueillir de panneaux solaires. ", -1);
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("img", {
      class: "w-full",
      src: $setup.SelectObstacles,
      alt: ""
    }, null, 8, _hoisted_1$9),
    createBaseVNode("div", _hoisted_2$8, [
      createBaseVNode("div", _hoisted_3$8, [
        createBaseVNode("div", _hoisted_4$8, [
          createBaseVNode("img", {
            class: "w-1 h-1",
            src: $setup.deleted,
            alt: ""
          }, null, 8, _hoisted_5$7)
        ]),
        _hoisted_6$6
      ])
    ])
  ]);
}
_sfc_main$a.__file = "src/components/simulation/ExplanationSelectionObstacles.vue";
const ExplanationSelectionObstacles = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ExplanationSelectionObstacles.vue"]]);
const noSolarPanel = "/cooperation_jn_solar/fix-graph/assets/no-solar-panel.4fac2d97.svg";
const home = "/cooperation_jn_solar/fix-graph/assets/interface-white-house.0d90a6bf.svg";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NoPanelOnRoof",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get noSolarPanel() {
      return noSolarPanel;
    }, get home() {
      return home;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = { class: "rounded-lg bg-slate-100 h-[402px] w-full pt-6 pb-8" };
const _hoisted_2$7 = { class: "flex flex-col justify-center items-center gap-6" };
const _hoisted_3$7 = ["src"];
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-normal text-sm text-center px" }, " Dans cette simulation, la surface favorable du pan de toit, d\xE9duction faite des obstacles saisis, n'est pas suffisante pour accueillir une installation photovolta\xEFque. ", -1);
const _hoisted_5$6 = ["src"];
const _hoisted_6$5 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Revenir \xE0 l'accueil ", -1);
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$7, [
      createBaseVNode("img", {
        class: "w-[354px] h-[161px] mx-6",
        src: $setup.noSolarPanel,
        alt: ""
      }, null, 8, _hoisted_3$7),
      _hoisted_4$7,
      createBaseVNode("button", {
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/roof-selection"))
      }, [
        createBaseVNode("img", {
          class: "",
          src: $setup.home,
          alt: ""
        }, null, 8, _hoisted_5$6),
        _hoisted_6$5
      ])
    ])
  ]);
}
_sfc_main$9.__file = "src/components/simulation/NoPanelOnRoof.vue";
const NoPanelOnRoof = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/NoPanelOnRoof.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SetUpStep",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const solarPanelStore = useSolarPanelStore();
    const roofsStore = useRoofsStore();
    function goToThirdStep() {
      simulationStore.goToNextStep();
    }
    const updateCurrentNumSolarPanel = (changes) => {
      solarPanelStore.currentNumberSolarPanel = solarPanelStore.currentNumberSolarPanel + changes;
    };
    const __returned__ = { simulationStore, solarPanelStore, roofsStore, goToThirdStep, updateCurrentNumSolarPanel, ExplanationSelectionObstacles, BoxStep, get economies() {
      return economies;
    }, SimulationResult, NoPanelOnRoof };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs text-neutral-500" }, " \xC9tape 3 ", -1);
const _hoisted_2$6 = ["src"];
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelles \xE9conomies d'\xE9nergie "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" gr\xE2ce \xE0 cette installation ? ")
], -1);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-medium" }, " Calculer mes \xE9conomies d'\xE9nergie ", -1);
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.simulationStore.currentSubStep == 1 ? (openBlock(), createBlock($setup["ExplanationSelectionObstacles"], {
    key: 0,
    id: "explanationSelectionObstacles"
  })) : $setup.simulationStore.currentSubStep == 2 && $setup.roofsStore.getRoofSurfaceModelOfSelectedPanRoof() !== void 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    createVNode($setup["SimulationResult"], {
      "max-num-solar-panel": $setup.solarPanelStore.maxNumberSolarPanel,
      "roof-surface": $setup.roofsStore.getRoofSurfaceModelOfSelectedPanRoof(),
      "current-num-solar-panel": $setup.solarPanelStore.currentNumberSolarPanel,
      onSolarPanelChanges: $setup.updateCurrentNumSolarPanel,
      id: "simulationResult"
    }, null, 8, ["max-num-solar-panel", "roof-surface", "current-num-solar-panel"]),
    $setup.simulationStore.currentSubStep == 2 ? (openBlock(), createBlock($setup["BoxStep"], {
      key: 0,
      onButtonBoxAction: _cache[0] || (_cache[0] = ($event) => $setup.goToThirdStep()),
      id: "savingsCalculation"
    }, {
      nameOfStep: withCtx(() => [
        _hoisted_1$7
      ]),
      image: withCtx(() => [
        createBaseVNode("img", {
          class: "w-[88px] h-[88px] mt-2",
          src: $setup.economies,
          alt: ""
        }, null, 8, _hoisted_2$6)
      ]),
      text: withCtx(() => [
        _hoisted_3$6
      ]),
      buttonContent: withCtx(() => [
        _hoisted_4$6
      ]),
      _: 1
    })) : createCommentVNode("v-if", true)
  ], 64)) : $setup.simulationStore.currentSubStep == 3 ? (openBlock(), createBlock($setup["NoPanelOnRoof"], { key: 2 })) : createCommentVNode("v-if", true);
}
_sfc_main$8.__file = "src/components/simulation/SetUpStep.vue";
const SetUpStep = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SetUpStep.vue"]]);
const energySaving1 = "/cooperation_jn_solar/fix-graph/assets/energy_saving_1.9fe57917.svg";
const energySaving2 = "/cooperation_jn_solar/fix-graph/assets/energy_saving_2.539272d6.svg";
const energySaving3 = "/cooperation_jn_solar/fix-graph/assets/energy_saving_3.062cf52b.svg";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$6 = { class: "rounded-lg bg-slate-100 h-[402px] w-full px-6 py-8" };
const _hoisted_2$5 = {
  key: 0,
  class: "flex flex-col justify-center items-center"
};
const _hoisted_3$5 = ["src"];
const _hoisted_4$5 = { class: "font-dm-sans font-bold text-base mt-2" };
const _hoisted_5$5 = { class: "font-dm-sans font-normal text-sm mt-2 text-center h-[80px]" };
const _hoisted_6$4 = { class: "flex flex-row gap-3 mt-4 justify-center items-center" };
const _hoisted_7$4 = ["onClick"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    (openBlock(), createElementBlock(Fragment, null, renderList($setup.informations, (info) => {
      return openBlock(), createElementBlock(Fragment, {
        key: info.id
      }, [
        info.id === $setup.currentInfo ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
          createBaseVNode("img", {
            class: "w-[354px] h-[160px]",
            src: info.img,
            alt: ""
          }, null, 8, _hoisted_3$5),
          createBaseVNode("span", _hoisted_4$5, toDisplayString(info.title), 1),
          createBaseVNode("span", _hoisted_5$5, toDisplayString(info.description), 1)
        ])) : createCommentVNode("v-if", true)
      ], 64);
    }), 64)),
    createBaseVNode("div", _hoisted_6$4, [
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
        ], 10, _hoisted_7$4);
      }), 64))
    ])
  ]);
}
_sfc_main$7.__file = "src/components/simulation/InformationsEnergySaving.vue";
const InformationsEnergySaving = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/InformationsEnergySaving.vue"]]);
const ElectricityConsumptionManual_vue_vue_type_style_index_0_scoped_1452b0f4_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ElectricityConsumptionManual",
  setup(__props, { expose }) {
    expose();
    const consumption = ref("");
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const storeConsumption = () => {
      consumptionAndProductionStore.setAnnualConsumption(
        parseInt(consumption.value)
      );
    };
    function inputIsCompleted() {
      const inputLength = consumption.value.length;
      if (inputLength <= 0) {
        return false;
      } else {
        return true;
      }
    }
    const __returned__ = { consumption, consumptionAndProductionStore, storeConsumption, inputIsCompleted };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1452b0f4"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "flex flex-col gap-1.5 mt-10" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-bold text-lg" }, " Ma consommation annuelle est de : ", -1));
const _hoisted_3$4 = { class: "flex flex-row" };
const _hoisted_4$4 = {
  key: 0,
  "append-unit": "kWh",
  class: "text-base font-dm-sans font-medium relative after:content-[attr(append-unit)] after:absolute after:right-2 after:top-2"
};
const _hoisted_5$4 = /* @__PURE__ */ createStaticVNode('<div class="mt-10" data-v-1452b0f4><div class="relative flex flex-col mx-auto h-[200px] pr-1 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400" data-v-1452b0f4><p class="font-dm-sans font-bold text-neutral-900 text-sm" data-v-1452b0f4> Protection des donn\xE9es personnelles : </p><p class="font-dm-sans font-medium text-neutral-600 text-xs" data-v-1452b0f4> Nous sollicitons via ce formulaire des donn\xE9es personnelles vous concernant afin de simuler l&#39;installation de panneaux photovolta\xEFque et calculer vos \xE9conomies d&#39;\xE9nergie.Ces donn\xE9es ne sont pas conserv\xE9es au-del\xE0 du calcul effectu\xE9 lors de l&#39;utilisation du site. Les donn\xE9es sont par la suite soit supprim\xE9es imm\xE9diatement ou anonymis\xE9es \xE0 des fins statistiques. La base l\xE9gale du traitement est le consentement de l&#39;usager. Ces donn\xE9es sont transmises pour la dur\xE9e de la simulation \xE0 l&#39;API Autocalsol de l&#39;INES.Conform\xE9ment au R\xE8glement g\xE9n\xE9ral sur la protection des donn\xE9es (RGPD) (UE) n\xB02016/679 du 27 avril 2016 et \xE0 la loi n\xB02018-493 du 20 juin 2018 relative \xE0 la protection des donn\xE9es personnelles, vous pouvez acc\xE9der aux donn\xE9es vous concernant o\xF9 demander leur effacement. Vous disposez \xE9galement d&#39;un droit d\u2019opposition, d\u2019un droit de rectification, d\u2019un droit \xE0 la limitation du traitement de vos donn\xE9es ainsi que d&#39;un droit au retrait de votre consentement. Pour exercer ces droits ou pour toute question sur le traitement de vos donn\xE9es, vous pouvez contacter le D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es de Rennes (Ville et M\xE9tropole) via le formulaire de contact &quot;e-d\xE9marches&quot; du site internet <a class="underline decoration-1 font-medium" href="https://metropole.rennes.fr" target="_blank" data-v-1452b0f4>(https://metropole.rennes.fr)</a> ou par voie postale \xE0 adresser \xE0 : Madame le Pr\xE9sidente de Rennes M\xE9tropole - A l&#39;attention du D\xE9l\xE9gu\xE9 \xE0 la protection des donn\xE9es - 4 avenue Henri Fr\xE9ville -CS93111 - 35031 Rennes Cedex Plus d\u2019informations sur : <a class="underline decoration-1 font-medium" href="https://www.cnil.fr/" target="_blank" data-v-1452b0f4>https://www.cnil.fr</a></p></div></div>', 1);
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    _hoisted_2$4,
    createBaseVNode("div", _hoisted_3$4, [
      withDirectives(createBaseVNode("input", {
        class: "border border-neutral-400 rounded h-[42px] px-3 py-[9px] text-black font-dm-sans font-medium placeholder:text-neutral-600 placeholder:text-base placeholder:font-dm-sans w-full",
        type: "number",
        placeholder: "kWh",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.consumption = $event),
        onKeyup: $setup.storeConsumption
      }, null, 544), [
        [vModelText, $setup.consumption]
      ]),
      $setup.inputIsCompleted() ? (openBlock(), createElementBlock("div", _hoisted_4$4)) : createCommentVNode("v-if", true)
    ]),
    _hoisted_5$4
  ]);
}
_sfc_main$6.__file = "src/components/simulation/ElectricityConsumptionManual.vue";
const ElectricityConsumptionManual = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-1452b0f4"], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ElectricityConsumptionManual.vue"]]);
const rectangle = "/cooperation_jn_solar/fix-graph/assets/rectangle.34037dc9.svg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ElectricityConsumptionButton",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    function skipStep() {
      consumptionAndProductionStore.setAnnualConsumption(DEFAULT_CONSUMPTION);
      simulationStore.goToFinalView();
    }
    const __returned__ = { simulationStore, consumptionAndProductionStore, skipStep, get rectangle() {
      return rectangle;
    }, get expandArrow() {
      return goToBlack;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-2.5 py-6 font-dm-sans" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, "Saisir les informations de ma facture", -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
const _hoisted_4$3 = { class: "flex flex-row justify-between gap-[22px]" };
const _hoisted_5$3 = ["src"];
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("p", { class: "text-sm font-dm-sans font-normal text-neutral-400 my-4" }, "OU", -1);
const _hoisted_7$3 = ["src"];
const _hoisted_8$3 = ["src"];
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("span", { class: "text-black text-base font-medium" }, "Connecter mon compteur Linky", -1);
const _hoisted_10$1 = { class: "text-xs font-dm-sans font-normal text-neutral-600" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("button", {
      class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("clickAnnualConsumption", "manual")),
      id: "button-manual-input"
    }, _hoisted_3$3),
    createBaseVNode("div", _hoisted_4$3, [
      createBaseVNode("img", { src: $setup.rectangle }, null, 8, _hoisted_5$3),
      _hoisted_6$3,
      createBaseVNode("img", { src: $setup.rectangle }, null, 8, _hoisted_7$3)
    ]),
    createBaseVNode("button", {
      class: "border border-black rounded-lg gap-3 mb-6 px-4 py-3 items-center flex flex-row justify-center",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("clickAnnualConsumption", "linky")),
      id: "button-linky"
    }, [
      createBaseVNode("img", {
        src: $setup.expandArrow,
        class: "h-5 w-5"
      }, null, 8, _hoisted_8$3),
      _hoisted_9$2
    ]),
    createBaseVNode("p", _hoisted_10$1, [
      createTextVNode(" Ma consommation n'est trait\xE9e que le temps de la simulation et n' est pas conserv\xE9e ult\xE9rieurement. Je peux \xE9galement obtenir une simulation partielle sans renseigner ma consommation. "),
      createBaseVNode("span", {
        id: "skipText",
        class: "font-medium underline decoration-1 cursor-pointer",
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.skipStep())
      }, "Passer cette \xE9tape")
    ])
  ]);
}
_sfc_main$5.__file = "src/components/simulation/ElectricityConsumptionButton.vue";
const ElectricityConsumptionButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ElectricityConsumptionButton.vue"]]);
const enedisSignature = "/cooperation_jn_solar/fix-graph/assets/enedis-signature.83ee47b1.svg";
const enedisSpace = "/cooperation_jn_solar/fix-graph/assets/enedis-personal-space.895856c2.svg";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InformationsLinky",
  setup(__props, { expose }) {
    expose();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    async function goToEnedisLogin() {
      {
        await apiEnedisService.setPRMUser(getEnedisSandboxPrm());
        const consumption = await apiEnedisService.getAnnualConsumption();
        if (consumption.annual_consumption !== void 0) {
          consumptionAndProductionStore.setAnnualConsumption(
            consumption.annual_consumption
          );
        }
        window.alert(JSON.stringify(consumption));
      }
    }
    const __returned__ = { consumptionAndProductionStore, goToEnedisLogin, get enedisSignature() {
      return enedisSignature;
    }, get enedisSpace() {
      return enedisSpace;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex flex-col gap-6 border border-slate-200 rounded-lg bg-slate-50 h-[451px] w-full px-4 py-6 font-dm-sans text-sm font-normal" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("p", { class: "text-base font-medium" }, "Comment connecter mon compteur Linky ?", -1);
const _hoisted_3$2 = { class: "flex flex-row gap-4" };
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("p", null, "Enedis g\xE8re le r\xE9seau d'\xE9lectricit\xE9 jusqu'au compteur.", -1);
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("p", null, " Pour calculer vos \xE9conomies d'\xE9nergie, nous devons acc\xE9der \xE0 vos donn\xE9es Linky g\xE9r\xE9es par Enedis. ", -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("p", null, " En cliquant sur ce bouton, vous acc\xE9derez \xE0 votre espace client Enedis o\xF9 vous pourrez autoriser Enedis \xE0 nous transmettre votre consommation annuelle. ", -1);
const _hoisted_8$2 = ["src"];
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, [
  /* @__PURE__ */ createTextVNode(" Vous pourrez changer d'avis et r\xE9voquer "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("votre autorisation \xE0 tout moment. ")
], -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    _hoisted_2$2,
    createBaseVNode("div", _hoisted_3$2, [
      createBaseVNode("img", {
        src: $setup.enedisSignature,
        class: "w-[110px] h-[34.43px] my-auto"
      }, null, 8, _hoisted_4$2),
      _hoisted_5$2
    ]),
    _hoisted_6$2,
    _hoisted_7$2,
    createBaseVNode("img", {
      src: $setup.enedisSpace,
      class: "mx-auto cursor-pointer",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToEnedisLogin())
    }, null, 8, _hoisted_8$2),
    _hoisted_9$1
  ]);
}
_sfc_main$4.__file = "src/components/simulation/InformationsLinky.vue";
const InformationsLinky = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/InformationsLinky.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AllowAnnualConsumptionPopup",
  emits: ["clickContinuePopup", "goToEndSimulation"],
  setup(__props, { expose, emit }) {
    expose();
    const isAllowCheckBoxOnError = ref(false);
    const isAllowCheckboxChecked = ref(false);
    const isNotAllowCheckBoxOnError = ref(false);
    const isNotAllowCheckboxChecked = ref(false);
    const openPrivacy = () => {
      window.open(
        legalList.find((elt) => elt.slug === "confidentialite").link,
        "_blank"
      );
    };
    function clickButtonNext() {
      if (isAllowCheckboxChecked.value) {
        emit("clickContinuePopup");
      } else if (isNotAllowCheckboxChecked.value) {
        emit("goToEndSimulation");
      } else {
        isAllowCheckBoxOnError.value = true;
        isNotAllowCheckBoxOnError.value = true;
      }
    }
    function checkBoxChange(event, type_checkbox) {
      if (type_checkbox === "allow") {
        isAllowCheckboxChecked.value = event;
        if (event === true)
          isNotAllowCheckboxChecked.value = false;
      } else if (type_checkbox === "notallow") {
        isNotAllowCheckboxChecked.value = event;
        if (event === true)
          isAllowCheckboxChecked.value = false;
      }
    }
    const __returned__ = { isAllowCheckBoxOnError, isAllowCheckboxChecked, isNotAllowCheckBoxOnError, isNotAllowCheckboxChecked, emit, openPrivacy, clickButtonNext, checkBoxChange, get iconExternalLink() {
      return iconExternalLink;
    }, CheckBox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = {
  class: "fixed top-0 left-0 w-full h-full z-[60]",
  style: { "background-color": "rgba(0, 0, 0, 0.75)" }
};
const _hoisted_2$1 = {
  class: "relative flex flex-col mx-auto mt-25 w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto",
  style: { "background-color": "rgba(255, 255, 255, 1)" }
};
const _hoisted_3$1 = { class: "flex flex-row font-dm-sans" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-bold" }, " Quelques pr\xE9cisions avant de continuer : ", -1);
const _hoisted_5$1 = {
  class: "relative flex flex-col mx-auto mt-13 pr-8 rounded-lg gap-5 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400 font-dm-sans",
  style: { "background-color": "rgba(255, 255, 255, 1)" }
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-xl" }, " Protection des donn\xE9es personnelles ", -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", { class: "font-medium text-sm" }, " Vous allez contribuer au projet Cadastre Solaire et simuler vos \xE9conomies d'\xE9nergie. Dans ce cadre, nous recueillons des informations personnelles vous concernant : votre adresse, votre consommation \xE9lectrique et la surface de votre toit pouvant accueillir des panneaux photovolta\xEFques. Ces donn\xE9es sont utilis\xE9es pour simuler vos \xE9conomies d'\xE9nergie, produire un rapport \xE0 votre unique attention (t\xE9l\xE9chargement possible en fin de parcours) et la production de statistiques anonymis\xE9es utiles \xE0 la planification \xE9nerg\xE9tique du territoire. Vos donn\xE9es personnelles ne seront trait\xE9es et conserv\xE9es que le temps de la simulation puis elles seront anonymis\xE9es. ", -1);
const _hoisted_8$1 = { class: "font-medium text-sm text-neutral-700" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("strong", null, " Politique de confidentialit\xE9 \xA0", -1);
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "flex flex-row items-center bg-amber-50 py-3 px-4 rounded-lg border border-amber-200" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", { class: "text-amber-900 font-normal text-sm" }, " J'autorise la transmission de mes donn\xE9es de consommation pour simuler mes \xE9conomies d'\xE9nergie. ", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", { class: "font-medium text-sm" }, " Si vous ne souhaitez pas renseigner vos donn\xE9es de consommation, il est possible d'obtenir un r\xE9sultat partiel de la simulation sans possibilit\xE9 d'estimer votre auto-consommation (part d\u2019\xE9nergie produite consomm\xE9e sur place). ", -1);
const _hoisted_14 = { class: "flex flex-row items-center bg-amber-50 py-3 px-4 rounded-lg border border-amber-200" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "text-amber-900 font-normal text-sm" }, " Je ne souhaite pas communiquer mes donn\xE9es de consommation et obtenir une simulation partielle. ", -1);
const _hoisted_16 = { class: "flex flex-row items-center mt-4" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("img", {
  class: "",
  src: "/cooperation_jn_solar/fix-graph/src/assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg",
  alt: ""
}, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-medium" }, " Continuer ", -1);
const _hoisted_19 = [
  _hoisted_17,
  _hoisted_18
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$2, [
      createTextVNode(" > "),
      createBaseVNode("div", _hoisted_2$1, [
        createBaseVNode("div", _hoisted_3$1, [
          _hoisted_4$1,
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
            class: "w-5 h-5 border border-black rounded ml-auto hover:bg-neutral-400 flex justify-center items-center",
            id: "closeButtonPopup"
          }, " x ")
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          _hoisted_6$1,
          _hoisted_7$1,
          createBaseVNode("p", _hoisted_8$1, [
            createTextVNode(" Vous pouvez lire notre "),
            createBaseVNode("span", {
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.openPrivacy()),
              class: "underline inline-flex items-center cursor-pointer"
            }, [
              _hoisted_9,
              createBaseVNode("img", {
                src: $setup.iconExternalLink,
                class: "w-[10px] h-[10px]"
              }, null, 8, _hoisted_10)
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createVNode($setup["CheckBox"], {
              isOnError: $setup.isAllowCheckBoxOnError,
              isChecked: $setup.isAllowCheckboxChecked,
              onCheckBoxChange: _cache[2] || (_cache[2] = ($event) => $setup.checkBoxChange($event, "allow"))
            }, {
              text: withCtx(() => [
                _hoisted_12
              ]),
              _: 1
            }, 8, ["isOnError", "isChecked"])
          ]),
          _hoisted_13,
          createBaseVNode("div", _hoisted_14, [
            createVNode($setup["CheckBox"], {
              isOnError: $setup.isNotAllowCheckBoxOnError,
              isChecked: $setup.isNotAllowCheckboxChecked,
              onCheckBoxChange: _cache[3] || (_cache[3] = ($event) => $setup.checkBoxChange($event, "notallow"))
            }, {
              text: withCtx(() => [
                _hoisted_15
              ]),
              _: 1
            }, 8, ["isOnError", "isChecked"])
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("button", {
              onClick: _cache[4] || (_cache[4] = ($event) => $setup.clickButtonNext()),
              id: "nextButtonPopup",
              class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
            }, _hoisted_19),
            createBaseVNode("span", {
              class: normalizeClass(["ml-4 font-normal text-base", {
                "text-red-600": $setup.isAllowCheckBoxOnError || $setup.isNotAllowCheckBoxOnError
              }])
            }, " Pour poursuivre, veuillez cocher l'une des cases ci-dessus. ", 2)
          ])
        ])
      ])
    ])
  ]);
}
_sfc_main$3.__file = "src/components/simulation/AllowAnnualConsumptionPopup.vue";
const AllowAnnualConsumptionPopup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/AllowAnnualConsumptionPopup.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SavingsStep",
  setup(__props, { expose }) {
    expose();
    const simulationStore = useSimulationStore();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const isDisplayPopup = ref(false);
    const stepAnnualConsumption = ref("manual");
    function showPopUpAllowAnnualConsumption(event) {
      stepAnnualConsumption.value = event;
      isDisplayPopup.value = true;
    }
    function clickContinuePopup() {
      isDisplayPopup.value = false;
      if (stepAnnualConsumption.value === "manual") {
        simulationStore.currentSubStep = 3;
      } else if (stepAnnualConsumption.value === "linky") {
        simulationStore.currentSubStep = 4;
      }
    }
    function goToEndSimulation() {
      isDisplayPopup.value = false;
      consumptionAndProductionStore.setAnnualConsumption(DEFAULT_CONSUMPTION);
      simulationStore.goToFinalView();
    }
    const __returned__ = { simulationStore, consumptionAndProductionStore, isDisplayPopup, stepAnnualConsumption, showPopUpAllowAnnualConsumption, clickContinuePopup, goToEndSimulation, InformationsEnergySaving, ElectricityConsumptionManual, ElectricityConsumptionButton, InformationsLinky, AllowAnnualConsumptionPopup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.simulationStore.currentSubStep == 1 ? (openBlock(), createBlock($setup["InformationsEnergySaving"], { key: 0 })) : $setup.simulationStore.currentSubStep == 2 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
    createVNode($setup["ElectricityConsumptionButton"], {
      onClickAnnualConsumption: _cache[0] || (_cache[0] = ($event) => $setup.showPopUpAllowAnnualConsumption($event))
    }),
    $setup.isDisplayPopup ? (openBlock(), createBlock($setup["AllowAnnualConsumptionPopup"], {
      key: 0,
      onClose: _cache[1] || (_cache[1] = ($event) => $setup.isDisplayPopup = false),
      onClickContinuePopup: $setup.clickContinuePopup,
      onGoToEndSimulation: $setup.goToEndSimulation
    })) : createCommentVNode("v-if", true)
  ], 64)) : $setup.simulationStore.currentSubStep == 3 ? (openBlock(), createBlock($setup["ElectricityConsumptionManual"], { key: 2 })) : $setup.simulationStore.currentSubStep === 4 ? (openBlock(), createBlock($setup["InformationsLinky"], { key: 3 })) : createCommentVNode("v-if", true);
}
_sfc_main$2.__file = "src/components/simulation/SavingsStep.vue";
const SavingsStep = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SavingsStep.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FooterButtons",
  props: {
    isDisplayNextButton: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const router = useRouter();
    const simulationStore = useSimulationStore();
    function clickButtonCancel() {
      if (window.confirm(
        "Cette action vous renvoie en d\xE9but de simulation, vos donn\xE9es actuelles seront effac\xE9es"
      )) {
        resetStoresAndRedirect();
        router.push("/roof-selection");
      }
    }
    function clickButtonPrevious() {
      simulationStore.goToPreviousStep();
    }
    function clickButtonNext() {
      simulationStore.goToNextStep();
    }
    const textNextButton = computed(() => {
      if (simulationStore.isCurrentStepFinal()) {
        return "Terminer";
      }
      if (simulationStore.currentStep == 2) {
        return "Valider";
      }
      return "Suivant";
    });
    const __returned__ = { props, router, simulationStore, clickButtonCancel, clickButtonPrevious, clickButtonNext, textNextButton };
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
  src: "/cooperation_jn_solar/fix-graph/src/assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg",
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
        id: "cancelButton",
        class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_4)) : $setup.simulationStore.currentStep != 1 ? (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.clickButtonPrevious()),
        id: "previousButton",
        class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_6)) : createCommentVNode("v-if", true),
      $setup.props.isDisplayNextButton ? (openBlock(), createElementBlock("button", {
        key: 2,
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.clickButtonNext()),
        id: "nextButton",
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, [
        _hoisted_7,
        createBaseVNode("span", _hoisted_8, toDisplayString($setup.textNextButton), 1)
      ])) : createCommentVNode("v-if", true)
    ])
  ], 64);
}
_sfc_main$1.__file = "src/components/simulation/FooterButtons.vue";
const FooterButtons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/FooterButtons.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StepSunshineView",
  setup(__props, { expose }) {
    expose();
    const rennesApp = inject("rennesApp");
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const simulationStore = useSimulationStore();
    const roofStore = useRoofsStore();
    const mapStore = useMapStore();
    onBeforeMount(() => {
      viewStore.setCurrentView(viewList["step-sunshine"]);
      panelsStore.setTypePanelDisplay("right");
      highlightSelectedRoofPan(roofStore.selectedRoofSurfaceId);
    });
    const highlightStyle = new VectorStyleItem({
      fill: { color: "rgb(63,185,30)" }
    });
    roofStore.$subscribe(async () => {
      var _a, _b;
      await highlightSelectedRoofPan(roofStore.selectedRoofSurfaceId);
      let feature = null;
      (_b = (_a = roofStore.roofsFeatures) == null ? void 0 : _a.features) == null ? void 0 : _b.forEach((f) => {
        var _a2;
        if (((_a2 = f.properties) == null ? void 0 : _a2.surface_id) == roofStore.selectedRoofSurfaceId) {
          feature = f;
        }
      });
      if (feature !== null) {
        const vp = await createViewpointFromRoofFeature(feature);
        if (vp !== void 0)
          mapStore.viewPoint = vp;
      }
    });
    async function highlightSelectedRoofPan(surfaceId) {
      rennesApp.clearRoofsHighlight();
      let roofLayer = await rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d);
      roofLayer.featureVisibility.highlight({
        [surfaceId]: highlightStyle
      });
    }
    function isDisplayNextButton() {
      if (simulationStore.currentStep == 2 && simulationStore.currentSubStep == 3 || simulationStore.currentStep == 3 && simulationStore.currentSubStep == 2) {
        return false;
      }
      return true;
    }
    const __returned__ = { rennesApp, panelsStore, viewStore, simulationStore, roofStore, mapStore, highlightStyle, highlightSelectedRoofPan, isDisplayNextButton, LeaveButton, SimulationSteps, StepTitle, StepDescription, RoofAccordionOptions, SetUpStep, SavingsStep, FooterButtons };
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
    createVNode($setup["FooterButtons"], {
      isDisplayNextButton: $setup.isDisplayNextButton()
    }, null, 8, ["isDisplayNextButton"])
  ], 64);
}
_sfc_main.__file = "src/views/StepSunshineView.vue";
const StepSunshineView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/StepSunshineView.vue"]]);
export {
  StepSunshineView as default
};
