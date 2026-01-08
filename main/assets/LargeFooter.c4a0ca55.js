import { as as defineComponent, bn as R, bo as p, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, ax as createVNode, aS as Fragment, aT as renderList, au as createBlock, av as withCtx, aC as createTextVNode, aL as toDisplayString } from "./vendor.28bc74db.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const qualitenr = "data:image/png;base64,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";
const qualibat = "/cooperation_jn_solar/main/assets/qualibat.804faf5e.avif";
const qualifelec = "/cooperation_jn_solar/main/assets/qualifelec.e8dc1787.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LargeFooter",
  props: {
    textColor: {
      type: String,
      required: false,
      default: "neutral-500"
    },
    legalList: Array
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const openLink = (link) => {
      window.open(link, "_blank");
    };
    const __returned__ = { openLink, props, get UiRennesLogo() {
      return R;
    }, get UiLinkFooter() {
      return p;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "flex flex-row justify-between font-dm-sans",
  id: "footer"
};
const _hoisted_2 = { class: "flex p-0 gap-6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "font-normal text-xs" }, [
  /* @__PURE__ */ createTextVNode(" Visualisez les donn\xE9es th\xE9matiques "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode("du territoire sur sa maquette 3D. ")
], -1);
const _hoisted_4 = { class: "flex flex-wrap items-end gap-[7px] pt-2 font-dm-sans font-normal text-xs leading-4 text-neutral-500 underline hover:cursor-pointer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["UiRennesLogo"], { class: "w-36 h-7" }),
      _hoisted_3
    ]),
    createBaseVNode("div", _hoisted_4, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.props.legalList, (item) => {
        return openBlock(), createBlock($setup["UiLinkFooter"], {
          key: item["name"],
          onClick: ($event) => $setup.openLink(item["link"]),
          textColor: $setup.props.textColor
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item["name"]), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "textColor"]);
      }), 128))
    ])
  ]);
}
_sfc_main.__file = "src/components/simulation/LargeFooter.vue";
const LargeFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/LargeFooter.vue"]]);
export {
  LargeFooter as L,
  qualibat as a,
  qualifelec as b,
  qualitenr as q
};
