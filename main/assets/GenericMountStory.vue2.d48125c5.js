import { N as defineAsyncComponent, O as Comp5, P as createRouter, Q as createWebHistory, R as createWebHashHistory, S as useDark, U as useToggle, k as watch, V as markRaw, E as reactive, d as defineComponent, r as ref, W as watchEffect, o as openBlock, q as createBlock, X as mergeProps, Y as resolveDynamicComponent, h as createCommentVNode } from "./vendor.a3e6449e.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/cooperation_jn_solar/main/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./ButtonWithCheckboxBegin.story.96aff3fc.js"), true ? ["assets/ButtonWithCheckboxBegin.story.96aff3fc.js","assets/vendor.a3e6449e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./FigureKeyNumber.story.8d513868.js"), true ? ["assets/FigureKeyNumber.story.8d513868.js","assets/vendor.a3e6449e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp2 = defineAsyncComponent(() => __vitePreload(() => import("./TextDidYouKnow.story.1869de12.js"), true ? ["assets/TextDidYouKnow.story.1869de12.js","assets/vendor.a3e6449e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp3 = defineAsyncComponent(() => __vitePreload(() => import("./UiButtonWithTooltip.story.deba1375.js"), true ? ["assets/UiButtonWithTooltip.story.deba1375.js","assets/vendor.a3e6449e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
const Comp4 = defineAsyncComponent(() => __vitePreload(() => import("./UiSearchBar.story.c4b13d29.js"), true ? ["assets/UiSearchBar.story.c4b13d29.js","assets/vendor.a3e6449e.js","assets/_plugin-vue_export-helper.cdc0426e.js"] : void 0));
let files = [
  { "id": "src-components-home-buttonwithcheckboxbegin-story-vue", "path": ["ButtonWithCheckboxBegin"], "filePath": "src/components/home/ButtonWithCheckboxBegin.story.vue", "story": { "id": "src-components-home-buttonwithcheckboxbegin-story-vue", "title": "ButtonWithCheckboxBegin", "group": "homepage", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-home-buttonwithcheckboxbegin-story-vue.b8aab876.js"), true ? [] : void 0) },
  { "id": "src-components-pcaet-figurekeynumber-story-vue", "path": ["Figure Key"], "filePath": "src/components/pcaet/FigureKeyNumber.story.vue", "story": { "id": "src-components-pcaet-figurekeynumber-story-vue", "title": "Figure Key", "group": "pcaetpage", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-pcaet-figurekeynumber-story-vue.17fc6620.js"), true ? [] : void 0) },
  { "id": "src-components-pcaet-textdidyouknow-story-vue", "path": ["TextDidYouKnow"], "filePath": "src/components/pcaet/TextDidYouKnow.story.vue", "story": { "id": "src-components-pcaet-textdidyouknow-story-vue", "title": "TextDidYouKnow", "group": "pcaetpage", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-pcaet-textdidyouknow-story-vue.c8015411.js"), true ? [] : void 0) },
  { "id": "src-components-ui-uibuttonwithtooltip-story-vue", "path": ["UiButtonWithTooltip"], "filePath": "src/components/ui/UiButtonWithTooltip.story.vue", "story": { "id": "src-components-ui-uibuttonwithtooltip-story-vue", "title": "UiButtonWithTooltip", "group": "ui-base", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-ui-uibuttonwithtooltip-story-vue.ed59c63c.js"), true ? [] : void 0) },
  { "id": "src-components-ui-uisearchbar-story-vue", "path": ["UiSearchBar"], "filePath": "src/components/ui/UiSearchBar.story.vue", "story": { "id": "src-components-ui-uisearchbar-story-vue", "title": "UiSearchBar", "group": "ui-base", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-ui-uisearchbar-story-vue.5ffb9e21.js"), true ? [] : void 0) },
  { "id": "tailwind", "path": ["Tailwind"], "filePath": "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/node_modules/.histoire/plugins/builtin_tailwind-tokens/Tailwind.story.js", "story": { "id": "tailwind", "title": "Tailwind", "group": "design-system", "layout": { "type": "single", "iframe": false }, "icon": "mdi:tailwind", "docsOnly": false, "variants": [{ "id": "background-color", "title": "Background Color", "icon": "carbon:color-palette" }, { "id": "text-color", "title": "Text Color", "icon": "carbon:text-color" }, { "id": "border-color", "title": "Border Color", "icon": "carbon:color-palette" }, { "id": "padding", "title": "Padding", "icon": "carbon:area" }, { "id": "margin", "title": "Margin", "icon": "carbon:area" }, { "id": "font-size", "title": "Font Size", "icon": "carbon:text-font" }, { "id": "font-weight", "title": "Font Weight", "icon": "carbon:text-font" }, { "id": "font-family", "title": "Font Family", "icon": "carbon:text-font" }, { "id": "letter-spacing", "title": "Letter Spacing", "icon": "carbon:text-font" }, { "id": "line-height", "title": "Line Height", "icon": "carbon:text-font" }, { "id": "drop-shadow", "title": "Drop Shadow", "icon": "carbon:shape-except" }, { "id": "border-radius", "title": "Border Radius", "icon": "carbon:condition-wait-point" }, { "id": "border-width", "title": "Border Width", "icon": "carbon:checkbox" }, { "id": "width", "title": "Width", "icon": "carbon:pan-horizontal" }, { "id": "height", "title": "Height", "icon": "carbon:pan-vertical" }, { "id": "full-config", "title": "Full Config", "icon": "carbon:code" }] }, "supportPluginId": "vanilla", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_tailwind.29d3895b.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Tailwind", "index": 5 }] }, { "group": true, "id": "homepage", "title": "Homepage", "children": [{ "title": "ButtonWithCheckboxBegin", "index": 0 }] }, { "group": true, "id": "pcaetpage", "title": "PCAET Page", "children": [{ "title": "Figure Key", "index": 1 }, { "title": "TextDidYouKnow", "index": 2 }] }, { "group": true, "id": "ui-base", "title": "UI Base", "children": [{ "title": "UiButtonWithTooltip", "index": 3 }, { "title": "UiSearchBar", "index": 4 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/.histoire/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "design-system", "title": "Design System" }, { "id": "homepage", "title": "Homepage" }, { "id": "pcaetpage", "title": "PCAET Page" }, { "id": "ui-base", "title": "UI Base" }] }, "theme": { "title": "Histoire", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "vite": { "base": "/cooperation_jn_solar/main/", "plugins": [{ "name": "histoire-plugin-vue", "enforce": "post" }] }, "viteIgnorePlugins": [], "setupFile": "/src/histoire-setup.ts" };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const base = "/cooperation_jn_solar/main/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue.f1e1541b.js"), true ? ["assets/HomeView.vue.f1e1541b.js","assets/vendor.a3e6449e.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue.ac377fe8.js"), true ? ["assets/StoryView.vue.ac377fe8.js","assets/vendor.a3e6449e.js","assets/MobileOverlay.vue2.7ab6da9b.js","assets/BaseEmpty.vue.e450ae88.js","assets/state.d7d34387.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        Object.assign(result.story, {
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        });
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor.a3e6449e.js").then((n) => n.aO), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor.a3e6449e.js").then((n) => n.aP), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
