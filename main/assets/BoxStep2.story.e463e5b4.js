import { aw as defineComponent, ay as useRouter, ar as openBlock, as as createElementBlock, at as createBaseVNode, au as createTextVNode, aD as resolveComponent, aC as createBlock, aE as withCtx, aF as createVNode } from "./vendor.022928fa.js";
import { i as installation } from "./installation.1bf16994.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BoxStep2",
  setup(__props, { expose }) {
    expose();
    const router = useRouter();
    const __returned__ = { router, get iconInstallation() {
      return installation;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-col items-center justify-center border border-slate-600 rounded" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "mt-6 font-dm-sans font-normal text-xs" }, " Etape 2 ", -1);
const _hoisted_3 = ["src"];
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "font-dm-sans font-bold text-lg text-center" }, [
  /* @__PURE__ */ createTextVNode(" Quelle production d\u2019\xE9lectricit\xE9 "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" est envisageable ici ? ")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "text-white text-base font-medium" }, " Simuler une installation photovolta\xEFque ", -1);
const _hoisted_6 = [
  _hoisted_5
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("img", {
      class: "w-15 h-15 mt-2",
      src: $setup.iconInstallation,
      alt: ""
    }, null, 8, _hoisted_3),
    _hoisted_4,
    createBaseVNode("button", {
      class: "mt-1 mb-6 bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.router.push("/step-sunshine"))
    }, _hoisted_6)
  ]);
}
_sfc_main$1.__file = "src/components/roofSelection/BoxStep2.vue";
const BoxStep2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roofSelection/BoxStep2.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BoxStep2.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { BoxStep2 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "BoxStep2",
    group: "roof-selected-information"
  }, {
    default: withCtx(() => [
      createVNode($setup["BoxStep2"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/roofSelection/BoxStep2.story.vue";
const BoxStep2_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/roofSelection/BoxStep2.story.vue"]]);
export {
  BoxStep2_story as default
};
