<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full"
      style="background-color: rgba(0, 0, 0, 0.75); z-index: 60"
    >
      >
      <div
        class="relative flex flex-col mx-auto mt-13 h-[90%] w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto"
        style="background-color: rgba(255, 255, 255, 1)"
      >
        <div class="flex flex-row">
          <h3 class="text-2xl font-bold">Conditions d’utilisation</h3>

          <button
            @click="$emit('close')"
            class="w-5 h-5 border border-black rounded ml-auto hover:bg-neutral-400 flex justify-center items-center"
          >
            x
          </button>
        </div>
        <div
          class="relative flex flex-col mx-auto mt-13 pr-8 rounded-lg gap-8 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400"
          style="background-color: rgba(255, 255, 255, 1)"
        >
          <p>
            Rennes Métropole met à disposition, via le présent site, un service
            permettant, sur le territoire de Rennes Métropole, d'estimer
            l'exposition solaire de son logement, de simuler le dimensionnement
            d' une installation photovoltaïque et d'en déduire une estimation de
            la production d'énergie associée (incluant la part d'énergie
            consommée sur place et la part vendue et injectée sur le réseau en
            lien avec les niveaux de consommation de l'usager). L’Utilisateur
            est réputé avoir pris connaissance des présentes conditions
            générales, qui s'imposent à tout usager du présent site.
            L’Utilisateur garantit qu’il n’utilisera pas le site à des fins
            illicites ou immorales ou contraire à leur utilisation initiale.
            <br /><br />
            Les équipements (ordinateurs, téléphone, moyens de
            télécommunication…) permettant l'accès au site sont à la charge
            exclusive des Utilisateurs, de même que les frais de
            télécommunications induits par leur utilisation.
          </p>

          <h4 class="text-2xl font-bold">Services proposés aux utilisateurs</h4>
          <p>
            <strong
              >Estimation de l'ensoleillement (ou de l'exposition solaire) en
              kWh/m2</strong
            >
            <br /><strong
              >Pré-dimensionnement d'une installation photovoltaïque</strong
            >
            <br />Les Utilisateurs peuvent accéder <br /><strong
              >Estimation des économie d'énergie</strong
            >
            <br /><strong>Téléchargement d'un rapport</strong>
            <br />L'Utilisateur sera invité, à télécharger un rapport .pdf
            reprenant les contenus pédagogiques et indicateurs obtenus lors de
            sa simulation.
          </p>
          <h4 class="text-2xl font-bold">Propriété intellectuelle</h4>
          <h5 class="text-xl font-bold">Logiciels utilisés</h5>
          <ul class="list-disc list-inside">
            <li>
              Rhinosolar, logiciel 3D édité par la société Rhinoterrain calcule
              l’exposition solaire des toitures (Irradiance en kWh/m2) en
              s’appuyant sur la maquette 3D de Rennes Métropole
            </li>
            <li>
              Autocalsol, logiciel métier de l’Institut National de l’Énergie
              Solaire (INES) permet de pré-dimensionner les installations
              solaires photovoltaïques en autoconsommation et de simuler les
              niveaux d’auto-consommation et d’auto-production en lien avec les
              niveaux de consommation des usagers
            </li>
          </ul>
          <h4 class="text-xl font-bold">Crédits photographiques</h4>
          <h4 class="text-xl font-bold">Droits de reproduction</h4>
          <h4 class="text-xl font-bold">
            Contenus produits par Rennes Métropole
          </h4>
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
          <h4 class="text-xl font-bold">
            Liens hypertextes pointant vers le site
          </h4>
          <p>
            Le site de Rennes Métropole autorise tout site internet ou tout
            autre support à le citer ou à mettre en place un lien hypertexte
            pointant vers son contenu, sous réserve :
          </p>
          <ul class="list-disc list-inside">
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
          </p>
          <p>
            Rennes Métropole ne peut en aucun cas être tenu responsable de la
            mise à disposition du présent site via un lien hypertexte, et ne
            peut supporter aucune responsabilité sur le contenu, les produits,
            les services, etc. disponibles sur ces sites destinataires ou à
            partir de ces sites destinataires.
          </p>
          <h4 class="text-xl font-bold">
            Liens hypertextes proposés sur le présent site
          </h4>
          <p>
            Plusieurs liens vers d’autres sites sont proposés. Leur présence ne
            saurait engager Rennes Métropole quant à leur contenu et ne vise
            qu’à permettre à l’internaute de trouver plus facilement un
            accompagnement et d’autres ressources sur le sujet de l'énergie
            photovoltaïque.
          </p>
          <h4 class="text-xl font-bold">Traitement des données personnelles</h4>
          <p>
            En application de la loi Informatique et Libertés du 6 janvier 1978,
            vous disposez d’un droit d’accès, de rectification, de modification
            et de suppression des données qui vous concernent : Politique de
            protection des données personnelles du présent site
          </p>
          <h4 class="text-xl font-bold">Responsabilité</h4>
          <p>
            Rennes Métropole met tout en œuvre pour offrir aux Utilisateurs des
            informations et/ou des outils disponibles et mis à jour. Pour
            autant, elle ne saurait être tenue responsable en cas d’erreurs,
            d’absence de disponibilité des fonctionnalités et/ou de la présence
            de virus sur le site.
          </p>
          <p>
            Rennes Métropole ne saurait garantir l'exactitude, la complétude,
            l'actualité et l’exhaustivité des informations diffusées sur le
            site. Chaque Utilisateur est invité à affiner les informations
            obtenues et restituées dans le rapport téléchargeable auprès de
            structures spécialisées (dont certaines sont référencées sur le
            présent site).
          </p>
          <p>
            La responsabilité de Rennes Métropole ne saurait être engagée en cas
            de force majeure.
          </p>
          <p>Licence Creative Commons BY-NC-SA 3.0 FR</p>
        </div>
      </div>
    </div>
  </div>
</template>
