<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full z-20"
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
            @click="$emit('close')"
            class="w-5 border border-black rounded ml-auto"
          >
            x
          </button>
        </div>

        <p>
          Rennes Métropole met à disposition, via le présent site, un service
          permettant, sur le territoire de Rennes Métropole, d'estimer
          l'exposition solaire de son logement, de simuler le dimensionnement d'
          une installation photovoltaïque et d'en déduire une estimation de la
          production d'énergie associée (incluant la part d'énergie consommée
          sur place et la part vendue et injectée sur le réseau en lien avec les
          niveaux de consommation de l'usager). L’Utilisateur est réputé avoir
          pris connaissance des présentes conditions générales, qui s'imposent à
          tout usager du présent site. L’Utilisateur garantit qu’il n’utilisera
          pas le site à des fins illicites ou immorales ou contraire à leur
          utilisation initiale.
          <br /><br />
          Les équipements (ordinateurs, téléphone, moyens de télécommunication…)
          permettant l'accès au site sont à la charge exclusive des
          Utilisateurs, de même que les frais de télécommunications induits par
          leur utilisation.
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
          <br /><strong>Téléchargement d'un rapport</strong> <br />L'Utilisateur
          sera invité, à télécharger un rapport .pdf reprenant les contenus
          pédagogiques et indicateurs obtenus lors de sa simulation.
        </p>
      </div>
    </div>
  </div>
</template>
