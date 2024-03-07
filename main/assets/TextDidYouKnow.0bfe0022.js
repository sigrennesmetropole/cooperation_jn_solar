import { as as defineComponent, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aD as createTextVNode } from "./vendor.5b209f97.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconExternalLink = "/cooperation_jn_solar/main/assets/icon-external-link.8fd3b0b8.svg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextDidYouKnow",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get iconExternalLink() {
      return iconExternalLink;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", { class: "mt-5 mb-3 font-dm-sans font-bold text-xl leading-7 text-black" }, " Le saviez-vous ? ", -1);
const _hoisted_2 = { class: "font-dm-sans font-normal text-sm text-black" };
const _hoisted_3 = {
  href: "https://metropole.rennes.fr/le-plan-climat-de-rennes-metropole",
  target: "_blank",
  class: "underline inline-flex items-center"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("strong", null, " Plan Climat Air Energie Territorial (PCAET) \xA0", -1);
const _hoisted_5 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", _hoisted_2, [
      createTextVNode(" Le "),
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createBaseVNode("img", {
          src: $setup.iconExternalLink,
          class: "w-[10px] h-[10px] text-undeline"
        }, null, 8, _hoisted_5)
      ]),
      createTextVNode(` marque l'engagement du territoire de Rennes Metropole dans la lutte contre le r\xE9chauffement climatique et la transition vers un territoire "post-carbone". `)
    ])
  ]);
}
_sfc_main.__file = "src/components/pcaet/TextDidYouKnow.vue";
const TextDidYouKnow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/TextDidYouKnow.vue"]]);
export {
  TextDidYouKnow as T
};
