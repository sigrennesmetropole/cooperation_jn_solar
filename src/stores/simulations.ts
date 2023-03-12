import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import type { RoofSurfaceModel } from '@/model/roof.model'

export const useSimulationStore = defineStore('simulation', () => {
  const currentStep: Ref<number> = ref(1)
  const currentSubStep: Ref<number> = ref(1)

  // Solar panel selection
  // TODO(IS): remove the example below to null or 0
  const maxNumberSolarPanel: Ref<number> = ref(6)
  const roofSurface: Ref<RoofSurfaceModel | null> = ref({
    values: [10, 20, 30, 40],
    favorable: 44,
    total: 90,
    orientation: 'Sud',
    incliniasion: 47.9,
  })

  function setCurrentStep(step: number) {
    if (step < 0) {
      currentStep.value = 0
    } else if (step > 3) {
      currentStep.value = 3
    } else {
      currentStep.value = step
    }
  }

  function goToPreviousStep() {
    setCurrentStep(currentStep.value - 1)
  }

  function goToNextStep() {
    setCurrentStep(currentStep.value + 1)
  }

  return {
    currentStep,
    currentSubStep,
    setCurrentStep,
    goToPreviousStep,
    goToNextStep,
    maxNumberSolarPanel,
    roofSurface,
  }
})
