import { as as defineComponent, aw as openBlock, aA as createElementBlock, au as createBlock, aQ as resolveDynamicComponent, aD as createCommentVNode, aB as createBaseVNode, aJ as renderSlot, aL as toDisplayString, az as useRouter, ax as createVNode, av as withCtx, aR as useRoute, ay as ref, aS as Fragment, aT as renderList, aH as normalizeClass, aU as createRouter, aV as createWebHistory, _ as __vitePreload, at as resolveComponent } from "./vendor.a42621f7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const solarPanelLogo = "/cooperation_jn_solar/main/assets/solarPanelLogo.fe143f24.svg";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UiSolarPanelLogo",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get solarPanelLogo() {
      return solarPanelLogo;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = ["src"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", {
    src: $setup.solarPanelLogo,
    alt: ""
  }, null, 8, _hoisted_1$5);
}
_sfc_main$5.__file = "src/components/ui/UiSolarPanelLogo.vue";
const UiSolarPanelLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSolarPanelLogo.vue"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UiReturnButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    notification: {
      type: Number
    },
    icon: {
      type: Object
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = ["disabled"];
const _hoisted_2$4 = { class: "m-auto font-semibold" };
const _hoisted_3$3 = {
  key: 1,
  class: "m-auto mx-1 rounded bg-red-500 px-2 text-white"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", { disabled: $props.disabled }, [
    $props.icon ? (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
      key: 0,
      role: "img",
      class: "m-auto mr-2"
    })) : createCommentVNode("v-if", true),
    createBaseVNode("span", _hoisted_2$4, [
      renderSlot(_ctx.$slots, "default")
    ]),
    $props.notification ? (openBlock(), createElementBlock("div", _hoisted_3$3, toDisplayString($props.notification), 1)) : createCommentVNode("v-if", true)
  ], 8, _hoisted_1$4);
}
_sfc_main$4.__file = "src/components/ui/UiReturnButton.vue";
const UiReturnButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiReturnButton.vue"]]);
const iconChevronLeft = "/cooperation_jn_solar/main/assets/chevron-left.e0d526ab.svg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UiHeaderFullScreen",
  props: {
    urlBack: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const router2 = useRouter();
    const __returned__ = { router: router2, props, UiReturnButton, get iconChevronLeft() {
      return iconChevronLeft;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "absolute top-0 left-0 flex flex-row items-center justify-between px-9 gap-12 w-screen h-[72px] bg-white shadow" };
const _hoisted_2$3 = { class: "flex flex-row items-center" };
const _hoisted_3$2 = ["src"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", _hoisted_2$3, [
      createVNode($setup["UiReturnButton"], {
        class: "shadow-md rounded-lg p-2 flex gap-2.5 shrink-0 grow-0",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.router.push($setup.props.urlBack))
      }, {
        default: withCtx(() => [
          createBaseVNode("img", { src: $setup.iconChevronLeft }, null, 8, _hoisted_3$2)
        ]),
        _: 1
      }),
      renderSlot(_ctx.$slots, "title-img")
    ]),
    renderSlot(_ctx.$slots, "mid-content"),
    createBaseVNode("button", {
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.router.push("/home")),
      class: "bg-white border border-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    }, [
      renderSlot(_ctx.$slots, "button-content")
    ])
  ]);
}
_sfc_main$3.__file = "src/components/ui/UiHeaderFullScreen.vue";
const UiHeaderFullScreen = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiHeaderFullScreen.vue"]]);
const iconHome = "/cooperation_jn_solar/main/assets/icon-home.692564ca.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderEndSimulation",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { UiSolarPanelLogo, UiHeaderFullScreen, get iconHome() {
      return iconHome;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "flex items-center p-0 gap-2.5 ml-5" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("h1", { class: "font-dm-sans font-bold text-2xl text-center" }, " Cadastre Solaire ", -1);
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-base font-medium" }, "Retour \xE0 l'accueil", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiHeaderFullScreen"], { urlBack: "/step-sunshine" }, {
    "title-img": withCtx(() => [
      createBaseVNode("div", _hoisted_1$2, [
        createVNode($setup["UiSolarPanelLogo"], { class: "h-10 w-10" }),
        _hoisted_2$2
      ])
    ]),
    "button-content": withCtx(() => [
      createBaseVNode("img", { src: $setup.iconHome }, null, 8, _hoisted_3$1),
      _hoisted_4$1
    ]),
    _: 1
  });
}
_sfc_main$2.__file = "src/components/simulation/HeaderEndSimulation.vue";
const HeaderEndSimulation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/simulation/HeaderEndSimulation.vue"]]);
const logoRennes = "data:image/png;base64,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";
const iconMultiplyBlack = "/cooperation_jn_solar/main/assets/icon-multiply-black.572055b3.svg";
const legalList = [
  {
    link: "/legalnotice/mentions-legales",
    slug: "mentions-legales",
    name: "Mentions l\xE9gales"
  },
  {
    link: "/legalnotice/confidentialite",
    slug: "confidentialite",
    name: "Politique de confidentialit\xE9"
  },
  {
    link: "/legalnotice/plan-du-site",
    slug: "plan-du-site",
    name: "Plan du site"
  },
  {
    link: "/legalnotice/accessibilite",
    slug: "accessibilite",
    name: "Accessibilit\xE9: totalement conforme"
  },
  {
    link: "/legalnotice/cookies",
    slug: "cookies",
    name: "Cookies"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderLegalNotice",
  setup(__props, { expose }) {
    expose();
    const { params } = useRoute();
    const routeParams = ref(params);
    const legalLink = routeParams.value.legallink;
    const __returned__ = { params, routeParams, legalLink, UiHeaderFullScreen, get logoRennes() {
      return logoRennes;
    }, get iconMultiplyBlack() {
      return iconMultiplyBlack;
    }, get legalList() {
      return legalList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = { class: "flex flex-row self-end gap-4" };
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "text-[18px] leading-6 bold" };
const _hoisted_5 = ["src"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "text-base font-medium" }, "Fermer", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiHeaderFullScreen"], { urlBack: "/home" }, {
    "title-img": withCtx(() => [
      createBaseVNode("img", {
        class: "ml-8",
        src: $setup.logoRennes
      }, null, 8, _hoisted_1$1)
    ]),
    "mid-content": withCtx(() => [
      createBaseVNode("div", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.legalList, (item) => {
          return openBlock(), createElementBlock("div", {
            key: item.name,
            class: normalizeClass(["flex flex-row align-center pt-2 pb-4 px-2", $setup.legalLink == item.slug ? "border-black border-b-2" : ""])
          }, [
            createBaseVNode("a", {
              href: item.link
            }, [
              createBaseVNode("h4", _hoisted_4, toDisplayString(item.name), 1)
            ], 8, _hoisted_3)
          ], 2);
        }), 128))
      ])
    ]),
    "button-content": withCtx(() => [
      createBaseVNode("img", { src: $setup.iconMultiplyBlack }, null, 8, _hoisted_5),
      _hoisted_6
    ]),
    _: 1
  });
}
_sfc_main$1.__file = "src/components/legal/HeaderLegalNotice.vue";
const HeaderLegalNotice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/HeaderLegalNotice.vue"]]);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => __vitePreload(() => import("./HomeView.073a24b3.js"), true ? ["assets/HomeView.073a24b3.js","assets/vendor.a42621f7.js","assets/ButtonWithCheckboxBegin.5cbd09c5.js","assets/CheckBox.05148165.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/home.4ac72426.js","assets/popUpStore.a0418446.js","assets/installation.1bf16994.js","assets/potentiel.320635bc.js","assets/economies.0397e19a.js","assets/panels.6d7c3b9b.js","assets/views.model.ee0142e4.js"] : void 0)
  },
  {
    path: "/roof-selected-information",
    name: "roof-selected-information",
    component: () => __vitePreload(() => import("./RoofSelectedInformation.975a99e0.js"), true ? ["assets/RoofSelectedInformation.975a99e0.js","assets/vendor.a42621f7.js","assets/views.model.ee0142e4.js","assets/UiDisclosure.e5feebaa.js","assets/arrow-up.e2a6014f.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/BoxStep.48bf2465.js","assets/panels.6d7c3b9b.js","assets/UiChartDonut.eefa39a9.js","assets/UiSurfaceNumber.7dabdd0c.js","assets/right-flat-arrow.6196ad91.js","assets/roof.model.c1ca8393.js","assets/roof.e59fbfbc.js","assets/installation.1bf16994.js","assets/viewPointHelper.f6353f24.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/popUpStore.a0418446.js"] : void 0)
  },
  {
    path: "/roof-selection",
    name: "roof-selection",
    component: () => __vitePreload(() => import("./RoofSelectionView.b27a5c66.js"), true ? ["assets/RoofSelectionView.b27a5c66.js","assets/vendor.a42621f7.js","assets/views.model.ee0142e4.js","assets/panels.6d7c3b9b.js","assets/hour-glass.f7c63e4c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/UiExplanationTooltip.38861171.js","assets/TextDidYouKnow.1e453278.js","assets/icon-delete.7df02bd2.js","assets/address.4f5a6c9c.js","assets/layers.a8e92072.js","assets/roof.e59fbfbc.js","assets/roof.model.c1ca8393.js","assets/home.4ac72426.js","assets/simulations.baa5e79d.js"] : void 0)
  },
  {
    path: "/step-sunshine",
    name: "step-sunshine",
    component: () => __vitePreload(() => import("./StepSunshineView.70ececd0.js"), true ? ["assets/StepSunshineView.70ececd0.js","assets/vendor.a42621f7.js","assets/views.model.ee0142e4.js","assets/icon-delete.7df02bd2.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/SimulationSteps.6d371c35.js","assets/StepIllustration.efe3a9e1.js","assets/right-flat-arrow.6196ad91.js","assets/installation.1bf16994.js","assets/potentiel.320635bc.js","assets/economies.0397e19a.js","assets/RoofAccordion.7c0444a6.js","assets/arrow-up.e2a6014f.js","assets/RoofInformationsBox.981e9732.js","assets/roof.e59fbfbc.js","assets/BoxStep.48bf2465.js","assets/simulations.baa5e79d.js","assets/SimulationResult.71d88773.js","assets/solarPanel.model.5b355558.js","assets/solarPanels.232b18ef.js","assets/consumptionAndProduction.f52419cf.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/CheckBox.05148165.js","assets/layers.a8e92072.js","assets/viewPointHelper.f6353f24.js","assets/roof.model.c1ca8393.js","assets/panels.6d7c3b9b.js"] : void 0)
  },
  {
    path: "/legalnotice/:legallink",
    name: "legal-notice",
    component: () => __vitePreload(() => import("./LegalNoticeView.6bc1021f.js"), true ? ["assets/LegalNoticeView.6bc1021f.js","assets/vendor.a42621f7.js","assets/views.model.ee0142e4.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0)
  },
  {
    path: "/end-simulation",
    name: "end-simulation",
    component: () => __vitePreload(() => import("./SimulationAutocalsolView.16375373.js"), true ? ["assets/SimulationAutocalsolView.16375373.js","assets/vendor.a42621f7.js","assets/CheckBox.05148165.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/autocalsol.0a3e9b04.js","assets/views.model.ee0142e4.js","assets/address.4f5a6c9c.js","assets/roof.e59fbfbc.js","assets/consumptionAndProduction.f52419cf.js","assets/layers.a8e92072.js","assets/solarPanel.model.5b355558.js","assets/solarPanels.232b18ef.js","assets/panels.6d7c3b9b.js"] : void 0)
  },
  {
    path: "/simulation-results",
    name: "simulation-results",
    component: () => __vitePreload(() => import("./SimulationResultsView.b35488ad.js"), true ? ["assets/SimulationResultsView.b35488ad.js","assets/vendor.a42621f7.js","assets/views.model.ee0142e4.js","assets/roof.e59fbfbc.js","assets/consumptionAndProduction.f52419cf.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/expand-small-bigger-retract-smaller-big.36b4ec1e.js","assets/autocalsol.0a3e9b04.js","assets/potentiel.320635bc.js","assets/address.4f5a6c9c.js","assets/RoofInformationsBox.981e9732.js","assets/economies.0397e19a.js"] : void 0)
  }
];
const router = createRouter({
  history: createWebHistory("/cooperation_jn_solar/main/"),
  routes
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UiHeaderFullScreen.story",
  setup(__props, { expose }) {
    expose();
    function mySetupApp({ app, story, variant }) {
      app.use(router);
    }
    const __returned__ = { mySetupApp, HeaderEndSimulation, HeaderLegalNotice };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { style: { "height": "100px", "position": "relative" } };
const _hoisted_2 = { style: { "height": "100px", "position": "relative" } };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Header Full Screen",
    layout: {
      type: "grid",
      width: 700
    },
    "setup-app": $setup.mySetupApp
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode($setup["HeaderLegalNotice"])
      ]),
      createBaseVNode("div", _hoisted_2, [
        createVNode($setup["HeaderEndSimulation"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "src/components/ui/UiHeaderFullScreen.story.vue";
const UiHeaderFullScreen_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiHeaderFullScreen.story.vue"]]);
const UiHeaderFullScreen_story$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: UiHeaderFullScreen_story
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeaderLegalNotice as H,
  UiSolarPanelLogo as U,
  UiHeaderFullScreen_story$1 as a,
  legalList as l,
  router as r
};
