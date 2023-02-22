<script lang="ts" setup>
import { ref } from 'vue'
import TermsOfUsePopup from '@/components/home/TermsOfUsePopup.vue'
import { useRouter } from 'vue-router'

const checked = ref(false)
const displayError = ref(false)
const showPopTermOfUse = ref(false)
const router = useRouter()

function clickButtonBegin() {
  if (!checked.value) {
    displayError.value = true
    return
  }
  displayError.value = false
  router.push('/map-pcaet')
}
</script>

<template>
  <div class="flex p-0 gap-3 items-center">
    <input type="checkbox" v-model="checked" class="shadow-sm w-5 h-5" />
    <span class="font-normal text-base leading-6 color-black">
      J'ai lu et j'accepte les
      <span
        class="underline decoration-1 cursor-pointer"
        @click="showPopTermOfUse = true"
      >
        conditions d'utilisation.
      </span>
    </span>
  </div>

  <div class="flex p-0 gap-3">
    <button
      @click="clickButtonBegin()"
      class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
    >
      <span class="text-white text-base font-bold"> Commencer </span>
    </button>

    <span v-if="displayError && !checked" class="text-sm font-normal">
      Veuillez cocher la case ci-dessus pour accepter les conditions
    </span>
  </div>

  <TermsOfUsePopup v-if="showPopTermOfUse" @close="showPopTermOfUse = false" />
  <div class="flex grow"></div>
</template>
