var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, ax as createVNode, av as withCtx, ay as ref, au as createBlock, aD as createCommentVNode, b7 as VectorStyleItem, b8 as AbstractInteraction, b9 as EventType, ba as ModificationKeyType, bb as VcsEvent, bc as Projection, aK as defineStore, bd as Style, be as Fill, bf as Stroke, bg as inject, a$ as onMounted, aF as computed, aS as Fragment } from "./vendor.6a09d00b.js";
import { u as useViewsStore, v as viewList } from "./views.6b3ae85e.js";
import { u as usePanelsStore } from "./panels.772862f5.js";
import { F as FigureKeyNumber, H as HourGlass } from "./hour-glass.e11d5e90.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { U as UiExplanationTooltip } from "./UiExplanationTooltip.56d0fa17.js";
import { T as TextDidYouKnow } from "./TextDidYouKnow.99aff089.js";
import { u as useAddressStore } from "./address.a5cf2e2e.js";
import "./layers.59f42ad0.js";
import { u as useRoofsStore } from "./roof.7ebd7953.js";
import { m as mapRoofSurfaceModel } from "./roof.model.ba8ee4b8.js";
import { r as router } from "./UiHeaderFullScreen.story.a73b494b.js";
import "./home.bc5a89b6.js";
import { u as useSimulationStore } from "./simulations.25d42417.js";
import "./icon-delete.7df02bd2.js";
const SolarPanel = "/cooperation_jn_solar/main/assets/solar-panel.a8b17789.svg";
const HousePlant = "/cooperation_jn_solar/main/assets/house-plant.d72d1365.svg";
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
    const res = [];
    removeDuplicateJsonResponse.forEach((feature) => {
      res.push(mapRoofSurfaceModel(feature));
    });
    roofStore.setRoofSurfacesList(res);
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
class ApiAdresseDataGouvService {
  async fetchAddressesFromLatLon(lat, lon) {
    const baseUrl = "https://api-adresse.data.gouv.fr/reverse/";
    const url = baseUrl + `?lon=${lon}&lat=${lat}`;
    return fetch(url).then(function(response) {
      if (response.ok) {
        return response.json().then(function(json) {
          if (json.features !== void 0 && json.features.length > 0) {
            const addressStore = useAddressStore();
            addressStore.setAddress(json.features[0].properties.label);
          }
        });
      }
    });
  }
}
const apiAdresseDataGouvService = new ApiAdresseDataGouvService();
const highlightStyle = new VectorStyleItem({
  fill: { color: "rgb(63,185,30)" }
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
  }
  _highlight(featureId) {
    this._highlighted = true;
    this._selectableLayer.featureVisibility.highlight({
      [featureId]: highlightStyle
    });
  }
  unhighlight() {
    if (this._highlighted) {
      this._highlighted = false;
      this._rennesApp.clearRoofsHighlight();
    }
  }
  _highglightRoofsOfTheBuilding(buildingRoofs) {
    this.unhighlight();
    buildingRoofs.features.forEach((f) => {
      var _a;
      this._highlight((_a = f.properties) == null ? void 0 : _a.surface_id);
    });
  }
  _goToNextStep(buildingRoofs, selectedBuildingId) {
    var _a;
    const roofStore = useRoofsStore();
    roofStore.setSelectedBuildingId(selectedBuildingId);
    roofStore.setSelectRoofSurfaceId(
      (_a = buildingRoofs.features[0].properties) == null ? void 0 : _a.surface_id
    );
    router.push({ name: "roof-selected-information" });
  }
  async _setLatitudeAndLongitude(event) {
    const position = event.position;
    if (position !== void 0) {
      const wgs84Position = Projection.mercatorToWgs84(position);
      const longitude = wgs84Position[0];
      const latitude = wgs84Position[1];
      if (latitude !== void 0 && longitude !== void 0) {
        const addressStore = useAddressStore();
        addressStore.setLatitudeAndLongitude(latitude, longitude);
        await apiAdresseDataGouvService.fetchAddressesFromLatLon(
          latitude,
          longitude
        );
      }
    }
  }
  async pipe(event) {
    var _a, _b;
    if (event.type == EventType.CLICK) {
      const selectedBuilding = event.feature;
      if (!selectedBuilding) {
        return event;
      }
      const selectedBuildingId = selectedBuilding == null ? void 0 : selectedBuilding.getProperty("attributes")["BUILDINGID"];
      if (isInteractionBuilding()) {
        const buildingRoofs = await roofWfsService.fetchRoofs(selectedBuildingId);
        this._highglightRoofsOfTheBuilding(buildingRoofs);
        await this._setLatitudeAndLongitude(event);
        this._goToNextStep(buildingRoofs, selectedBuildingId);
      } else if (isInteractionPanRoof()) {
        const roofStore = useRoofsStore();
        if (selectedBuildingId !== roofStore.selectedBuildingId) {
          return event;
        }
        const idRoof = selectedBuilding.getProperty("id");
        if (!idRoof) {
          return event;
        }
        let isRoofFeature = false;
        (_b = (_a = roofStore.roofsFeatures) == null ? void 0 : _a.features) == null ? void 0 : _b.forEach((f) => {
          var _a2;
          if (((_a2 = f.properties) == null ? void 0 : _a2.surface_id) == idRoof) {
            isRoofFeature = true;
          }
        });
        if (!isRoofFeature) {
          return event;
        }
        roofStore.setSelectRoofSurfaceId(idRoof);
      }
    }
    return event;
  }
}
defineStore("districtInformations", () => {
  const districtCode = ref(0);
  const districtName = ref("");
  const districtConsumption = ref(0);
  const districtProduction = ref(0);
  const districtNumberInstallations = ref(0);
  const districtPointFeature = ref(null);
  const previousViewPoint = ref(null);
  const newPointAbscissa = ref(0);
  const newPointOrdinate = ref(0);
  const checkboxChecked = ref(false);
  function setDistrictIrisCode(newDistrictCode) {
    districtCode.value = newDistrictCode;
  }
  function setDistrictName(newDistrictName) {
    districtName.value = newDistrictName;
  }
  function setDistrictConsumption(newDistrictConsumption) {
    districtConsumption.value = newDistrictConsumption;
  }
  function setDistrictProduction(newDistrictProduction) {
    districtProduction.value = newDistrictProduction;
  }
  function setDistrictNumberInstallations(newDistrictNumberInstallations) {
    districtNumberInstallations.value = newDistrictNumberInstallations;
  }
  function setDistrictInformations(newDistrictCode, newDistrictName, newDistrictConsumption, newDistrictProduction, newDistrictNumberInstallations) {
    setDistrictIrisCode(newDistrictCode);
    setDistrictName(newDistrictName);
    setDistrictConsumption(newDistrictConsumption);
    setDistrictProduction(newDistrictProduction);
    setDistrictNumberInstallations(newDistrictNumberInstallations);
  }
  function setNewPointFeatureOnSelectedDistrict(newPointFeature) {
    districtPointFeature.value = newPointFeature;
  }
  function setNewCoordinates(newAbscissa, newOrdinate) {
    newPointAbscissa.value = newAbscissa;
    newPointOrdinate.value = newOrdinate;
  }
  function setCheckboxChecked(newAction) {
    checkboxChecked.value = newAction;
  }
  function resetDistrictStore() {
    setDistrictInformations(0, "", 0, 0, 0);
  }
  return {
    districtCode,
    districtName,
    districtConsumption,
    districtProduction,
    districtNumberInstallations,
    districtPointFeature,
    previousViewPoint,
    newPointAbscissa,
    newPointOrdinate,
    checkboxChecked,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    setNewPointFeatureOnSelectedDistrict,
    setNewCoordinates,
    setCheckboxChecked,
    resetDistrictStore
  };
});
new Style({
  fill: new Fill({
    color: "rgba(0,0,0,0.4)"
  }),
  stroke: new Stroke({
    color: "#000000",
    width: 4
  })
});
new Style({
  fill: new Fill({
    color: "rgba(0,0,0,0.2)"
  }),
  stroke: new Stroke({
    color: "#FFFFFF",
    width: 1
  })
});
function _getSelectRoofInteraction(rennesApp) {
  let res = void 0;
  rennesApp.maps.eventHandler.interactions.forEach((interaction) => {
    if (interaction instanceof SelectRoofInteraction) {
      res = interaction;
    }
  });
  return res;
}
function enableSelectRoofInteraction(rennesApp) {
  const res = _getSelectRoofInteraction(rennesApp);
  if (res) {
    res.setActive(EventType.CLICKMOVE);
  }
}
function disableSelectRoofInteraction(rennesApp) {
  const res = _getSelectRoofInteraction(rennesApp);
  if (res) {
    res.setActive(false);
  }
}
function isInteractionBuilding() {
  const viewStore = useViewsStore();
  return [
    viewList["roof-selected-information"],
    viewList["roof-selection"]
  ].includes(viewStore.currentView);
}
function isInteractionPanRoof() {
  const viewStore = useViewsStore();
  const simulationStore = useSimulationStore();
  return viewStore.currentView === viewList["step-sunshine"] && simulationStore.currentStep === 1 && simulationStore.currentSubStep === 1;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoofSelectionView",
  setup(__props, { expose }) {
    expose();
    const rennesApp = inject("rennesApp");
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const addressStore = useAddressStore();
    let isOpen = ref(true);
    let isBuildingSelectionActive = ref(false);
    let addressClosedByUser = ref(false);
    let DISTANCE_MAX_FOR_SELECTION = 600;
    onMounted(() => {
      viewStore.setCurrentView(viewList["roof-selection"]);
      panelsStore.setTypePanelDisplay("float-left");
      panelsStore.isCompletelyHidden = true;
      rennesApp.get3DMap().getScene().postRender.addEventListener(() => {
        let cameraDistance = rennesApp.getCurrentDistance();
        if (isBuildingSelectionActive.value && cameraDistance > DISTANCE_MAX_FOR_SELECTION) {
          isBuildingSelectionActive.value = false;
          disableSelectRoofInteraction(rennesApp);
        } else if (!isBuildingSelectionActive.value && cameraDistance <= DISTANCE_MAX_FOR_SELECTION) {
          isBuildingSelectionActive.value = true;
          enableSelectRoofInteraction(rennesApp);
        }
      });
      rennesApp.clearRoofsHighlight();
    });
    const tooltipToDisplay = computed(() => {
      if (isBuildingSelectionActive.value) {
        return "roof-selection";
      } else if (addressStore.address || addressClosedByUser.value) {
        return "none";
      } else {
        return "address";
      }
    });
    const __returned__ = { rennesApp, panelsStore, viewStore, addressStore, get isOpen() {
      return isOpen;
    }, set isOpen(v) {
      isOpen = v;
    }, get isBuildingSelectionActive() {
      return isBuildingSelectionActive;
    }, set isBuildingSelectionActive(v) {
      isBuildingSelectionActive = v;
    }, get addressClosedByUser() {
      return addressClosedByUser;
    }, set addressClosedByUser(v) {
      addressClosedByUser = v;
    }, get DISTANCE_MAX_FOR_SELECTION() {
      return DISTANCE_MAX_FOR_SELECTION;
    }, set DISTANCE_MAX_FOR_SELECTION(v) {
      DISTANCE_MAX_FOR_SELECTION = v;
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
