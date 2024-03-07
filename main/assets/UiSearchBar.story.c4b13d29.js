import { aI as defineStore, ax as ref, aw as defineComponent, ay as useRouter, aJ as onMounted, ar as openBlock, as as createElementBlock, at as createBaseVNode, az as withDirectives, aK as vModelText, aB as createCommentVNode, aE as resolveComponent, aC as createBlock, aF as withCtx, aG as createVNode } from "./vendor.a3e6449e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const iconTarget = "/cooperation_jn_solar/main/assets/target.dd3bcf09.svg";
const iconMagnifyingGlass = "/cooperation_jn_solar/main/assets/magnifying-glass.f5c4aa9e.svg";
const iconMultiply = "/cooperation_jn_solar/main/assets/icon-multiply.cb1088a6.svg";
const useAddressStore = defineStore("address", () => {
  const address = ref("");
  function setAddress(newAddress) {
    address.value = newAddress;
  }
  return {
    address,
    setAddress
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UiSearchBar",
  setup(__props, { expose }) {
    expose();
    const search = ref("");
    const adressStore = useAddressStore();
    const router = useRouter();
    onMounted(() => {
      if (adressStore.address !== "") {
        search.value = adressStore.address;
      }
    });
    function clickSearch() {
      adressStore.setAddress(search.value);
      router.push("/roof-selection");
    }
    function emptySearch() {
      search.value = "";
      adressStore.setAddress("");
      router.push("/map-pcaet");
    }
    const __returned__ = { search, adressStore, router, clickSearch, emptySearch, get iconTarget() {
      return iconTarget;
    }, get iconMagnifyingGlass() {
      return iconMagnifyingGlass;
    }, get iconMultiply() {
      return iconMultiply;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row items-center h-11 shadow-lg rounded p-0 bg-white w-[402px]" };
const _hoisted_2 = { class: "flex flex-row items-center justify-center w-10 h-full" };
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("img", {
        src: $setup.iconTarget,
        class: "w-4 h-4"
      }, null, 8, _hoisted_3)
    ]),
    withDirectives(createBaseVNode("input", {
      class: "w-full h-full rounded-l-none rounded-r-lg p-2 text-base font-medium font-dm-sans placeholder-black",
      type: "text",
      placeholder: "Entrez votre adresse ici",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.search = $event)
    }, null, 512), [
      [vModelText, $setup.search]
    ]),
    $setup.search !== "" ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "flex flex-row items-center justify-center w-11 h-full cursor-pointer",
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.emptySearch())
    }, [
      createBaseVNode("img", {
        src: $setup.iconMultiply,
        class: "w-4 h-4"
      }, null, 8, _hoisted_4)
    ])) : createCommentVNode("v-if", true),
    createBaseVNode("div", {
      class: "flex flex-row items-center justify-center w-11 h-full cursor-pointer border-l border-neutral-200",
      onClick: $setup.clickSearch
    }, [
      createBaseVNode("img", {
        src: $setup.iconMagnifyingGlass,
        class: "w-4 h-4"
      }, null, 8, _hoisted_5)
    ])
  ]);
}
_sfc_main$1.__file = "src/components/ui/UiSearchBar.vue";
const UiSearchBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSearchBar.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiSearchBar.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSearchBar };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "UiSearchBar",
    group: "ui-base"
  }, {
    default: withCtx(() => [
      createVNode($setup["UiSearchBar"], { style: { "width": "402px" } })
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiSearchBar.story.vue";
const UiSearchBar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSearchBar.story.vue"]]);
export {
  UiSearchBar_story as default
};
