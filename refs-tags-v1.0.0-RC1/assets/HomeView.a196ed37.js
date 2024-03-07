import { as as defineComponent, a_ as Nt, aw as openBlock, au as createBlock, a$ as Dt, aA as createElementBlock, aB as createBaseVNode, aC as createTextVNode, aD as withKeys, b0 as createStaticVNode, b1 as onMounted, ax as createVNode, aE as createCommentVNode, aV as Fragment } from "./vendor.f0c3e9de.js";
import { B as ButtonWithCheckboxBegin } from "./ButtonWithCheckboxBegin.9f8fa877.js";
import { l as legalList, U as UiSolarPanelLogo, u as useViewsStore } from "./UiHeaderFullScreen.story.4982fedc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { i as installation } from "./installation.1bf16994.js";
import { p as potentiel } from "./potentiel.320635bc.js";
import { e as economies } from "./economies.0397e19a.js";
import { u as usePanelsStore } from "./panels.980ba683.js";
import { v as viewList } from "./views.model.a1ba4457.js";
import { u as usePopUpStore } from "./popUpStore.7a86327a.js";
import "./CheckBox.8a2633c0.js";
import "./home.45dd12f9.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FooterAreaLink",
  setup(__props, { expose }) {
    expose();
    const openLink = (link) => {
      window.open(link, "_blank");
    };
    const __returned__ = { openLink, get FooterArea() {
      return Nt;
    }, get legalList() {
      return legalList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["FooterArea"], {
    class: "mt-auto",
    onOpenLink: _cache[0] || (_cache[0] = ($event) => $setup.openLink($event)),
    legalList: $setup.legalList
  }, null, 8, ["legalList"]);
}
_sfc_main$4.__file = "src/components/home/FooterAreaLink.vue";
const FooterAreaLink = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/FooterAreaLink.vue"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UiSolarPanelTitle",
  setup(__props, { expose }) {
    expose();
    const title = "Cadastre Solaire";
    const abstract = "Projetez-vous en tant que producteur d\u2019\xE9lectricit\xE9 gr\xE2ce \xE0 l\u2019\xE9nergie solaire photovolta\xEFque.";
    const __returned__ = { title, abstract, UiSolarPanelLogo, get UiAbstractTitle() {
      return Dt;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UiAbstractTitle"], {
    logo: $setup.UiSolarPanelLogo,
    abstract: $setup.abstract,
    title: $setup.title
  });
}
_sfc_main$3.__file = "src/components/ui/UiSolarPanelTitle.vue";
const UiSolarPanelTitle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/ui/UiSolarPanelTitle.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProcessSteps",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get installation() {
      return installation;
    }, get potentiel() {
      return potentiel;
    }, get economies() {
      return economies;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "bg-slate-100 flex flex-col border rounded-lg p-6" };
const _hoisted_2$1 = { class: "mb-8" };
const _hoisted_3$1 = { class: "flex items-center gap-4" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 1 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " \xC9valuez l'ensoleillement de votre toiture ")
], -1);
const _hoisted_6$1 = { class: "mb-8" };
const _hoisted_7 = { class: "flex items-center gap-4" };
const _hoisted_8 = ["src"];
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 2 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " Pr\xE9-dimensionnez une installation photovolta\xEFque ")
], -1);
const _hoisted_10 = { class: "flex items-center gap-4" };
const _hoisted_11 = ["src"];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "flex flex-col" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans text-neutral-500 text-xs" }, " \xC9tape 3 "),
  /* @__PURE__ */ createBaseVNode("div", { class: "items-center text-base font-dm-sans font-bold text-black text-lg" }, " Estimez vos \xE9conomies d\u2019\xE9nergie ")
], -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("ul", null, [
      createBaseVNode("li", _hoisted_2$1, [
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.potentiel,
              alt: ""
            }, null, 8, _hoisted_4$1)
          ]),
          _hoisted_5$1
        ])
      ]),
      createBaseVNode("li", _hoisted_6$1, [
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.installation,
              alt: ""
            }, null, 8, _hoisted_8)
          ]),
          _hoisted_9
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", null, [
            createBaseVNode("img", {
              class: "w-20 h-20 max-w-none",
              src: $setup.economies,
              alt: ""
            }, null, 8, _hoisted_11)
          ]),
          _hoisted_12
        ])
      ])
    ])
  ]);
}
_sfc_main$2.__file = "src/components/home/ProcessSteps.vue";
const ProcessSteps = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/ProcessSteps.vue"]]);
const imgFinancePar = "/cooperation_jn_solar/refs-tags-v1.0.0-RC1/assets/finance-par.307728cf.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TermsOfUsePopup",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get imgFinancePar() {
      return imgFinancePar;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "fixed top-0 left-0 w-full h-full z-[100]",
  style: { "background-color": "rgba(0, 0, 0, 0.75)" }
};
const _hoisted_2 = {
  class: "relative flex flex-col mx-auto mt-13 h-[90%] w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto",
  style: { "background-color": "rgba(255, 255, 255, 1)" }
};
const _hoisted_3 = { class: "flex flex-row" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-bold" }, "Conditions d\u2019utilisation", -1);
const _hoisted_5 = {
  class: "relative flex flex-col mx-auto mt-13 pr-8 rounded-lg gap-8 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400 font-dm-sans",
  style: { "background-color": "rgba(255, 255, 255, 1)" }
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<p class="text-sm font-normal"> Rennes M\xE9tropole met \xE0 disposition, via le pr\xE9sent site, un service permettant, sur le territoire de Rennes M\xE9tropole, d&#39;estimer l&#39;exposition solaire de son logement, de simuler le dimensionnement d&#39; une installation photovolta\xEFque et d&#39;en d\xE9duire une estimation de la production d&#39;\xE9nergie associ\xE9e (incluant la part d&#39;\xE9nergie consomm\xE9e sur place et la part vendue et inject\xE9e sur le r\xE9seau en lien avec les niveaux de consommation de l&#39; usager). L\u2019Utilisateur est r\xE9put\xE9 avoir pris connaissance des pr\xE9sentes conditions g\xE9n\xE9rales, qui s&#39;imposent \xE0 tout usager du pr\xE9sent site. L\u2019Utilisateur garantit qu\u2019il n\u2019utilisera pas le site \xE0 des fins illicites ou immorales ou contraire \xE0 leur utilisation initiale. <br><br> Les \xE9quipements (ordinateurs, t\xE9l\xE9phone, moyens de t\xE9l\xE9communication\u2026) permettant l&#39;acc\xE8s au site sont \xE0 la charge exclusive des Utilisateurs, de m\xEAme que les frais de t\xE9l\xE9communications induits par leur utilisation. </p><h4 class="text-xl font-bold">Services propos\xE9s aux utilisateurs</h4><li class="text-base font-bold"> Estimation de l&#39;ensoleillement (ou de l&#39;exposition solaire ou irradiance) en kWh/m2/an </li><span class="text-sm"> L&#39;Utilisateur peut visualiser les niveaux d&#39;ensoleillement des toitures du b\xE2ti m\xE9tropolitain. <br><br> La simulation d&#39;ensoleillement est r\xE9alis\xE9e \xE0 partir d&#39;un Mod\xE8le Num\xE9rique de Surface datant de 2021 (r\xE9solution de 50 cm) \xE0 l&#39;aide de l&#39;outil &#39;Rayonnement solaire zonal&#39; de la suite ESRI. Les r\xE9sultats sont exprim\xE9s en kWh/m2/an. <br><br> L&#39;outil calcule le rayonnement \xE0 partir d\u2019un mod\xE8le qui prend en compte la position du soleil tout au long de l\u2019ann\xE9e et \xE0 diff\xE9rentes heures de la journ\xE9e, les obstacles susceptibles de bloquer l\u2019ensoleillement, tels que les arbres ou b\xE2timents \xE0 proximit\xE9 (visibles dans le Mod\xE8le Num\xE9rique de Surface), la pente et l\u2019orientation de la surface. Plus de d\xE9tails dans la <a href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/modeling-solar-radiation.htm" target="_blank" class="underline">documentation d\u2019aide Mod\xE9lisation du rayonnement solaire</a>. <br><br> Les r\xE9sultats de la simulation sont class\xE9s suivant le code couleur d\xE9fini ci-dessous et sont affich\xE9s sur les toitures des b\xE2timents de la maquette 3D. </span><div class="flex flex-row items-center gap-2"><div class="w-10 h-6 bg-black"></div><span class="text-sm font-normal"> Inf\xE9rieur ou \xE9gal \xE0 800 kWh/m2/an </span></div><div class="flex flex-row items-center gap-2"><div class="w-10 h-6 bg-slate-300"></div><span class="text-sm font-normal"> Entre 800 kWh/m2/an et 1000 kWh/m2/an </span></div><div class="flex flex-row items-center gap-2"><div class="w-10 h-6 bg-yellow-100"></div><span class="text-sm font-normal"> Entre 1000 kWh/m2/an et 1150 kWh/m2/an </span></div><div class="flex flex-row items-center gap-2"><div class="w-10 h-6 bg-yellow-300"></div><span class="text-sm font-normal"> Sup\xE9rieur ou \xE9gal \xE0 1150 kWh/m2/an </span></div><span> L&#39; outil \u201CRayonnement solaire zonal\u201D fait partie de l\u2019ArcGIS Spatial Analyst extension et a \xE9t\xE9 utilis\xE9 avec les param\xE8tres suivants : <br>- Nature du ciel utilis\xE9 : STANDARD OVERCAST SKY ISO 15469:2004 (E)/CIE S 011/E:2003 <a class="underline" href="https://cie.co.at/publications/cie-standard-overcast-sky-and-clear-sky" target="_blank"> https://cie.co.at/publications/cie-standard-overcast-sky-and-clear-sky </a><br>- Direction de calcul : 32 <br>- Division z\xE9nitale : 8 <br>- Division azimutales : 8 <br>- Diffusion : 0.3 <br>- Transmission : 0.5 </span><li class="text-base font-bold"> Pr\xE9-dimensionnement d&#39;une installation photovolta\xEFque </li><span class="text-sm"> L&#39;Utilisateur peut pr\xE9-dimensionner une installation photovolta\xEFque sur la toiture de son logement. <br><br> Les surfaces des pans de toit favorables \xE0 l&#39;installation d&#39;\xE9quipements photovolta\xEFques sont d\xE9duites de la simulation d&#39;ensoleillement en conservant les valeurs sup\xE9rieures \xE0 1 000 kWh/m2/an. <br><br> Les Utilisateurs peuvent, en outre, signaler et localiser des obstacles emp\xEAchant l&#39;installation de panneaux photovolta\xEFques non visibles sur le Mod\xE8le Num\xE9rique de Surface comme, par exemple, des v\xE9lux, des chemin\xE9es\u2026 <br><br> Les obstacles renseign\xE9s par les Utilisateurs sont ainsi d\xE9duits des surfaces favorables \xE0 l&#39;installation d&#39;\xE9quipements photovolta\xEFques. Un algorithme de positionnement d\xE9termine ensuite le nombre maximum de panneaux solaires (dont la taille moyenne est fix\xE9e \xE0 950 mm * 1900 mm) pouvant \xEAtre install\xE9s sur la surface restante. </span><li class="text-base font-bold">Production d&#39;\xE9nergie en kWh</li><span class="text-sm"> L&#39;Utilisateur peut ensuite obtenir une simulation de l&#39;\xE9nergie produite par l&#39;installation obtenue en kWh. <br><br> Une puissance install\xE9e en kWc est calcul\xE9e \xE0 partir du nombre de panneaux photovolta\xEFques finalement retenus par l&#39;Utilisateur \xE0 l&#39;issue de l&#39;\xE9tape pr\xE9c\xE9dente de pr\xE9-dimensionnement (400 Wc par panneau). <br><br> Cette puissance install\xE9e, ainsi que la localisation, l&#39;orientation et l&#39;inclinaison de la toiture sont alors utilis\xE9s par le logiciel AutoCalSol, d\xE9velopp\xE9 par l \u2019Institut National de l\u2019\xC9nergie Solaire pour simuler la production d&#39;\xE9nergie correspondant \xE0 l&#39;installation test\xE9e. <br><br> Les param\xE8tres de l&#39;API AutoCalSol utilis\xE9s sont les suivants : <ul class="list-disc pl-6"><li>Performance de l&#39;installation : 0,85</li><li>Technologie utilis\xE9e : silicium cristallin</li><li>Mode d&#39;int\xE9gration : surimpos\xE9</li></ul><br> Enfin, l&#39;utilisateur peut, s&#39;il le souhaite, renseigner sa consommation \xE9lectrique annuelle en kWh (obtenue gr\xE2ce \xE0 sa facture fournisseur ou \xE0 la connexion \xE0 son espace Enedis) et obtenir une simulation de la part d&#39;\xE9nergie produite pouvant \xEAtre consomm\xE9e sur place (autoconsommation) et la part pouvant \xEAtre vendue et inject\xE9e sur le r\xE9seau. Cette simulation r\xE9alis\xE9e par le logiciel AutoCalSol de l&#39;INES s&#39;appuie sur un profil de consommation moyen (en tarif unique r\xE9sidentiel) obtenu via l&#39;open data d&#39;Enedis. </span><li class="text-base font-bold">T\xE9l\xE9chargement d&#39;un rapport</li><span class="text-sm"> L&#39;Utilisateur sera invit\xE9, \xE0 t\xE9l\xE9charger un rapport .pdf reprenant les contenus p\xE9dagogiques et indicateurs obtenus lors de sa simulation. </span><h4 class="text-xl font-bold mt-1">Propri\xE9t\xE9 intellectuelle</h4><h5 class="font-bold text-lg">Logiciels utilis\xE9s</h5><ul class="list-disc pl-6"><li> L&#39;outil &#39;Rayonnement solaire zonal&#39; de l\u2019ArcGIS Spatial Analyst extension permet de simuler l&#39;ensoleillement des toitures de la m\xE9tropole rennaise (en kWh/m2/an) </li><li> AutoCalSol, logiciel m\xE9tier de l\u2019Institut National de l\u2019\xC9nergie Solaire (INES) permet de pr\xE9-dimensionner les installations solaires photovolta\xEFques en autoconsommation et de simuler les niveaux d\u2019autoconsommation et d\u2019autoproduction en lien avec les niveaux de consommation des usagers </li></ul><h4 class="text-xl font-bold mt-1">Droits de reproduction</h4><h5 class="font-bold text-lg"> Contenus produits par Rennes M\xE9tropole </h5><p> Le pr\xE9sent site est la propri\xE9t\xE9 de Rennes M\xE9tropole, qui en est l&#39;auteur au sens des articles L. 111.1 et suivants du Code de la propri\xE9t\xE9 intellectuelle. Les photographies, textes, slogans, dessins, images, s\xE9quences anim\xE9es sonores ou non ainsi que toutes \u0153uvres int\xE9gr\xE9es dans le site sont la propri\xE9t\xE9 de Rennes M\xE9tropole ou de tiers ayant autoris\xE9 Rennes M\xE9tropole \xE0 les utiliser. La reproduction, sur un support papier ou informatique, du rapport t\xE9l\xE9chargeable ou du site est autoris\xE9e sous r\xE9serve qu&#39;elle soit strictement r\xE9serv\xE9e \xE0 un usage personnel, excluant tout usage \xE0 des fins publicitaires et/ou commerciales et/ou d&#39;informations, et qu&#39;elle soit conforme aux dispositions de l&#39;article L122-5 du Code de la Propri\xE9t\xE9 Intellectuelle. \xC0 l&#39;exception des dispositions ci-dessus, toute reproduction, repr\xE9sentation, utilisation ou modification, par quelque proc\xE9d\xE9 que ce soit et sur quelque support que ce soit, de tout ou partie du site, des rapports t\xE9l\xE9chargeables et de tout ou partie des contenus qui le composent, sans avoir obtenu l&#39;autorisation pr\xE9alable de Rennes M\xE9tropole, est strictement interdite et constitue un d\xE9lit de contrefa\xE7on. </p><h5 class="font-bold text-lg"> Liens hypertextes pointant vers le site </h5><p> Le site de Rennes M\xE9tropole autorise tout site internet ou tout autre support \xE0 le citer ou \xE0 mettre en place un lien hypertexte pointant vers son contenu, sous r\xE9serve : </p><ul class="list-disc pl-6"><li> Que la page atteinte ne soit pas imbriqu\xE9e \xE0 l\u2019int\xE9rieur d\u2019autres pages, en particulier par voie de cadre (ou \xAB frames \xBB) c\u2019est-\xE0-dire que les pages du pr\xE9sent site ne soient pas imbriqu\xE9es \xE0 l\u2019int\xE9rieur des pages d\u2019un autre site, mais accessibles par l\u2019ouverture d\u2019une fen\xEAtre, </li><li> De mentionner la source (Site Rennes M\xE9tropole) pour chaque lien, en particulier lorsqu\u2019il s\u2019agit d\u2019un lien direct sur un contenu, </li><li> Que l\u2019acc\xE8s aux pages contenant ces liens vers le pr\xE9sent site soit gratuit. </li></ul><p> Cette autorisation ne s\u2019applique pas aux sites diffusant des informations \xE0 caract\xE8re pol\xE9mique, pornographique, x\xE9nophobe ou pouvant, dans une plus large mesure porter atteinte \xE0 la sensibilit\xE9 du plus grand nombre. Rennes M\xE9tropole se r\xE9serve le droit de demander la suppression d\u2019un lien qu\u2019elle estime non conforme \xE0 sa ligne \xE9ditoriale. <br><br> Rennes M\xE9tropole ne peut en aucun cas \xEAtre tenu responsable de la mise \xE0 disposition du pr\xE9sent site via un lien hypertexte, et ne peut supporter aucune responsabilit\xE9 sur le contenu, les produits, les services, etc. disponibles sur ces sites destinataires ou \xE0 partir de ces sites destinataires. </p><h5 class="font-bold text-lg"> Liens hypertextes propos\xE9s sur le pr\xE9sent site </h5><p> Plusieurs liens vers d\u2019autres sites sont propos\xE9s. Leur pr\xE9sence ne saurait engager Rennes M\xE9tropole quant \xE0 leur contenu et ne vise qu\u2019\xE0 permettre \xE0 l\u2019internaute de trouver plus facilement un accompagnement et d\u2019autres ressources sur le sujet de l&#39;\xE9nergie photovolta\xEFque. </p><h4 class="text-xl font-bold mt-1"> Traitement des donn\xE9es personnelles </h4><p> Voir la <a href="#" class="underline"> de protection des donn\xE9es personnelles</a> du pr\xE9sent site. </p><h4 class="text-xl font-bold mt-1">Responsabilit\xE9</h4><p> Rennes M\xE9tropole met tout en \u0153uvre pour offrir aux Utilisateurs des informations et/ou des outils disponibles et mis \xE0 jour. Pour autant, elle ne saurait \xEAtre tenue responsable en cas d\u2019erreurs, d\u2019absence de disponibilit\xE9 des fonctionnalit\xE9s et/ou de la pr\xE9sence de virus sur le site. <br><br> Rennes M\xE9tropole ne saurait garantir l&#39;exactitude, la compl\xE9tude, l&#39;actualit\xE9 et l\u2019exhaustivit\xE9 des informations diffus\xE9es sur le site. Chaque Utilisateur est invit\xE9 \xE0 affiner les informations obtenues et restitu\xE9es dans le rapport t\xE9l\xE9chargeable aupr\xE8s de structures sp\xE9cialis\xE9es. <br><br> La responsabilit\xE9 de Rennes M\xE9tropole ne saurait \xEAtre engag\xE9e en cas de force majeure. </p><h4 class="text-xl font-bold mt-1">Programme France Relance</h4><p>Ce projet a \xE9t\xE9 soutenu par le programme France Relance.</p>', 33);
const _hoisted_39 = ["src"];
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("p", null, "Licence Creative Commons BY-NC-SA 3.0 FR", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createTextVNode(" > "),
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          createBaseVNode("button", {
            tabindex: "0",
            onKeydown: _cache[0] || (_cache[0] = withKeys(($event) => _ctx.$emit("close"), ["enter"])),
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close")),
            class: "w-5 h-5 border border-black rounded ml-auto hover:bg-neutral-400 flex justify-center items-center"
          }, " x ", 32)
        ]),
        createBaseVNode("div", _hoisted_5, [
          _hoisted_6,
          createBaseVNode("img", {
            class: "w-[242px] h-[130px]",
            src: $setup.imgFinancePar
          }, null, 8, _hoisted_39),
          _hoisted_40
        ])
      ])
    ])
  ]);
}
_sfc_main$1.__file = "src/components/home/TermsOfUsePopup.vue";
const TermsOfUsePopup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/home/TermsOfUsePopup.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  setup(__props, { expose }) {
    expose();
    const panelsStore = usePanelsStore();
    const viewStore = useViewsStore();
    const popUpStore = usePopUpStore();
    onMounted(() => {
      viewStore.setCurrentView(viewList["home"]);
      panelsStore.setTypePanelDisplay("left");
      panelsStore.isCompletelyHidden = false;
    });
    const __returned__ = { panelsStore, viewStore, popUpStore, ButtonWithCheckboxBegin, FooterAreaLink, UiSolarPanelTitle, ProcessSteps, TermsOfUsePopup };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["UiSolarPanelTitle"]),
    createVNode($setup["ProcessSteps"]),
    createVNode($setup["ButtonWithCheckboxBegin"]),
    $setup.popUpStore.isDisplayTermsOfUse ? (openBlock(), createBlock($setup["TermsOfUsePopup"], {
      key: 0,
      onClose: _cache[0] || (_cache[0] = ($event) => $setup.popUpStore.closeTermsOfUse())
    })) : createCommentVNode("v-if", true),
    createVNode($setup["FooterAreaLink"])
  ], 64);
}
_sfc_main.__file = "src/views/HomeView.vue";
const HomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/HomeView.vue"]]);
export {
  HomeView as default
};
