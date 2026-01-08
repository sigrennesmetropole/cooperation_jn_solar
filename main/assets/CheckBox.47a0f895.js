import { as as defineComponent, az as ref, aF as computed, aw as openBlock, aB as createElementBlock, aC as createBaseVNode, aG as normalizeClass, aH as renderSlot } from "./vendor.7c3bcb5d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CheckBox",
  props: {
    isOnError: { type: Boolean, required: true }
  },
  emits: ["checkBoxChange"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const checked = ref(false);
    function statusChange() {
      checked.value = !checked.value;
      emit("checkBoxChange", checked.value);
    }
    const borderCheckbox = computed(() => {
      if (props.isOnError && !checked.value) {
        return "border-red-600";
      }
      if (checked.value) {
        return "border-slate-900";
      }
      return "border-slate-400";
    });
    const __returned__ = { props, emit, checked, statusChange, borderCheckbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex p-0 gap-3 items-top" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("input", {
  type: "checkbox",
  class: "opacity-0 absolute"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0.5 8.5498L3.23 12.0598C3.32212 12.1795 3.44016 12.2768 3.57525 12.3443C3.71034 12.4119 3.85898 12.4479 4.01 12.4498C4.15859 12.4515 4.3057 12.4201 4.44063 12.3578C4.57555 12.2956 4.6949 12.204 4.79 12.0898L13.5 1.5498",
  fill: "none"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "flex w-fit" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["shadow-sm w-5 h-5 rounded border flex justify-center items-center mt-[3px]", $setup.borderCheckbox]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.statusChange())
    }, [
      _hoisted_2,
      (openBlock(), createElementBlock("svg", {
        class: normalizeClass(["w-3 h-3 pointer-events-none stroke-slate-900 stroke-2", $setup.checked ? "" : " hidden"]),
        viewBox: "0 0 14 14"
      }, _hoisted_4, 2))
    ], 2),
    createBaseVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "text")
    ])
  ]);
}
_sfc_main.__file = "src/components/simulation/CheckBox.vue";
const CheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/CheckBox.vue"]]);
export {
  CheckBox as C
};
