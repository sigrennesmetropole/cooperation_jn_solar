import { aw as defineComponent, ax as ref, ar as openBlock, as as createElementBlock, at as createBaseVNode, ay as withDirectives, aH as vModelText, aD as resolveComponent, aB as createBlock, aE as withCtx, aF as createVNode } from "./vendor.9ec4e138.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconTarget = "/cooperation_jn_solar/main/assets/target.dd3bcf09.svg";
const iconMagnifyingGlass = "/cooperation_jn_solar/main/assets/magnifying-glass.f5c4aa9e.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiSearchBar",
  setup(__props, { expose }) {
    expose();
    const search = ref("");
    const __returned__ = { search, get iconTarget() {
      return iconTarget;
    }, get iconMagnifyingGlass() {
      return iconMagnifyingGlass;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-center h-11 shadow-lg rounded p-0" };
const _hoisted_2 = { class: "flex flex-row items-center justify-center w-10 h-full" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200" };
const _hoisted_5 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("img", {
        src: $setup.iconTarget,
        class: "w-4 h-4"
      }, null, 8, _hoisted_3)
    ]),
    withDirectives(createBaseVNode("input", {
      class: "w-full h-full rounded-l-none rounded-r-lg p-2 text-base font-medium font-dm-sans placeholder-black",
      type: "text",
      placeholder: "Entrez votre adresse ici",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.search = $event)
    }, null, 512), [
      [vModelText, $setup.search]
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("img", {
        src: $setup.iconMagnifyingGlass,
        class: "w-4 h-4"
      }, null, 8, _hoisted_5)
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiSearchBar.vue";
const UiSearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSearchBar.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSearchBar.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSearchBar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiSearchBar",
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiSearchBar"], { style: { "width": "402px" } })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiSearchBar.story.vue";
const UiSearchBar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSearchBar.story.vue"]]);
export {
  UiSearchBar_story as default
};
