import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.b6f683f6.js";
import { B as ButtonWithCheckboxBegin } from "./ButtonWithCheckboxBegin.7e339087.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./CheckBox.9fe97a1a.js";
import "./home.d7df859c.js";
import "./popUpStore.1b7158e5.js";
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
