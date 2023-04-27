<script lang="ts" setup>
import installation from '@/assets/icons/installation.svg'
import potentiel from '@/assets/icons/potentiel.svg'
import economies from '@/assets/icons/economies.svg'
</script>

<template>
  <div class="bg-slate-100 flex flex-col border rounded-lg p-6">
    <ul>
      <li class="mb-8">
        <div class="flex items-center gap-4">
          <div>
            <img class="w-20 h-20 max-w-none" :src="potentiel" alt="" />
          </div>
          <div class="flex flex-col">
            <div
              class="items-center text-base font-dm-sans text-neutral-500 text-xs"
            >
              Étape 1
            </div>
            <div
              class="items-center text-base font-dm-sans font-bold text-black text-lg"
            >
              Évaluez l'ensoleillement de votre toiture
            </div>
          </div>
        </div>
      </li>
      <li class="mb-8">
        <div class="flex items-center gap-4">
          <div>
            <img class="w-20 h-20 max-w-none" :src="installation" alt="" />
          </div>
          <div class="flex flex-col">
            <div
              class="items-center text-base font-dm-sans text-neutral-500 text-xs"
            >
              Étape 2
            </div>
            <div
              class="items-center text-base font-dm-sans font-bold text-black text-lg"
            >
              Pré-dimensionnez une installation photovoltaïque
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-4">
          <div>
            <img class="w-20 h-20 max-w-none" :src="economies" alt="" />
          </div>
          <div class="flex flex-col">
            <div
              class="items-center text-base font-dm-sans text-neutral-500 text-xs"
            >
              Étape 3
            </div>
            <div
              class="items-center text-base font-dm-sans font-bold text-black text-lg"
            >
              Estimez vos économies d’énergie
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
