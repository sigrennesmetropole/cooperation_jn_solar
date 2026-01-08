import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, aC as createTextVNode, aJ as renderSlot, ax as createVNode, av as withCtx, b1 as onBeforeMount, au as createBlock, aD as createCommentVNode } from "./vendor.2f580402.js";
import { u as useViewsStore, v as viewList } from "./views.model.a02db520.js";
import { u as useRoofsStore } from "./roof.757a6c0d.js";
import { u as useConsumptionAndProductionStore } from "./consumptionAndProduction.292f6161.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { g as goToBlack } from "./expand-small-bigger-retract-smaller-big.36b4ec1e.js";
import { q as qualitenr, a as qualibat, b as qualifelec, u as useAutocalsolStore } from "./autocalsol.292dfc6a.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { u as useAddressStore } from "./address.92e94f26.js";
import { R as RoofInformationsBox } from "./RoofInformationsBox.fc7736b0.js";
import { e as economies } from "./economies.0397e19a.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionInformation",
  setup(__props, { expose }) {
    expose();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const __returned__ = { consumptionAndProductionStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$9 = { class: "flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 mx-auto shadow-md" };
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-bold text-base" }, "Votre consommation actuelle", -1);
const _hoisted_3$9 = {
  id: "consumptionValue",
  class: "font-dm-sans font-medium text-sm"
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    _hoisted_2$9,
    createBaseVNode("p", _hoisted_3$9, toDisplayString($setup.consumptionAndProductionStore.annualConsumption) + " kWh/an ", 1)
  ]);
}
_sfc_main$9.__file = "src/components/results/ConsumptionInformation.vue";
const ConsumptionInformation = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ConsumptionInformation.vue"]]);
const photoVoltaique = "/cooperation_jn_solar/main/assets/photo_voltaique.4f440c12.svg";
const goToWhite = "/cooperation_jn_solar/main/assets/icon-external-link-white-thin.77357ea3.svg";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PhotoVoltaique",
  setup(__props, { expose }) {
    expose();
    const PHOTOVOLTAIQUE_LINK = "https://www.photovoltaique.info/fr/";
    function goToPhotovoltaiqueInfo() {
      window.open(PHOTOVOLTAIQUE_LINK, "_blank");
    }
    const __returned__ = { PHOTOVOLTAIQUE_LINK, goToPhotovoltaiqueInfo, get photoVoltaique() {
      return photoVoltaique;
    }, get goToWhite() {
      return goToWhite;
    }, get goToBlack() {
      return goToBlack;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$8 = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_2$8 = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8" };
const _hoisted_3$8 = ["src"];
const _hoisted_4$8 = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_5$6 = { class: "font-dm-sans text-base font-normal" };
const _hoisted_6$6 = /* @__PURE__ */ createBaseVNode("strong", null, " photovoltaique.info \xA0", -1);
const _hoisted_7$4 = ["src"];
const _hoisted_8$4 = ["src"];
const _hoisted_9$4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Visiter le site", -1);
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createBaseVNode("div", _hoisted_2$8, [
      createBaseVNode("img", { src: $setup.photoVoltaique }, null, 8, _hoisted_3$8)
    ]),
    createBaseVNode("div", _hoisted_4$8, [
      createBaseVNode("p", _hoisted_5$6, [
        createTextVNode(" Le site de r\xE9f\xE9rence "),
        createBaseVNode("span", {
          class: "underline inline-flex items-center cursor-pointer font-medium",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToPhotovoltaiqueInfo())
        }, [
          _hoisted_6$6,
          createBaseVNode("img", {
            src: $setup.goToBlack,
            class: "w-[14px] h-[14px]"
          }, null, 8, _hoisted_7$4)
        ]),
        createTextVNode(" regroupe l\u2019essentiel des informations techniques et r\xE9glementaires sur le photovolta\xEFque. ")
      ]),
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.goToPhotovoltaiqueInfo()),
        id: "photovoltaiqueButton",
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
      }, [
        createBaseVNode("img", {
          class: "w-5 h-5",
          src: $setup.goToWhite,
          alt: ""
        }, null, 8, _hoisted_8$4),
        _hoisted_9$4
      ])
    ])
  ]);
}
_sfc_main$8.__file = "src/components/results/PhotoVoltaique.vue";
const PhotoVoltaique = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/PhotoVoltaique.vue"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "LabelsProfitability",
  props: {
    link: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get expandIcon() {
      return goToBlack;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$7 = { class: "flex flex-col gap-6 w-[100%] bg-slate-100 rounded-lg p-6 mx-auto" };
const _hoisted_2$7 = { class: "flex flex-row" };
const _hoisted_3$7 = { class: "underline decoration-1 font-medium text-base" };
const _hoisted_4$7 = ["href"];
const _hoisted_5$5 = ["href"];
const _hoisted_6$5 = ["src"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "img", { class: "rounded-xl" }),
    renderSlot(_ctx.$slots, "title"),
    renderSlot(_ctx.$slots, "icon"),
    createBaseVNode("div", _hoisted_2$7, [
      createBaseVNode("p", _hoisted_3$7, [
        createBaseVNode("a", {
          href: $setup.props.link,
          target: "_blank"
        }, " Acc\xE9der \xE0 la page ", 8, _hoisted_4$7)
      ]),
      createBaseVNode("a", {
        href: $setup.props.link,
        target: "_blank"
      }, [
        createBaseVNode("img", {
          src: $setup.expandIcon,
          class: "w-3.5 h-3.5 ml-2 mt-1"
        }, null, 8, _hoisted_6$5)
      ], 8, _hoisted_5$5)
    ])
  ]);
}
_sfc_main$7.__file = "src/components/results/LabelsProfitability.vue";
const LabelsProfitability = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/LabelsProfitability.vue"]]);
const qualiLabels = "/cooperation_jn_solar/main/assets/quali_labels.18f84d27.svg";
const profitability = "/cooperation_jn_solar/main/assets/profitability.b54a88ee.svg";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GoFurther",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PhotoVoltaique, LabelsProfitability, get qualiLabels() {
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
const _hoisted_1$6 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " Plus d'informations pour concr\xE9tiser votre projet ", -1);
const _hoisted_3$6 = { class: "flex flex-row gap-8" };
const _hoisted_4$6 = ["src"];
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans text-2xl font-bold" }, " 3 labels de qualification pour vous guider dans le choix de votre installateur ", -1);
const _hoisted_6$4 = { class: "py-[18px] px-6 flex flex-row justify-between w-[100%] bg-white rounded-xl" };
const _hoisted_7$3 = ["src"];
const _hoisted_8$3 = ["src"];
const _hoisted_9$3 = ["src"];
const _hoisted_10$2 = ["src"];
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans text-2xl font-bold" }, " Connaitre des ordres de grandeur de co\xFBts et de rentabilit\xE9 d'un projet photovolta\xEFque ", -1);
const _hoisted_12$2 = /* @__PURE__ */ createBaseVNode("div", { class: "h-full" }, null, -1);
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    _hoisted_2$6,
    createVNode($setup["PhotoVoltaique"]),
    createBaseVNode("div", _hoisted_3$6, [
      createVNode($setup["LabelsProfitability"], { link: "https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-installateur/#signes_de_qualite" }, {
        img: withCtx(() => [
          createBaseVNode("img", { src: $setup.qualiLabels }, null, 8, _hoisted_4$6)
        ]),
        title: withCtx(() => [
          _hoisted_5$4
        ]),
        icon: withCtx(() => [
          createBaseVNode("div", _hoisted_6$4, [
            createBaseVNode("img", {
              src: $setup.qualibat,
              alt: "",
              class: "h-10 w-10"
            }, null, 8, _hoisted_7$3),
            createBaseVNode("img", {
              src: $setup.qualitenr,
              alt: "",
              class: "h-10 w-[79px]"
            }, null, 8, _hoisted_8$3),
            createBaseVNode("img", {
              src: $setup.qualifelec,
              alt: "",
              class: "h-10 w-[34px]"
            }, null, 8, _hoisted_9$3)
          ])
        ]),
        _: 1
      }),
      createVNode($setup["LabelsProfitability"], { link: "https://www.photovoltaique.info/fr/preparer-un-projet/quelles-demarches-realiser/choisir-son-modele-economique/" }, {
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
      })
    ])
  ]);
}
_sfc_main$6.__file = "src/components/results/GoFurther.vue";
const GoFurther = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/GoFurther.vue"]]);
const goToAmber = "/cooperation_jn_solar/main/assets/icon-external-link-amber.ef102a2b.svg";
const energies = "/cooperation_jn_solar/main/assets/energies.d96e6fdb.svg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EnergiesRennes",
  setup(__props, { expose }) {
    expose();
    const ENERGIES_LINK = "https://energiesdupaysderennes.fr/";
    const VILAINE_LINK = "https://soleilsurvilaine.centralesvillageoises.fr/";
    function goToEnergiesInfo() {
      window.open(ENERGIES_LINK, "_blank");
    }
    function goToVilaineInfo() {
      window.open(VILAINE_LINK, "_blank");
    }
    const __returned__ = { ENERGIES_LINK, VILAINE_LINK, goToEnergiesInfo, goToVilaineInfo, get goToWhite() {
      return goToWhite;
    }, get goToAmber() {
      return goToAmber;
    }, get goToBlack() {
      return goToBlack;
    }, get energies() {
      return energies;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " Contacter des associations locales ", -1);
const _hoisted_3$5 = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_4$5 = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-[18px]" };
const _hoisted_5$3 = ["src"];
const _hoisted_6$3 = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_7$2 = { class: "font-dm-sans text-base font-normal" };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("strong", null, " \xC9nergies du pays de Rennes \xA0", -1);
const _hoisted_9$2 = ["src"];
const _hoisted_10$1 = ["src"];
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Visiter le site", -1);
const _hoisted_12$1 = { class: "font-dm-sans text-base font-normal" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("strong", null, "l'association Soleil sur Vilaine \xA0", -1);
const _hoisted_14$1 = ["src"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    _hoisted_2$5,
    createBaseVNode("div", _hoisted_3$5, [
      createBaseVNode("div", _hoisted_4$5, [
        createBaseVNode("img", {
          src: $setup.energies,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToEnergiesInfo()),
          class: "cursor-pointer"
        }, null, 8, _hoisted_5$3)
      ]),
      createBaseVNode("div", _hoisted_6$3, [
        createBaseVNode("p", _hoisted_7$2, [
          createBaseVNode("span", {
            class: "underline inline-flex items-center cursor-pointer font-medium",
            onClick: _cache[1] || (_cache[1] = ($event) => $setup.goToEnergiesInfo())
          }, [
            _hoisted_8$2,
            createBaseVNode("img", {
              src: $setup.goToBlack,
              class: "w-[14px] h-[14px]"
            }, null, 8, _hoisted_9$2)
          ]),
          createTextVNode(" est une association citoyenne pour le d\xE9veloppement du solaire photovolta\xEFque sur Rennes et sa r\xE9gion. ")
        ]),
        createBaseVNode("button", {
          onClick: _cache[2] || (_cache[2] = ($event) => $setup.goToEnergiesInfo()),
          id: "energiesButton",
          class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
        }, [
          createBaseVNode("img", {
            class: "w-5 h-5",
            src: $setup.goToWhite,
            alt: ""
          }, null, 8, _hoisted_10$1),
          _hoisted_11$1
        ])
      ])
    ]),
    createBaseVNode("div", null, [
      createBaseVNode("p", _hoisted_12$1, [
        createTextVNode(" Pour Acign\xE9 et Br\xE9c\xE9, il existe aussi "),
        createBaseVNode("span", {
          id: "vilaine",
          class: "underline inline-flex items-center cursor-pointer font-medium",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.goToVilaineInfo())
        }, [
          _hoisted_13$1,
          createBaseVNode("img", {
            src: $setup.goToAmber,
            class: "w-[14px] h-[14px]"
          }, null, 8, _hoisted_14$1)
        ])
      ])
    ])
  ]);
}
_sfc_main$5.__file = "src/components/results/EnergiesRennes.vue";
const EnergiesRennes = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/EnergiesRennes.vue"]]);
const solarCoop = "/cooperation_jn_solar/main/assets/solar-coop.98d55091.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SolarCoop",
  setup(__props, { expose }) {
    expose();
    const SOLAR_COOP_LINK = "https://www.solarcoop.fr/";
    function goToSolarCoopInfo() {
      window.open(SOLAR_COOP_LINK, "_blank");
    }
    const __returned__ = { SOLAR_COOP_LINK, goToSolarCoopInfo, get goToWhite() {
      return goToWhite;
    }, get solarCoop() {
      return solarCoop;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-6 w-[100%] h-fit bg-white rounded-xl py-6 px-8 mx-auto shadow-md" };
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl" }, " \xCAtre accompagn\xE9 dans mon projet ", -1);
const _hoisted_3$4 = { class: "flex flex-row gap-8 w-[100%] h-fit bg-white" };
const _hoisted_4$4 = { class: "flex flex-row w-[50%] justify-center h-fit border border-neutral-300 rounded-lg px-5 py-8" };
const _hoisted_5$2 = ["src"];
const _hoisted_6$2 = { class: "flex flex-col w-[50%] h-fit" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans text-base font-normal" }, " Vous pouvez vous faire accompagner par la structure citoyenne Solarcoop qui vous aidera \xE0 trouver la meilleure installation. ", -1);
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Visiter le site", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$4,
    createBaseVNode("div", _hoisted_3$4, [
      createBaseVNode("div", _hoisted_4$4, [
        createBaseVNode("img", {
          src: $setup.solarCoop,
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.goToSolarCoopInfo()),
          class: "cursor-pointer"
        }, null, 8, _hoisted_5$2)
      ]),
      createBaseVNode("div", _hoisted_6$2, [
        _hoisted_7$1,
        createBaseVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.goToSolarCoopInfo()),
          id: "solarCoopButton",
          class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 w-fit items-center flex flex-row justify-center mt-4"
        }, [
          createBaseVNode("img", {
            class: "w-5 h-5",
            src: $setup.goToWhite,
            alt: ""
          }, null, 8, _hoisted_8$1),
          _hoisted_9$1
        ])
      ])
    ])
  ]);
}
_sfc_main$4.__file = "src/components/results/SolarCoop.vue";
const SolarCoop = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/SolarCoop.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$3 = { class: "flex flex-col gap-3 w-full h-fit bg-white rounded-xl p-6 mx-auto shadow-md font-dm-sans" };
const _hoisted_2$3 = { class: "flex flex-row justify-center items-center gap-2" };
const _hoisted_3$3 = ["src"];
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre ensoleillement ", -1);
const _hoisted_5$1 = { class: "px-2 mt-2" };
const _hoisted_6$1 = {
  class: "font-normal text-xs mb-4",
  id: "div-address"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createBaseVNode("img", {
        src: $setup.potentiel,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_3$3),
      _hoisted_4$3
    ]),
    createBaseVNode("div", _hoisted_5$1, [
      createBaseVNode("div", _hoisted_6$1, toDisplayString($setup.addressStore.address), 1),
      createVNode($setup["RoofInformationsBox"], {
        roofSurface: $setup.props.selectedRoof,
        isDisplayBox: false
      }, null, 8, ["roofSurface"])
    ])
  ]);
}
_sfc_main$3.__file = "src/components/results/SunshineInformation.vue";
const SunshineInformation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/SunshineInformation.vue"]]);
const electricityProduction = "/cooperation_jn_solar/main/assets/electricity-production.9c5b9609.svg";
const equalCircle = "/cooperation_jn_solar/main/assets/equal-circle.e63a7b98.svg";
const plusCircle = "/cooperation_jn_solar/main/assets/plus-circle.06d4a9d9.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$2 = { class: "flex flex-col mt-5 items-center" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "flex flex-row relative mb-5" };
const _hoisted_4$2 = { class: "absolute left-[212px] top-[80px] z-30" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "absolute left-[445px] top-[80px] z-30" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "mt-8 font-dm-sans relative mr-12" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-amber-500 px-3 py-1 rounded-full w-fit absolute left-[26%] -top-3" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Production ")
], -1);
const _hoisted_10 = { class: "flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-lg bg-orange-50 border border-orange-300 px-6 py-4" };
const _hoisted_11 = { class: "font-bold text-3xl mt-2" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-base" }, " kWh/an ", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] text-sm font-medium text-center h-[60px]" }, " d\u2019\xE9lectricit\xE9 produite par votre installation photovolta\xEFque ", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] mt-4 text-xs font-bold text-amber-600 text-center h-[48px]" }, " Un panneau r\xE9alise encore 80% de sa production au bout de 30 ans ", -1);
const _hoisted_15 = { class: "mt-8 font-dm-sans relative" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-emerald-500 px-3 py-1 rounded-full w-fit absolute left-[12%] -top-3" }, [
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
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-indigo-600 px-3 py-1 rounded-full w-fit absolute left-[26%] -top-3" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Revente ")
], -1);
const _hoisted_24 = { class: "flex flex-col h-[250px] w-max-[250px] justify-center items-center rounded-r-lg bg-violet-50 border border-l-0 border-indigo-300 px-6 py-4" };
const _hoisted_25 = { class: "font-bold text-3xl mt-2" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-base" }, " kWh/an ", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] text-sm font-medium text-center h-[60px]" }, " d\u2019\xE9lectricit\xE9 vendue et inject\xE9e sur le r\xE9seau ", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "w-[160px] mt-4 text-xs font-bold text-indigo-600 text-center h-[48px]" }, " Revente selon un tarif garanti sur 20 ans ", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("div", { class: "bg-black px-3 py-1 text-center rounded-full absolute right-0 top-[265px] w-[418px]" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Vos \xE9conomies ")
], -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("img", {
      src: $setup.electricityProduction,
      alt: ""
    }, null, 8, _hoisted_2$2),
    createBaseVNode("div", _hoisted_3$2, [
      createBaseVNode("div", _hoisted_4$2, [
        createBaseVNode("img", {
          src: $setup.equalCircle,
          alt: ""
        }, null, 8, _hoisted_5)
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("img", {
          src: $setup.plusCircle,
          alt: ""
        }, null, 8, _hoisted_7)
      ]),
      createBaseVNode("div", _hoisted_8, [
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
_sfc_main$2.__file = "src/components/results/AutocalsolResultGlobal.vue";
const AutocalsolResultGlobal = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/AutocalsolResultGlobal.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AutocalsolResult",
  props: {
    autocalsolResult: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props, get economies() {
      return economies;
    }, AutocalsolResultGlobal };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 shadow-md" };
const _hoisted_2$1 = { class: "flex flex-row items-center gap-2" };
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre production d'\xE9nergie ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("img", {
        src: $setup.economies,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_3$1),
      _hoisted_4$1
    ]),
    createVNode($setup["AutocalsolResultGlobal"], {
      injected: $setup.props.autocalsolResult.consoAnnualInjected,
      autoConsumed: $setup.props.autocalsolResult.consoAnnualAutoConsumed,
      production: $setup.props.autocalsolResult.consoAnnualInjected + $setup.props.autocalsolResult.consoAnnualAutoConsumed
    }, null, 8, ["injected", "autoConsumed", "production"])
  ]);
}
_sfc_main$1.__file = "src/components/results/AutocalsolResult.vue";
const AutocalsolResult = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/AutocalsolResult.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResultsView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const roofsStore = useRoofsStore();
    const autocalsolStore = useAutocalsolStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["simulation-results"]);
    });
    const selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof();
    const autocalsolResult = autocalsolStore.autocalsolResult;
    const __returned__ = { viewStore, roofsStore, autocalsolStore, selectedRoof, autocalsolResult, ConsumptionInformation, GoFurther, EnergiesRennes, SolarCoop, SunshineInformation, AutocalsolResult };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-slate-100 w-full overflow-y-auto" };
const _hoisted_2 = { class: "flex flex-row mx-auto pt-[184px] w-full gap-6 justify-center overflow-y-scroll" };
const _hoisted_3 = { class: "w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6" };
const _hoisted_4 = { class: "w-[55%] max-w-[800px] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        $setup.selectedRoof !== void 0 ? (openBlock(), createBlock($setup["SunshineInformation"], {
          key: 0,
          "selected-roof": $setup.selectedRoof
        }, null, 8, ["selected-roof"])) : createCommentVNode("v-if", true),
        createVNode($setup["ConsumptionInformation"])
      ]),
      createBaseVNode("div", _hoisted_4, [
        $setup.autocalsolResult !== null ? (openBlock(), createBlock($setup["AutocalsolResult"], {
          key: 0,
          autocalsolResult: $setup.autocalsolResult
        }, null, 8, ["autocalsolResult"])) : createCommentVNode("v-if", true),
        createVNode($setup["GoFurther"]),
        createVNode($setup["SolarCoop"]),
        createVNode($setup["EnergiesRennes"])
      ])
    ])
  ]);
}
_sfc_main.__file = "src/views/SimulationResultsView.vue";
const SimulationResultsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationResultsView.vue"]]);
export {
  SimulationResultsView as default
};
