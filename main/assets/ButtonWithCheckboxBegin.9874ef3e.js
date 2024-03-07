import { ay as defineStore, az as ref, as as defineComponent, aA as useRouter, aw as openBlock, aB as createElementBlock, ax as createVNode, av as withCtx, aC as createBaseVNode, aD as createTextVNode, aE as createCommentVNode } from "./vendor.84b2ee0c.js";
import { C as CheckBox } from "./CheckBox.dfe5c8e4.js";
import { u as useHomeStore } from "./home.6200dd73.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const usePopUpStore = defineStore("popUpStore", () => {
  const isDisplayTermsOfUse = ref(false);
  function displayTermsOfUse() {
    isDisplayTermsOfUse.value = true;
  }
  function closeTermsOfUse() {
    isDisplayTermsOfUse.value = false;
  }
  return {
    isDisplayTermsOfUse,
    displayTermsOfUse,
    closeTermsOfUse
  };
});
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
    const __returned__ = { checked, displayError, router, homeRouter, popUpStore, isCheckBoxOnError, isCheckboxChecked, clickButtonBegin, checkboxChange, changeError, CheckBox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "font-dm-sans font-normal text-base leading-6 color-black" };
const _hoisted_3 = { class: "flex p-0 gap-3 mt-4" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-bold" }, " Commencer ", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = {
  key: 0,
  class: "text-sm font-normal"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode($setup["CheckBox"], {
      isOnError: $setup.isCheckBoxOnError,
      onCheckBoxChange: _cache[1] || (_cache[1] = ($event) => $setup.checkboxChange($event))
    }, {
      text: withCtx(() => [
        createBaseVNode("span", _hoisted_2, [
          createTextVNode("J'ai lu et j'accepte les "),
          createBaseVNode("span", {
            class: "underline decoration-1 cursor-pointer",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.popUpStore.displayTermsOfUse())
          }, " conditions d'utilisation. ")
        ])
      ]),
      _: 1
    }, 8, ["isOnError"]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("button", {
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.clickButtonBegin()),
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_5),
      $setup.displayError && !$setup.checked ? (openBlock(), createElementBlock("span", _hoisted_6, " Veuillez cocher la case ci-dessus pour accepter les conditions ")) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "src/components/home/ButtonWithCheckboxBegin.vue";
const ButtonWithCheckboxBegin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ButtonWithCheckboxBegin.vue"]]);
export {
  ButtonWithCheckboxBegin as B
};
