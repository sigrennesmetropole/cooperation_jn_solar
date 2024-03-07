import { as as defineComponent, b4 as Gt, aw as openBlock, au as createBlock } from "./vendor.723158cd.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FooterAreaLink",
  setup(__props, { expose }) {
    expose();
    const openLink = (link) => {
      window.open("/legalnotice/" + link, "_blank");
    };
    const __returned__ = { openLink, get FooterArea() {
      return Gt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["FooterArea"], {
    class: "mt-auto",
    onOpenLink: _cache[0] || (_cache[0] = ($event) => $setup.openLink($event))
  });
}
_sfc_main.__file = "src/components/home/FooterAreaLink.vue";
const FooterAreaLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/FooterAreaLink.vue"]]);
export {
  FooterAreaLink as F
};
