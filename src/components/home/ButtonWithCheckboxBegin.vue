<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CheckBox from '@/components/simulation/CheckBox.vue'
import { useHomeStore } from '@/stores/home'
import { usePopUpStore } from '@/stores/popUpStore'

const checked = ref(false)
const displayError = ref(false)
const router = useRouter()
const homeRouter = useHomeStore()
const popUpStore = usePopUpStore()

const isCheckBoxOnError = ref(false)
const isCheckboxChecked = ref(false)

function clickButtonBegin() {
  changeError()

  if (!isCheckboxChecked.value) {
    displayError.value = true
    return
  }
  displayError.value = false
  router.push('/roof-selection')
}

function checkboxChange(event: boolean) {
  isCheckboxChecked.value = event
  homeRouter.setIsTermOfUseAccepted(event)
  changeError()
}

function changeError() {
  isCheckBoxOnError.value = !isCheckboxChecked.value
  displayError.value = !isCheckboxChecked.value
  homeRouter.setDisplayError(isCheckBoxOnError.value)
}

homeRouter.$subscribe(async () => {
  if (homeRouter.displayError) {
    clickButtonBegin()
  }
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <CheckBox
      :isOnError="isCheckBoxOnError"
      :isChecked="false"
      @checkBoxChange="checkboxChange($event)"
    >
      <template v-slot:text>
        <span class="font-dm-sans font-normal text-base leading-6 color-black"
          >J'ai lu et j'accepte les
          <span
            class="underline decoration-1 cursor-pointer"
            @click="popUpStore.displayTermsOfUse()"
          >
            conditions d'utilisation.
          </span>
        </span>
      </template>
    </CheckBox>

    <div class="flex p-0 gap-3 mt-4">
      <button
        @click="clickButtonBegin()"
        class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
      >
        <span class="font-dm-sans text-white text-base font-bold">
          Commencer
        </span>
      </button>

      <span v-if="displayError && !checked" class="text-sm font-normal">
        Veuillez cocher la case ci-dessus pour accepter les conditions
      </span>
    </div>
  </div>
</template>
<style>
input:checked + svg {
  display: block;
}
</style>
