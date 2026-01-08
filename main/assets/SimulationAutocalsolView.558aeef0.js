import { as as defineComponent, ay as ref, aF as computed, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aH as normalizeClass, bh as withDirectives, bi as vModelText, aD as createCommentVNode, ax as createVNode, av as withCtx, aC as createTextVNode, b1 as onBeforeMount, b0 as reactive, a$ as onMounted, aL as toDisplayString } from "./vendor.97f3d699.js";
import { C as CheckBox } from "./CheckBox.373523fb.js";
import { e as expandIcon } from "./expand-small-bigger-retract-smaller-big.77ae2404.js";
import { l as legalList } from "./UiHeaderFullScreen.story.64265db3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { q as qualitenr, a as qualibat, b as qualifelec } from "./qualifelec.9837bdf3.js";
import { u as useViewsStore, v as viewList } from "./views.fa74a026.js";
import { u as useAddressStore } from "./address.e4c455e1.js";
import { u as useRoofsStore } from "./roof.a4e629c7.js";
import { u as useConsumptionAndProductionStore } from "./consumptionAndProduction.995309ab.js";
import "./layers.2499b11f.js";
import { a as SOLAR_PANEL_POWER } from "./solarPanel.model.5b355558.js";
import { u as useSolarPanelStore, a as apiService } from "./solarPanels.dd323833.js";
const deleteCircle = "/cooperation_jn_solar/main/assets/interface-delete-circle.fdda9bfe.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConsumptionEmailResult",
  setup(__props, { expose }) {
    expose();
    const validEmail = ref(true);
    const isCheckBoxOnError = ref(false);
    const userEmail = ref("");
    const isCheckboxChecked = ref(false);
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
      window.open(
        legalList.find((elt) => elt.slug === "confidentialite").link,
        "_blank"
      );
    };
    const __returned__ = { validEmail, isCheckBoxOnError, userEmail, isCheckboxChecked, errorPicto, checkboxChange, changeError, sendEmail, openPrivacy, CheckBox, get expandIcon() {
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
const _hoisted_7$1 = {
  key: 0,
  id: "errorEmail",
  class: "bg-rose-50 border border-rose-200 rounded-lg p-2 text-rose-900 text-sm font-normal"
};
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("p", { class: "font-normal text-base" }, " J'autorise la transmission de mon adresse mail pour l'envoi de ma simulation. Celle-ci ne sera pas conserv\xE9e. ", -1);
const _hoisted_9$1 = { class: "flex flex-row text-neutral-700" };
const _hoisted_10$1 = ["src"];
const _hoisted_11 = { class: "flex flex-row justify-center" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, "Recevoir mon rapport en PDF", -1);
const _hoisted_13 = [
  _hoisted_12
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
        !$setup.validEmail ? (openBlock(), createElementBlock("div", _hoisted_7$1, " Veuillez v\xE9rifier votre adresse mail. ")) : createCommentVNode("v-if", true)
      ]),
      createVNode($setup["CheckBox"], {
        isOnError: $setup.isCheckBoxOnError,
        isChecked: false,
        onCheckBoxChange: _cache[1] || (_cache[1] = ($event) => $setup.checkboxChange($event))
      }, {
        text: withCtx(() => [
          _hoisted_8$1
        ]),
        _: 1
      }, 8, ["isOnError"]),
      createBaseVNode("div", _hoisted_9$1, [
        createBaseVNode("p", null, [
          createTextVNode(" Vous pouvez lire notre "),
          createBaseVNode("span", {
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.openPrivacy()),
            class: "font-medium underline decoration-1 hover:cursor-pointer",
            "data-testid": "privacy-link"
          }, " Politique de confidentialit\xE9 ")
        ]),
        createBaseVNode("img", {
          src: $setup.expandIcon,
          class: "w-3.5 h-3.5 ml-2 mt-1"
        }, null, 8, _hoisted_10$1)
      ]),
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("button", {
          class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-fit",
          onClick: _cache[3] || (_cache[3] = ($event) => $setup.sendEmail())
        }, _hoisted_13)
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
      let selectedRoof = roofsStore.getRoofSurfaceModelOfSelectedPanRoof();
      if (selectedRoof === void 0 || (selectedRoof == null ? void 0 : selectedRoof.inclinaison) === void 0 || (selectedRoof == null ? void 0 : selectedRoof.azimuth) === void 0) {
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
