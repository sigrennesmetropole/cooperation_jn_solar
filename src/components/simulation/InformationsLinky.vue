<script setup lang="ts">
import enedisSignature from '@/assets/illustrations/enedis-signature.svg'
import enedisSpace from '@/assets/illustrations/enedis-personal-space.svg'
import { apiEnedisService } from '@/services/api-enedis-dataconnect'
import { useEnedisStore } from '@/stores/enedis'
import { storeDataForEnedis } from '@/services/enedisService'

const enedisStore = useEnedisStore()

async function goToEnedisWebSite() {
  enedisStore.setIsEnedisRedirection(true)
  await storeDataForEnedis()
  const url = await apiEnedisService.getUrlUserAuthorization()
  console.log(url)
  window.location.href = url

  // http://localhost:5173/redirection-enedis?state=XYZ&usage_points_id=25110853795840&code=134567281
}

async function goToEnedisLogin() {
  await goToEnedisWebSite()
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
      tabindex="0"
      :src="enedisSpace"
      class="mx-auto cursor-pointer"
      @click="goToEnedisLogin()"
      @keydown.enter="goToEnedisLogin()"
    />
    <p class="text-center">
      Vous pourrez changer d'avis et révoquer <br />votre autorisation à tout
      moment.
    </p>
  </div>
</template>
