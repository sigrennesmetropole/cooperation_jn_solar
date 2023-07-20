<script setup lang="ts">
import imgFinancePar from '@/assets/icons/finance-par.png'
import deleteSquare from '@/assets/icons/delete-square.svg'
</script>
<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full z-[100]"
      style="background-color: rgba(0, 0, 0, 0.75)"
    >
      >
      <div
        class="relative flex flex-col mx-auto mt-13 h-[90%] w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto"
        style="background-color: rgba(255, 255, 255, 1)"
      >
        <div class="flex flex-row">
          <h3 class="text-2xl font-bold">Conditions d’utilisation</h3>

          <button
            tabindex="0"
            @keydown.enter="$emit('close')"
            @click="$emit('close')"
            class="w-4 h-4 ml-auto hover:bg-neutral-400 flex justify-center items-center"
          >
            <img :src="deleteSquare" />
          </button>
        </div>
        <div
          class="relative flex flex-col mx-auto mt-13 pr-8 rounded-lg gap-8 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400 font-dm-sans"
          style="background-color: rgba(255, 255, 255, 1)"
        >
          <p class="text-sm font-normal">
            Rennes Métropole met à disposition, via le présent site, un service
            permettant, sur le territoire de Rennes Métropole, d'estimer
            l'exposition solaire de son logement, de simuler le dimensionnement
            d' une installation photovoltaïque et d'en déduire une estimation de
            la production d'énergie associée (incluant la part d'énergie
            consommée sur place et la part vendue et injectée sur le réseau en
            lien avec les niveaux de consommation de l' usager). L’Utilisateur
            est réputé avoir pris connaissance des présentes conditions
            générales, qui s'imposent à tout usager du présent site.
            L’Utilisateur garantit qu’il n’utilisera pas le site à des fins
            illicites ou immorales ou contraires à leur utilisation initiale.
            <br /><br />
            Les équipements (ordinateurs, téléphones, moyens de
            télécommunication…) permettant l'accès au site sont à la charge
            exclusive des Utilisateurs, de même que les frais de
            télécommunications induits par leur utilisation.
          </p>

          <h4 class="text-xl font-bold">Services proposés aux utilisateurs</h4>
          <li class="text-base font-bold">
            Estimation de l'ensoleillement (ou de l'exposition solaire ou
            irradiance) en kWh/m2/an
          </li>
          <span class="text-sm">
            L'Utilisateur peut visualiser les niveaux d'ensoleillement des
            toitures du bâti métropolitain.
            <br /><br />
            La simulation d'ensoleillement est réalisée à partir d'un Modèle
            Numérique de Surface datant de 2021 (résolution de 50 cm) à l'aide
            de l'outil 'Rayonnement solaire zonal' de la suite ESRI&copy;. Les
            résultats sont exprimés en kWh/m2/an.
            <br /><br />
            L'outil calcule le rayonnement à partir d’un modèle qui prend en
            compte la position du soleil tout au long de l’année et à
            différentes heures de la journée, les obstacles susceptibles de
            bloquer l’ensoleillement, tels que les arbres ou bâtiments à
            proximité (visibles dans le Modèle Numérique de Surface), la pente
            et l’orientation de la surface. Plus de détails dans la
            <a
              href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/modeling-solar-radiation.htm"
              target="_blank"
              class="underline"
              >documentation d’aide Modélisation du rayonnement solaire</a
            >. <br /><br />
            Les résultats de la simulation sont classés suivant le code couleur
            défini ci-dessous et sont affichés sur les toitures des bâtiments de
            la maquette 3D.
          </span>
          <div class="flex flex-row items-center gap-2">
            <div class="w-10 h-6 bg-blue-700"></div>
            <span class="text-sm font-normal">
              Inférieur ou égal à 800 kWh/m2/an
            </span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div class="w-10 h-6 bg-teal-300"></div>
            <span class="text-sm font-normal">
              Entre 800 kWh/m2/an et 1000 kWh/m2/an
            </span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div class="w-10 h-6 bg-yellow-300"></div>
            <span class="text-sm font-normal">
              Entre 1000 kWh/m2/an et 1150 kWh/m2/an
            </span>
          </div>
          <div class="flex flex-row items-center gap-2">
            <div class="w-10 h-6 bg-orange-600"></div>
            <span class="text-sm font-normal">
              Supérieur ou égal à 1150 kWh/m2/an
            </span>
          </div>
          <span>
            L' outil “Rayonnement solaire zonal” fait partie de l’ArcGIS Spatial
            Analyst extension et a été utilisé avec les paramètres suivants :
            <br />- Nature du ciel utilisé : STANDARD OVERCAST SKY ISO
            15469:2004 (E)/CIE S 011/E:2003
            <a
              class="underline"
              href="https://cie.co.at/publications/cie-standard-overcast-sky-and-clear-sky"
              target="_blank"
            >
              https://cie.co.at/publications/cie-standard-overcast-sky-and-clear-sky
            </a>
            <br />- Direction de calcul : 32 <br />- Division zénitale : 8
            <br />- Division azimutales : 8 <br />- Diffusion : 0.3 <br />-
            Transmission : 0.5
          </span>

          <li class="text-base font-bold">
            Pré-dimensionnement d'une installation photovoltaïque
          </li>
          <span class="text-sm">
            L'Utilisateur peut pré-dimensionner une installation photovoltaïque
            sur la toiture de son logement.
            <br /><br />
            Les surfaces des pans de toit favorables à l'installation
            d'équipements photovoltaïques sont déduites de la simulation
            d'ensoleillement en conservant les valeurs supérieures à 1 000
            kWh/m2/an.
            <br /><br />
            Les Utilisateurs peuvent, en outre, signaler et localiser des
            obstacles empêchant l'installation de panneaux photovoltaïques non
            visibles sur le Modèle Numérique de Surface comme, par exemple, des
            vélux, des cheminées…
            <br /><br />
            Les obstacles renseignés par les Utilisateurs sont ainsi déduits des
            surfaces favorables à l'installation d'équipements photovoltaïques.
            Un algorithme de positionnement détermine ensuite le nombre maximum
            de panneaux solaires (dont la taille moyenne est fixée à 950 mm *
            1900 mm) pouvant être installés sur la surface restante.
          </span>

          <li class="text-base font-bold">Production d'énergie en kWh</li>
          <span class="text-sm">
            L'Utilisateur peut ensuite obtenir une simulation de l'énergie
            produite par l'installation obtenue en kWh.
            <br /><br />
            Une puissance installée en kWc est calculée à partir du nombre de
            panneaux photovoltaïques finalement retenus par l'Utilisateur à
            l'issue de l'étape précédente de pré-dimensionnement (400 Wc par
            panneau).
            <br /><br />
            Cette puissance installée, ainsi que la localisation, l'orientation
            et l'inclinaison de la toiture sont alors utilisées par le logiciel
            AutoCalSol, développé par l ’Institut National de l’Énergie Solaire
            pour simuler la production d'énergie correspondant à l'installation
            testée.
            <br /><br />
            Les paramètres de l'API AutoCalSol utilisés sont les suivants :
            <ul class="list-disc pl-6">
              <li>Performance de l'installation : 0,85</li>
              <li>Technologie utilisée : silicium cristallin</li>
              <li>Mode d'intégration : surimposé</li>
            </ul>
            <br />
            Enfin, l'utilisateur peut, s'il le souhaite, renseigner sa
            consommation électrique annuelle en kWh (obtenue grâce à sa facture
            fournisseur ou à la connexion à son espace Enedis) et obtenir une
            simulation de la part d'énergie produite pouvant être consommée sur
            place (autoconsommation) et la part pouvant être vendue et injectée
            sur le réseau. Cette simulation réalisée par le logiciel AutoCalSol
            de l'INES s'appuie sur un profil de consommation moyen (en tarif
            unique résidentiel) obtenu via l'open data d'Enedis.
          </span>

          <li class="text-base font-bold">Téléchargement d'un rapport</li>
          <span class="text-sm">
            L'Utilisateur sera invité, à télécharger un rapport .pdf reprenant
            les contenus pédagogiques et indicateurs obtenus lors de sa
            simulation.
          </span>

          <h4 class="text-xl font-bold mt-1">Propriété intellectuelle</h4>
          <h5 class="font-bold text-lg">Logiciels utilisés</h5>
          <ul class="list-disc pl-6">
            <li>
              L'outil 'Rayonnement solaire zonal' de l’ArcGIS Spatial Analyst
              extension permet de simuler l'ensoleillement des toitures de la
              métropole rennaise (en kWh/m2/an)
            </li>
            <li>
              AutoCalSol, logiciel métier de l’Institut National de l’Énergie
              Solaire (INES) permet de pré-dimensionner les installations
              solaires photovoltaïques en autoconsommation et de simuler les
              niveaux d’autoconsommation et d’autoproduction en lien avec les
              niveaux de consommation des usagers
            </li>
          </ul>

          <h4 class="text-xl font-bold mt-1">Droits de reproduction</h4>
          <h5 class="font-bold text-lg">
            Contenus produits par Rennes Métropole
          </h5>
          <p>
            Le présent site est la propriété de Rennes Métropole, qui en est
            l'auteur au sens des articles L. 111.1 et suivants du Code de la
            propriété intellectuelle. Les photographies, textes, slogans,
            dessins, images, séquences animées sonores ou non ainsi que toutes
            œuvres intégrées dans le site sont la propriété de Rennes Métropole
            ou de tiers ayant autorisé Rennes Métropole à les utiliser. La
            reproduction, sur un support papier ou informatique, du rapport
            téléchargeable ou du site est autorisée sous réserve qu'elle soit
            strictement réservée à un usage personnel, excluant tout usage à des
            fins publicitaires et/ou commerciales et/ou d'informations, et
            qu'elle soit conforme aux dispositions de l'article L122-5 du Code
            de la Propriété Intellectuelle. À l'exception des dispositions
            ci-dessus, toute reproduction, représentation, utilisation ou
            modification, par quelque procédé que ce soit et sur quelque support
            que ce soit, de tout ou partie du site, des rapports téléchargeables
            et de tout ou partie des contenus qui le composent, sans avoir
            obtenu l'autorisation préalable de Rennes Métropole, est strictement
            interdite et constitue un délit de contrefaçon.
          </p>

          <h5 class="font-bold text-lg">
            Liens hypertextes pointant vers le site
          </h5>
          <p>
            Le site de Rennes Métropole autorise tout site internet ou tout
            autre support à le citer ou à mettre en place un lien hypertexte
            pointant vers son contenu, sous réserve :
          </p>
          <ul class="list-disc pl-6">
            <li>
              Que la page atteinte ne soit pas imbriquée à l’intérieur d’autres
              pages, en particulier par voie de cadre (ou « frames »)
              c’est-à-dire que les pages du présent site ne soient pas
              imbriquées à l’intérieur des pages d’un autre site, mais
              accessibles par l’ouverture d’une fenêtre,
            </li>
            <li>
              De mentionner la source (Site Rennes Métropole) pour chaque lien,
              en particulier lorsqu’il s’agit d’un lien direct sur un contenu,
            </li>
            <li>
              Que l’accès aux pages contenant ces liens vers le présent site
              soit gratuit.
            </li>
          </ul>
          <p>
            Cette autorisation ne s’applique pas aux sites diffusant des
            informations à caractère polémique, pornographique, xénophobe ou
            pouvant, dans une plus large mesure porter atteinte à la sensibilité
            du plus grand nombre. Rennes Métropole se réserve le droit de
            demander la suppression d’un lien qu’elle estime non conforme à sa
            ligne éditoriale.
            <br /><br />
            Rennes Métropole ne peut en aucun cas être tenu responsable de la
            mise à disposition du présent site via un lien hypertexte, et ne
            peut supporter aucune responsabilité sur le contenu, les produits,
            les services, etc. disponibles sur ces sites destinataires ou à
            partir de ces sites destinataires.
          </p>

          <h5 class="font-bold text-lg">
            Liens hypertextes proposés sur le présent site
          </h5>
          <p>
            Plusieurs liens vers d’autres sites sont proposés. Leur présence ne
            saurait engager Rennes Métropole quant à leur contenu et ne vise
            qu’à permettre à l’internaute de trouver plus facilement un
            accompagnement et d’autres ressources sur le sujet de l'énergie
            photovoltaïque.
          </p>

          <h4 class="text-xl font-bold mt-1">
            Traitement des données personnelles
          </h4>
          <p>
            Voir la politique
            <a
              href="/legalnotice/confidentialite"
              target="_blank"
              class="underline"
            >
              de protection des données personnelles</a
            >
            du présent site.
          </p>

          <h4 class="text-xl font-bold mt-1">Responsabilité</h4>
          <p>
            Rennes Métropole met tout en œuvre pour offrir aux Utilisateurs des
            informations et/ou des outils disponibles et mis à jour. Pour
            autant, elle ne saurait être tenue responsable en cas d’erreurs,
            d’absence de disponibilité des fonctionnalités et/ou de la présence
            de virus sur le site.
            <br /><br />
            Rennes Métropole ne saurait garantir l'exactitude, la complétude,
            l'actualité et l’exhaustivité des informations diffusées sur le
            site. Chaque Utilisateur est invité à affiner les informations
            obtenues et restituées dans le rapport téléchargeable auprès de
            structures spécialisées.
            <br /><br />
            La responsabilité de Rennes Métropole ne saurait être engagée en cas
            de force majeure.
          </p>

          <h4 class="text-xl font-bold mt-1">Programme France Relance</h4>
          <p>Ce projet a été soutenu par le programme France Relance.</p>

          <img class="w-[242px] h-[130px]" :src="imgFinancePar" />

          <p>Licence Creative Commons BY-NC-SA 3.0 FR</p>
        </div>
      </div>
    </div>
  </div>
</template>
