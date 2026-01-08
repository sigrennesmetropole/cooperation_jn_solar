import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aC as createTextVNode } from "./vendor.f0c3e9de.js";
import { i as iconExternalLink, a as iconDelete } from "./icon-delete.7df02bd2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextDidYouKnow",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get iconExternalLink() {
      return iconExternalLink;
    }, get iconDelete() {
      return iconDelete;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row mb-3" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "grow font-dm-sans font-bold text-xl leading-7 text-black" }, " Le saviez-vous ? ", -1);
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "font-dm-sans font-medium text-sm text-black -tracking-[.01em]" };
const _hoisted_5 = {
  href: "https://metropole.rennes.fr/le-plan-climat-de-rennes-metropole",
  target: "_blank",
  class: "underline inline-flex items-center"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("strong", null, " Plan Climat Air Energie Territorial (PCAET) \xA0", -1);
const _hoisted_7 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      createBaseVNode("button", {
        class: "items-center",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
      }, [
        createBaseVNode("img", {
          src: $setup.iconDelete,
          alt: "",
          class: "w-4 self-start"
        }, null, 8, _hoisted_3)
      ])
    ]),
    createBaseVNode("p", _hoisted_4, [
      createTextVNode(" Le "),
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createBaseVNode("img", {
          src: $setup.iconExternalLink,
          class: "w-[10px] h-[10px] text-undeline"
        }, null, 8, _hoisted_7)
      ]),
      createTextVNode(` \xA0\xA0 marque l'engagement du territoire de Rennes Metropole dans la lutte contre le r\xE9chauffement climatique et la transition vers un territoire "post-carbone". `)
    ])
  ]);
}
_sfc_main.__file = "src/components/roof_selection/TextDidYouKnow.vue";
const TextDidYouKnow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/TextDidYouKnow.vue"]]);
export {
  TextDidYouKnow as T
};
