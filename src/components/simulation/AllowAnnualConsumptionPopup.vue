<script setup lang="ts">
import iconExternalLink from '@/assets/icons/icon-external-link.svg'
import { legalList } from '@/constants/legalLinks'
import { ref } from 'vue'
import CheckBox from '@/components/simulation/CheckBox.vue'

const isAllowCheckBoxOnError = ref(false)
const isAllowCheckboxChecked = ref(false)
const isNotAllowCheckBoxOnError = ref(false)
const isNotAllowCheckboxChecked = ref(false)

const emit = defineEmits(['clickContinuePopup', 'goToEndSimulation'])

const openPrivacy = () => {
  window.open(
    legalList.find((elt) => elt.slug === 'confidentialite')!.link,
    '_blank'
  )
}

function clickButtonNext() {
  if (isAllowCheckboxChecked.value) {
    emit('clickContinuePopup')
  } else if (isNotAllowCheckboxChecked.value) {
    emit('goToEndSimulation')
  } else {
    isAllowCheckBoxOnError.value = true
    isNotAllowCheckBoxOnError.value = true
  }
}

function checkBoxChange(event: boolean, type_checkbox: 'allow' | 'notallow') {
  if (type_checkbox === 'allow') {
    isAllowCheckboxChecked.value = event
    if (event === true) isNotAllowCheckboxChecked.value = false
  } else if (type_checkbox === 'notallow') {
    isNotAllowCheckboxChecked.value = event
    if (event === true) isAllowCheckboxChecked.value = false
  }
}
</script>
<template>
  <div>
    <div
      class="fixed top-0 left-0 w-full h-full z-[60]"
      style="background-color: rgba(0, 0, 0, 0.75)"
    >
      >
      <div
        class="relative flex flex-col mx-auto mt-25 w-[80%] max-w-full max-h-full p-8 rounded-lg gap-8 overflow-auto"
        style="background-color: rgba(255, 255, 255, 1)"
      >
        <div class="flex flex-row font-dm-sans">
          <h3 class="text-2xl font-bold">
            Quelques précisions avant de continuer :
          </h3>

          <button
            @click="$emit('close')"
            class="w-5 h-5 border border-black rounded ml-auto hover:bg-neutral-400 flex justify-center items-center"
            id="closeButtonPopup"
          >
            x
          </button>
        </div>
        <div
          class="relative flex flex-col mx-auto mt-13 pr-8 rounded-lg gap-5 overflow-auto scrollbar-thin scrollbar-w-[3px] scrollbar-thumb-red-600 scrollbar-track-neutral-400 font-dm-sans"
          style="background-color: rgba(255, 255, 255, 1)"
        >
          <span class="font-bold text-xl">
            Protection des données personnelles
          </span>
          <p class="font-medium text-sm">
            Vous allez contribuer au projet Cadastre Solaire et simuler vos
            économies d'énergie. Dans ce cadre, nous recueillons des
            informations personnelles vous concernant : votre adresse, votre
            consommation électrique et la surface de votre toit pouvant
            accueillir des panneaux photovoltaïques. Ces données sont utilisées
            pour simuler vos économies d'énergie, produire un rapport à votre
            unique attention (téléchargement possible en fin de parcours) et la
            production de statistiques anonymisées utiles à la planification
            énergétique du territoire. Vos données personnelles ne seront
            traitées et conservées que le temps de la simulation puis elles
            seront anonymisées.
          </p>
          <p class="font-medium text-sm text-neutral-700">
            Vous pouvez lire notre
            <span
              @click="openPrivacy()"
              class="underline inline-flex items-center cursor-pointer"
            >
              <strong> Politique de confidentialité &nbsp;</strong>
              <img :src="iconExternalLink" class="w-[10px] h-[10px]" />
            </span>
          </p>
          <div
            class="flex flex-row items-center bg-amber-50 py-3 px-4 rounded-lg border border-amber-200"
          >
            <CheckBox
              :isOnError="isAllowCheckBoxOnError"
              :isChecked="isAllowCheckboxChecked"
              @checkBoxChange="checkBoxChange($event, 'allow')"
            >
              <template v-slot:text>
                <p class="text-amber-900 font-normal text-sm">
                  J'autorise la transmission de mes données de consommation pour
                  simuler mes économies d'énergie.
                </p>
              </template>
            </CheckBox>
          </div>
          <p class="font-medium text-sm">
            Si vous ne souhaitez pas renseigner vos données de consommation, il
            est possible d'obtenir un résultat partiel de la simulation sans
            possibilité d'estimer votre auto-consommation (part d’énergie
            produite consommée sur place).
          </p>
          <div
            class="flex flex-row items-center bg-amber-50 py-3 px-4 rounded-lg border border-amber-200"
          >
            <CheckBox
              :isOnError="isNotAllowCheckBoxOnError"
              :isChecked="isNotAllowCheckboxChecked"
              @checkBoxChange="checkBoxChange($event, 'notallow')"
            >
              <template v-slot:text>
                <p class="text-amber-900 font-normal text-sm">
                  Je ne souhaite pas communiquer mes données de consommation et
                  obtenir une simulation partielle.
                </p>
              </template>
            </CheckBox>
          </div>
          <div class="flex flex-row items-center mt-4">
            <button
              @click="clickButtonNext()"
              id="nextButtonPopup"
              class="bg-black shadow-sm rounded-lg gap-3 px-4 py-3 items-center flex flex-row justify-center"
            >
              <img
                class=""
                src="../../assets/icons/interface-arrows-button-right--arrow-right-keyboard.svg"
                alt=""
              />
              <span class="font-dm-sans text-white text-base font-medium">
                Continuer
              </span>
            </button>

            <span
              class="ml-4 font-normal text-base"
              :class="{
                'text-red-600':
                  isAllowCheckBoxOnError || isNotAllowCheckBoxOnError,
              }"
            >
              Pour poursuivre, veuillez cocher l'une des cases ci-dessus.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
