import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, aC as createBaseVNode, ax as createVNode } from "./vendor.60314750.js";
import { U as UiDisclosure } from "./UiDisclosure.7b4236f6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./arrow-up.e2a6014f.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiDisclosure.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiDisclosure };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col px-6 py-8 bg-white gap-8 w-[450px]" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base color-black" }, " Comment est calcul\xE9 l\u2019ensoleillement ? ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-sm color-black" }, " L\u2019ensoleillement (ou irradiance) est la quantit\xE9 d\u2019\xE9nergie solaire re\xE7ue par le toit chaque ann\xE9e (en kWh/m2/an). Pour son calcul, la course du soleil et l'ombrage, mais aussi les caract\xE9ristiques du toit (pente, chemin\xE9e, etc.) sont pris en compte. ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiDisclosure",
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["UiDisclosure"], null, {
          title: withCtx(() => [
            _hoisted_2
          ]),
          contents: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiDisclosure.story.vue";
const UiDisclosure_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiDisclosure.story.vue"]]);
export {
  UiDisclosure_story as default
};
