import { as as defineComponent, ay as ref, az as useRouter, aA as rt, aw as openBlock, aB as createElementBlock, ax as createVNode, av as withCtx, aC as createBaseVNode, aD as createTextVNode, aE as withKeys, aF as createCommentVNode } from "./vendor.7e168ba4.js";
import { C as CheckBox } from "./CheckBox.afef2bdd.js";
import { u as useHomeStore } from "./home.17fdaf89.js";
import { u as usePopUpStore } from "./popUpStore.52e50f7d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const ButtonWithCheckboxBegin_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonWithCheckboxBegin",
  setup(__props, { expose }) {
    expose();
    const checked = ref(false);
    const displayError = ref(false);
    const router = useRouter();
    const homeRouter = useHomeStore();
    const popUpStore = usePopUpStore();
    const isCheckBoxOnError = ref(false);
    const isCheckboxChecked = ref(false);
    function clickButtonBegin() {
      changeError();
      if (!isCheckboxChecked.value) {
        displayError.value = true;
        return;
      }
      displayError.value = false;
      router.push("/roof-selection");
    }
    function checkboxChange(event) {
      isCheckboxChecked.value = event;
      homeRouter.setIsTermOfUseAccepted(event);
      changeError();
    }
    function changeError() {
      isCheckBoxOnError.value = !isCheckboxChecked.value;
      displayError.value = !isCheckboxChecked.value;
      homeRouter.setDisplayError(isCheckBoxOnError.value);
    }
    homeRouter.$subscribe(async () => {
      if (homeRouter.displayError) {
        clickButtonBegin();
      }
    });
    const __returned__ = { checked, displayError, router, homeRouter, popUpStore, isCheckBoxOnError, isCheckboxChecked, clickButtonBegin, checkboxChange, changeError, CheckBox, get UiButton() {
      return rt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "font-dm-sans font-normal text-base leading-6 color-black" };
const _hoisted_3 = { class: "flex p-0 gap-3 mt-4" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Commencer ", -1);
const _hoisted_5 = {
  key: 0,
  class: "text-sm font-normal"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["CheckBox"], {
      isOnError: $setup.isCheckBoxOnError,
      isChecked: false,
      onCheckBoxChange: _cache[2] || (_cache[2] = ($event) => $setup.checkboxChange($event))
    }, {
      text: withCtx(() => [
        createBaseVNode("span", _hoisted_2, [
          createTextVNode("J'ai lu et j'accepte les "),
          createBaseVNode("span", {
            tabindex: "0",
            class: "underline decoration-1 cursor-pointer",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.popUpStore.displayTermsOfUse()),
            onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => $setup.popUpStore.displayTermsOfUse(), ["enter"]))
          }, " conditions d'utilisation. ", 32)
        ])
      ]),
      _: 1
    }, 8, ["isOnError"]),
    createBaseVNode("div", _hoisted_3, [
      createVNode($setup["UiButton"], {
        class: "ui-btn-primary rounded-lg gap-3 px-4 py-3 shrink-0 grow-0 visible",
        onClick: _cache[3] || (_cache[3] = ($event) => $setup.clickButtonBegin())
      }, {
        default: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      }),
      $setup.displayError && !$setup.checked ? (openBlock(), createElementBlock("span", _hoisted_5, " Veuillez cocher la case ci-dessus pour accepter les conditions ")) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "src/components/home/ButtonWithCheckboxBegin.vue";
const ButtonWithCheckboxBegin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ButtonWithCheckboxBegin.vue"]]);
export {
  ButtonWithCheckboxBegin as B
};
