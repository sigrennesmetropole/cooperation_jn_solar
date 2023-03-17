<script setup lang="ts">
import qualitenr from '../../assets/illustrations/qualitEnR.png'
import qualibat from '../../assets/illustrations/qualibat.png'
import qualifelec from '../../assets/illustrations/qualifelec.png'
import messageWarning from '../../assets/icons/chat-message-warning.svg'
</script>

<template>
  <div
    class="flex flex-col gap-[30px] w-[640px] h-fit bg-white rounded-xl p-8 mx-auto mt-[104px] mb-[91px]"
  >
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-bold">Faire appel à un installateur agréé</h2>
      <p class="text-base font-normal">
        Faites confiance à l’un des 3 labels de qualification pour vous guider
        dans le choix de votre installateur. La liste des installateurs agréés
        se trouve sur les sites de chaque organisme de qualification.
      </p>
    </div>
    <div class="px-5 py-3 flex flex-row justify-center">
      <div class="flex gap-11">
        <img :src="qualitenr" alt="" />
        <img :src="qualibat" alt="" />
        <img :src="qualifelec" alt="" />
      </div>
    </div>
    <div
      class="flex flex-row gap-3 bg-amber-50 border border-amber-200 rounded-lg px-2 py-[19px]"
    >
      <img :src="messageWarning" alt="" class="ml-2" />
      <p class="text-sm text-amber-900">
        Le démarchage abusif pour l’installation de panneaux solaires est très
        fréquent. Il est conseillé de demander au moins 3 devis avant tout
        engagement.
      </p>
    </div>
  </div>
</template>
