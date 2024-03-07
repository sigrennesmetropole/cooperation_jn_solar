import { ar as defineComponent, av as openBlock, ax as createElementBlock, ay as createBaseVNode, aX as onBeforeMount, aw as createVNode } from "./vendor.6f4bbece.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { u as useViewsStore, v as viewList } from "./views.30d907df.js";
const qualitenr = "/cooperation_jn_solar/main/assets/qualitEnR.fc1b92d2.png";
const qualibat = "/cooperation_jn_solar/main/assets/qualibat.0a759444.png";
const qualifelec = "/cooperation_jn_solar/main/assets/qualifelec.de1e611d.png";
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
const _hoisted_1$1 = { class: "flex flex-col gap-[30px] w-[640px] h-fit bg-white rounded-xl p-8 mx-auto mt-[104px] mb-[91px]" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col gap-4" }, [
  /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl font-bold" }, "Faire appel \xE0 un installateur agr\xE9\xE9"),
  /* @__PURE__ */ createBaseVNode("p", { class: "text-base font-normal" }, " Faites confiance \xE0 l\u2019un des 3 labels de qualification pour vous guider dans le choix de votre installateur. La liste des installateurs agr\xE9\xE9s se trouve sur les sites de chaque organisme de qualification. ")
], -1);
const _hoisted_3 = { class: "px-5 py-3 flex flex-row justify-center" };
const _hoisted_4 = { class: "flex gap-11" };
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationAutocalsolView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    onBeforeMount(() => {
      viewStore.setCurrentView(viewList["simulation"]);
    });
    const __returned__ = { viewStore, CertifiedInstaller };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll" };
const _hoisted_2 = { class: "gap-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["CertifiedInstaller"])
    ])
  ]);
}
_sfc_main.__file = "src/views/SimulationAutocalsolView.vue";
const SimulationAutocalsolView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/SimulationAutocalsolView.vue"]]);
export {
  SimulationAutocalsolView as default
};
