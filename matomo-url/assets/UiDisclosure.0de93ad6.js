import { as as defineComponent, ay as ref, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aK as renderSlot, aE as withKeys, aF as createCommentVNode } from "./vendor.7e168ba4.js";
import { i as iconArrowDown, a as iconArrowUp } from "./arrow-up.e2a6014f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiDisclosure",
  setup(__props, { expose }) {
    expose();
    const displayContents = ref(false);
    const __returned__ = { displayContents, get iconArrowDown() {
      return iconArrowDown;
    }, get iconArrowUp() {
      return iconArrowUp;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col bg-slate-100 border border-slate-100 px-4" };
const _hoisted_2 = { class: "flex flex-row" };
const _hoisted_3 = { class: "flex flex-row items-center justify-center h-14" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 0,
  class: "mb-2 flex flex-row"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "title")
      ]),
      createBaseVNode("div", {
        class: "ml-auto flex flex-row items-center justify-center w-11 h-full cursor-pointer",
        tabindex: "0",
        onKeydown: _cache[0] || (_cache[0] = withKeys(($event) => $setup.displayContents = !$setup.displayContents, ["enter"])),
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.displayContents = !$setup.displayContents)
      }, [
        !$setup.displayContents ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: $setup.iconArrowDown,
          class: "w-4 h-4"
        }, null, 8, _hoisted_4)) : (openBlock(), createElementBlock("img", {
          key: 1,
          src: $setup.iconArrowUp,
          class: "w-4 h-4"
        }, null, 8, _hoisted_5))
      ], 32)
    ]),
    $setup.displayContents ? (openBlock(), createElementBlock("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "contents")
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main.__file = "src/components/ui/UiDisclosure.vue";
const UiDisclosure = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiDisclosure.vue"]]);
export {
  UiDisclosure as U
};
