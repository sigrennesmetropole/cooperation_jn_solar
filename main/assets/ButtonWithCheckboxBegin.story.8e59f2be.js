import { ar as openBlock, as as createElementBlock, at as createBaseVNode, au as createTextVNode, av as createStaticVNode, aw as defineComponent, ax as ref, ay as useRouter, az as withDirectives, aA as vModelCheckbox, aB as createCommentVNode, aC as createBlock, aD as resolveComponent, aE as withCtx, aF as createVNode } from "./vendor.348fbbc9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  class: "fixed top-0 left-0 w-full h-full z-20",
  style: { "background-color": "rgba(0, 0, 0, 0.75)" }
};
const _hoisted_2$1 = {
  class: "relative flex flex-col mx-auto mt-13 h-[90%] w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto",
  style: { "background-color": "rgba(255, 255, 255, 1)" }
};
const _hoisted_3$1 = { class: "flex flex-row" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-bold" }, "Conditions d\u2019utilisation", -1);
const _hoisted_5$1 = /* @__PURE__ */ createStaticVNode('<p> Rennes M\xE9tropole met \xE0 disposition, via le pr\xE9sent site, un service permettant, sur le territoire de Rennes M\xE9tropole, d&#39;estimer l&#39;exposition solaire de son logement, de simuler le dimensionnement d&#39; une installation photovolta\xEFque et d&#39;en d\xE9duire une estimation de la production d&#39;\xE9nergie associ\xE9e (incluant la part d&#39;\xE9nergie consomm\xE9e sur place et la part vendue et inject\xE9e sur le r\xE9seau en lien avec les niveaux de consommation de l&#39;usager). L\u2019Utilisateur est r\xE9put\xE9 avoir pris connaissance des pr\xE9sentes conditions g\xE9n\xE9rales, qui s&#39;imposent \xE0 tout usager du pr\xE9sent site. L\u2019Utilisateur garantit qu\u2019il n\u2019utilisera pas le site \xE0 des fins illicites ou immorales ou contraire \xE0 leur utilisation initiale. <br><br> Les \xE9quipements (ordinateurs, t\xE9l\xE9phone, moyens de t\xE9l\xE9communication\u2026) permettant l&#39;acc\xE8s au site sont \xE0 la charge exclusive des Utilisateurs, de m\xEAme que les frais de t\xE9l\xE9communications induits par leur utilisation. </p><h4 class="text-2xl font-bold">Services propos\xE9s aux utilisateurs</h4><p><strong>Estimation de l&#39;ensoleillement (ou de l&#39;exposition solaire) en kWh/m2</strong><br><strong>Pr\xE9-dimensionnement d&#39;une installation photovolta\xEFque</strong><br>Les Utilisateurs peuvent acc\xE9der <br><strong>Estimation des \xE9conomie d&#39;\xE9nergie</strong><br><strong>T\xE9l\xE9chargement d&#39;un rapport</strong> <br>L&#39;Utilisateur sera invit\xE9, \xE0 t\xE9l\xE9charger un rapport .pdf reprenant les contenus p\xE9dagogiques et indicateurs obtenus lors de sa simulation. </p>', 3);
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$1, [
      createTextVNode(" > "),
      createBaseVNode("div", _hoisted_2$1, [
        createBaseVNode("div", _hoisted_3$1, [
          _hoisted_4$1,
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
            class: "w-5 border border-black rounded ml-auto"
          }, " x ")
        ]),
        _hoisted_5$1
      ])
    ])
  ]);
}
_sfc_main$2.__file = "src/components/home/TermsOfUsePopup.vue";
const TermsOfUsePopup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/TermsOfUsePopup.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ButtonWithCheckboxBegin",
  setup(__props, { expose }) {
    expose();
    const checked = ref(false);
    const displayError = ref(false);
    const showPopTermOfUse = ref(false);
    const router = useRouter();
    function clickButtonBegin() {
      if (!checked.value) {
        displayError.value = true;
        return;
      }
      displayError.value = false;
      router.push("/map-pcaet");
    }
    const __returned__ = { checked, displayError, showPopTermOfUse, router, clickButtonBegin, TermsOfUsePopup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "flex p-0 gap-3 items-center" };
const _hoisted_3 = { class: "font-normal text-base leading-6 color-black" };
const _hoisted_4 = { class: "flex p-0 gap-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-bold" }, " Commencer ", -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = {
  key: 0,
  class: "text-sm font-normal"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      withDirectives(createBaseVNode("input", {
        type: "checkbox",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.checked = $event),
        class: "shadow-sm w-5 h-5"
      }, null, 512), [
        [vModelCheckbox, $setup.checked]
      ]),
      createBaseVNode("span", _hoisted_3, [
        createTextVNode(" J'ai lu et j'accepte les "),
        createBaseVNode("span", {
          class: "underline decoration-1 cursor-pointer",
          onClick: _cache[1] || (_cache[1] = ($event) => $setup.showPopTermOfUse = true)
        }, " conditions d'utilisation. ")
      ])
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("button", {
        onClick: _cache[2] || (_cache[2] = ($event) => $setup.clickButtonBegin()),
        class: "bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      }, _hoisted_6),
      $setup.displayError && !$setup.checked ? (openBlock(), createElementBlock("span", _hoisted_7, " Veuillez cocher la case ci-dessus pour accepter les conditions ")) : createCommentVNode("v-if", true)
    ]),
    $setup.showPopTermOfUse ? (openBlock(), createBlock($setup["TermsOfUsePopup"], {
      key: 0,
      onClose: _cache[3] || (_cache[3] = ($event) => $setup.showPopTermOfUse = false)
    })) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/components/home/ButtonWithCheckboxBegin.vue";
const ButtonWithCheckboxBegin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ButtonWithCheckboxBegin.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonWithCheckboxBegin.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { ButtonWithCheckboxBegin };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "ButtonWithCheckboxBegin",
    group: "homepage"
  }, {
    default: withCtx(() => [
      createVNode($setup["ButtonWithCheckboxBegin"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/home/ButtonWithCheckboxBegin.story.vue";
const ButtonWithCheckboxBegin_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ButtonWithCheckboxBegin.story.vue"]]);
export {
  ButtonWithCheckboxBegin_story as default
};
