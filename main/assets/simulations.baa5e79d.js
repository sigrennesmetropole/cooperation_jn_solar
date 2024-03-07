import { aK as defineStore, ay as ref } from "./vendor.a42621f7.js";
import { r as router } from "./UiHeaderFullScreen.story.d328a55c.js";
const DEFAULT_CONSUMPTION = 6e3;
const useSimulationStore = defineStore("simulation", () => {
  const currentStep = ref(1);
  const currentSubStep = ref(1);
  const availableSteps = [
    { step: 1, subStep: 1, isFinal: false },
    { step: 2, subStep: 1, isFinal: false },
    { step: 2, subStep: 2, isFinal: false },
    { step: 2, subStep: 3, isFinal: false },
    { step: 3, subStep: 1, isFinal: false },
    { step: 3, subStep: 2, isFinal: false },
    { step: 3, subStep: 3, isFinal: true },
    { step: 3, subStep: 4, isFinal: true }
  ];
  function setCurrentStep(step) {
    currentStep.value = step;
  }
  function setCurrentSubStep(subStep) {
    currentSubStep.value = subStep;
  }
  function indexOfCurrentStepAndSubStep() {
    return availableSteps.findIndex((availableStep) => {
      return availableStep.step == currentStep.value && availableStep.subStep == currentSubStep.value;
    });
  }
  function isCurrentStepFinal() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    return availableSteps[currentIndex].isFinal;
  }
  function getIndexPreviousStepNotFinal(currentIndex) {
    for (let index = currentIndex - 1; index >= 0; index--) {
      if (!availableSteps[index].isFinal) {
        return index;
      }
    }
    return null;
  }
  function goToFinalView() {
    router.push("end-simulation");
  }
  function goToPreviousStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (currentIndex - 1 < 0) {
      return;
    }
    const indexPreviousStepNotFinal = getIndexPreviousStepNotFinal(currentIndex);
    if (indexPreviousStepNotFinal !== null) {
      setCurrentStep(availableSteps[indexPreviousStepNotFinal].step);
      setCurrentSubStep(availableSteps[indexPreviousStepNotFinal].subStep);
    }
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToPreviousStep();
    }
  }
  function goToNextStep() {
    const currentIndex = indexOfCurrentStepAndSubStep();
    if (availableSteps[currentIndex].isFinal) {
      goToFinalView();
      return;
    }
    if (currentIndex + 1 >= availableSteps.length) {
      return;
    }
    setCurrentStep(availableSteps[currentIndex + 1].step);
    setCurrentSubStep(availableSteps[currentIndex + 1].subStep);
    if (currentStep.value == 2 && currentSubStep.value == 3) {
      goToNextStep();
    }
  }
  return {
    currentStep,
    currentSubStep,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
    isCurrentStepFinal,
    goToFinalView
  };
});
export {
  DEFAULT_CONSUMPTION as D,
  useSimulationStore as u
};
