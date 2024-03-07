import { as as defineComponent, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, ax as createVNode, av as withCtx, ay as ref, au as createBlock, aF as createCommentVNode, b3 as inject, b2 as onMounted, aH as computed, aW as Fragment } from "./vendor.7e168ba4.js";
import { u as useViewsStore, a as useAddressStore, b as useSimulationStore, r as resetStores } from "./UiHeaderFullScreen.story.5ba4d41c.js";
import { v as viewList } from "./views.model.93fd8cf1.js";
import { u as usePanelsStore } from "./panels.dc493893.js";
import { F as FigureKeyNumber, H as HourGlass } from "./hour-glass.da71b5aa.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiExplanationTooltip } from "./UiExplanationTooltip.2baf3069.js";
import { T as TextDidYouKnow } from "./TextDidYouKnow.0fb90e1e.js";
import { u as useMapStore } from "./roof.model.637830b7.js";
import { u as useInteractionsStore, S as SelectRoofInteraction } from "./interactions.5586682e.js";
import { r as resetDataForEnedis } from "./enedisService.bb1fd281.js";
import "./icon-delete.7df02bd2.js";
import "./api.ffca7d14.js";
import "./home.17fdaf89.js";
import "./popUpStore.52e50f7d.js";
const SolarPanel = "/cooperation_jn_solar/matomo-url/assets/solar-panel.a8b17789.svg";
const HousePlant = "/cooperation_jn_solar/matomo-url/assets/house-plant.d72d1365.svg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = { class: "flex flex-col p-0 gap-4" };
const _hoisted_2 = { class: "flex flex-col p-6 gap-6 bg-white border-slate-100 border-[1px] rounded-lg" };
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, "\xC0 l\u2019horizon", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-[44px] leading-10 font-bold" }, "2030", -1);
const _hoisted_6 = ["src"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-3xl font-bold" }, "3x", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, " plus d\u2019\xE9nergies renouvelables ", -1);
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-3xl font-bold" }, "6x", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-xs font-bold" }, " plus de puissance photovolta\xEFque ", -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
_sfc_main$3.__file = "src/components/roof_selection/FigureEnergy.vue";
const FigureEnergy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/FigureEnergy.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AddressTooltip",
  setup(__props, { expose }) {
    expose();
    const title = "Localisez votre lieu d'habitation";
    const content = "Renseignez une adresse ci-dessus ou naviguez sur la carte gr\xE2ce aux outils en bas \xE0 droite.";
    const contentCloseButton = "J'ai compris";
    let isOpen = ref(true);
    const __returned__ = { title, content, contentCloseButton, get isOpen() {
      return isOpen;
    }, set isOpen(v) {
      isOpen = v;
    }, UiExplanationTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isOpen ? (openBlock(), createBlock($setup["UiExplanationTooltip"], {
    key: 0,
    onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("closeAddress")),
    title: $setup.title,
    content: $setup.content,
    "display-close-button": true,
    "content-close-button": $setup.contentCloseButton
  })) : createCommentVNode("v-if", true);
}
_sfc_main$2.__file = "src/components/roof_selection/AddressTooltip.vue";
const AddressTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/AddressTooltip.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectionTooltip",
  setup(__props, { expose }) {
    expose();
    const title = "S\xE9lectionnez un b\xE2timent";
    const content = "Cliquez sur un b\xE2timent pour commencer la simulation";
    let isOpen = ref(true);
    const __returned__ = { title, content, get isOpen() {
      return isOpen;
    }, set isOpen(v) {
      isOpen = v;
    }, UiExplanationTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isOpen ? (openBlock(), createBlock($setup["UiExplanationTooltip"], {
    key: 0,
    onClose: _cache[0] || (_cache[0] = ($event) => $setup.isOpen = false),
    title: $setup.title,
    content: $setup.content,
    "display-close-button": false
  })) : createCommentVNode("v-if", true);
}
_sfc_main$1.__file = "src/components/roof_selection/RoofSelectionTooltip.vue";
const RoofSelectionTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/RoofSelectionTooltip.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectionView",
  setup(__props, { expose }) {
    expose();
    const rennesApp = inject("rennesApp");
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const addressStore = useAddressStore();
    const interactionsStore = useInteractionsStore();
    const simulationStore = useSimulationStore();
    const mapStore = useMapStore();
    let isOpen = ref(true);
    let addressClosedByUser = ref(false);
    onMounted(() => {
      if (mapStore.isInitializeMap) {
        rennesApp.clearRoofsHighlight();
      }
      resetStores();
      resetDataForEnedis();
      viewStore.setCurrentView(viewList["roof-selection"]);
      panelsStore.setTypePanelDisplay("float-left");
      panelsStore.isCompletelyHidden = true;
      simulationStore.restartEndSimulation = false;
    });
    const tooltipToDisplay = computed(() => {
      if (interactionsStore.isActive(SelectRoofInteraction)) {
        return "roof-selection";
      } else if (addressStore.address || addressClosedByUser.value) {
        return "none";
      } else {
        return "address";
      }
    });
    const __returned__ = { rennesApp, panelsStore, viewStore, addressStore, interactionsStore, simulationStore, mapStore, get isOpen() {
      return isOpen;
    }, set isOpen(v) {
      isOpen = v;
    }, get addressClosedByUser() {
      return addressClosedByUser;
    }, set addressClosedByUser(v) {
      addressClosedByUser = v;
    }, tooltipToDisplay, FigureEnergy, AddressTooltip, TextDidYouKnow, RoofSelectionTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 2,
  class: "absolute left-6 bottom-6 flex flex-col p-0 gap-4 bg-white shadow-lg rounded-lg w-[402px] h-[440px]"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    $setup.tooltipToDisplay === "address" ? (openBlock(), createBlock($setup["AddressTooltip"], {
      key: 0,
      class: "absolute left-6 top-20",
      onCloseAddress: _cache[0] || (_cache[0] = ($event) => $setup.addressClosedByUser = true)
    })) : createCommentVNode("v-if", true),
    $setup.tooltipToDisplay === "roof-selection" ? (openBlock(), createBlock($setup["RoofSelectionTooltip"], {
      key: 1,
      class: "absolute left-6 top-20"
    })) : createCommentVNode("v-if", true),
    $setup.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createVNode($setup["TextDidYouKnow"], {
        class: "mt-4 mx-6",
        onClose: _cache[1] || (_cache[1] = ($event) => $setup.isOpen = false)
      }),
      createVNode($setup["FigureEnergy"])
    ])) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main.__file = "src/views/RoofSelectionView.vue";
const RoofSelectionView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/RoofSelectionView.vue"]]);
export {
  RoofSelectionView as default
};
