import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.91b9a27d.js";
import { U as UiSurfaceNumber } from "./UiSurfaceNumber.2f87a6a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./right-flat-arrow.6196ad91.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSurfaceNumber.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSurfaceNumber };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Surface Number",
    group: "roof-selected-information"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiSurfaceNumber"], {
        class: "w-[402px] h-[100px]",
        totalArea: 90,
        favorableArea: 44
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/roof_selection/UiSurfaceNumber.story.vue";
const UiSurfaceNumber_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roof_selection/UiSurfaceNumber.story.vue"]]);
export {
  UiSurfaceNumber_story as default
};
