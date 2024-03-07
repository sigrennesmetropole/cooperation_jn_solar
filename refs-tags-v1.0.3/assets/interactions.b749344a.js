var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { b5 as AbstractInteraction, b6 as EventType, b7 as ModificationKeyType, b8 as VcsEvent, aL as defineStore, ay as ref, b9 as CesiumMap, ba as Projection, bb as Cartographic, bc as OpenlayersMap, bd as SceneTransforms, be as Cartesian2, bf as Style, bg as Fill, bh as Stroke, bi as Feature, bj as Point, bk as vcsLayerName, bl as VectorStyleItem } from "./vendor.53742a4f.js";
import { c as useRoofsStore, a as useAddressStore, u as useViewsStore, b as useSimulationStore, d as router } from "./UiHeaderFullScreen.story.9532d6bc.js";
import { m as mapRoofSurfaceModel } from "./roof.model.35e3f45b.js";
import { v as viewList } from "./views.model.93fd8cf1.js";
import { a as apiService, u as useLayersStore, R as RENNES_LAYER } from "./api.d35eeaaa.js";
import { u as useHomeStore } from "./home.cbf1a1f5.js";
import "./configService.202ac99f.js";
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
class ForbidenClickInteraction extends AbstractInteraction {
  constructor() {
    super(EventType.CLICK, ModificationKeyType.ALL);
    __publicField(this, "mapClicked");
    this.mapClicked = new VcsEvent();
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
  async pipe(event) {
    this._isClickOnHomePageValid();
    return event;
  }
}
class ApiEnedisDistrictService {
  async getDistrictDatas(codeIris) {
    const data = await apiService.callApiGet(`/api/enedis/district/${codeIris}`);
    return data;
  }
}
const apiEnedisDistrictService = new ApiEnedisDistrictService();
const useDistrictStore = defineStore("districtInformations", () => {
  const interactionsStore = useInteractionsStore();
  const layerStore = useLayersStore();
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
  const canBeDisplayed = ref(true);
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
    if (newAction && canBeDisplayed) {
      layerStore.enableLayer(RENNES_LAYER.iris);
      interactionsStore.enableInteraction(SelectDistrictInteraction);
    } else {
      layerStore.disableLayer(RENNES_LAYER.iris);
      interactionsStore.disableInteraction(SelectDistrictInteraction);
    }
  }
  function setCanBeDisplayed(isFarEnough) {
    canBeDisplayed.value = isFarEnough;
    if (!isFarEnough) {
      setCheckboxChecked(false);
    }
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
    canBeDisplayed,
    setDistrictIrisCode,
    setDistrictName,
    setDistrictConsumption,
    setDistrictProduction,
    setDistrictNumberInstallations,
    setDistrictInformations,
    setNewPointFeatureOnSelectedDistrict,
    setNewCoordinates,
    setCheckboxChecked,
    setCanBeDisplayed,
    resetDistrictStore
  };
});
function getBalloonPositionCesium(scene, cartesian) {
  return SceneTransforms.wgs84ToWindowCoordinates(scene, cartesian);
}
function getBalloonPositionOL(olMap, position) {
  const pixel = olMap.getPixelFromCoordinate(position);
  if (pixel) {
    return new Cartesian2(...pixel);
  }
  return void 0;
}
function getBalloonPosition(app, position) {
  var _a;
  const map = app.maps.activeMap;
  let cartesian = void 0;
  if (map instanceof CesiumMap) {
    const wgs84Position = Projection.mercatorToWgs84(position);
    cartesian = Cartographic.toCartesian(
      Cartographic.fromDegrees(
        wgs84Position[0],
        wgs84Position[1],
        Math.max(50, (_a = position[2]) != null ? _a : 0)
      )
    );
    cartesian = getBalloonPositionCesium(map.getScene(), cartesian);
  } else if (map instanceof OpenlayersMap) {
    cartesian = getBalloonPositionOL(map.olMap, position);
  }
  return cartesian;
}
function getCartesianPositionFromFeature(rennesApp, feature) {
  return getBalloonPosition(rennesApp, feature.getGeometry().getCoordinates());
}
function updateDistrictPointCoordinates(rennesApp) {
  const districtStore = useDistrictStore();
  if (districtStore.districtPointFeature !== null) {
    const newCoordinates = getCartesianPositionFromFeature(
      rennesApp,
      districtStore.districtPointFeature
    );
    if (newCoordinates !== void 0) {
      districtStore.setNewCoordinates(newCoordinates.x, newCoordinates.y);
    }
  }
}
function addGenericListenerForUpdatePositions(rennesApp) {
  const districtStore = useDistrictStore();
  const map = rennesApp.maps.activeMap;
  if (!(map instanceof CesiumMap)) {
    return;
  }
  map.getScene().postRender.addEventListener(() => {
    const vp = map.getViewpointSync();
    if (vp === null || vp === void 0) {
      return;
    }
    if (districtStore.previousViewPoint === null || districtStore.previousViewPoint === void 0) {
      districtStore.previousViewPoint = vp;
    }
    for (const i in vp.cameraPosition) {
      if (vp.cameraPosition[i] !== districtStore.previousViewPoint.cameraPosition[i]) {
        districtStore.previousViewPoint = vp;
        updateDistrictPointCoordinates(rennesApp);
        break;
      }
    }
  });
}
const selectedDistrict = new Style({
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
class SelectDistrictInteraction extends AbstractInteraction {
  constructor(rennesApp) {
    super(EventType.CLICK, ModificationKeyType.NONE);
    __publicField(this, "_rennesApp");
    __publicField(this, "irisLayer");
    __publicField(this, "customDistrictLayer");
    __publicField(this, "currentIrisCode", null);
    this._rennesApp = rennesApp;
    this.setActive(true);
    this.irisLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.iris
    );
    this.customDistrictLayer = this._rennesApp.layers.getByKey(
      RENNES_LAYER.customLayerDistrict
    );
  }
  async getDistrictDatas(codeIris) {
    const districtStore = useDistrictStore();
    const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
      codeIris
    );
    districtStore.setDistrictInformations(
      codeIris,
      districtDatas.irisName,
      districtDatas.totalConsumption,
      districtDatas.totalProduction,
      districtDatas.totalPhotovoltaicSites
    );
  }
  setActive(active) {
    if (!active) {
      document.body.style.cursor = "default";
      this._unhighlight();
      this.customDistrictLayer.removeAllFeatures();
    } else {
      document.body.style.cursor = "pointer";
    }
    super.setActive(active);
  }
  _unhighlight() {
    this.irisLayer.featureVisibility.clearHighlighting();
  }
  _highlight(featureId) {
    this._unhighlight();
    this.irisLayer.featureVisibility.highlight({
      [featureId]: selectedDistrict
    });
  }
  async _interactionDistrict(event) {
    const districtStore = useDistrictStore();
    if (event.type & EventType.CLICK) {
      if (event.position === void 0) {
        return;
      }
      const new_feature = new Feature();
      const point = new Point(event.position);
      new_feature.setGeometry(point.transform("EPSG:3857", "EPSG:4326"));
      this.customDistrictLayer.addFeatures([new_feature]);
      districtStore.setNewPointFeatureOnSelectedDistrict(new_feature);
    }
  }
  async pipe(event) {
    const districtStore = useDistrictStore();
    const selectedDistrict2 = event.feature;
    if (selectedDistrict2 === void 0 || selectedDistrict2[vcsLayerName] !== this.irisLayer.name) {
      districtStore.resetDistrictStore();
      this._unhighlight();
      return event;
    }
    const irisCode = selectedDistrict2 == null ? void 0 : selectedDistrict2.getProperty("code_iris");
    if (irisCode !== this.currentIrisCode) {
      this.currentIrisCode = irisCode;
      this._highlight(selectedDistrict2.getId());
      await this._interactionDistrict(event);
      updateDistrictPointCoordinates(this._rennesApp);
      await this.getDistrictDatas(irisCode);
      addGenericListenerForUpdatePositions(this._rennesApp);
      event.stopPropagation = true;
    }
    return event;
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
const highlightStyle = new VectorStyleItem({
  fill: { color: "rgb(74,222,128)" }
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
    const roofStore = useRoofsStore();
    roofStore.setSelectedBuildingId(selectedBuildingId);
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
const useInteractionsStore = defineStore("interactions", () => {
  const _activeInteractions = ref([]);
  const _trigger = ref(false);
  function enableInteraction(toAdd) {
    if (!_activeInteractions.value.includes(toAdd)) {
      _activeInteractions.value.push(toAdd);
      _trigger.value = !_trigger.value;
    }
  }
  function disableInteraction(toRemove) {
    const indexOfObject = _activeInteractions.value.findIndex((elt) => {
      return elt === toRemove;
    });
    if (indexOfObject !== -1) {
      _activeInteractions.value.splice(indexOfObject, 1);
    }
  }
  function getActiveInteractions() {
    return _activeInteractions.value;
  }
  function isActive(interaction) {
    return _activeInteractions.value.includes(interaction);
  }
  function getInactiveInteractions() {
    return [
      SelectRoofInteraction,
      ForbidenClickInteraction,
      SelectDistrictInteraction
    ].filter((item) => _activeInteractions.value.indexOf(item) < 0);
  }
  return {
    _activeInteractions,
    _trigger,
    isActive,
    enableInteraction,
    disableInteraction,
    getActiveInteractions,
    getInactiveInteractions
  };
});
export {
  SelectRoofInteraction as S,
  useDistrictStore as a,
  apiEnedisDistrictService as b,
  useInteractionsStore as u
};
