var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { as as defineComponent, aX as Ht, aw as openBlock, au as createBlock, aB as createElementBlock, aC as createBaseVNode, aY as VectorStyleItem, aZ as AbstractInteraction, a_ as EventType, a$ as ModificationKeyType, b0 as VcsEvent, b1 as Projection, b2 as inject, b3 as onMounted, ax as createVNode, aQ as Fragment } from "./vendor.723158cd.js";
import { u as useHomeStore, B as ButtonWithCheckboxBegin } from "./ButtonWithCheckboxBegin.5301798a.js";
import { F as FooterAreaLink } from "./FooterAreaLink.31cca985.js";
import { U as UiSolarPanelLogo, r as router } from "./UiHeaderFullScreen.story.14f3fd44.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { u as usePanelsStore } from "./panels.996a4ddd.js";
import { u as useViewsStore, v as viewList } from "./views.e1580d9c.js";
import { u as useRoofsStore } from "./roof.308393fa.js";
import { u as useAddressStore, R as RENNES_LAYER } from "./layers.f4d8aec1.js";
import "./CheckBox.aab9fd6b.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiSolarPanelTitle",
  setup(__props, { expose }) {
    expose();
    const title = "Cadastre Solaire";
    const abstract = "Projetez-vous en tant que producteur d\u2019\xE9lectricit\xE9 gr\xE2ce \xE0 l\u2019\xE9nergie solaire photovolta\xEFque.";
    const __returned__ = { title, abstract, UiSolarPanelLogo, get UiAbstractTitle() {
      return Ht;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiAbstractTitle"], {
    logo: $setup.UiSolarPanelLogo,
    abstract: $setup.abstract,
    title: $setup.title
  });
}
_sfc_main$2.__file = "src/components/ui/UiSolarPanelTitle.vue";
const UiSolarPanelTitle = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSolarPanelTitle.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProcessSteps",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get installation() {
      return installation;
    }, get potentiel() {
      return potentiel;
    }, get economies() {
      return economies;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-slate-100 flex flex-col border rounded-lg p-6" };
const _hoisted_2 = { class: "mb-8" };
const _hoisted_3 = { class: "flex items-center gap-4" };
const _hoisted_4 = ["src"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 1 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " \xC9valuez l'ensoleillement de votre toiture ")
], -1);
const _hoisted_6 = { class: "mb-8" };
const _hoisted_7 = { class: "flex items-center gap-4" };
const _hoisted_8 = ["src"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 2 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " Pr\xE9-dimensionnez une installation photovolta\xEFque ")
], -1);
const _hoisted_10 = { class: "flex items-center gap-4" };
const _hoisted_11 = ["src"];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 3 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " Estimez vos \xE9conomies d\u2019\xE9nergie ")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("ul", null, [
      createBaseVNode("li", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.potentiel,
              alt: ""
            }, null, 8, _hoisted_4)
          ]),
          _hoisted_5
        ])
      ]),
      createBaseVNode("li", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.installation,
              alt: ""
            }, null, 8, _hoisted_8)
          ]),
          _hoisted_9
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.economies,
              alt: ""
            }, null, 8, _hoisted_11)
          ]),
          _hoisted_12
        ])
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/home/ProcessSteps.vue";
const ProcessSteps = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ProcessSteps.vue"]]);
class RoofWfsService {
  storeRoofsFeaturesGroupBySurfaceId(jsonResponse) {
    const roofStore = useRoofsStore();
    const removeDuplicateJsonResponse = [];
    const surfaceIds = [];
    jsonResponse.features.forEach((f) => {
      if (f.properties) {
        if (!surfaceIds.includes(f.properties["surface_id"])) {
          removeDuplicateJsonResponse.push(f);
          surfaceIds.push(f.properties["surface_id"]);
        }
      }
    });
    const clone = JSON.parse(JSON.stringify(jsonResponse));
    clone.features = removeDuplicateJsonResponse;
    roofStore.setRoofsFeaturesGroupBySurfaceId(clone);
  }
  async fetchRoofs(buildingId) {
    const baseUrl = "https://public.sig.rennesmetropole.fr/geoserver/ows?";
    const baseParameters = "service=WFS&request=getFeature&typename=cli_climat:photovolta%C3%AFque_potentiel_classif_2021&outputFormat=application/json&srsName=EPSG:4326";
    const cqlFilter = "&cql_filter=buildingid='" + buildingId + "'";
    const response = await fetch(baseUrl + baseParameters + cqlFilter);
    const jsonResponse = await response.json();
    const roofStore = useRoofsStore();
    roofStore.setRoofsFeatures(jsonResponse);
    this.storeRoofsFeaturesGroupBySurfaceId(jsonResponse);
    return jsonResponse;
  }
}
const roofWfsService = new RoofWfsService();
const highlightStyle = new VectorStyleItem({
  fill: { color: "rgb(63,185,30)" },
  stroke: {
    color: "#ffffff",
    width: 2
  }
});
class SelectRoofInteraction extends AbstractInteraction {
  constructor(layer, rennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE);
    __publicField(this, "_featureClicked");
    __publicField(this, "_selectableLayer");
    __publicField(this, "_highlighted");
    __publicField(this, "_hasFeature");
    __publicField(this, "_rennesApp");
    this._featureClicked = new VcsEvent();
    this._selectableLayer = layer;
    this._highlighted = false;
    this._hasFeature = false;
    this._rennesApp = rennesApp;
    this.setActive();
  }
  _highlight(featureId) {
    this._highlighted = true;
    this._selectableLayer.featureVisibility.highlight({
      [featureId]: highlightStyle
    });
  }
  _unhighlight() {
    this._highlighted = false;
    this._selectableLayer.featureVisibility.clearHighlighting();
  }
  _highglightRoofsOfTheBuilding(buildingRoofs) {
    this._selectableLayer.featureVisibility.clearHighlighting();
    buildingRoofs.features.forEach((f) => {
      var _a;
      this._highlight((_a = f.properties) == null ? void 0 : _a.surface_id);
    });
  }
  _goToNextStep(buildingRoofs, selectedBuildingId) {
    const roofStore = useRoofsStore();
    roofStore.setSelectedBuildingId(selectedBuildingId);
    roofStore.setSelectRoofFeature(buildingRoofs.features[0]);
    router.push({ name: "roof-selected-information" });
  }
  _isClickOnHomePageValid() {
    const viewStore = useViewsStore();
    if (viewStore.currentView !== viewList.home) {
      return true;
    }
    const homeRouter = useHomeStore();
    if (homeRouter.isTermOfUseAccepted) {
      return true;
    }
    homeRouter.setDisplayError(true);
    return false;
  }
  _getLatitudeAndLongitude(event) {
    const position = event.position;
    if (position !== void 0) {
      const wgs84Position = Projection.mercatorToWgs84(position);
      const longitude = wgs84Position[0];
      const latitude = wgs84Position[1];
      if (latitude !== void 0 && longitude !== void 0) {
        const addressStore = useAddressStore();
        addressStore.setLatitudeAndLongitude(latitude, longitude);
      }
    }
  }
  async pipe(event) {
    var _a, _b;
    const selectedBuilding = event.feature;
    const selectedBuildingId = selectedBuilding == null ? void 0 : selectedBuilding.getProperty("attributes")["BUILDINGID"];
    if (selectedBuilding && this._isClickOnHomePageValid()) {
      const buildingRoofs = await roofWfsService.fetchRoofs(selectedBuildingId);
      this._highglightRoofsOfTheBuilding(buildingRoofs);
      if (event.type & EventType.MOVE) {
        this._highlight((_a = selectedBuilding.getId()) == null ? void 0 : _a.toString());
      }
      if (event.type & EventType.CLICK) {
        this._featureClicked.raiseEvent(event.feature);
        this._hasFeature = (_b = selectedBuilding.getId()) == null ? void 0 : _b.toString();
      }
      this._getLatitudeAndLongitude(event);
      this._goToNextStep(buildingRoofs, selectedBuildingId);
    } else if (event.type & EventType.CLICK) {
      this._featureClicked.raiseEvent();
      this._hasFeature = false;
      this._unhighlight();
    } else if (this._highlighted) {
      this._unhighlight();
    }
    return event;
  }
}
function viewStoreSubscribe(rennesApp) {
  const viewStore = useViewsStore();
  if ([
    viewList["roof-selection"],
    viewList["home"],
    viewList["map-pcaet"],
    viewList["roof-selected-information"]
  ].includes(viewStore.currentView)) {
    rennesApp.maps.eventHandler.featureInteraction.setActive(
      EventType.CLICKMOVE
    );
    const selectInteraction = new SelectRoofInteraction(
      rennesApp.maps.layerCollection.getByKey(RENNES_LAYER.roof3d),
      rennesApp
    );
    rennesApp.maps.eventHandler.addExclusiveInteraction(
      selectInteraction,
      () => {
      }
    );
  } else {
    rennesApp.maps.eventHandler.removeExclusive();
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props, { expose }) {
    expose();
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const rennesApp = inject("rennesApp");
    onMounted(() => {
      viewStore.setCurrentView(viewList["home"]);
      panelsStore.setTypePanelDisplay("left");
      viewStoreSubscribe(rennesApp);
    });
    const __returned__ = { panelsStore, viewStore, rennesApp, ButtonWithCheckboxBegin, FooterAreaLink, UiSolarPanelTitle, ProcessSteps };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["UiSolarPanelTitle"]),
    createVNode($setup["ProcessSteps"]),
    createVNode($setup["ButtonWithCheckboxBegin"]),
    createVNode($setup["FooterAreaLink"])
  ], 64);
}
_sfc_main.__file = "src/views/HomeView.vue";
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
