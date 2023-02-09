<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
const displayError = ref(false)

function openPopUpTermsOfUse() {}

function clickButtonBegin() {
  if (!checked.value) {
    displayError.value = true
    return
  }
  displayError.value = false
}
</script>

<template>
  <div class="flex p-0 gap-3">
    <input
      type="checkbox"
      v-model="checked"
      class="bg-white border-slate-400 shadow-sm rounded"
    />
    <span class="font-normal text-base leading-6 color-black">
      J'ai lu et j'accepte les
      <span
        class="underline decoration-1 cursor-pointer"
        @click="openPopUpTermsOfUse()"
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
</template>
