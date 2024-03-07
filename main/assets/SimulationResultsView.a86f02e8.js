import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aL as toDisplayString, ax as createVNode, aC as createTextVNode, aK as defineStore, ay as ref, b1 as onBeforeMount, au as createBlock, aD as createCommentVNode } from "./vendor.6a09d00b.js";
import { u as useViewsStore, v as viewList } from "./views.6b3ae85e.js";
import { u as useConsumptionAndProductionStore } from "./consumptionAndProduction.50d8815a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { u as useAddressStore } from "./address.a5cf2e2e.js";
import { R as RoofInformationsBox } from "./RoofInformationsBox.264a80e0.js";
import { e as economies } from "./economies.0397e19a.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionInformation",
  setup(__props, { expose }) {
    expose();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const __returned__ = { consumptionAndProductionStore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-2 w-[100%] h-fit bg-white rounded-xl p-6 mx-auto shadow-md" };
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-bold text-base" }, "Votre consommation actuelle", -1);
const _hoisted_3$4 = {
  id: "consumptionValue",
  class: "font-dm-sans font-medium text-sm"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$4,
    createBaseVNode("p", _hoisted_3$4, toDisplayString($setup.consumptionAndProductionStore.annualConsumption) + " kWh/an ", 1)
  ]);
}
_sfc_main$4.__file = "src/components/results/ConsumptionInformation.vue";
const ConsumptionInformation = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/results/ConsumptionInformation.vue"]]);
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
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre ensoleillement ", -1);
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
      _hoisted_4$2
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
const _hoisted_4$1 = { class: "absolute left-[212px] top-[80px] z-30" };
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
      createBaseVNode("div", _hoisted_4$1, [
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
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-2xl" }, " Votre production d'\xE9nergie ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("img", {
        src: $setup.economies,
        alt: "",
        class: "w-11 h-10"
      }, null, 8, _hoisted_3$1),
      _hoisted_4
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
const useAutocalsolStore = defineStore("autocalsolStore", () => {
  const autocalsolResult = ref(null);
  function setAutocalsolResult(result) {
    autocalsolResult.value = result;
  }
  return {
    autocalsolResult,
    setAutocalsolResult
  };
});
const prodByMonth = [
  64.44433,
  99.13261000000001,
  144.42502,
  168.67434999999998,
  181.50236999999998,
  174.7185599999998,
  180.5744000000002,
  177.9466799999999,
  150.32645000000002,
  106.20817999999997,
  80.62160999999999,
  64.20049000000002
];
const consoByMonth = [
  98.38449999999975,
  88.47349999999992,
  88.51374999999993,
  79.55749999999992,
  77.37025000000011,
  71.44900000000007,
  69.97024999999998,
  70.07050000000007,
  74.5775000000001,
  84.72975000000004,
  90.41074999999992,
  99.7052499999998
];
const prodByHour = [
  [
    "2011-12-31 23:00:00",
    0
  ],
  [
    "2012-01-01 00:00:00",
    "0.0"
  ],
  [
    "2012-01-01 01:00:00",
    "0.0"
  ],
  [
    "2012-01-01 02:00:00",
    "0.0"
  ],
  [
    "2012-01-01 03:00:00",
    "0.0"
  ],
  [
    "2012-01-01 04:00:00",
    "0.0"
  ],
  [
    "2012-01-01 05:00:00",
    "0.0"
  ],
  [
    "2012-01-01 06:00:00",
    "0.0"
  ],
  [
    "2012-01-01 07:00:00",
    "0.0"
  ],
  [
    "2012-01-01 08:00:00",
    "121.48"
  ],
  [
    "2012-01-01 09:00:00",
    "28.98"
  ],
  [
    "2012-01-01 10:00:00",
    "176.79"
  ],
  [
    "2012-01-01 11:00:00",
    "67.48"
  ],
  [
    "2012-01-01 12:00:00",
    "62.17"
  ],
  [
    "2012-01-01 13:00:00",
    "26.01"
  ],
  [
    "2012-01-01 14:00:00",
    "12.5"
  ],
  [
    "2012-01-01 15:00:00",
    "0.0"
  ],
  [
    "2012-01-01 16:00:00",
    "0.0"
  ],
  [
    "2012-01-01 17:00:00",
    "0.0"
  ],
  [
    "2012-01-01 18:00:00",
    "0.0"
  ],
  [
    "2012-01-01 19:00:00",
    "0.0"
  ],
  [
    "2012-01-01 20:00:00",
    "0.0"
  ],
  [
    "2012-01-01 21:00:00",
    "0.0"
  ],
  [
    "2012-01-01 22:00:00",
    "0.0"
  ],
  [
    "2012-01-01 23:00:00",
    0
  ],
  [
    "2012-01-02 00:00:00",
    "0.0"
  ]
];
const consoByHour = [
  [
    "2011-12-31 23:00:00",
    102
  ],
  [
    "2011-12-31 23:30:00",
    97
  ],
  [
    "2012-01-01 00:00:00",
    92
  ],
  [
    "2012-01-01 00:30:00",
    87
  ],
  [
    "2012-01-01 01:00:00",
    81
  ],
  [
    "2012-01-01 01:30:00",
    78
  ],
  [
    "2012-01-01 02:00:00",
    75
  ],
  [
    "2012-01-01 02:30:00",
    75
  ],
  [
    "2012-01-01 03:00:00",
    76
  ],
  [
    "2012-01-01 03:30:00",
    76
  ],
  [
    "2012-01-01 04:00:00",
    78
  ],
  [
    "2012-01-01 04:30:00",
    79
  ],
  [
    "2012-01-01 05:00:00",
    81
  ],
  [
    "2012-01-01 05:30:00",
    85
  ],
  [
    "2012-01-01 06:00:00",
    93
  ],
  [
    "2012-01-01 06:30:00",
    107
  ],
  [
    "2012-01-01 07:00:00",
    125
  ],
  [
    "2012-01-01 07:30:00",
    141
  ],
  [
    "2012-01-01 08:00:00",
    156
  ],
  [
    "2012-01-01 08:30:00",
    170
  ],
  [
    "2012-01-01 09:00:00",
    181
  ],
  [
    "2012-01-01 09:30:00",
    189
  ],
  [
    "2012-01-01 10:00:00",
    197
  ],
  [
    "2012-01-01 10:30:00",
    200
  ],
  [
    "2012-01-01 11:00:00",
    195
  ],
  [
    "2012-01-01 11:30:00",
    186
  ],
  [
    "2012-01-01 12:00:00",
    175
  ],
  [
    "2012-01-01 12:30:00",
    166
  ],
  [
    "2012-01-01 13:00:00",
    158
  ],
  [
    "2012-01-01 13:30:00",
    151
  ],
  [
    "2012-01-01 14:00:00",
    145
  ],
  [
    "2012-01-01 14:30:00",
    142
  ],
  [
    "2012-01-01 15:00:00",
    143
  ],
  [
    "2012-01-01 15:30:00",
    149
  ],
  [
    "2012-01-01 16:00:00",
    159
  ],
  [
    "2012-01-01 16:30:00",
    172
  ],
  [
    "2012-01-01 17:00:00",
    186
  ],
  [
    "2012-01-01 17:30:00",
    197
  ],
  [
    "2012-01-01 18:00:00",
    202
  ],
  [
    "2012-01-01 18:30:00",
    204
  ],
  [
    "2012-01-01 19:00:00",
    204
  ],
  [
    "2012-01-01 19:30:00",
    194
  ],
  [
    "2012-01-01 20:00:00",
    177
  ],
  [
    "2012-01-01 20:30:00",
    161
  ],
  [
    "2012-01-01 21:00:00",
    146
  ],
  [
    "2012-01-01 21:30:00",
    131
  ],
  [
    "2012-01-01 22:00:00",
    117
  ],
  [
    "2012-01-01 22:30:00",
    105
  ],
  [
    "2012-01-01 23:00:00",
    94
  ],
  [
    "2012-01-01 23:30:00",
    87
  ],
  [
    "2012-01-02 00:00:00",
    82
  ]
];
const consoAnnualInjected = 1175.5365799999984;
const consoAnnualAutoConsumed = 417.2384700000003;
const autocalsolResultExample = {
  prodByMonth,
  consoByMonth,
  prodByHour,
  consoByHour,
  consoAnnualInjected,
  consoAnnualAutoConsumed
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResultsView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const autocalsolStore = useAutocalsolStore();
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["simulation-results"]);
    });
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    const addressStore = useAddressStore();
    autocalsolStore.setAutocalsolResult(autocalsolResultExample);
    const autocalsolResult = autocalsolStore.autocalsolResult;
    consumptionAndProductionStore.setAnnualConsumption(6e3);
    addressStore.setAddress("17, rue de la Finlande, 35000 Rennes");
    const selectedRoof = {
      surface_id: "53123",
      values: [13.832112, 74.012886, 12.155002, 0],
      favorable: 10,
      total: 87,
      orientation: "EST",
      azimuth: 80,
      inclinaison: 1
    };
    const __returned__ = { viewStore, autocalsolStore, consumptionAndProductionStore, addressStore, autocalsolResult, selectedRoof, ConsumptionInformation, SunshineInformation, AutocalsolResult };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row mx-auto mt-[184px] w-full gap-6 justify-center" };
const _hoisted_2 = { class: "w-[25%] max-w-[360px] font-dm-sans font-medium flex flex-col gap-6" };
const _hoisted_3 = { class: "w-[55%] max-w-[800px] font-dm-sans font-medium flex flex-col gap-8 bg-blue-50" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      $setup.selectedRoof !== void 0 ? (openBlock(), createBlock($setup["SunshineInformation"], {
        key: 0,
        "selected-roof": $setup.selectedRoof
      })) : createCommentVNode("v-if", true),
      createVNode($setup["ConsumptionInformation"])
    ]),
    createBaseVNode("div", _hoisted_3, [
      $setup.autocalsolResult !== null ? (openBlock(), createBlock($setup["AutocalsolResult"], {
        key: 0,
        autocalsolResult: $setup.autocalsolResult
      }, null, 8, ["autocalsolResult"])) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "src/views/SimulationResultsView.vue";
const SimulationResultsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationResultsView.vue"]]);
export {
  SimulationResultsView as default
};
