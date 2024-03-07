import { as as defineComponent, az as ref, aF as computed, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aG as normalizeClass, bb as withDirectives, bc as vModelText, ax as createVNode, av as withCtx, aD as createTextVNode, b2 as onBeforeMount, a_ as reactive, aZ as onMounted, aI as toDisplayString } from "./vendor.84b2ee0c.js";
import { C as CheckBox } from "./CheckBox.dfe5c8e4.js";
import { e as expandIcon } from "./expand-small-bigger-retract-smaller-big.77ae2404.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useViewsStore, v as viewList } from "./views.a9fa1f5a.js";
import { u as useAddressStore } from "./layers.adb6fc64.js";
import { u as useRoofsStore, m as mapRoofSurfaceModel } from "./roof.model.41a36b1e.js";
import { u as useSolarPanelStore, b as apiService, a as useConsumptionAndProductionStore } from "./api.f3e73765.js";
import { a as SOLAR_PANEL_POWER } from "./solarPanel.model.ec4479c2.js";
const deleteCircle = "/cooperation_jn_solar/main/assets/interface-delete-circle.fdda9bfe.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionEmailResult",
  setup(__props, { expose }) {
    expose();
    const validEmail = ref(true);
    const isCheckBoxOnError = ref(false);
    const userEmail = ref("");
    const isCheckboxChecked = ref(false);
    const errorEmail = computed(() => {
      if (validEmail.value) {
        return "hidden";
      } else {
        return "bg-rose-50 border border-rose-200 rounded-lg p-2 text-rose-900 text-sm font-normal";
      }
    });
    const errorPicto = computed(() => {
      if (validEmail.value) {
        return "hidden";
      } else {
        return "visible absolute right-3 top-10";
      }
    });
    function checkboxChange(event) {
      isCheckboxChecked.value = event;
      changeError();
    }
    function changeError() {
      isCheckBoxOnError.value = !isCheckboxChecked.value;
    }
    function sendEmail() {
      const email = userEmail.value;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      validEmail.value = emailRegex.test(email);
      changeError();
      if (validEmail.value && !isCheckBoxOnError.value) {
        console.log("send consumption by email");
      }
    }
    const openPrivacy = () => {
      window.open("/legalnotice/confidentialite", "_blank");
    };
    const __returned__ = { validEmail, isCheckBoxOnError, userEmail, isCheckboxChecked, errorEmail, errorPicto, checkboxChange, changeError, sendEmail, openPrivacy, CheckBox, get expandIcon() {
      return expandIcon;
    }, get deleteCircle() {
      return deleteCircle;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-8 px-6 py-12 w-[576px] h-fit bg-slate-50 rounded-xl border border-slate-200" };
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col gap-3 text-center" }, [
  /* @__PURE__ */ createBaseVNode("h4", { class: "text-xl font-bold" }, "Vous ne souhaitez pas attendre ?"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Renseignez votre mail pour recevoir"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode("les r\xE9sultats d\xE8s qu'ils seront pr\xEAts : ")
  ])
], -1);
const _hoisted_3$2 = { class: "flex flex-col gap-6" };
const _hoisted_4$1 = { class: "flex flex-col gap-1.5 relative" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("label", { class: "font-normal" }, "Votre adresse mail", -1);
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("p", { class: "font-normal text-base" }, " J'autorise la transmission de mon adresse mail pour l'envoi de ma simulation. Celle-ci ne sera pas conserv\xE9e. ", -1);
const _hoisted_8$1 = { class: "flex flex-row text-neutral-700" };
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = { class: "flex flex-row justify-center" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, "Recevoir mon rapport en PDF", -1);
const _hoisted_12 = [
  _hoisted_11
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$3,
    createBaseVNode("div", _hoisted_3$2, [
      createBaseVNode("div", _hoisted_4$1, [
        _hoisted_5$1,
        createBaseVNode("div", {
          class: normalizeClass($setup.errorPicto)
        }, [
          createBaseVNode("img", {
            src: $setup.deleteCircle,
            alt: ""
          }, null, 8, _hoisted_6$1)
        ], 2),
        withDirectives(createBaseVNode("input", {
          type: "email",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.userEmail = $event),
          class: "border border-neutral-400 rounded"
        }, null, 512), [
          [vModelText, $setup.userEmail]
        ]),
        createBaseVNode("div", {
          class: normalizeClass($setup.errorEmail)
        }, "Veuillez v\xE9rifier votre adresse mail.", 2)
      ]),
      createVNode($setup["CheckBox"], {
        isOnError: $setup.isCheckBoxOnError,
        onCheckBoxChange: _cache[1] || (_cache[1] = ($event) => $setup.checkboxChange($event))
      }, {
        text: withCtx(() => [
          _hoisted_7$1
        ]),
        _: 1
      }, 8, ["isOnError"]),
      createBaseVNode("div", _hoisted_8$1, [
        createBaseVNode("p", null, [
          createTextVNode(" Vous pouvez lire notre "),
          createBaseVNode("span", {
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.openPrivacy()),
            class: "font-medium underline decoration-1 hover:cursor-pointer"
          }, "Politique de confidentialit\xE9")
        ]),
        createBaseVNode("img", {
          src: $setup.expandIcon,
          class: "w-3.5 h-3.5 ml-2 mt-1"
        }, null, 8, _hoisted_9$1)
      ]),
      createBaseVNode("div", _hoisted_10$1, [
        createBaseVNode("button", {
          class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-fit",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.sendEmail())
        }, _hoisted_12)
      ])
    ])
  ]);
}
_sfc_main$4.__file = "src/components/simulation/ConsumptionEmailResult.vue";
const ConsumptionEmailResult = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/ConsumptionEmailResult.vue"]]);
const Animation = "/cooperation_jn_solar/main/assets/loading_L.3dee35f4.gif";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LoadingAnimation",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get Animation() {
      return Animation;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex flex-col items-center gap-6" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col gap-2" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "font-dm-sans font-bold text-2xl text-center" }, " Le calcul est en cours... "),
  /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-normal text-base text-center" }, [
    /* @__PURE__ */ createTextVNode(" et fait appel \xE0 diff\xE9rents services tiers."),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode("Cela peut prendre jusqu'\xE0 30 secondes. ")
  ])
], -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("img", {
      src: $setup.Animation,
      alt: "",
      class: "w-[354px] h-[180px]"
    }, null, 8, _hoisted_2$2),
    _hoisted_3$1
  ]);
}
_sfc_main$3.__file = "src/components/simulation/LoadingAnimation.vue";
const LoadingAnimation = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/LoadingAnimation.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "WaitingAnimation",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { ConsumptionEmailResult, LoadingAnimation };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex flex-col gap-12 w-[640px] h-fit bg-white rounded-xl p-8 mx-auto mt-[104px] shadow-md" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode($setup["LoadingAnimation"]),
    createVNode($setup["ConsumptionEmailResult"])
  ]);
}
_sfc_main$2.__file = "src/components/simulation/WaitingAnimation.vue";
const WaitingAnimation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/WaitingAnimation.vue"]]);
const qualitenr = "data:image/png;base64,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";
const qualibat = "/cooperation_jn_solar/main/assets/qualibat.804faf5e.avif";
const qualifelec = "/cooperation_jn_solar/main/assets/qualifelec.e8dc1787.png";
const messageWarning = "/cooperation_jn_solar/main/assets/chat-message-warning.ded597ad.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CertifiedInstaller",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get qualitenr() {
      return qualitenr;
    }, get qualibat() {
      return qualibat;
    }, get qualifelec() {
      return qualifelec;
    }, get messageWarning() {
      return messageWarning;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-[30px] w-[640px] h-fit bg-white rounded-xl p-8 mx-auto mb-[91px] shadow-md" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col gap-4" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl font-bold" }, "Faire appel \xE0 un installateur agr\xE9\xE9"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-base font-normal" }, " Faites confiance \xE0 l\u2019un des 3 labels de qualification pour vous guider dans le choix de votre installateur. La liste des installateurs agr\xE9\xE9s se trouve sur les sites de chaque organisme de qualification. ")
], -1);
const _hoisted_3 = { class: "px-5 py-3 flex flex-row justify-center" };
const _hoisted_4 = { class: "flex gap-11 h-[76px]" };
const _hoisted_5 = ["src"];
const _hoisted_6 = ["src"];
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "flex flex-row gap-3 bg-amber-50 border border-amber-200 rounded-lg px-2 py-[19px]" };
const _hoisted_9 = ["src"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "text-sm text-amber-900" }, " Le d\xE9marchage abusif pour l\u2019installation de panneaux solaires est tr\xE8s fr\xE9quent. Il est conseill\xE9 de demander au moins 3 devis avant tout engagement. ", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2$1,
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("img", {
          src: $setup.qualitenr,
          alt: ""
        }, null, 8, _hoisted_5),
        createBaseVNode("img", {
          src: $setup.qualibat,
          alt: ""
        }, null, 8, _hoisted_6),
        createBaseVNode("img", {
          src: $setup.qualifelec,
          alt: ""
        }, null, 8, _hoisted_7)
      ])
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("img", {
        src: $setup.messageWarning,
        alt: "",
        class: "ml-2"
      }, null, 8, _hoisted_9),
      _hoisted_10
    ])
  ]);
}
_sfc_main$1.__file = "src/components/simulation/CertifiedInstaller.vue";
const CertifiedInstaller = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/CertifiedInstaller.vue"]]);
function getPeakPower() {
  const solarPanelStore = useSolarPanelStore();
  const peakPower = solarPanelStore.currentNumberSolarPanel * SOLAR_PANEL_POWER;
  return Math.round(peakPower * 100) / 100;
}
class ApiAutocalsolService {
  async getComputeData(dataAutocalsol) {
    const url = `/api/autocalsol/data-compute?latitude=${dataAutocalsol.latitude}&longitude=${dataAutocalsol.longitude}&slope=${dataAutocalsol.slope}&azimuth=${dataAutocalsol.azimuth}&annual_consumption=${dataAutocalsol.annual_consumption}&peak_power=${dataAutocalsol.peak_power}`;
    const data = await apiService.callApiGet(url);
    return data.compute;
  }
}
const apiAutocalsolService = new ApiAutocalsolService();
function azimuthForAutocalsol(azimuth) {
  if (azimuth <= 180) {
    return -azimuth;
  } else {
    return azimuth - 180;
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationAutocalsolView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const addressStore = useAddressStore();
    const roofsStore = useRoofsStore();
    const consumptionAndProductionStore = useConsumptionAndProductionStore();
    onBeforeMount(() => {
      viewStore.setCurrentView(viewList["end-simulation"]);
    });
    const state = reactive({
      dataAutocalsol: null,
      autocalsolResult: null
    });
    onMounted(async () => {
      let selectedRoof = null;
      if (roofsStore.selectedRoofFeature !== null) {
        selectedRoof = mapRoofSurfaceModel(roofsStore.selectedRoofFeature);
      }
      if (selectedRoof === null || selectedRoof.inclinaison === void 0 || selectedRoof.azimuth === void 0) {
        return;
      }
      const slope = selectedRoof.inclinaison;
      const azimuth = selectedRoof.azimuth;
      state.dataAutocalsol = {
        latitude: addressStore.latitude,
        longitude: addressStore.longitude,
        slope,
        azimuth: azimuthForAutocalsol(azimuth),
        annual_consumption: consumptionAndProductionStore.annualConsumption,
        peak_power: getPeakPower()
      };
      if (state.dataAutocalsol === null) {
        return;
      }
      state.autocalsolResult = await apiAutocalsolService.getComputeData(
        state.dataAutocalsol
      );
      console.log(state.autocalsolResult);
    });
    const __returned__ = { viewStore, addressStore, roofsStore, consumptionAndProductionStore, state, WaitingAnimation, CertifiedInstaller };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll gap-6" };
const _hoisted_2 = { class: "flex flex-col gap-12 w-[640px] h-[600px] bg-white rounded-xl p-8 mx-auto mt-[104px] shadow-md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, toDisplayString($setup.state.dataAutocalsol), 1),
    createVNode($setup["WaitingAnimation"]),
    createVNode($setup["CertifiedInstaller"])
  ]);
}
_sfc_main.__file = "src/views/SimulationAutocalsolView.vue";
const SimulationAutocalsolView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationAutocalsolView.vue"]]);
export {
  SimulationAutocalsolView as default
};
