import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode, aB as createBaseVNode, aC as createTextVNode } from "./vendor.2d008c8d.js";
import { B as BoxStep } from "./BoxStep.9db90682.js";
import { i as installation } from "./installation.1bf16994.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BoxStep.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { BoxStep, get iconInstallation() {
      return installation;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs text-neutral-500" }, " \xC9tape 2 ", -1);
const _hoisted_2 = ["src"];
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelle production d\u2019\xE9lectricit\xE9 "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" est envisageable ici ? ")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans text-white text-base font-medium" }, " Simuler une installation photovolta\xEFque ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "BoxStep",
    group: "simulation-step"
  }, {
    default: withCtx(() => [
      createVNode($setup["BoxStep"], null, {
        nameOfStep: withCtx(() => [
          _hoisted_1
        ]),
        image: withCtx(() => [
          createBaseVNode("img", {
            class: "w-15 h-15 mt-2",
            src: $setup.iconInstallation,
            alt: ""
          }, null, 8, _hoisted_2)
        ]),
        text: withCtx(() => [
          _hoisted_3
        ]),
        buttonContent: withCtx(() => [
          _hoisted_4
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/simulation/BoxStep.story.vue";
const BoxStep_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/BoxStep.story.vue"]]);
export {
  BoxStep_story as default
};
