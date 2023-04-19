// @ts-nocheck
import { mount } from '@vue/test-utils'
import AllowAnnualConsumptionPopup from '@/components/simulation/AllowAnnualConsumptionPopup.vue'
import CheckBox from '@/components/simulation/CheckBox.vue'

describe('AllowAnnualConsumptionPopup.vue', () => {
  describe('Next Button Step', () => {
    it('emits "clickContinuePopup" when "allow" checkbox is checked and "Continuer" button is clicked', async () => {
      const wrapper = mount(AllowAnnualConsumptionPopup)

      const allowCheckbox = wrapper.findComponent(CheckBox)
      await allowCheckbox.vm.$emit('checkBoxChange', true, 'allow')

      const nextButton = wrapper.find('#nextButtonPopup')
      await nextButton.trigger('click')

      expect(wrapper.emitted('clickContinuePopup')).toBeTruthy()
    })

    it('emits "goToEndSimulation" when "notallow" checkbox is checked and "Continuer" button is clicked', async () => {
      const wrapper = mount(AllowAnnualConsumptionPopup)

      const checkboxes = wrapper.findAllComponents(CheckBox)
      const notAllowCheckbox = checkboxes[1]
      await notAllowCheckbox.vm.$emit('checkBoxChange', true, 'notallow')

      const nextButton = wrapper.find('#nextButtonPopup')
      await nextButton.trigger('click')

      expect(wrapper.emitted('goToEndSimulation')).toBeTruthy()
    })

    it('sets isAllowCheckBoxOnError and isNotAllowCheckBoxOnError to true when "Continuer" button is clicked and no checkbox is checked', async () => {
      // Mount the component
      const wrapper = mount(AllowAnnualConsumptionPopup)

      // Find the "Continuer" button and trigger a click event
      const nextButton = wrapper.find('#nextButtonPopup')
      await nextButton.trigger('click')

      // Check if isAllowCheckBoxOnError and isNotAllowCheckBoxOnError are set to true
      expect(wrapper.vm.isAllowCheckBoxOnError).toBe(true)
      expect(wrapper.vm.isNotAllowCheckBoxOnError).toBe(true)
    })
  })

  it('updates the checkboxes values based on the emitted events from CheckBox components', async () => {
    const wrapper = mount(AllowAnnualConsumptionPopup)

    // Find both CheckBox components
    const checkboxes = wrapper.findAllComponents(CheckBox)
    const allowCheckbox = checkboxes[0]
    const notAllowCheckbox = checkboxes[1]

    // Emit checkBoxChange event for 'allow' checkbox
    await allowCheckbox.vm.$emit('checkBoxChange', true, 'allow')

    // Check if the isAllowCheckboxChecked value is updated
    expect(wrapper.vm.isAllowCheckboxChecked).toBe(true)
    expect(wrapper.vm.isNotAllowCheckboxChecked).toBe(false)

    // Emit checkBoxChange event for 'notallow' checkbox
    await notAllowCheckbox.vm.$emit('checkBoxChange', true, 'notallow')

    // Check if the isNotAllowCheckboxChecked value is updated
    expect(wrapper.vm.isAllowCheckboxChecked).toBe(false)
    expect(wrapper.vm.isNotAllowCheckboxChecked).toBe(true)
  })
})
