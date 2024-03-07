import { as as defineComponent, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aM as toDisplayString, aH as computed, aW as Fragment, ax as createVNode, aF as createCommentVNode, aD as createTextVNode, aE as withKeys, aK as renderSlot, av as withCtx, at as resolveComponent, b1 as createStaticVNode, ay as ref, aA as rt, au as createBlock, bo as onBeforeMount } from "./vendor.f9409ec7.js";
import { v as viewList } from "./views.model.93fd8cf1.js";
import { e as useConsumptionAndProductionStore, a as useAddressStore, u as useViewsStore, c as useRoofsStore, h as useAutocalsolStore, f as useSolarPanelStore, l as legalList, i as HeaderEndSimulation } from "./UiHeaderFullScreen.story.0a4d7d4a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { i as installation } from "./installation.1bf16994.js";
import { g as getNumberFromConfig, a as getStringFromConfig } from "./configService.7fc0c98a.js";
import { s as solarPanelIcon } from "./solar-panel.d7f5b63a.js";
import { g as goToBlack } from "./expand-small-bigger-retract-smaller-big.36b4ec1e.js";
import { q as qualitenr, b as qualibat, c as qualifelec, w as warning, U as UiSpinnerLoading, a as apiPdfService, L as LargeFooter } from "./LargeFooter.f1ac1ed3.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { R as RoofInformationsBox } from "./RoofInformationsBox.14ac20f8.js";
import { e as economies } from "./economies.0397e19a.js";
import { a as useDistrictStore, b as apiEnedisDistrictService } from "./interactions.05d571d7.js";
import { a as apiService } from "./api.8bd8c85c.js";
import "./roof.model.b405a790.js";
import "./home.0ac03fd5.js";
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionInformation",
  setup(__props, { expose }) {
    expose();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const __returned__ = { consumptionAndProductionStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$h = { class: "flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl mx-auto shadow-md p-6" };
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-bold text-base" }, "Votre consommation actuelle", -1);
const _hoisted_3$d = {
  id: "consumptionValue",
  class: "font-dm-sans font-medium text-sm"
};
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$h, [
    _hoisted_2$g,
    createBaseVNode("p", _hoisted_3$d, toDisplayString($setup.consumptionAndProductionStore.annualConsumption) + " kWh/an ", 1)
  ]);
}
_sfc_main$h.__file = "src/components/results/ConsumptionInformation.vue";
const ConsumptionInformation = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ConsumptionInformation.vue"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ProductionInformationText",
  props: {
    currentNumSolarPanel: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const currentSurface = computed(
      () => props.currentNumSolarPanel * getNumberFromConfig("solar_panel.solar_panel_surface")
    );
    const currentPower = computed(
      () => (props.currentNumSolarPanel * getNumberFromConfig("solar_panel.solar_panel_power")).toFixed(2)
    );
    const __returned__ = { props, currentSurface, currentPower, get installation() {
      return installation;
    }, get solarPanelIcon() {
      return solarPanelIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$g = { class: "flex flex-row items-center gap-2 ml-1" };
const _hoisted_2$f = ["src"];
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre installation ", -1);
const _hoisted_4$b = { class: "bg-slate-50 border border-slate-100 rounded-lg flex flex-col px-5 py-3 gap-4" };
const _hoisted_5$a = { class: "flex flex-col items-center p-0" };
const _hoisted_6$8 = { class: "flex flex-row items-center p-0 gap-2.5" };
const _hoisted_7$7 = { class: "font-dm-sans font-bold text-[44px] leading-[48px]" };
const _hoisted_8$4 = ["src"];
const _hoisted_9$3 = { class: "flex flex-col items-center p-0 gap-1" };
const _hoisted_10$3 = /* @__PURE__ */ createBaseVNode("h4", { class: "font-dm-sans text-lg text-center font-bold w-[140px]" }, " panneaux photovolta\xEFques ", -1);
const _hoisted_11$3 = { class: "font-dm-sans font-normal text-xs text-neutral-600" };
const _hoisted_12$3 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b border-neutral-300" }, null, -1);
const _hoisted_13$2 = { class: "ml-2" };
const _hoisted_14$2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-normal text-sm" }, " Surface de l\u2019installation photovolta\xEFque ", -1);
const _hoisted_15$1 = { class: "font-bold text-base" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$g, [
      createBaseVNode("img", {
        src: $setup.installation,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_2$f),
      _hoisted_3$c
    ]),
    createBaseVNode("div", _hoisted_4$b, [
      createBaseVNode("div", _hoisted_5$a, [
        createBaseVNode("div", _hoisted_6$8, [
          createBaseVNode("span", _hoisted_7$7, toDisplayString($props.currentNumSolarPanel), 1),
          createBaseVNode("img", {
            class: "w-16 h-16",
            src: $setup.solarPanelIcon
          }, null, 8, _hoisted_8$4)
        ]),
        createBaseVNode("div", _hoisted_9$3, [
          _hoisted_10$3,
          createBaseVNode("p", _hoisted_11$3, " soit " + toDisplayString($setup.currentPower) + " kWc de puissance install\xE9e ", 1)
        ])
      ]),
      _hoisted_12$3,
      createBaseVNode("div", _hoisted_13$2, [
        _hoisted_14$2,
        createBaseVNode("span", _hoisted_15$1, toDisplayString($setup.currentSurface) + "m\xB2 ", 1)
      ])
    ])
  ], 64);
}
_sfc_main$g.__file = "src/components/results/ProductionInformationText.vue";
const ProductionInformationText = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ProductionInformationText.vue"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ProductionInformation",
  props: {
    currentNumSolarPanel: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const addressStore = useAddressStore();
    const blob = addressStore.screenshotAddress;
    let urlImg = null;
    if (blob !== null)
      urlImg = URL.createObjectURL(blob);
    const __returned__ = { props, addressStore, blob, get urlImg() {
      return urlImg;
    }, set urlImg(v) {
      urlImg = v;
    }, ProductionInformationText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$f = { class: "flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto font-dm-sans shadow-md" };
const _hoisted_2$e = ["src"];
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createVNode($setup["ProductionInformationText"], {
      currentNumSolarPanel: $setup.props.currentNumSolarPanel
    }, null, 8, ["currentNumSolarPanel"]),
    $setup.urlImg !== null ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $setup.urlImg,
      alt: "",
      class: "h-[206px] rounded-md mt-5 object-fill"
    }, null, 8, _hoisted_2$e)) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$f.__file = "src/components/results/ProductionInformation.vue";
const ProductionInformation = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ProductionInformation.vue"]]);
const photoVoltaique = "/cooperation_jn_solar/main/assets/photo_voltaique.4f440c12.svg";
const goToWhite = "/cooperation_jn_solar/main/assets/icon-external-link-white-thin.77357ea3.svg";
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ButtonVisitWebsite",
  props: {
    link: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get goToWhite() {
      return goToWhite;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$e = ["href"];
const _hoisted_2$d = ["src"];
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Visiter le site ", -1);
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $setup.props.link,
    target: "_blank",
    class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit flex flex-row items-center justify-center mt-4"
  }, [
    createBaseVNode("img", {
      class: "w-5 h-5",
      src: $setup.goToWhite,
      alt: ""
    }, null, 8, _hoisted_2$d),
    _hoisted_3$b
  ], 8, _hoisted_1$e);
}
_sfc_main$e.__file = "src/components/results/ButtonVisitWebsite.vue";
const ButtonVisitWebsite = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ButtonVisitWebsite.vue"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "PhotoVoltaique",
  setup(__props, { expose }) {
    expose();
    const photovoltaique_link = getStringFromConfig("link.photovoltaique_link");
    function goToPhotovoltaiqueInfo() {
      window.open(photovoltaique_link, "_blank");
    }
    const __returned__ = { photovoltaique_link, goToPhotovoltaiqueInfo, get photoVoltaique() {
      return photoVoltaique;
    }, get goToBlack() {
      return goToBlack;
    }, ButtonVisitWebsite };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$d = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_2$c = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8" };
const _hoisted_3$a = ["src"];
const _hoisted_4$a = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_5$9 = { class: "font-dm-sans text-base font-normal" };
const _hoisted_6$7 = /* @__PURE__ */ createBaseVNode("strong", { class: "underline" }, " photovoltaique.info", -1);
const _hoisted_7$6 = ["src"];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$d, [
    createBaseVNode("div", _hoisted_2$c, [
      createBaseVNode("img", { src: $setup.photoVoltaique }, null, 8, _hoisted_3$a)
    ]),
    createBaseVNode("div", _hoisted_4$a, [
      createBaseVNode("p", _hoisted_5$9, [
        createTextVNode(" Le site de r\xE9f\xE9rence "),
        createBaseVNode("span", {
          tabindex: "0",
          class: "inline-flex items-center cursor-pointer font-medium",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToPhotovoltaiqueInfo()),
          onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => $setup.goToPhotovoltaiqueInfo(), ["enter"]))
        }, [
          _hoisted_6$7,
          createBaseVNode("img", {
            src: $setup.goToBlack,
            class: "w-[14px] h-[14px] ml-1"
          }, null, 8, _hoisted_7$6)
        ], 32),
        createTextVNode(" regroupe l\u2019essentiel des informations techniques et r\xE9glementaires sur le photovolta\xEFque. ")
      ]),
      createVNode($setup["ButtonVisitWebsite"], { link: $setup.photovoltaique_link }, null, 8, ["link"])
    ])
  ]);
}
_sfc_main$d.__file = "src/components/results/PhotoVoltaique.vue";
const PhotoVoltaique = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/PhotoVoltaique.vue"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "UiLinkWithIconArrow",
  props: {
    link: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    function goTo() {
      window.open(props.link, "_blank");
    }
    const __returned__ = { props, goTo, get expandIcon() {
      return goToBlack;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$c = /* @__PURE__ */ createBaseVNode("p", { class: "underline decoration-1 font-medium text-base" }, " Acc\xE9der \xE0 la page ", -1);
const _hoisted_2$b = ["src"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "flex flex-row cursor-pointer w-fit",
    tabindex: "0",
    onKeydown: _cache[0] || (_cache[0] = withKeys(($event) => $setup.goTo(), ["enter"])),
    onClick: _cache[1] || (_cache[1] = ($event) => $setup.goTo())
  }, [
    _hoisted_1$c,
    createBaseVNode("img", {
      src: $setup.expandIcon,
      class: "w-3.5 h-3.5 ml-2 mt-1"
    }, null, 8, _hoisted_2$b)
  ], 32);
}
_sfc_main$c.__file = "src/components/ui/UiLinkWithIconArrow.vue";
const UiLinkWithIconArrow = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiLinkWithIconArrow.vue"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "LabelsProfitability",
  props: {
    link: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, UiLinkWithIconArrow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$b = { class: "flex flex-col gap-6 w-[100%] bg-slate-100 rounded-lg p-6 mx-auto" };
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$b, [
    renderSlot(_ctx.$slots, "img", { class: "rounded-xl" }),
    renderSlot(_ctx.$slots, "title"),
    renderSlot(_ctx.$slots, "icon"),
    createVNode($setup["UiLinkWithIconArrow"], {
      link: $setup.props.link
    }, null, 8, ["link"])
  ]);
}
_sfc_main$b.__file = "src/components/results/LabelsProfitability.vue";
const LabelsProfitability = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/LabelsProfitability.vue"]]);
const qualiLabels = "/cooperation_jn_solar/main/assets/quali_labels.18f84d27.svg";
const profitability = "/cooperation_jn_solar/main/assets/profitability.b54a88ee.svg";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "GoFurther",
  setup(__props, { expose }) {
    expose();
    const url_signe_qualite = getStringFromConfig("link.url_signe_qualite");
    const url_choisir_modele_eco = getStringFromConfig("link.choisir_modele_eco");
    const __returned__ = { url_signe_qualite, url_choisir_modele_eco, PhotoVoltaique, LabelsProfitability, get qualiLabels() {
      return qualiLabels;
    }, get qualitenr() {
      return qualitenr;
    }, get qualibat() {
      return qualibat;
    }, get qualifelec() {
      return qualifelec;
    }, get profitability() {
      return profitability;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$a = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " Plus d'informations pour concr\xE9tiser votre projet ", -1);
const _hoisted_3$9 = { class: "flex flex-row gap-8" };
const _hoisted_4$9 = ["src"];
const _hoisted_5$8 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans text-2xl font-bold" }, " 3 labels de qualification pour vous guider dans le choix de votre installateur ", -1);
const _hoisted_6$6 = { class: "py-[18px] px-6 flex flex-row justify-between w-[100%] bg-white rounded-xl" };
const _hoisted_7$5 = ["src"];
const _hoisted_8$3 = ["src"];
const _hoisted_9$2 = ["src"];
const _hoisted_10$2 = ["src"];
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans text-2xl font-bold" }, " Connaitre des ordres de grandeur de co\xFBts et de rentabilit\xE9 d'un projet photovolta\xEFque ", -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("div", { class: "h-full" }, null, -1);
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    _hoisted_2$a,
    createVNode($setup["PhotoVoltaique"]),
    createBaseVNode("div", _hoisted_3$9, [
      createVNode($setup["LabelsProfitability"], { link: $setup.url_signe_qualite }, {
        img: withCtx(() => [
          createBaseVNode("img", { src: $setup.qualiLabels }, null, 8, _hoisted_4$9)
        ]),
        title: withCtx(() => [
          _hoisted_5$8
        ]),
        icon: withCtx(() => [
          createBaseVNode("div", _hoisted_6$6, [
            createBaseVNode("img", {
              src: $setup.qualibat,
              alt: "",
              class: "h-10 w-10"
            }, null, 8, _hoisted_7$5),
            createBaseVNode("img", {
              src: $setup.qualitenr,
              alt: "",
              class: "h-10 w-[79px]"
            }, null, 8, _hoisted_8$3),
            createBaseVNode("img", {
              src: $setup.qualifelec,
              alt: "",
              class: "h-10 w-[34px]"
            }, null, 8, _hoisted_9$2)
          ])
        ]),
        _: 1
      }, 8, ["link"]),
      createVNode($setup["LabelsProfitability"], { link: $setup.url_choisir_modele_eco }, {
        img: withCtx(() => [
          createBaseVNode("img", { src: $setup.profitability }, null, 8, _hoisted_10$2)
        ]),
        title: withCtx(() => [
          _hoisted_11$2
        ]),
        icon: withCtx(() => [
          _hoisted_12$2
        ]),
        _: 1
      }, 8, ["link"])
    ])
  ]);
}
_sfc_main$a.__file = "src/components/results/GoFurther.vue";
const GoFurther = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/GoFurther.vue"]]);
const goToAmber = "/cooperation_jn_solar/main/assets/icon-external-link-amber.ef102a2b.svg";
const information = "/cooperation_jn_solar/main/assets/icon-information-grey.353858a2.svg";
const energies = "/cooperation_jn_solar/main/assets/energies.d96e6fdb.svg";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "EnergiesRennes",
  setup(__props, { expose }) {
    expose();
    const energies_link = getStringFromConfig("link.energies_link");
    const vilaine_link = getStringFromConfig("link.vilaine_link");
    function goToEnergiesInfo() {
      window.open(energies_link, "_blank");
    }
    function goToVilaineInfo() {
      window.open(vilaine_link, "_blank");
    }
    const __returned__ = { energies_link, vilaine_link, goToEnergiesInfo, goToVilaineInfo, get goToAmber() {
      return goToAmber;
    }, get goToBlack() {
      return goToBlack;
    }, get information() {
      return information;
    }, get energies() {
      return energies;
    }, ButtonVisitWebsite };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " Contacter des associations locales ", -1);
const _hoisted_3$8 = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_4$8 = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-[18px]" };
const _hoisted_5$7 = ["src"];
const _hoisted_6$5 = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_7$4 = { class: "font-dm-sans text-base font-medium text-neutral-900" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("strong", { class: "underline" }, " \xC9nergies du pays de Rennes ", -1);
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = { class: "flex flex-row gap-3 border border-neutral-300 rounded-lg px-2 py-[29px]" };
const _hoisted_11$1 = ["src"];
const _hoisted_12$1 = { class: "font-dm-sans text-sm font-medium text-slate-900" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("strong", { class: "underline" }, "l'association Soleil sur Vilaine", -1);
const _hoisted_14$1 = ["src"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    _hoisted_2$9,
    createBaseVNode("div", _hoisted_3$8, [
      createBaseVNode("div", _hoisted_4$8, [
        createBaseVNode("img", {
          src: $setup.energies,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToEnergiesInfo()),
          class: "cursor-pointer"
        }, null, 8, _hoisted_5$7)
      ]),
      createBaseVNode("div", _hoisted_6$5, [
        createBaseVNode("p", _hoisted_7$4, [
          createBaseVNode("span", {
            tabindex: "0",
            class: "inline-flex items-center cursor-pointer font-medium",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.goToEnergiesInfo()),
            onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => $setup.goToEnergiesInfo(), ["enter"]))
          }, [
            _hoisted_8$2,
            createBaseVNode("img", {
              src: $setup.goToBlack,
              class: "w-[14px] h-[14px] ml-1"
            }, null, 8, _hoisted_9$1)
          ], 32),
          createTextVNode(" est une association citoyenne pour le d\xE9veloppement du solaire photovolta\xEFque sur Rennes et sa r\xE9gion. ")
        ]),
        createVNode($setup["ButtonVisitWebsite"], {
          id: "energiesButton",
          link: $setup.energies_link
        }, null, 8, ["link"])
      ])
    ]),
    createBaseVNode("div", _hoisted_10$1, [
      createBaseVNode("img", {
        src: $setup.information,
        class: "w-[18px] h-[18px] ml-1"
      }, null, 8, _hoisted_11$1),
      createBaseVNode("p", _hoisted_12$1, [
        createTextVNode(" Pour Acign\xE9 et Br\xE9c\xE9, il existe aussi "),
        createBaseVNode("span", {
          id: "vilaine",
          tabindex: "0",
          class: "inline-flex items-center cursor-pointer font-medium",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.goToVilaineInfo()),
          onKeydown: _cache[4] || (_cache[4] = withKeys(($event) => $setup.goToVilaineInfo(), ["enter"]))
        }, [
          _hoisted_13$1,
          createBaseVNode("img", {
            src: $setup.goToAmber,
            class: "w-[14px] h-[14px] ml-1"
          }, null, 8, _hoisted_14$1)
        ], 32)
      ])
    ])
  ]);
}
_sfc_main$9.__file = "src/components/results/EnergiesRennes.vue";
const EnergiesRennes = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/EnergiesRennes.vue"]]);
const solarCoop = "/cooperation_jn_solar/main/assets/solar-coop.98d55091.svg";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SolarCoop",
  setup(__props, { expose }) {
    expose();
    const solar_coop_link = getStringFromConfig("link.solar_coop_link");
    function goToSolarCoopInfo() {
      window.open(solar_coop_link, "_blank");
    }
    const __returned__ = { solar_coop_link, goToSolarCoopInfo, get solarCoop() {
      return solarCoop;
    }, ButtonVisitWebsite };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " \xCAtre accompagn\xE9 dans mon projet ", -1);
const _hoisted_3$7 = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_4$7 = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8" };
const _hoisted_5$6 = ["src"];
const _hoisted_6$4 = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-base font-normal" }, " Vous pouvez vous faire accompagner par la structure citoyenne Solarcoop qui vous aidera \xE0 trouver la meilleure installation. ", -1);
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    _hoisted_2$8,
    createBaseVNode("div", _hoisted_3$7, [
      createBaseVNode("div", _hoisted_4$7, [
        createBaseVNode("img", {
          src: $setup.solarCoop,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToSolarCoopInfo()),
          class: "cursor-pointer",
          id: "solarCoopImg"
        }, null, 8, _hoisted_5$6)
      ]),
      createBaseVNode("div", _hoisted_6$4, [
        _hoisted_7$3,
        createVNode($setup["ButtonVisitWebsite"], { link: $setup.solar_coop_link }, null, 8, ["link"])
      ])
    ])
  ]);
}
_sfc_main$8.__file = "src/components/results/SolarCoop.vue";
const SolarCoop = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/SolarCoop.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SunshineInformation",
  props: {
    selectedRoof: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const addressStore = useAddressStore();
    const __returned__ = { addressStore, props, get potentiel() {
      return potentiel;
    }, RoofInformationsBox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = { class: "flex flex-col gap-3 w-full h-fit bg-white rounded-xl mx-auto font-dm-sans shadow-md p-6" };
const _hoisted_2$7 = { class: "flex flex-row items-center gap-2 ml-1" };
const _hoisted_3$6 = ["src"];
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre ensoleillement ", -1);
const _hoisted_5$5 = { class: "px-2 mt-2" };
const _hoisted_6$3 = {
  class: "font-normal text-xs mb-4",
  id: "div-address"
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    createBaseVNode("div", _hoisted_2$7, [
      createBaseVNode("img", {
        src: $setup.potentiel,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_3$6),
      _hoisted_4$6
    ]),
    createBaseVNode("div", _hoisted_5$5, [
      createBaseVNode("div", _hoisted_6$3, toDisplayString($setup.addressStore.address), 1),
      createVNode($setup["RoofInformationsBox"], {
        roofSurface: $setup.props.selectedRoof,
        isDisplayBox: false
      }, null, 8, ["roofSurface"])
    ])
  ]);
}
_sfc_main$7.__file = "src/components/results/SunshineInformation.vue";
const SunshineInformation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/SunshineInformation.vue"]]);
const electricityProduction = "/cooperation_jn_solar/main/assets/electricity-production.9c5b9609.svg";
const equalCircle = "/cooperation_jn_solar/main/assets/equal-circle.e63a7b98.svg";
const plusCircle = "/cooperation_jn_solar/main/assets/plus-circle.06d4a9d9.svg";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AutocalsolResultGlobal",
  props: {
    injected: { type: Number, required: true },
    autoConsumed: { type: Number, required: true },
    production: { type: Number, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get electricityProduction() {
      return electricityProduction;
    }, get equalCircle() {
      return equalCircle;
    }, get plusCircle() {
      return plusCircle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$6 = { class: "flex flex-col mt-5 items-center" };
const _hoisted_2$6 = ["src"];
const _hoisted_3$5 = { class: "flex flex-row relative mb-5" };
const _hoisted_4$5 = { class: "absolute left-[212px] top-[80px] z-30" };
const _hoisted_5$4 = ["src"];
const _hoisted_6$2 = { class: "absolute left-[445px] top-[80px] z-30" };
const _hoisted_7$2 = ["src"];
const _hoisted_8$1 = { class: "mt-8 font-dm-sans relative mr-12" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-amber-500 px-3 rounded-full w-fit absolute left-[26%] -top-3 py-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Production ")
], -1);
const _hoisted_10 = { class: "flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-lg bg-orange-50 border border-orange-300 px-6 py-4" };
const _hoisted_11 = { class: "font-bold text-3xl mt-2" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-base" }, " kWh/an ", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] text-sm font-medium text-center h-[60px]" }, " d\u2019\xE9lectricit\xE9 produite par votre installation photovolta\xEFque ", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] mt-4 text-xs font-bold text-amber-600 text-center h-[48px]" }, " Un panneau r\xE9alise encore 80% de sa production au bout de 30 ans ", -1);
const _hoisted_15 = { class: "mt-8 font-dm-sans relative" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-emerald-500 px-3 rounded-full w-fit absolute left-[12%] -top-3 py-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Autoconsommation ")
], -1);
const _hoisted_17 = { class: "h-[250px] w-max-[250px] flex flex-col justify-center items-center rounded-l-lg bg-green-50 border border-r-0 border-green-400 px-6 py-4" };
const _hoisted_18 = { class: "font-bold text-3xl mt-2" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-base" }, " kWh/an ", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] text-sm font-medium text-center h-[60px]" }, [
  /* @__PURE__ */ createTextVNode(" d\u2019\xE9lectricit\xE9 produite et consomm\xE9e sur place "),
  /* @__PURE__ */ createBaseVNode("br")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] mt-4 text-xs font-bold text-emerald-600 text-center h-[48px]" }, [
  /* @__PURE__ */ createTextVNode(" Part \xE0 d\xE9duire de votre facture fournisseur "),
  /* @__PURE__ */ createBaseVNode("br")
], -1);
const _hoisted_22 = { class: "mt-8 font-dm-sans relative" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-indigo-600 px-3 rounded-full w-fit absolute left-[26%] -top-3 py-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Revente ")
], -1);
const _hoisted_24 = { class: "flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-r-lg bg-violet-50 border border-l-0 border-indigo-300 px-6 py-4" };
const _hoisted_25 = { class: "font-bold text-3xl mt-2" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-base" }, " kWh/an ", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] text-sm font-medium text-center h-[60px]" }, " d\u2019\xE9lectricit\xE9 vendue et inject\xE9e sur le r\xE9seau ", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] mt-4 text-xs font-bold text-indigo-600 text-center h-[48px]" }, " Revente selon un tarif garanti sur 20 ans ", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-black px-3 text-center rounded-full absolute right-0 top-[265px] w-[418px] py-1" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Vos \xE9conomies ")
], -1);
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createBaseVNode("img", {
      src: $setup.electricityProduction,
      alt: ""
    }, null, 8, _hoisted_2$6),
    createBaseVNode("div", _hoisted_3$5, [
      createBaseVNode("div", _hoisted_4$5, [
        createBaseVNode("img", {
          src: $setup.equalCircle,
          alt: ""
        }, null, 8, _hoisted_5$4)
      ]),
      createBaseVNode("div", _hoisted_6$2, [
        createBaseVNode("img", {
          src: $setup.plusCircle,
          alt: ""
        }, null, 8, _hoisted_7$2)
      ]),
      createBaseVNode("div", _hoisted_8$1, [
        _hoisted_9,
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("span", _hoisted_11, toDisplayString(Math.round($setup.props.production)), 1),
          _hoisted_12,
          _hoisted_13,
          _hoisted_14
        ])
      ]),
      createBaseVNode("div", _hoisted_15, [
        _hoisted_16,
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("span", _hoisted_18, toDisplayString(Math.round($setup.props.autoConsumed)), 1),
          _hoisted_19,
          _hoisted_20,
          _hoisted_21
        ])
      ]),
      createBaseVNode("div", _hoisted_22, [
        _hoisted_23,
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("span", _hoisted_25, toDisplayString(Math.round($setup.props.injected)), 1),
          _hoisted_26,
          _hoisted_27,
          _hoisted_28
        ])
      ]),
      _hoisted_29
    ])
  ]);
}
_sfc_main$6.__file = "src/components/results/AutocalsolResultGlobal.vue";
const AutocalsolResultGlobal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/AutocalsolResultGlobal.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NeighbourhoodData",
  setup(__props, { expose }) {
    expose();
    const districtStore = useDistrictStore();
    function keepDecimals(float, numberOfDecimals) {
      const roundFloat = float.toFixed(numberOfDecimals);
      return roundFloat;
    }
    const __returned__ = { districtStore, keepDecimals, get warning() {
      return warning;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "flex flex-row px-4 py-[19px] gap-3 bg-amber-50 border border-amber-200 font-dm-sans text-amber-900 rounded-lg font normal text-sm" };
const _hoisted_2$5 = ["src"];
const _hoisted_3$4 = {
  class: "font-bold",
  id: "number-panel"
};
const _hoisted_4$4 = {
  class: "font-bold",
  id: "district-production"
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("img", {
      src: $setup.warning,
      class: "w-5 h-5 my-auto"
    }, null, 8, _hoisted_2$5),
    createBaseVNode("p", null, [
      createTextVNode(" Cette installation contribuerait \xE0 la transition \xE9nerg\xE9tique de votre quartier/commune qui dispose de "),
      createBaseVNode("span", _hoisted_3$4, toDisplayString($setup.districtStore.districtNumberInstallations), 1),
      createTextVNode(" sites de production photovolta\xEFque repr\xE9sentant annuellement "),
      createBaseVNode("span", _hoisted_4$4, toDisplayString($setup.keepDecimals($setup.districtStore.districtProduction, 1)) + " MWh.", 1)
    ])
  ]);
}
_sfc_main$5.__file = "src/components/results/NeighbourhoodData.vue";
const NeighbourhoodData = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/NeighbourhoodData.vue"]]);
function sortedHoursWith3amStart(data) {
  const after3hours = [];
  const before3hours = [];
  data.forEach((element) => {
    if (element[0] >= "03:00:00") {
      after3hours.push(element[1]);
    } else {
      before3hours.push(element[1]);
    }
  });
  return after3hours.concat(before3hours);
}
const STUFFING_PRECISION = 10;
function stuffingData(data) {
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    newData.push(data[i]);
    if (i + 1 === data.length) {
      break;
    }
    const item1 = data[i];
    const item2 = data[i + 1];
    let step = 0;
    let newItem = 0;
    for (let y = 1; y < STUFFING_PRECISION; y++) {
      if (item1 < item2) {
        step = (item2 - item1) / STUFFING_PRECISION * y;
        newItem = item1 + step;
      } else {
        step = (item1 - item2) / STUFFING_PRECISION * y;
        newItem = item1 - step;
      }
      newData.push(newItem);
    }
  }
  return newData;
}
function convertDataForGraph(data) {
  const newData = sortedHoursWith3amStart(data);
  return stuffingData(newData);
}
function calculateIntersectionData(productionData, consommationData) {
  return productionData.map((value, index) => {
    return Math.min(value, consommationData[index]);
  });
}
function stuffingXAxis(xAxis) {
  const newXAxis = [];
  for (let i = 0; i < xAxis.length; i++) {
    newXAxis.push(xAxis[i]);
    if (i + 1 === xAxis.length) {
      break;
    }
    for (let y = 1; y < STUFFING_PRECISION; y++) {
      newXAxis.push("");
    }
  }
  return newXAxis;
}
function generateXAxis() {
  const baseHours = [
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
    "0h",
    "1h",
    "2h"
  ];
  return stuffingXAxis(baseHours);
}
function generateTickPositions(xAxis) {
  const tickPositions = [];
  xAxis.forEach((element, index) => {
    if (element.match("h")) {
      tickPositions.push(index);
    }
  });
  return tickPositions;
}
const sun = "/cooperation_jn_solar/main/assets/sun.4d65a1b2.svg";
const moon = "/cooperation_jn_solar/main/assets/moon.814eba27.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AutocalsolResultGraph",
  props: {
    consoByHour: { type: Array, required: true },
    prodByHour: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const productionData = convertDataForGraph(props.prodByHour);
    const consommationData = convertDataForGraph(props.consoByHour);
    const intersectionData = calculateIntersectionData(
      productionData,
      consommationData
    );
    const xAxis = generateXAxis();
    const tickPositions = generateTickPositions(xAxis);
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "areaspline",
          width: 730,
          height: 400,
          marginLeft: 30
        },
        title: {
          text: "Production et consommation journali\xE8re"
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories: xAxis,
          labels: {
            useHTML: true,
            formatter: function() {
              if (this.value === "")
                return "";
              return this.value === "12h" || this.value === "0h" ? `<div style="width: 2px; height: 15px; background-color: black;" />` : `<span style="font-size: 9px;">${this.value}</span>`;
            }
          },
          rotation: 0,
          tickPositions,
          tickInterval: 1
        },
        yAxis: {
          title: {
            text: "Energie (kWh)",
            align: "high",
            rotation: 0,
            offset: 0,
            y: -20,
            x: 70,
            style: {
              fontSize: "11px",
              fontWeight: "bold"
            }
          },
          labels: {
            enabled: false
          },
          lineWidth: 1,
          gridLineWidth: 0
        },
        tooltip: {
          enabled: false
        },
        plotOptions: {
          areaspline: {
            marker: {
              enabled: false
            },
            states: {
              inactive: {
                opacity: 1
              },
              hover: {
                enabled: false
              }
            }
          }
        },
        series: [
          {
            name: "Consommation",
            data: consommationData,
            color: "#D1FAE5",
            lineColor: "#0F766E",
            fillOpacity: 0.6
          },
          {
            name: "Production",
            lineColor: "#F59E0B",
            color: "#4F46E5",
            data: productionData,
            fillOpacity: 0.7,
            lineWidth: 4
          },
          {
            name: "Intersection",
            data: intersectionData,
            color: "#10B981",
            lineWidth: 0,
            fillOpacity: 1
          }
        ],
        credits: {
          position: {
            y: -50
          }
        }
      };
    });
    const __returned__ = { props, productionData, consommationData, intersectionData, xAxis, tickPositions, chartOptions, get sun() {
      return sun;
    }, get moon() {
      return moon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "relative ml-1" };
const _hoisted_2$4 = ["src"];
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "border-l-2 border-dashed h-[270px] mx-4 absolute left-[284px] top-[90px] z-30" }, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm absolute top-[385px] left-[287px] z-30" }, " Midi ", -1);
const _hoisted_5$3 = ["src"];
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("div", { class: "border-l-2 border-dashed h-[270px] mx-4 absolute left-[642px] top-[90px] z-30" }, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm absolute top-[385px] left-[640px] z-30" }, " Minuit ", -1);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="flex flex-row font-dm-sans ml-10 mb-4 mt-10"><div class="font-normal text-sm border-amber-500 border-l-4 pl-3"> Production </div><div class="font-normal text-sm border-teal-700 border-l-4 pl-3 ml-6"> Consommation </div><div class="flex flex-row ml-6"><div class="bg-emerald-500 w-6 h-6 rounded-sm"></div><span class="font-normal text-sm ml-3"> Autoconsommation </span></div><div class="flex flex-row ml-6"><div class="bg-indigo-600 w-6 h-6 rounded-sm"></div><span class="font-normal text-sm ml-3"> Revente </span></div></div>', 1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_highcharts = resolveComponent("highcharts");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$4, [
      createVNode(_component_highcharts, {
        options: $setup.chartOptions,
        ref: "chart"
      }, null, 8, ["options"]),
      createBaseVNode("img", {
        class: "absolute top-[50px] left-[282px] z-30",
        src: $setup.sun,
        alt: ""
      }, null, 8, _hoisted_2$4),
      _hoisted_3$3,
      _hoisted_4$3,
      createBaseVNode("img", {
        class: "absolute top-[50px] left-[640px] z-30",
        src: $setup.moon,
        alt: ""
      }, null, 8, _hoisted_5$3),
      _hoisted_6$1,
      _hoisted_7$1
    ]),
    _hoisted_8
  ], 64);
}
_sfc_main$4.__file = "src/components/results/AutocalsolResultGraph.vue";
const AutocalsolResultGraph = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/AutocalsolResultGraph.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AutocalsolResult",
  props: {
    autocalsolResult: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get economies() {
      return economies;
    }, AutocalsolResultGlobal, NeighbourhoodData, AutocalsolResultGraph };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl p-6 shadow-md" };
const _hoisted_2$3 = { class: "flex flex-row items-center gap-2" };
const _hoisted_3$2 = ["src"];
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre production d'\xE9nergie ", -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-xl mt-10" }, " Comment r\xE9duire au maximum sa facture d'\xE9lectricit\xE9 ? ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "font-normal text-sm" }, " Votre production solaire varie selon la course du soleil. La nuit, votre consommation est int\xE9gralement soutir\xE9e au r\xE9seau. Pour r\xE9duire au maximum votre facture d'\xE9lectricit\xE9, il vous faut adapter vos habitudes de consommation, par exemple mettre en route vos appareils \xE9lectriques en journ\xE9e au moment de la production photovolta\xEFque. ", -1);
const _hoisted_7 = { class: "border border-slate-300 rounded-md w-[760px]" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("img", {
        src: $setup.economies,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_3$2),
      _hoisted_4$2
    ]),
    createVNode($setup["AutocalsolResultGlobal"], {
      injected: $setup.props.autocalsolResult.consoAnnualInjected,
      autoConsumed: $setup.props.autocalsolResult.consoAnnualAutoConsumed,
      production: $setup.props.autocalsolResult.consoAnnualInjected + $setup.props.autocalsolResult.consoAnnualAutoConsumed
    }, null, 8, ["injected", "autoConsumed", "production"]),
    _hoisted_5$2,
    _hoisted_6,
    createBaseVNode("div", _hoisted_7, [
      createVNode($setup["AutocalsolResultGraph"], {
        prodByHour: $setup.props.autocalsolResult.prodByHour,
        consoByHour: $setup.props.autocalsolResult.consoByHour
      }, null, 8, ["prodByHour", "consoByHour"])
    ]),
    createVNode($setup["NeighbourhoodData"])
  ]);
}
_sfc_main$3.__file = "src/components/results/AutocalsolResult.vue";
const AutocalsolResult = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/AutocalsolResult.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  width: "16",
  height: "20",
  viewBox: "0 0 16 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13 6.78516H14.4286C14.618 6.78516 14.7997 6.86041 14.9337 6.99437C15.0676 7.12832 15.1429 7.31 15.1429 7.49944V18.2137C15.1429 18.4032 15.0676 18.5849 14.9337 18.7188C14.7997 18.8528 14.618 18.928 14.4286 18.928H1.57143C1.38199 18.928 1.20031 18.8528 1.06636 18.7188C0.932402 18.5849 0.857147 18.4032 0.857147 18.2137V7.49944C0.857147 7.31 0.932402 7.12832 1.06636 6.99437C1.20031 6.86041 1.38199 6.78516 1.57143 6.78516H3",
  stroke: "white",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 1.07129V12.4999",
  stroke: "white",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5.14285 9.64258L8 12.4997L10.8571 9.64258",
  stroke: "white",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$2,
  _hoisted_3$1,
  _hoisted_4$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$1);
}
_sfc_main$2.__file = "src/assets/icons/components/IconDownload.vue";
const IconDownload = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/assets/icons/components/IconDownload.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PdfSimulation",
  props: {
    selectedRoof: { type: null, required: true },
    autocalsolResult: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const isLoading = ref(false);
    async function exportToPDF() {
      isLoading.value = true;
      try {
        const pdfBuffer = await apiPdfService.getPdf(props.autocalsolResult);
        const blob = new Blob([pdfBuffer], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "solar-simulation.pdf";
        link.click();
      } catch (error) {
        console.error("Error downloading PDF:", error);
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    }
    const __returned__ = { isLoading, props, exportToPDF, UiSpinnerLoading, get UiButton() {
      return rt;
    }, IconDownload };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  ref: "document",
  class: "pdf-container"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base" }, " T\xE9l\xE9charger en PDF ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createVNode($setup["UiButton"], {
      class: "ui-btn-primary gap-3 px-4 py-3 h-12 w-fit items-center ml-auto",
      icon: $setup.IconDownload,
      disabled: $setup.isLoading,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.exportToPDF()),
      id: "nextButtonPopup"
    }, {
      default: withCtx(() => [
        _hoisted_2$1,
        $setup.isLoading ? (openBlock(), createBlock($setup["UiSpinnerLoading"], { key: 0 })) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["disabled"])
  ], 512);
}
_sfc_main$1.__file = "src/components/results/PdfSimulation.vue";
const PdfSimulation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/PdfSimulation.vue"]]);
class ApiIrisService {
  async getCodeIris(lat, lon) {
    const data = await apiService.callApiGet(`/api/codeiris/${lat}/${lon}`);
    return data;
  }
}
const apiIrisService = new ApiIrisService();
async function gettingIrisCode(lat, lon) {
  const irisCode = await apiIrisService.getCodeIris(lat, lon);
  return irisCode;
}
async function gettingDistrictDatas(codeIris) {
  const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
    codeIris
  );
  return districtDatas;
}
async function getDistrictDatas() {
  const addressStore = useAddressStore();
  const districtStore = useDistrictStore();
  const irisCode = await gettingIrisCode(
    addressStore.latitude.toString(),
    addressStore.longitude.toString()
  );
  if (irisCode === null || irisCode == 0) {
    return;
  }
  districtStore.setDistrictIrisCode(irisCode);
  const districtDatas = await gettingDistrictDatas(irisCode);
  districtStore.setDistrictProduction(districtDatas.totalProduction);
  districtStore.setDistrictNumberInstallations(
    districtDatas.totalPhotovoltaicSites
  );
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResultsView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const roofsStore = useRoofsStore();
    const autocalsolStore = useAutocalsolStore();
    const solarPanelStore = useSolarPanelStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["simulation-results"]);
      getDistrictDatas();
    });
    const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof();
    const autocalsolResult = autocalsolStore.autocalsolResult;
    const __returned__ = { viewStore, roofsStore, autocalsolStore, solarPanelStore, selectedRoof, autocalsolResult, ConsumptionInformation, ProductionInformation, GoFurther, EnergiesRennes, SolarCoop, SunshineInformation, AutocalsolResult, LargeFooter, PdfSimulation, get legalList() {
      return legalList;
    }, HeaderEndSimulation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-slate-100 w-full overflow-y-scroll" };
const _hoisted_2 = { class: "flex flex-row mx-auto w-full gap-6 justify-center" };
const _hoisted_3 = { class: "w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6 pt-[205px]" };
const _hoisted_4 = { class: "w-[55%] max-w-[800px] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50 pt-[120px]" };
const _hoisted_5 = { class: "mx-16 py-10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["HeaderEndSimulation"]),
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        $setup.selectedRoof !== void 0 ? (openBlock(), createBlock($setup["SunshineInformation"], {
          key: 0,
          "selected-roof": $setup.selectedRoof
        }, null, 8, ["selected-roof"])) : createCommentVNode("v-if", true),
        $setup.solarPanelStore.currentNumberSolarPanel > 0 ? (openBlock(), createBlock($setup["ProductionInformation"], {
          key: 1,
          "current-num-solar-panel": $setup.solarPanelStore.currentNumberSolarPanel
        }, null, 8, ["current-num-solar-panel"])) : createCommentVNode("v-if", true),
        createVNode($setup["ConsumptionInformation"])
      ]),
      createBaseVNode("div", _hoisted_4, [
        $setup.selectedRoof !== void 0 && $setup.autocalsolResult !== null ? (openBlock(), createBlock($setup["PdfSimulation"], {
          key: 0,
          "selected-roof": $setup.selectedRoof,
          autocalsolResult: $setup.autocalsolResult
        }, null, 8, ["selected-roof", "autocalsolResult"])) : createCommentVNode("v-if", true),
        $setup.autocalsolResult !== null ? (openBlock(), createBlock($setup["AutocalsolResult"], {
          key: 1,
          autocalsolResult: $setup.autocalsolResult
        }, null, 8, ["autocalsolResult"])) : createCommentVNode("v-if", true),
        createVNode($setup["GoFurther"]),
        createVNode($setup["SolarCoop"]),
        createVNode($setup["EnergiesRennes"])
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createVNode($setup["LargeFooter"], {
        class: "mt-auto",
        legalList: $setup.legalList
      }, null, 8, ["legalList"])
    ])
  ]);
}
_sfc_main.__file = "src/views/SimulationResultsView.vue";
const SimulationResultsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationResultsView.vue"]]);
export {
  SimulationResultsView as default
};
