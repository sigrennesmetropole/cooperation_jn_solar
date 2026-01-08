import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.a42621f7.js";
import { U as UiExplanationTooltip } from "./UiExplanationTooltip.38861171.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiExplanationTooltip.story",
  setup(__props, { expose }) {
    expose();
    function tooltipWithButton() {
      return {
        titre: "Localisez votre lieu d'habitation",
        content: "Renseignez une adresse ci-dessus ou naviguez sur la carte gr\xE2ce aux outils en bas \xE0 droite.",
        displayCloseButton: true,
        contentCloseButton: "Fermer"
      };
    }
    function tooltipWithoutButton() {
      return {
        titre: "Titre",
        content: "Contenu",
        displayCloseButton: false,
        contentCloseButton: "Fermer"
      };
    }
    const __returned__ = { tooltipWithButton, tooltipWithoutButton, UiExplanationTooltip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "UiExplanationTooltip with button",
        "init-state": $setup.tooltipWithButton
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiExplanationTooltip"], {
            title: state.titre,
            content: state.content,
            "display-close-button": state.displayCloseButton,
            "content-close-button": state.contentCloseButton
          }, null, 8, ["title", "content", "display-close-button", "content-close-button"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: "UiExplanationTooltip without button",
        "init-state": $setup.tooltipWithoutButton
      }, {
        default: withCtx(({ state }) => [
          createVNode($setup["UiExplanationTooltip"], {
            title: state.titre,
            content: state.content,
            "display-close-button": state.displayCloseButton,
            "content-close-button": state.contentCloseButton
          }, null, 8, ["title", "content", "display-close-button", "content-close-button"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiExplanationTooltip.story.vue";
const UiExplanationTooltip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiExplanationTooltip.story.vue"]]);
export {
  UiExplanationTooltip_story as default
};
