<script setup lang="ts">
import enedisSignature from '@/assets/illustrations/enedis-signature.svg'
import enedisSpace from '@/assets/illustrations/enedis-personal-space.svg'
import { apiEnedisService } from '@/services/api-enedis'
import { apiAutocalsolService } from '@/services/api-autocalsol'
import { getEnv, getEnedisSandboxPrm } from '@/services/env'
import { ref } from 'vue'

async function goToEnedisWebSite() {
  const url = await apiEnedisService.getUrlUserAuthorization()
  window.location.href = url
}

async function goToEnedisLogin() {
  if (getEnv() == 'dev') {
    await apiEnedisService.setPRMUser(getEnedisSandboxPrm())
    const consumption = await apiEnedisService.getAnnualConsumption()
    window.alert(JSON.stringify(consumption))
  } else if (getEnv() == 'prod') {
    const prm = await apiEnedisService.getPRMUser()
    if (prm === undefined) {
      await goToEnedisWebSite()
      return
    }
    const consumption = await apiEnedisService.getAnnualConsumption()
    window.alert(JSON.stringify(consumption))
  }
}

const isLoadingAutocalsol = ref(false)
async function callApiAutocalsol() {
  isLoadingAutocalsol.value = true
  const computeData = await apiAutocalsolService.getComputeData()
  isLoadingAutocalsol.value = false
  window.alert(JSON.stringify(computeData))
}
</script>

<template>
  <div
    class="flex flex-col gap-6 border border-slate-200 rounded-lg bg-slate-50 h-[451px] w-full px-4 py-6 font-dm-sans text-sm font-normal"
  >
    <p class="text-base font-medium">Comment connecter mon compteur Linky ?</p>
    <div class="flex flex-row gap-4">
      <img :src="enedisSignature" class="w-[110px] h-[34.43px] my-auto" />
      <p>Enedis gère le réseau d'électricité jusqu'au compteur.</p>
    </div>
    <p>
      Pour calculer vos économies d'énergie, nous devons accéder à vos données
      Linky gérées par Enedis.
    </p>
    <p>
      En cliquant sur ce bouton, vous accéderez à votre espace client Enedis où
      vous pourrez autoriser Enedis à nous transmettre votre consommation
      annuelle.
    </p>
    <img
      :src="enedisSpace"
      class="mx-auto cursor-pointer"
      @click="goToEnedisLogin()"
    />
    <p class="text-center">
      Vous pourrez changer d'avis et révoquer <br />votre autorisation à tout
      moment.
    </p>
  </div>

  <button @click="callApiAutocalsol()" class="border">
    <template v-if="isLoadingAutocalsol"> Loading </template>
    <template v-else> CALL API AUTOCALSOL </template>
  </button>
</template>
