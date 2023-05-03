<script setup lang="ts">
import { ref } from 'vue'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'

const consumption = ref('')
const consumptionAndProductionStore = useConsumptionAndProductionStore()

const storeConsumption = () => {
  consumptionAndProductionStore.setAnnualConsumption(
    parseInt(consumption.value)
  )
}

function inputIsCompleted() {
  const inputLength = consumption.value.length
  if (inputLength <= 0) {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <div class="flex flex-col gap-1.5 mt-10">
    <p class="font-dm-sans font-bold text-lg">
      Ma consommation annuelle est de :
    </p>
    <div class="flex flex-row">
      <input
        class="border border-neutral-400 rounded h-[42px] px-3 py-[9px] text-black font-dm-sans font-medium placeholder:text-neutral-600 placeholder:text-base placeholder:font-dm-sans w-full"
        type="number"
        placeholder="kWh"
        v-model="consumption"
        @keyup="storeConsumption"
      />
      <div
        v-if="inputIsCompleted()"
        append-unit="kWh"
        class="text-base font-dm-sans font-medium relative after:content-[attr(append-unit)] after:absolute after:right-2 after:top-2"
      ></div>
    </div>
    <div class="mt-10">
      <div
        class="relative flex flex-col mx-auto h-[200px] pr-1 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400"
      >
        <p class="font-dm-sans font-bold text-neutral-900 text-sm">
          Protection des données personnelles :
        </p>
        <p class="font-dm-sans font-medium text-neutral-600 text-xs">
          Nous sollicitons via ce formulaire des données personnelles vous
          concernant afin de simuler l'installation de panneaux photovoltaïque
          et calculer vos économies d'énergie.Ces données ne sont pas conservées
          au-delà du calcul effectué lors de l'utilisation du site. Les données
          sont par la suite soit supprimées immédiatement ou anonymisées à des
          fins statistiques. La base légale du traitement est le consentement de
          l'usager. Ces données sont transmises pour la durée de la simulation à
          l'API Autocalsol de l'INES.Conformément au Règlement général sur la
          protection des données (RGPD) (UE) n°2016/679 du 27 avril 2016 et à la
          loi n°2018-493 du 20 juin 2018 relative à la protection des données
          personnelles, vous pouvez accéder aux données vous concernant où
          demander leur effacement. Vous disposez également d'un droit
          d’opposition, d’un droit de rectification, d’un droit à la limitation
          du traitement de vos données ainsi que d'un droit au retrait de votre
          consentement. Pour exercer ces droits ou pour toute question sur le
          traitement de vos données, vous pouvez contacter le Délégué à la
          protection des données de Rennes (Ville et Métropole) via le
          formulaire de contact "e-démarches" du site internet
          <a
            class="underline decoration-1 font-medium"
            href="https://metropole.rennes.fr"
            target="_blank"
            >(https://metropole.rennes.fr)</a
          >
          ou par voie postale à adresser à : Madame le Présidente de Rennes
          Métropole - A l'attention du Délégué à la protection des données - 4
          avenue Henri Fréville -CS93111 - 35031 Rennes Cedex Plus
          d’informations sur :
          <a
            class="underline decoration-1 font-medium"
            href="https://www.cnil.fr/"
            target="_blank"
            >https://www.cnil.fr</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
