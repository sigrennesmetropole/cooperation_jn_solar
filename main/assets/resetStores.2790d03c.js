import { u as useAddressStore, a as useConsumptionAndProductionStore, b as useAutocalsolStore } from "./consumptionAndProduction.733e1c96.js";
import { aK as defineStore, ay as ref } from "./vendor.2d213147.js";
import { r as router } from "./UiHeaderFullScreen.story.f1d43231.js";
import { u as useRoofsStore } from "./roof.fcba3cfe.js";
import { u as useSolarPanelStore } from "./solarPanels.c2ca4da0.js";
const DEFAULT_CONSUMPTION = 0;
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
  function resetSimulation() {
    setCurrentStep(1);
    setCurrentSubStep(1);
  }
  return {
    currentStep,
    currentSubStep,
    setCurrentStep,
    setCurrentSubStep,
    goToPreviousStep,
    goToNextStep,
    isCurrentStepFinal,
    goToFinalView,
    resetSimulation
  };
});
const WINDOW_CONFIRM_MESSAGE = "Cette action vous renvoie en d\xE9but de simulation, vos donn\xE9es actuelles seront effac\xE9es";
function resetStores() {
  const simulationStore = useSimulationStore();
  const addressStore = useAddressStore();
  const roofStore = useRoofsStore();
  const consumptionAndProductionStore = useConsumptionAndProductionStore();
  const autocalsolStore = useAutocalsolStore();
  const solarPanelStore = useSolarPanelStore();
  simulationStore.resetSimulation();
  addressStore.resetAddress();
  roofStore.resetRoofStore();
  consumptionAndProductionStore.resetAnnualConsumption();
  autocalsolStore.resetAutocalsolResult();
  solarPanelStore.resetPanelStore();
}
export {
  DEFAULT_CONSUMPTION as D,
  WINDOW_CONFIRM_MESSAGE as W,
  resetStores as r,
  useSimulationStore as u
};
