import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSimulationStore = defineStore('simulation', () => {
  const currentStep: Ref<number> = ref(1)
  const currentSubStep: Ref<number> = ref(1)

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
  }
})
