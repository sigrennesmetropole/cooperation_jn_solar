import { as as defineComponent, a$ as ot, aw as openBlock, au as createBlock, b0 as nt, aB as createElementBlock, aC as createBaseVNode, b1 as onMounted, ax as createVNode, aF as createCommentVNode, aW as Fragment } from "./vendor.204e41f7.js";
import { B as ButtonWithCheckboxBegin } from "./ButtonWithCheckboxBegin.52a4e9dc.js";
import { l as legalList, U as UiSolarPanelLogo, u as useViewsStore } from "./UiHeaderFullScreen.story.9f6fce7d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { T as TermsOfUsePopup } from "./TermsOfUsePopup.1f77692f.js";
import { u as usePanelsStore } from "./panels.7c223249.js";
import { v as viewList } from "./views.model.93fd8cf1.js";
import { u as usePopUpStore } from "./popUpStore.4e1b1c14.js";
import "./CheckBox.90efe807.js";
import "./home.9d801ce0.js";
import "./configService.ef79f8db.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FooterAreaLink",
  setup(__props, { expose }) {
    expose();
    const openLink = (link) => {
      window.open(link, "_blank");
    };
    const __returned__ = { openLink, get FooterArea() {
      return ot;
    }, get legalList() {
      return legalList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["FooterArea"], {
    class: "mt-auto",
    onOpenLink: _cache[0] || (_cache[0] = ($event) => $setup.openLink($event)),
    legalList: $setup.legalList
  }, null, 8, ["legalList"]);
}
_sfc_main$3.__file = "src/components/home/FooterAreaLink.vue";
const FooterAreaLink = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/FooterAreaLink.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UiSolarPanelTitle",
  setup(__props, { expose }) {
    expose();
    const title = "Cadastre Solaire";
    const abstract = "Projetez-vous en tant que producteur d\u2019\xE9lectricit\xE9 gr\xE2ce \xE0 l\u2019\xE9nergie solaire photovolta\xEFque.";
    const __returned__ = { title, abstract, UiSolarPanelLogo, get UiAbstractTitle() {
      return nt;
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props, { expose }) {
    expose();
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const popUpStore = usePopUpStore();
    onMounted(() => {
      viewStore.setCurrentView(viewList["home"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = false;
    });
    const __returned__ = { panelsStore, viewStore, popUpStore, ButtonWithCheckboxBegin, FooterAreaLink, UiSolarPanelTitle, ProcessSteps, TermsOfUsePopup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["UiSolarPanelTitle"]),
    createVNode($setup["ProcessSteps"]),
    createVNode($setup["ButtonWithCheckboxBegin"]),
    $setup.popUpStore.isDisplayTermsOfUse ? (openBlock(), createBlock($setup["TermsOfUsePopup"], {
      key: 0,
      onClose: _cache[0] || (_cache[0] = ($event) => $setup.popUpStore.closeTermsOfUse())
    })) : createCommentVNode("v-if", true),
    createVNode($setup["FooterAreaLink"])
  ], 64);
}
_sfc_main.__file = "src/views/HomeView.vue";
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
