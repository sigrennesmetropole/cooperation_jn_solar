import { as as defineComponent, ay as ref, aF as watchEffect, aG as computed, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, aH as normalizeStyle, aI as normalizeClass, aD as withKeys, aJ as renderSlot } from "./vendor.2fc45394.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CheckBox",
  props: {
    isOnError: { type: Boolean, required: true },
    isChecked: { type: Boolean, required: true }
  },
  emits: ["checkBoxChange"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const checked = ref(props.isChecked);
    const isFocus = ref(false);
    watchEffect(() => {
      checked.value = props.isChecked;
    });
    function statusChange() {
      checked.value = !checked.value;
      emit("checkBoxChange", checked.value);
    }
    const borderCheckbox = computed(() => {
      if (isFocus.value) {
        return "border-2 border-black";
      }
      if (props.isOnError && !checked.value) {
        return "border-red-600";
      }
      if (checked.value) {
        return "border-slate-900";
      }
      return "border-slate-400";
    });
    const __returned__ = { props, emit, checked, isFocus, statusChange, borderCheckbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex p-0 gap-3 items-top" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0.5 8.5498L3.23 12.0598C3.32212 12.1795 3.44016 12.2768 3.57525 12.3443C3.71034 12.4119 3.85898 12.4479 4.01 12.4498C4.15859 12.4515 4.3057 12.4201 4.44063 12.3578C4.57555 12.2956 4.6949 12.204 4.79 12.0898L13.5 1.5498",
  fill: "none"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = { class: "flex w-fit" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["shadow-sm w-5 h-5 rounded border flex justify-center items-center mt-[3px]", $setup.borderCheckbox]),
      onClick: _cache[2] || (_cache[2] = ($event) => $setup.statusChange()),
      onKeyup: _cache[3] || (_cache[3] = withKeys(($event) => $setup.statusChange(), ["enter"]))
    }, [
      createBaseVNode("input", {
        type: "checkbox",
        class: "opacity-0 absolute",
        onFocus: _cache[0] || (_cache[0] = ($event) => $setup.isFocus = true),
        onBlur: _cache[1] || (_cache[1] = ($event) => $setup.isFocus = false)
      }, null, 32),
      (openBlock(), createElementBlock("svg", {
        class: "w-3 h-3 pointer-events-none stroke-slate-900 stroke-2",
        viewBox: "0 0 14 14",
        style: normalizeStyle($setup.checked ? "" : "display: none;")
      }, _hoisted_3, 4))
    ], 34),
    createBaseVNode("div", _hoisted_4, [
      renderSlot(_ctx.$slots, "text")
    ])
  ]);
}
_sfc_main.__file = "src/components/simulation/CheckBox.vue";
const CheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/CheckBox.vue"]]);
export {
  CheckBox as C
};
