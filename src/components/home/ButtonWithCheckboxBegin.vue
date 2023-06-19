<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CheckBox from '@/components/simulation/CheckBox.vue'
import { useHomeStore } from '@/stores/home'
import { usePopUpStore } from '@/stores/popUpStore'
import { UiButton } from '@sigrennesmetropole/cooperation_jn_common_ui'

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
        <span class="font-dm-sans font-normal text-base color-black"
          >J'ai lu et j'accepte les
          <span
            tabindex="0"
            class="underline decoration-1 cursor-pointer"
            @click="popUpStore.displayTermsOfUse()"
            @keydown.enter="popUpStore.displayTermsOfUse()"
          >
            conditions d'utilisation.
          </span>
        </span>
      </template>
    </CheckBox>

    <div class="flex p-0 gap-3 mt-4">
      <UiButton
        class="ui-btn-primary rounded-lg gap-3 px-4 py-3 shrink-0 grow-0 visible"
        @click="clickButtonBegin()"
      >
        <span class="font-dm-sans text-white text-base font-bold">
          Commencer
        </span>
      </UiButton>
      <span
        v-if="displayError && !checked"
        class="font-dm-sans text-sm font-semibold my-auto text-red-600"
      >
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
