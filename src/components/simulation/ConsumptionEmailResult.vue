<script setup lang="ts">
import CheckBox from '@/components/simulation/CheckBox.vue'
import expandIcon from '../../assets/icons/expand-small-bigger-retract-smaller-big.svg'
import deleteCircle from '../../assets/icons/interface-delete-circle.svg'
import { computed, ref } from 'vue'
import { legalList } from '@/constants/legalLinks'
// @ts-ignore : Could not find a declaration file for module 'dompurify'
import DOMPurify from 'dompurify'

const validEmail = ref(true)
const isCheckBoxOnError = ref(false)

const userEmail = ref('')
const isCheckboxChecked = ref(false)

const errorPicto = computed(() => {
  if (validEmail.value) {
    return 'hidden'
  } else {
    return 'visible absolute right-3 top-10'
  }
})

function checkboxChange(event: boolean) {
  isCheckboxChecked.value = event
  changeError()
}

function changeError() {
  isCheckBoxOnError.value = !isCheckboxChecked.value
}

function sendEmail() {
  const email = DOMPurify.sanitize(userEmail.value)
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  validEmail.value = emailRegex.test(email)

  changeError()

  if (validEmail.value && !isCheckBoxOnError.value) {
    console.log('send consumption by email')
  }
}

const openPrivacy = () => {
  window.open(
    legalList.find((elt) => elt.slug === 'confidentialite')!.link,
    '_blank'
  )
}
</script>

<template>
  <div
    class="flex flex-col gap-8 px-6 py-12 w-[576px] h-fit bg-slate-50 rounded-xl border border-slate-200"
  >
    <div class="flex flex-col gap-3 text-center">
      <h4 class="text-xl font-bold">Vous ne souhaitez pas attendre ?</h4>
      <p>
        Renseignez votre mail pour recevoir<br />les résultats dès qu'ils seront
        prêts :
      </p>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-1.5 relative">
        <label class="font-normal">Votre adresse mail</label>
        <div :class="errorPicto">
          <img :src="deleteCircle" alt="" />
        </div>
        <input
          type="email"
          v-model="userEmail"
          class="border border-neutral-400 rounded"
        />
        <div
          id="errorEmail"
          v-if="!validEmail"
          class="bg-rose-50 border border-rose-200 rounded-lg p-2 text-rose-900 text-sm font-normal"
        >
          Veuillez vérifier votre adresse mail.
        </div>
      </div>

      <CheckBox
        :isOnError="isCheckBoxOnError"
        :isChecked="false"
        @checkBoxChange="checkboxChange($event)"
      >
        <template v-slot:text>
          <p class="font-normal text-base">
            J'autorise la transmission de mon adresse mail pour l'envoi de ma
            simulation. Celle-ci ne sera pas conservée.
          </p>
        </template>
      </CheckBox>

      <div class="flex flex-row text-neutral-700">
        <p>
          Vous pouvez lire notre
          <span
            tabindex="0"
            @click="openPrivacy()"
            @keydown.enter="openPrivacy()"
            class="font-medium underline decoration-1 hover:cursor-pointer"
            data-testid="privacy-link"
          >
            Politique de confidentialité
          </span>
        </p>
        <img :src="expandIcon" class="w-3.5 h-3.5 ml-2 mt-1" />
      </div>
      <div class="flex flex-row justify-center">
        <button
          class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center w-fit"
          @click="sendEmail()"
        >
          <span class="text-white text-base font-medium"
            >Recevoir mon rapport en PDF</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
