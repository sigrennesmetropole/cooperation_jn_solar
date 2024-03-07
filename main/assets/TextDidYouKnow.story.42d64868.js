import { ar as openBlock, as as createElementBlock, aC as Fragment, at as createBaseVNode, au as createTextVNode, aw as defineComponent, aD as resolveComponent, aB as createBlock, aE as withCtx, aF as createVNode } from "./vendor.9d17f1a8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h1", { class: "mt-5 font-dm-sans font-bold text-xl leading-7 text-black" }, " Le saviez-vous ? ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-normal text-sm text-black" }, [
  /* @__PURE__ */ createTextVNode(" Le "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://metropole.rennes.fr/le-plan-climat-de-rennes-metropole",
    target: "_blank",
    class: "underline"
  }, [
    /* @__PURE__ */ createBaseVNode("strong", null, " Plan Climat Air Energie Territorial (PCAET) ")
  ]),
  /* @__PURE__ */ createTextVNode(` marque l'engagement du territoire de Rennes Metropole dans la lutte contre le r\xE9chauffement climatique et la transition vers un territoire "post-carbone". `)
], -1);
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$1,
    _hoisted_2
  ], 64);
}
_sfc_main$1.__file = "src/components/pcaet/TextDidYouKnow.vue";
const TextDidYouKnow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/TextDidYouKnow.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextDidYouKnow.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { TextDidYouKnow };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "px-6 py-8 bg-white flex flex-col gap-2 w-[450px]" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "TextDidYouKnow",
    group: "pcaetpage"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["TextDidYouKnow"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/pcaet/TextDidYouKnow.story.vue";
const TextDidYouKnow_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/pcaet/TextDidYouKnow.story.vue"]]);
export {
  TextDidYouKnow_story as default
};
