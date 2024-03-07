import { d as defineComponent, o as openBlock, e as createElementBlock, Z as renderSlot, n as normalizeClass, m as withKeys, c as computed, a as unref, q as createBlock, I as Icon, f as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, a6 as toRefs, a7 as useRouter, w as withCtx, V as markRaw, k as watch, aX as useFocus, aY as refDebounced, y as withDirectives, a9 as vModelText, a1 as withModifiers, _ as __vitePreload, aZ as flexsearch_bundle } from "./vendor.d3612af4.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink, a as useStoryStore } from "./MobileOverlay.vue2.442bda93.js";
import { B as BaseEmpty } from "./BaseEmpty.vue.206d3935.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main.4449facb.js";
import "./GenericMountStory.vue2.4b54fa90.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit }) {
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          __props.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: null
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return unref(isUrl) ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: __props.icon,
        alt: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74182813"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: null,
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a2;
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: (_a2 = __props.result.icon) != null ? _a2 : defaultIcons[__props.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !__props.selected ? [
              __props.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": __props.result.kind === "story",
                "htw-text-gray-500": __props.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": __props.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(__props.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[__props.result.kind]), 1)
          ]),
          ((_a = __props.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "a8c1277e": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c8e9661"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,8,9],"po":[0,1,8,9],"pot":[0,1],"poto":[0,1],"potom":[0,1],"f":[2,3],"fe":[2,3],"fek":[2,3],"feko":[2,3],"fekor":[2,3],"fekore":[2,3],"t":[4,5,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"te":[4,5],"tes":[4,5],"test":[4,5],"s":[6,7,12,13,14,15,16,17],"so":[6,7],"sor":[6,7],"sorf":[6,7],"sorfa":[6,7],"sorfak":[6,7],"sorfake":[6,7],"pos":[8,9],"r":[10,11],"ro":[10,11],"rof":[10,11],"se":[12,13,14,15,16,17],"sem":[12,13,14,15,16,17],"semo":[12,13,14,15,16,17],"semol":[12,13,14,15,16,17],"semola":[12,13,14,15,16,17],"semolat":[12,13,14,15,16,17],"semolate":[12,13,14,15,16,17],"semolateo":[12,13,14,15,16,17],"semolateom":[12,13,14,15,16,17],"o":[18,19,20,21,22,23,24],"e":[25,26],"ea":[25,26],"eat":[25,26],"eate":[25,26],"eater":[25,26],"ta":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"tal":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"talf":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"talfe":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"talfem":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],"talfemt":[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]},{"f":[0,1,25,26,33,34,35,41,43],"fe":[0,1,41],"fet":[0,1,41],"k":[2,3,18,19],"ke":[2,3],"tet":[4,5],"m":[6,7,32],"mo":[6,7],"mom":[6,7],"momp":[6,7],"mompe":[6,7],"momper":[6,7],"s":[8,9],"st":[8,9,14,15],"ste":[8,9,14,15],"step":[8,9,14,15],"a":[10,11],"ak":[10,11],"ako":[10,11],"akor":[10,11],"akort":[10,11],"akorte":[10,11],"akorteo":[10,11],"akorteom":[10,11],"r":[12,13],"re":[12,13],"res":[12,13],"reso":[12,13],"resol":[12,13],"resolt":[12,13],"steps":[14,15],"e":[16,17,22,23,24,42],"el":[16,17],"elo":[16,17],"elos":[16,17],"elost":[16,17],"elostr":[16,17],"elostra":[16,17],"elostrat":[16,17],"elostrate":[16,17],"elostrateo":[16,17],"elostrateom":[16,17],"ka":[18,19],"kar":[18,19],"kart":[18,19],"t":[20,21],"te":[20,21,29],"tes":[20,21,29],"tesk":[20,21],"teskl":[20,21],"tesklo":[20,21],"tesklos":[20,21],"teskloso":[20,21],"tesklosor":[20,21],"tesklosore":[20,21],"es":[22,23,24],"esp":[22,23,24],"espl":[22,23,24],"espla":[22,23,24],"esplam":[22,23,24],"esplama":[22,23,24],"esplamat":[22,23,24],"esplamate":[22,23,24],"esplamateo":[22,23,24],"esplamateom":[22,23,24],"fo":[25,26,33,34,35,43],"fol":[25,26,43],"p":[28,30,31,39,40],"pa":[28,31],"pak":[28],"pakr":[28],"pakro":[28],"pakrom":[28],"pakromt":[28],"test":[29],"po":[30,39,40],"por":[30,39,40],"port":[30,39,40],"porte":[30,39,40],"porter":[30,39,40],"pat":[31],"pate":[31],"patem":[31],"patemk":[31],"ma":[32],"mar":[32],"mark":[32],"marke":[32],"markem":[32],"fom":[33,34,35],"fomt":[33,34,35],"l":[36,37],"le":[36,37],"let":[36],"lete":[36],"leter":[36],"lem":[37],"leme":[37],"tr":[38],"tro":[38],"trop":[38],"ek":[42],"ekt":[42]},{"k":[0,1,28,29,30,43],"ke":[0,1],"kek":[0,1],"kekp":[0,1],"kekpo":[0,1],"kekpos":[0,1],"t":[3,7,9,11,13,15,18,19,22,23,24],"te":[3,7,9,11,13,15],"tef":[3,7,9,11,13,15,21],"tefa":[3,7,9,11,13,15,21],"tefao":[3,7,9,11,13,15,21],"tefaol":[3,7,9,11,13,15,21],"tefaolt":[3,7,9,11,13,15,21],"e":[4,5,37],"eo":[4,5],"st":[16,17],"ste":[16,17],"step":[16,17],"to":[18,19,22,23,24],"tom":[18,19],"tomo":[18,19],"tomot":[18,19],"tol":[22,23,24],"tolt":[22,23,24],"tolte":[22,23,24],"toltep":[22,23,24],"s":[25,26,33,36,38],"sk":[25,26],"skr":[25,26],"skre":[25,26],"skrem":[25,26],"ko":[28,29,30,43],"kol":[28,29,30],"kolo":[28,29,30],"kolor":[28,29,30],"se":[33],"ses":[33],"sese":[33],"fe":[34,40],"fek":[34],"fekt":[34],"fa":[35],"fam":[35],"fame":[35],"famel":[35],"famele":[35],"sp":[36],"spa":[36],"spak":[36],"spake":[36],"spakem":[36],"spakemk":[36],"ek":[37],"ekt":[37],"sa":[38],"sat":[38],"sato":[38],"satof":[38],"r":[39],"ra":[39],"rat":[39],"rate":[39],"rateo":[39],"rateos":[39],"f":[40],"fet":[40],"kom":[43],"komf":[43],"komfe":[43],"komfek":[43]},{"pe":[0,1],"pek":[0,1],"peke":[0,1],"pekem":[0,1],"k":[4,5],"km":[4,5],"kmo":[4,5],"kmof":[4,5],"t":[17,26],"te":[17,19,26],"tef":[17,19,26],"tefa":[17,19,26],"tefao":[17,19,26],"tefaol":[17,19,26],"tefaolt":[17,19,26]},{"t":[1],"te":[1],"tef":[1,5],"tefa":[1,5],"tefao":[1,5],"tefaol":[1,5],"tefaolt":[1,5]},{},{"f":[23,24],"fe":[23,24],"fet":[23,24],"feto":[24],"fetot":[24]},{"p":[23,24],"po":[23,24],"pot":[23,24],"poto":[23,24],"potom":[23,24]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-components-home-buttonwithcheckboxbegin-story-vue", "kind": "story" }, "1": { "id": "src-components-home-buttonwithcheckboxbegin-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-roof-selection-figurekeynumber-story-vue", "kind": "story" }, "3": { "id": "src-components-roof-selection-figurekeynumber-story-vue:_default", "kind": "variant" }, "4": { "id": "src-components-roof-selection-textdidyouknow-story-vue", "kind": "story" }, "5": { "id": "src-components-roof-selection-textdidyouknow-story-vue:_default", "kind": "variant" }, "6": { "id": "src-components-roof-selection-uisurfacenumber-story-vue", "kind": "story" }, "7": { "id": "src-components-roof-selection-uisurfacenumber-story-vue:_default", "kind": "variant" }, "8": { "id": "src-components-simulation-boxstep-story-vue", "kind": "story" }, "9": { "id": "src-components-simulation-boxstep-story-vue:_default", "kind": "variant" }, "10": { "id": "src-components-simulation-roofaccordion-story-vue", "kind": "story" }, "11": { "id": "src-components-simulation-roofaccordion-story-vue:_default", "kind": "variant" }, "12": { "id": "src-components-simulation-simulationresult-story-vue", "kind": "story" }, "13": { "id": "src-components-simulation-simulationresult-story-vue:_default", "kind": "variant" }, "14": { "id": "src-components-simulation-simulationsteps-story-vue", "kind": "story" }, "15": { "id": "src-components-simulation-simulationsteps-story-vue:_default", "kind": "variant" }, "16": { "id": "src-components-simulation-stepillustration-story-vue", "kind": "story" }, "17": { "id": "src-components-simulation-stepillustration-story-vue:_default", "kind": "variant" }, "18": { "id": "src-components-ui-uichartdonut-story-vue", "kind": "story" }, "19": { "id": "src-components-ui-uichartdonut-story-vue:_default", "kind": "variant" }, "20": { "id": "src-components-ui-uidisclosure-story-vue", "kind": "story" }, "21": { "id": "src-components-ui-uidisclosure-story-vue:_default", "kind": "variant" }, "22": { "id": "src-components-ui-uiexplanationtooltip-story-vue", "kind": "story" }, "23": { "id": "src-components-ui-uiexplanationtooltip-story-vue:src-components-ui-uiexplanationtooltip-story-vue-0", "kind": "variant" }, "24": { "id": "src-components-ui-uiexplanationtooltip-story-vue:src-components-ui-uiexplanationtooltip-story-vue-1", "kind": "variant" }, "25": { "id": "src-components-ui-uiheaderfullscreen-story-vue", "kind": "story" }, "26": { "id": "src-components-ui-uiheaderfullscreen-story-vue:_default", "kind": "variant" }, "27": { "id": "tailwind", "kind": "story" }, "28": { "id": "tailwind:background-color", "kind": "variant" }, "29": { "id": "tailwind:text-color", "kind": "variant" }, "30": { "id": "tailwind:border-color", "kind": "variant" }, "31": { "id": "tailwind:padding", "kind": "variant" }, "32": { "id": "tailwind:margin", "kind": "variant" }, "33": { "id": "tailwind:font-size", "kind": "variant" }, "34": { "id": "tailwind:font-weight", "kind": "variant" }, "35": { "id": "tailwind:font-family", "kind": "variant" }, "36": { "id": "tailwind:letter-spacing", "kind": "variant" }, "37": { "id": "tailwind:line-height", "kind": "variant" }, "38": { "id": "tailwind:drop-shadow", "kind": "variant" }, "39": { "id": "tailwind:border-radius", "kind": "variant" }, "40": { "id": "tailwind:border-width", "kind": "variant" }, "41": { "id": "tailwind:width", "kind": "variant" }, "42": { "id": "tailwind:height", "kind": "variant" }, "43": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.59e8b92d.js"), true ? ["assets/search-docs-data.59e8b92d.js","assets/vendor.d3612af4.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
