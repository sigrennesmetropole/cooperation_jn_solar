<template>
  <div
    class="flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[87px]"
  >
    <h1
      class="flex flex-column align-start text-[44px] leading-[48px] lmb-12 font-bold"
    >
      Accessibilité
    </h1>
    <div class="text-base font-normal">
      <p>
        Le site n'a pas été soumis à un audit complet de conformité au RGAA.
        Cependant, des mesures favorisant l'accessibilité ont été prises en
        compte.
      </p>
      <br />
      <p>
        Tout au long du processus de développement de l'application, un effort a
        été fait pour la rendre accessible au plus grand nombre. Les points
        suivants ont été optimisés :
      </p>
      <ul class="list-disc pl-6">
        <li>les contrastes visuels pour les personnes malvoyantes,</li>
        <li>
          la navigation tabulaire opérante afin de permettre aux personnes ne
          pouvant pas utiliser la souris de naviguer facilement sur
          l'application,
        </li>
        <li>
          la lecture automatique d'écran en utilisant des outils tels que NVDA.
          (https://www.nvaccess.org/).
        </li>
      </ul>
      <br />
      <p>
        Pour profiter pleinement de l'expérience immersive offerte par notre
        application basée sur Cesium et le jumeau numérique 3D de la métropole
        de Rennes, veuillez vérifier ces prérequis techniques et mettre à jour
        votre navigateur si nécessaire.
      </p>
    </div>
    <div class="text-base font-normal">
      <h2 class="text-2xl mb-2 font-bold">État de conformité</h2>
      <p>
        Le site est <span class="font-bold">non conforme</span> avec le
        référentiel général d’amélioration de l’accessibilité (RGAA), version 4.
      </p>
    </div>
  </div>
</template>
