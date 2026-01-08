import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, aB as createBaseVNode, ax as createVNode } from "./vendor.28bc74db.js";
import { U as UiDisclosure } from "./UiDisclosure.dc36e566.js";
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base color-black" }, " Comprendre ses chiffres ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm text-slate-900" }, "Qu\u2019est-ce qu\u2019une surface favorable ?"),
  /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-slate-600 text-justify" }, " La surface favorable est celle recevant suffisamment d'ensoleillement pour accueillir des panneaux solaires soit dans notre simulation un ensoleillement sup\xE9rieur \xE0 1 000 kWh/m2/an. "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-sm text-slate-900" }, "Comment est calcul\xE9 l\u2019ensoleillement ?"),
  /* @__PURE__ */ createBaseVNode("p", { class: "font-dm-sans font-medium text-sm text-slate-600 text-justify" }, " L\u2019ensoleillement ou irradiance est la quantit\xE9 d\u2019\xE9nergie solaire re\xE7ue par le toit chaque ann\xE9e (en kWh/m2/an). Pour son calcul, la course du soleil et l'ombrage, mais aussi les caract\xE9ristiques du toit (orientation, inclinaison, surface) sont pris en compte. Les obstacles comme les chemin\xE9es ne sont pas pris en compte \xE0 ce stade (sauf les gros obstacles). ")
], -1);
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
