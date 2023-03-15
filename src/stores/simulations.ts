import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSimulationStore = defineStore('simulation', () => {
  const currentStep: Ref<number> = ref(1)
  const currentSubStep: Ref<number> = ref(1)

  const availableSteps = [
    { step: 1, subStep: 1 },
    { step: 2, subStep: 1 },
    { step: 2, subStep: 2 },
    { step: 3, subStep: 1 },
    { step: 3, subStep: 2 },
    { step: 3, subStep: 3 },
    { step: 3, subStep: 4 },
  ]

  function setCurrentStep(step: number) {
    if (step < 0) {
      currentStep.value = 0
    } else if (step > 3) {
      currentStep.value = 3
    } else {
      currentStep.value = step
    }
  }

  function setCurrentSubStep(subStep: number) {
    if (subStep < 0) {
      currentSubStep.value = 0
    } else if (subStep > 2) {
      currentSubStep.value = 2
    } else {
      currentSubStep.value = subStep
    }
  }

  function goToPreviousStep() {
    for (const index in availableSteps) {
      const availableStep = availableSteps[index]
      if (
        currentStep.value == availableStep.step &&
        currentSubStep.value == availableStep.subStep
      ) {
        const previousIndex: number = parseInt(index) - 1
        const previousStep = availableSteps[previousIndex]
        setCurrentStep(previousStep.step)
        setCurrentSubStep(previousStep.subStep)
        break
      }
    }
  }

  function goToNextStep() {
    for (const index in availableSteps) {
      const availableStep = availableSteps[index]
      if (
        currentStep.value == availableStep.step &&
        currentSubStep.value == availableStep.subStep
      ) {
        const nextIndex: number = parseInt(index) + 1
        const nextStep = availableSteps[nextIndex]
        setCurrentStep(nextStep.step)
        setCurrentSubStep(nextStep.subStep)
        break
      }
    }
  }

  return {
    currentStep,
    currentSubStep,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
  }
})
