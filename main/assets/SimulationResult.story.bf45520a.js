import { as as defineComponent, at as resolveComponent, au as createBlock, av as withCtx, aw as openBlock, ax as createVNode } from "./vendor.28bc74db.js";
import { S as SimulationResult } from "./SimulationResult.53cedb42.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./solarPanel.model.5b355558.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SimulationResult.story",
  setup(__props, { expose }) {
    expose();
    const roofSurface = {
      surface_id: "1",
      values: [10, 20, 30, 40],
      favorable: 44,
      total: 90,
      orientation: "Sud",
      inclinaison: 47.9
    };
    const __returned__ = { roofSurface, SimulationResult };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Simulation Result",
    group: "simulation-step"
  }, {
    default: withCtx(() => [
      createVNode($setup["SimulationResult"], {
        class: "w-[402px]",
        "roof-surface": $setup.roofSurface,
        "max-num-solar-panel": 6,
        "current-num-solar-panel": 4
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/simulation/SimulationResult.story.vue";
const SimulationResult_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/SimulationResult.story.vue"]]);
export {
  SimulationResult_story as default
};
