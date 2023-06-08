import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { getNumberFromConfig } from '@/services/configService'

export function getDefaultConsumption() {
  return getNumberFromConfig('consumption.default_consumption')
}

export const useSimulationStore = defineStore('simulation', () => {
  const currentStep: Ref<number> = ref(1)
  const currentSubStep: Ref<number> = ref(1)

  const availableSteps = [
    { step: 1, subStep: 1, isFinal: false }, // Choose roof side
    { step: 2, subStep: 1, isFinal: false }, // Select obstacle
    { step: 2, subStep: 2, isFinal: false }, // Select the number of solar panel
    { step: 2, subStep: 3, isFinal: false }, // No roof panel available
    { step: 3, subStep: 1, isFinal: false }, // Energy saving information
    { step: 3, subStep: 2, isFinal: false }, // Select input invoice or connect to Linky
    { step: 3, subStep: 3, isFinal: true }, // Input tarif/invoice
    { step: 3, subStep: 4, isFinal: true }, // Connect to Linky meter
  ]

  const restartEndSimulation: Ref<boolean> = ref(false)

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

  function isCurrentStepFinal() {
    const currentIndex = indexOfCurrentStepAndSubStep()
    return availableSteps[currentIndex].isFinal
  }

  function getIndexPreviousStepNotFinal(currentIndex: number) {
    for (let index = currentIndex - 1; index >= 0; index--) {
      if (!availableSteps[index].isFinal) {
        return index
      }
    }
    return null
  }

  function goToFinalView() {
    router.push('end-simulation')
  }

  function goToPreviousStep() {
    const currentIndex = indexOfCurrentStepAndSubStep()
    if (currentIndex - 1 < 0) {
      return
    }
    const indexPreviousStepNotFinal = getIndexPreviousStepNotFinal(currentIndex)
    if (indexPreviousStepNotFinal !== null) {
      setCurrentStep(availableSteps[indexPreviousStepNotFinal].step)
      setCurrentSubStep(availableSteps[indexPreviousStepNotFinal].subStep)
    }
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToPreviousStep()
    }
  }

  function goToNextStep() {
    const currentIndex = indexOfCurrentStepAndSubStep()
    if (availableSteps[currentIndex].isFinal) {
      goToFinalView()
      return
    }
    if (currentIndex + 1 >= availableSteps.length) {
      return
    }
    setCurrentStep(availableSteps[currentIndex + 1].step)
    setCurrentSubStep(availableSteps[currentIndex + 1].subStep)
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToNextStep()
    }
  }

  function resetSimulation() {
    setCurrentStep(1)
    setCurrentSubStep(1)
  }

  function shouldShowSolarPanelLayer(): boolean {
    // NOTE(IS): If you want to debug visually the location of solar panel,
    // you set solar panel is shown in the Select obstacle step (step: 2, subStep: 1)
    // Then use back button after generating the solar panel
    if (currentStep.value === 3) {
      return true
    }
    if (currentStep.value === 2 && currentSubStep.value === 2) {
      return true
    }
    return false
  }

  function isSelectObstacleStep() {
    return currentStep.value === 2 && currentSubStep.value === 1
  }

  return {
    currentStep,
    currentSubStep,
    restartEndSimulation,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
    isCurrentStepFinal,
    goToFinalView,
    resetSimulation,
    shouldShowSolarPanelLayer,
    isSelectObstacleStep,
  }
})
