import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, aB as createBaseVNode, ax as createVNode } from "./vendor.fce036ea.js";
import { T as TextDidYouKnow } from "./TextDidYouKnow.2db9420b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./icon-delete.7df02bd2.js";
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
_sfc_main.__file = "src/components/roof_selection/TextDidYouKnow.story.vue";
const TextDidYouKnow_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/TextDidYouKnow.story.vue"]]);
export {
  TextDidYouKnow_story as default
};
