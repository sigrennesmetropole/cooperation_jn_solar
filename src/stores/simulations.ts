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
    inclinaison: 47.9,
  })
  const availableSteps = [
    { step: 1, subStep: 1 }, // Choose roof side
    { step: 2, subStep: 1 }, // Select obstacle
    { step: 2, subStep: 2 }, // Select the number of solar panel
    { step: 3, subStep: 1 }, // Energy saving information
    { step: 3, subStep: 2 }, // Select input invoice or connect to Linky
    { step: 3, subStep: 3 }, // Input tarif/invoice
    { step: 3, subStep: 4 }, // Connect to Linky meter
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
    maxNumberSolarPanel,
    roofSurface,
  }
})
