<script setup lang="ts">
import expandIcon from '../../assets/icons/expand-small-bigger-retract-smaller-big.svg'
</script>

<template>
  <div
    class="flex flex-col gap-12 w-[880px] h-fit bg-white rounded-xl px-8 py-16 mx-auto mt-32 mb-[78px]"
  >
    <h1 class="text-[44px] leading-[48px] lmb-12 font-bold">
      Mentions légales
    </h1>
    <div class="flex flex-col gap-8 text-base font-normal">
      <p>
        Nos devoirs et obligations : toutes les informations obligatoires du
        présent site internet.
      </p>
      <h1 class="text-3xl font-bold">Éditeurs du site</h1>
      <p>Le présent site internet est géré par Rennes Métropole.</p>
      <div class="flex flex-col gap-2 text-base font-normal">
        <div>
          <h3 class="text-xl font-bold">Rennes Métropole:</h3>
          <p>(Établissement public de coopération intercommunale)</p>
        </div>
        <div>
          <p>Hôtel de Rennes Métropole</p>
          <p>4, avenue Henri Fréville</p>
          <p>CS 9311135031 RENNES cedex</p>
          <p>Téléphone : 02 99 86 60 60</p>
          <div class="flex flex-row">
            <p class="underline decoration-1 font-medium">
              <a
                href="https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&USAGER_PROCESS=CONTACT"
                target="_blank"
              >
                Nous contacter
              </a>
            </p>
            <a
              href="https://e-demarches.rennes.fr/Rennes/workflow_url?ECITIZ_ACTIVITY_PATH=Demandeur&USAGER_PROCESS=CONTACT"
              target="_blank"
            >
              <img :src="expandIcon" class="w-3.5 h-3.5 ml-2 mt-1" />
            </a>
          </div>
          <ul>
            <li class="test-base">Siren : 243 500 139</li>
            <li class="test-base">Siret : 243 500 139 001 89</li>
            <li class="test-base">N°TVA : FR 25 243 500 139</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-base font-normal">
        <h3 class="text-xl font-bold">Directeur de la publication:</h3>
        <div>
          <p>Nathalie APPERE, présidente de Rennes Métropole.</p>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-base font-normal">
        <h3 class="text-xl font-bold">Conception et charte graphique:</h3>
        <p>Lucile Collignon EI</p>
      </div>
      <div class="flex flex-col text-base font-normal">
        <h3 class="text-xl font-bold mb-2">Développement:</h3>
        <p>Camptocamp France SAS</p>
        <p>18 rue du Lac Saint André - Bât. Le Dauphin</p>
        <p>Savoie Technolac</p>
        <p>73 370 Le Bourget-du-Lac</p>
      </div>
      <div class="flex flex-col gap-2 text-base font-normal">
        <h3 class="text-xl font-bold">Hébergement:</h3>
        <p>Ce site est hébergé par Scaleway.</p>
      </div>
      <div class="flex flex-col gap-2 text-base font-normal">
        <h3 class="text-xl font-bold">Programme France Relance:</h3>
        <p>Ce projet a été soutenu par le programme France Relance.</p>
        <img
          class="h-[130px] w-[242.25px]"
          src="../../assets/illustrations/etiquette-fr.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
