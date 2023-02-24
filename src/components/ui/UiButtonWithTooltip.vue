<script lang="ts" setup>
import { ref } from 'vue'
import iconTooltip from '@/assets/icons/icon-tooltip.svg'
import iconTooltipRed from '@/assets/icons/icon-tooltip-red.svg'
import { computed } from 'vue'

const props = defineProps({
  text: String,
  widthButton: String,
  heightButton: {
    type: String,
    default: '12',
  },
  widthBoxText: String,
  positionRight: {
    type: String,
    default: '16px',
  },
})

const displayTooltip = ref(false)

const classDimensionButton = computed(() => {
  return 'w-' + props.widthButton + ' h-' + props.heightButton
})

const stylePositionButton = computed(() => {
  const positionTop = 'top: 16px;'
  const positionRight = 'right: ' + props.positionRight + ';'
  return positionTop + ' ' + positionRight
})

const stylePositionText = computed(() => {
  const positionTop = 'top: ' + (parseInt(props.heightButton) * 4 + 20) + 'px;'
  const positionRight = 'right: ' + props.positionRight + ';'
  return positionTop + ' ' + positionRight
})
</script>

<template>
  <div class="absolute z-9" :style="stylePositionButton">
    <div
      class="bg-white rounded flex items-center justify-center cursor-pointer"
      :class="classDimensionButton"
      @click="displayTooltip = !displayTooltip"
    >
      <img v-if="!displayTooltip" :src="iconTooltip" class="w-5 h-5" />
      <img v-else :src="iconTooltipRed" class="w-5 h-5" />
    </div>
  </div>
  <div
    class="absolute z-50"
    :class="props.widthBoxText"
    :style="stylePositionText"
    v-if="displayTooltip"
  >
    <div class="bg-neutral-800 opacity-80 p-2 gap-3 rounded">
      <span class="text-sm font-normal text-neutral-200">
        {{ props.text }}
      </span>
    </div>
  </div>
</template>
