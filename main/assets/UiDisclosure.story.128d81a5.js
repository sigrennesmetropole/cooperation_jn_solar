import { aw as defineComponent, ax as ref, ar as openBlock, as as createElementBlock, at as createBaseVNode, aG as renderSlot, aB as createCommentVNode, aD as resolveComponent, aC as createBlock, aE as withCtx, aF as createVNode } from "./vendor.348fbbc9.js";
import { i as iconArrowDown, a as iconArrowUp } from "./arrow-up.e2a6014f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _hoisted_1$1 = { class: "flex flex-col bg-slate-100 border border-slate-100" };
const _hoisted_2$1 = { class: "flex flex-row" };
const _hoisted_3$1 = { class: "flex flex-row items-center justify-center ml-4 h-14" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
const _hoisted_6 = {
  key: 0,
  class: "ml-4 mb-2 flex flex-row"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "title")
      ]),
      createBaseVNode("div", {
        class: "ml-auto flex flex-row items-center justify-center w-11 h-full cursor-pointer",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.displayContents = !$setup.displayContents)
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
      ])
    ]),
    $setup.displayContents ? (openBlock(), createElementBlock("div", _hoisted_6, [
      renderSlot(_ctx.$slots, "contents")
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiDisclosure.vue";
const UiDisclosure = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiDisclosure.vue"]]);
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-medium text-base color-black" }, " Comment est calcul\xE9 l\u2019ensolleillement ? ", -1);
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
