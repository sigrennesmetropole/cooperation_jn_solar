import { as as defineComponent, aw as openBlock, aA as createElementBlock, aB as createBaseVNode, bj as createStaticVNode, aR as useRoute, ay as ref, bd as onBeforeMount, ax as createVNode, au as createBlock, aD as createCommentVNode } from "./vendor.fce036ea.js";
import { u as useViewsStore, v as viewList } from "./views.model.179ac722.js";
import { H as HeaderLegalNotice } from "./UiHeaderFullScreen.story.21499f07.js";
import { g as goToBlack } from "./expand-small-bigger-retract-smaller-big.36b4ec1e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "LegalNotice",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get expandIcon() {
      return goToBlack;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[78px]" };
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-[44px] leading-[48px] lmb-12 font-bold" }, " Mentions l\xE9gales ", -1);
const _hoisted_3$1 = { class: "flex flex-col gap-8 text-base font-normal" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("p", null, " Nos devoirs et obligations : toutes les informations obligatoires du pr\xE9sent site internet. ", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-3xl font-bold" }, "\xC9diteurs du site", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, "Le pr\xE9sent site internet est g\xE9r\xE9 par Rennes M\xE9tropole.", -1);
const _hoisted_7 = { class: "flex flex-col gap-2 text-base font-normal" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "text-xl font-bold" }, "Rennes M\xE9tropole:"),
  /* @__PURE__ */ createBaseVNode("p", null, "(\xC9tablissement public de coop\xE9ration intercommunale)")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, "H\xF4tel de Rennes M\xE9tropole", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "4, avenue Henri Fr\xE9ville", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, "CS 9311135031 RENNES cedex", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "T\xE9l\xE9phone : 02 99 86 60 60", -1);
const _hoisted_13$1 = { class: "flex flex-row" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", { class: "underline decoration-1 font-medium" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&USAGER_PROCESS=CONTACT",
    target: "_blank"
  }, " Nous contacter ")
], -1);
const _hoisted_15$1 = {
  href: "https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&USAGER_PROCESS=CONTACT",
  target: "_blank"
};
const _hoisted_16$1 = ["src"];
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", { class: "test-base" }, "Siren : 243 500 139"),
  /* @__PURE__ */ createBaseVNode("li", { class: "test-base" }, "Siret : 243 500 139 001 89"),
  /* @__PURE__ */ createBaseVNode("li", { class: "test-base" }, "N\xB0TVA : FR 25 243 500 139")
], -1);
const _hoisted_18$1 = /* @__PURE__ */ createStaticVNode('<div class="flex flex-col gap-2 text-base font-normal"><h3 class="text-xl font-bold">Directeur de la publication:</h3><div><p>Nathalie APPERE, pr\xE9sidente de Rennes M\xE9tropole.</p><p> Directeur de la communication et de l&#39;information : Laurent Ri\xE9ra. </p></div></div><div class="flex flex-col gap-2 text-base font-normal"><h3 class="text-xl font-bold">Conception et charte graphique:</h3><p>Lucile Collignon EI</p></div><div class="flex flex-col gap-2 text-base font-normal"><h3 class="text-xl font-bold">D\xE9veloppement:</h3><p>CampToCamp</p></div><div class="flex flex-col gap-2 text-base font-normal"><h3 class="text-xl font-bold">H\xE9bergement:</h3><p>Ce site est h\xE9berg\xE9 par Scaleway.</p></div><div class="flex flex-col gap-2 text-base font-normal"><h3 class="text-xl font-bold">Programme France Relance:</h3><p>Ce projet a \xE9t\xE9 soutenu par le programme France Relance.</p><img class="h-[130px] w-[242.25px]" src="/cooperation_jn_solar/main/src/assets/illustrations/etiquette-fr.png" alt=""></div>', 5);
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$4,
    createBaseVNode("div", _hoisted_3$1, [
      _hoisted_4$1,
      _hoisted_5,
      _hoisted_6,
      createBaseVNode("div", _hoisted_7, [
        _hoisted_8,
        createBaseVNode("div", null, [
          _hoisted_9,
          _hoisted_10,
          _hoisted_11,
          _hoisted_12,
          createBaseVNode("div", _hoisted_13$1, [
            _hoisted_14,
            createBaseVNode("a", _hoisted_15$1, [
              createBaseVNode("img", {
                src: $setup.expandIcon,
                class: "w-3.5 h-3.5 ml-2 mt-1"
              }, null, 8, _hoisted_16$1)
            ])
          ]),
          _hoisted_17$1
        ])
      ]),
      _hoisted_18$1
    ])
  ]);
}
_sfc_main$5.__file = "src/components/legal/LegalNotice.vue";
const LegalNotice = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/LegalNotice.vue"]]);
const iconCheckGreen = "/cooperation_jn_solar/main/assets/icon-check-green.383247bb.svg";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PrivacyLegal",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { get iconCheckGreen() {
      return iconCheckGreen;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$3 = { class: "flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[79px]" };
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<h1 class="text-[44px] leading-[48px] lmb-12 font-bold"> Politique de protection des donn\xE9es personnelles </h1><p>Derni\xE8re mise \xE0 jour : date</p><div class="bg-neutral-50 p-8 border border-neutral-200"><p class="text-base font-normal"> Bienvenue sur lien <a class="underline decoration-1 font-medium" href="" target="_blank">https://...</a></p><p class="text-base font-normal"> Le responsable de traitement de vos donn\xE9es personnelles est Rennes M\xE9tropole (ci-apr\xE8s \xAB nous \xBB). Adresse postale: Rennes M\xE9tropole Service Protection de la donn\xE9e H\xF4tel de Rennes M\xE9tropole 4, avenue Henri Freville CS 93111 35031 Rennes cedex <a class="test-base underline decoration-1 font-medium" href="https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&amp;USAGER_PROCESS=CONTACT" target="_blank">Nous contacter</a></p><p><a class="test-base underline decoration-1 font-medium" href="" target="_blank">Voir les mentions l\xE9gales</a></p></div><div class="flex flex-col gap-8"><div class="text-base font-normal"><p class="mb-6"> Dans le cadre de la simulation des \xE9conomies d&#39;\xE9nergie li\xE9es au pr\xE9-dimensionnement d&#39;une installation photovolta\xEFque, vous nous transmettez des informations personnelles : adresse et consommation \xE9lectrique annuelle. Les champs obligatoires sont indiqu\xE9s comme tels dans les formulaires. Nous nous engageons \xE0 ce que la collecte et le traitement de vos donn\xE9es soient effectu\xE9s de mani\xE8re licite, loyale et transparente, conform\xE9ment au <a class="underline decoration-1 font-medium" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank">R\xE8glement europ\xE9en g\xE9n\xE9ral sur la protection des donn\xE9es</a> (\xAB RGPD \xBB) et \xE0 la <a class="underline decoration-1 font-medium" href="https://www.cnil.fr/fr/la-loi-informatique-et-libertes" target="_blank">Loi informatiques et Libert\xE9s de 1978 modifi\xE9e</a> (\xAB LIL \xBB). </p><p class="mb-6"> Cette collecte d&#39;information se limite au n\xE9cessaire, conform\xE9ment au principe de minimisation des donn\xE9es. Les d\xE9finitions fournies \xE0 <a class="underline decoration-1 font-medium" href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre1" target="_blank">l&#39;article 4 du RGPD</a> sont applicables aux pr\xE9sentes. En cas de mise \xE0 jour, nous n&#39;abaisserons pas le niveau de confidentialit\xE9 de mani\xE8re substantielle sans l&#39;information pr\xE9alable des personnes concern\xE9es. </p><p class="mb-6"> Nous nous efforcerons de r\xE9pondre en toute transparence aux questions suivantes : Quelles cat\xE9gories de donn\xE9es personnelles traitons-nous ? Dans quels buts ? Sur quelles bases l\xE9gales ? Quels sont vos droits ? Comment les exercer ? Pendant combien de temps les donn\xE9es sont-elles conserv\xE9es ? Vous trouverez \xE9galement nos engagements en mati\xE8re de sous-traitance, de transferts, de communication \xE0 des tiers et en cas de faille de s\xE9curit\xE9. </p><p> Pour toute pr\xE9cision ou r\xE9clamation, n&#39;h\xE9sitez pas \xE0 <a class="underline decoration-1 font-medium" href="https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&amp;USAGER_PROCESS=CONTACT" target="_blank">nous contacter.</a></p></div><h2 class="text-2xl font-bold"> Quelles donn\xE9es personnelles collectons-nous sur la plateforme ? </h2><div class="font-normal"><h3 class="text-xl font-bold mb-2"> Consommation \xE9lectrique annuelle, adresse et surface d&#39;installation des panneaux photovolta\xEFques : </h3><p class="text-base"> Ces donn\xE9es sont renseign\xE9es par l&#39;utilisateur de la Plateforme ou, pour la consommation \xE9lectrique, si l&#39;utilisateur le souhaite, obtenue par connexion au service DataConnect d&#39;Enedis. La surface d&#39;installation des panneaux est calcul\xE9e automatiquement apr\xE8s que l&#39;utilisateur ait retir\xE9 les obstacles pr\xE9sents sur la toiture. </p></div><div class="font-normal"><h3 class="text-xl font-bold mb-2">Adresse mail :</h3><p class="text-base"> Cette donn\xE9e est renseign\xE9e si l&#39;utilisateur de la Plateforme souhaite un envoi du rapport de synth\xE8se \xE0 son adresse mail. </p></div><div class="font-normal"><h3 class="text-xl font-bold mb-2">Journaux de connexion :</h3><p class="text-base"> Des donn\xE9es d\xB4utilisation (adresses IP, logs de connexion et d\xB4utilisation) sont collect\xE9es automatiquement sur la Plateforme. </p></div><div class="font-normal"><h3 class="text-xl font-bold mb-2">Cookies :</h3><p class="text-base"> Voir notre <a class="underline decoration-1 font-medium" href="https://fabriquecitoyenne.fr/cookies-page" target="_blank">Politique des cookies.</a></p></div><h2 class="text-2xl font-bold"> Dans quels buts ces donn\xE9es sont-elles collect\xE9es ? </h2></div><div class="font-normal"><h3 class="text-xl font-bold mb-2"> Consommation \xE9lectrique annuelle, adresse et surface d&#39;installation des panneaux photovolta\xEFques : </h3><p class="text-base"> Ces donn\xE9es sont utilis\xE9es par Rennes M\xE9tropole pour simuler la part de production photovolta\xEFque associ\xE9e au pr\xE9-dimensionnement d&#39;une installation photovolta\xEFque, consomm\xE9e sur place et celle revendue et inject\xE9e sur le r\xE9seau. </p></div><div class="font-normal"><h3 class="text-xl font-bold mb-2">Adresse mail :</h3><p class="text-base"> Cette donn\xE9e est renseign\xE9e si l&#39;utilisateur de la Plateforme souhaite un envoi du rapport de synth\xE8se \xE0 son adresse mail. </p></div><p class="text-2xl font-bold">Lic\xE9it\xE9 du traitement des donn\xE9es</p><div class="font-normal text-base"><p> Les traitements de donn\xE9es personnelles que nous mettons en \u0153uvre reposent sur le consentement de l&#39;utilisateur (acceptation des cookies, communication des donn\xE9es personnelles). Le consentement peut \xEAtre retir\xE9 \xE0 tout moment par l&#39;utilisateur (voir la rubrique quels sont vos droits / comment les exercer). <br><br> L&#39;utilisateur a le droit de s&#39;opposer au d\xE9p\xF4t de ces cookies en cliquant sur &quot;refuser&quot;. Pour de plus amples informations sur les cookies, vous pouvez consulter notre politique de gestion des cookies. </p></div><p class="text-2xl font-bold"> Pendant combien de temps vos donn\xE9es sont-elles conserv\xE9es ? </p><div class="font-normal text-base"><p class="mb-6"> Les donn\xE9es sont conserv\xE9es uniquement pendant l&#39;utilisation du service propos\xE9 par la Plateforme. </p><p class="mb-6"> \xC0 l&#39;issue de cette utilisation (\xE9tape de simulation), les donn\xE9es personnelles pourront \xEAtre anonymis\xE9es et conserv\xE9es \xE0 des fins statistiques. Sinon, elles feront l&#39;objet d&#39;une suppression d\xE9finitive. Nous pouvons publier, divulguer et utiliser les informations agr\xE9g\xE9es (informations combin\xE9es de telle sorte que personne ne puisse plus \xEAtre identifi\xE9 ou mentionn\xE9) et les informations non personnelles \xE0 des fins d&#39;analyse de l&#39;utilisation de la Plateforme et pour aider \xE0 la planification \xE9nerg\xE9tique du territoire. </p><p> Vous pourrez conserver la trace des informations associ\xE9es \xE0 votre simulation en t\xE9l\xE9chargeant le rapport de synth\xE8se accessible via un bouton &#39;T\xE9l\xE9charger le rapport .pdf&#39; disponible sur la page Tableau de bord. </p></div><p class="text-2xl font-bold"> Quels sont vos droits ? Comment les exercer ? </p><div class="text-base font-normal"><p> Dans les limites pr\xE9vues par la loi, vous pouvez acc\xE9der et obtenir copie des donn\xE9es vous concernant, vous opposer au traitement de ces donn\xE9es, les faire rectifier ou les faire effacer. Vous disposez \xE9galement d&#39;un droit \xE0 la limitation du traitement de vos donn\xE9es. </p><p> Les demandes d&#39;exercice de vos droits peuvent \xEAtre adress\xE9es au responsable de traitement par voie postale : </p><p>Rennes M\xE9tropole</p><p>Service Protection de la donn\xE9e</p><p>H\xF4tel de Rennes M\xE9tropole</p><p>4 avenue Henri Freville</p><p>CS 93111 35031 Rennes Cedex</p><p class="mb-6"><a class="underline decoration-1 font-medium" href="https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&amp;USAGER_PROCESS=CONTACT" target="_blank">Nous contacter</a></p><p> Si vous estimez apr\xE8s nous avoir contact\xE9 que les droits sur vos donn\xE9es n\u2019ont pas \xE9t\xE9 respect\xE9s, vous pouvez introduire une r\xE9clamation aupr\xE8s de la CNIL. </p><p><a class="underline decoration-1 font-medium" href="https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles" target="_blank">Voir le site de la CNIL pour plus d\xB4informations sur vos droits.</a></p></div><p class="text-2xl font-bold"> Nos engagements en mati\xE8re de sous-traitance, communication et transferts de donn\xE9es. </p>', 13);
const _hoisted_15 = { class: "bg-lime-50 flex flex-row items-center justify-center gap-3 p-2" };
const _hoisted_16 = ["src"];
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("span", { class: "text-sm font-normal font-dm-sans color-lime-900" }, " Vos donn\xE9es nominatives sont \xE0 usage interne, elles sont strictement confidentielles et ne peuvent \xEAtre divulgu\xE9es \xE0 des tiers, sauf en cas d'accord express. ", -1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<div class="text-base font-normal"><p class="mb-6"> En cas de communication de vos donn\xE9es personnelles \xE0 un tiers, quelle que soit sa qualit\xE9, nous nous assurerons pr\xE9alablement que ce dernier est tenu d\xB4appliquer des conditions de confidentialit\xE9 identiques aux n\xF4tres. <br> Nous nous engageons \xE0 (i) ce que tout sous-traitant, dont CampToCamp propulsant la Plateforme et l&#39;INES r\xE9alisant la simulation pr\xE9sentent des garanties contractuelles suffisantes et appropri\xE9es pour respecter vos droits, afin que le traitement r\xE9ponde aux exigences du RGPD et (ii) \xE0 respecter les <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre5" class="underline">dispositions</a> du RGPD applicables aux transferts des donn\xE9es. </p></div><p class="text-2xl font-bold">Indications en cas de violation de donn\xE9es</p><div class="text-base font-normal"><p class="mb-6"> Nous nous engageons \xE0 mettre en \u0153uvre toutes les mesures techniques et organisationnelles appropri\xE9es gr\xE2ce \xE0 des moyens de s\xE9curisation physiques et logistiques permettant de garantir un niveau de s\xE9curit\xE9 adapt\xE9 au regard des risques d&#39;acc\xE8s accidentels, non autoris\xE9s ou ill\xE9gaux, de divulgation, d&#39;alt\xE9ration, de perte ou encore de destruction des donn\xE9es personnelles vous concernant. </p><p> Dans l&#39;\xE9ventualit\xE9 o\xF9 nous prendrions connaissance d&#39;un acc\xE8s ill\xE9gal aux donn\xE9es personnelles vous concernant, stock\xE9es sur nos serveurs ou ceux de nos prestataires, ou d&#39;un acc\xE8s non autoris\xE9 ayant pour cons\xE9quence la r\xE9alisation des risques identifi\xE9s ci-dessus, nous nous engageons \xE0 : </p><br><ul><li> \xB7 Vous notifier l&#39;incident dans les plus brefs d\xE9lais si cela est susceptible d\u2019engendrer un risque \xE9lev\xE9 pour vos droits et libert\xE9s ; </li><li>\xB7 Examiner les causes de l&#39;incident ;</li><li> \xB7 Prendre les mesures n\xE9cessaires dans la limite du raisonnable afin d&#39;amoindrir les effets n\xE9gatifs et pr\xE9judices pouvant r\xE9sulter dudit incident. </li></ul><p class="mt-10"> En aucun cas les engagements d\xE9finis au point ci-dessus ne peuvent \xEAtre assimil\xE9s \xE0 une quelconque reconnaissance de faute ou de responsabilit\xE9 quant \xE0 la survenance de l&#39;incident en question. </p></div>', 3);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    _hoisted_2$3,
    createBaseVNode("div", _hoisted_15, [
      createBaseVNode("img", { src: $setup.iconCheckGreen }, null, 8, _hoisted_16),
      _hoisted_17
    ]),
    _hoisted_18
  ]);
}
_sfc_main$4.__file = "src/components/legal/PrivacyLegal.vue";
const Privacy = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/PrivacyLegal.vue"]]);
const _sfc_main$3 = {};
function _sfc_render$3(_ctx, _cache) {
  return "Plan du site";
}
_sfc_main$3.__file = "src/components/legal/SiteMap.vue";
const SiteMap = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/SiteMap.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[87px]" };
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<h1 class="flex flex-column align-start text-[44px] leading-[48px] lmb-12 font-bold"> Accessibilit\xE9 </h1><div class="text-base font-normal"><p> Le site # est d\xE9velopp\xE9 selon les recommandations du r\xE9f\xE9rentiel g\xE9n\xE9ral d\u2019am\xE9lioration de l\u2019accessibilit\xE9 (RGAA) pour \xEAtre accessible \xE0 tous les usagers quel que soit le mat\xE9riel ou le logiciel utilis\xE9 pour naviguer sur internet. </p><p>Cette d\xE9claration d\u2019accessibilit\xE9 s\u2019applique au site #.</p></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold">\xC9tat de conformit\xE9</h2><p> Le site est <span class="font-bold">totalement conforme</span> avec le r\xE9f\xE9rentiel g\xE9n\xE9ral d\u2019am\xE9lioration de l\u2019accessibilit\xE9 (RGAA), version 4. </p></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold">R\xE9sultats des tests</h2><p> L&#39;audit de conformit\xE9 r\xE9alis\xE9 en interne r\xE9v\xE8le que 100% des crit\xE8res sont respect\xE9s. </p></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold"> \xC9tablissement de cette d\xE9claration d&#39;accessibilit\xE9 </h2><p>Cette d\xE9claration a \xE9t\xE9 \xE9tablie le 9/08/2022.</p></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold"> Technologies utilis\xE9es pour la r\xE9alisation de l&#39;audit </h2><ul class="list-disc pl-6"><li>HTML5</li><li>CSS</li><li>Javascript</li></ul></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold">Environnement de test</h2><p> Les v\xE9rifications de restitution de contenus ont \xE9t\xE9 r\xE9alis\xE9es sur la base de la combinaison fournie par la base de r\xE9f\xE9rence du RGAA, avec les versions suivantes : </p><ul class="list-disc pl-6"><li>Firefox et NVDA</li><li>CSS</li><li>Safari et VoiceOver</li></ul></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold"> Outils pour \xE9valuer l&#39;accessibilit\xE9 </h2><ul class="list-disc pl-6"><li>HeadingsMap</li><li>Web Developer Chrome extension</li><li>Color Contrast Analyser</li><li>ArcToolkit</li></ul></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold"> Pages du site ayant fait l&#39;objet de la v\xE9rification de conformit\xE9 : </h2><ul class="list-disc pl-6 underline decoration-1"><li><a href="https://accessibilite.numerique.gouv.fr/" target="_blank">Accueil</a></li><li><a href="https://accessibilite.numerique.gouv.fr/infos/accessibilite/" target="_blank">Accessibilit\xE9</a></li><li><a href="https://accessibilite.numerique.gouv.fr/infos/mentions-legales/" target="_blank">Mentions l\xE9gales</a></li><li><a href="https://accessibilite.numerique.gouv.fr/infos/plan-du-site/" target="_blank">plan du site</a></li><li><a href="https://accessibilite.numerique.gouv.fr/infos/nouveautes/" target="_blank">Nouveaut\xE9s</a></li><li><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" target="_blank">Crit\xE8res et tests</a></li><li><a href="https://accessibilite.numerique.gouv.fr/methode/glossaire/" target="_blank">Glossaire</a></li><li><a href="https://accessibilite.numerique.gouv.fr/obligations/champ-application/" target="_blank">Champ d&#39;application</a></li><li><a href="https://accessibilite.numerique.gouv.fr/methode/environnement-de-test/" target="_blank">Environnement de test</a></li><li><a href="https://accessibilite.numerique.gouv.fr/ressources/kit-audit/" target="_blank">kits d&#39;audits</a></li><li><a href="https://accessibilite.numerique.gouv.fr/obligations/" target="_blank">Obligations</a></li></ul></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold">Retour d\u2019information et contact</h2><p> Si vous n\u2019arrivez pas \xE0 acc\xE9der \xE0 un contenu ou \xE0 un service, vous pouvez nous contacter par courriel \xE0 l\u2019adresse # pour \xEAtre orient\xE9 vers une alternative accessible ou obtenir le contenu sous une autre forme. </p></div><div class="text-base font-normal"><h2 class="text-2xl mb-2 font-bold">D\xE9fenseur des droits</h2><p class="mb-6"> Si vous constatez un d\xE9faut d\u2019accessibilit\xE9 vous emp\xEAchant d\u2019acc\xE9der \xE0 un contenu ou une fonctionnalit\xE9 du site, que vous nous le signalez et que vous ne parvenez pas \xE0 obtenir une r\xE9ponse rapide de notre part, vous \xEAtes en droit de faire parvenir vos dol\xE9ances ou une demande de saisine au D\xE9fenseur des droits. </p><p class="mb-6">Plusieurs moyens sont \xE0 votre disposition :</p><ul class="list-disc pl-6"><li> un <a class="underline decoration-1" href="https://www.defenseurdesdroits.fr/nous-contacter" target="_blank">formulaire de contact</a></li><li> la <a class="underline decoration-1" href="https://www.defenseurdesdroits.fr/fr/saisir/delegues" target="_blank">liste des d\xE9l\xE9gu\xE9s de votre r\xE9gion</a> avec leurs informations de contact directs </li><li> un num\xE9ro de t\xE9l\xE9phone : le 09 69 39 00 00 du lundi au vendredi de 8h00 \xE0 20h00 (co\xFBt d\u2019un appel local) </li><li> une adresse postale dans l\u2019<a class="underline decoration-1" href="https://lannuaire.service-public.fr/autorites-independantes/1867f065-c823-4362-8d0f-8ca6b011a10f" target="_blank">annuaire de l\u2019administration</a></li></ul></div>', 11);
const _hoisted_13 = [
  _hoisted_2$2
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, _hoisted_13);
}
_sfc_main$2.__file = "src/components/legal/AccessibilityLegal.vue";
const Accessibility = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/AccessibilityLegal.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[87px]" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("h1", { class: "flex flex-column align-start text-[44px] leading-[48px] lmb-12 font-bold" }, " Cookies ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-base font-normal" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_4);
}
_sfc_main$1.__file = "src/components/legal/CookiesLegal.vue";
const Cookies = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/components/legal/CookiesLegal.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LegalNoticeView",
  setup(__props, { expose }) {
    expose();
    const viewStore = useViewsStore();
    const { params } = useRoute();
    const routeParams = ref(params);
    const legalLink = routeParams.value.legallink;
    onBeforeMount(async () => {
      viewStore.setCurrentView(viewList["legal-notice"]);
    });
    const __returned__ = { viewStore, params, routeParams, legalLink, HeaderLegalNotice, LegalNotice, Privacy, SiteMap, Accessibility, Cookies };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex flex-row bg-neutral-100" };
const _hoisted_2 = { class: "w-screen font-dm-sans font-medium flex flex-col overflow-y-scroll" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode($setup["HeaderLegalNotice"]),
      $setup.legalLink == "mentions-legales" ? (openBlock(), createBlock($setup["LegalNotice"], { key: 0 })) : $setup.legalLink == "confidentialite" ? (openBlock(), createBlock($setup["Privacy"], { key: 1 })) : $setup.legalLink == "plan-du-site" ? (openBlock(), createBlock($setup["SiteMap"], { key: 2 })) : $setup.legalLink == "accessibilite" ? (openBlock(), createBlock($setup["Accessibility"], { key: 3 })) : $setup.legalLink == "cookies" ? (openBlock(), createBlock($setup["Cookies"], { key: 4 })) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "src/views/LegalNoticeView.vue";
const LegalNoticeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/cooperation_jn_solar/cooperation_jn_solar/src/views/LegalNoticeView.vue"]]);
export {
  LegalNoticeView as default
};
