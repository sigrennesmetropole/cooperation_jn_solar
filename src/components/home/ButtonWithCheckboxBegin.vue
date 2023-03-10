<script lang="ts" setup>
import { computed, ref } from 'vue'
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

const borderCheckbox = computed(() => {
  if (displayError.value && !checked.value) {
    return 'border-red-600'
  }
  if (checked.value) {
    return 'border-slate-900'
  }
  return 'border-slate-400'
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex p-0 gap-3 items-center">
      <div
        class="shadow-sm w-5 h-5 rounded border flex justify-center items-center"
        :class="borderCheckbox"
      >
        <input type="checkbox" class="opacity-0 absolute" v-model="checked" />
        <svg
          class="hidden w-3 h-3 pointer-events-none stroke-slate-900 stroke-2"
          viewBox="0 0 14 14"
        >
          <path
            d="M0.5 8.5498L3.23 12.0598C3.32212 12.1795 3.44016 12.2768 3.57525 12.3443C3.71034 12.4119 3.85898 12.4479 4.01 12.4498C4.15859 12.4515 4.3057 12.4201 4.44063 12.3578C4.57555 12.2956 4.6949 12.204 4.79 12.0898L13.5 1.5498"
            fill="none"
          />
        </svg>
      </div>
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

    <TermsOfUsePopup
      v-if="showPopTermOfUse"
      @close="showPopTermOfUse = false"
    />
  </div>
</template>
<style>
input:checked + svg {
  display: block;
}
</style>
