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
    currentStep.value = step
  }

  function setCurrentSubStep(subStep: number) {
    currentSubStep.value = subStep
  }

  function indexOfCurrentStepAndSubStep() {
    return availableSteps.findIndex((availableStep) => {
      return (
        availableStep.step == currentStep.value &&
        availableStep.subStep == currentSubStep.value
      )
    })
  }

  function goToPreviousStep() {
    const currentIndex = indexOfCurrentStepAndSubStep()
    if (currentIndex - 1 < 0) {
      return
    }
    setCurrentStep(availableSteps[currentIndex - 1].step)
    setCurrentSubStep(availableSteps[currentIndex - 1].subStep)
  }

  function goToNextStep() {
    const currentIndex = indexOfCurrentStepAndSubStep()
    if (currentIndex + 1 >= availableSteps.length) {
      return
    }
    setCurrentStep(availableSteps[currentIndex + 1].step)
    setCurrentSubStep(availableSteps[currentIndex + 1].subStep)
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
