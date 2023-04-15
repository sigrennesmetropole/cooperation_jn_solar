import { mount } from '@vue/test-utils'
import ConsumptionEmailResult from '@/components/simulation/ConsumptionEmailResult.vue'
import CheckBox from '@/components/simulation/CheckBox.vue'
import { legalList } from '@/constants/legalLinks'

describe('ConsumptionEmailResult', () => {
  it('renders correctly', () => {
    const wrapper = mount(ConsumptionEmailResult)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('validates email input correctly', async () => {
    const wrapper = mount(ConsumptionEmailResult)
    const emailInput = wrapper.find('input[type="email"]')

    await emailInput.setValue('invalid-email')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.validEmail).toBe(false)
    expect(wrapper.find('#errorEmail').exists()).toBe(true)
    expect(wrapper.find('#errorEmail').classes()).toContain('bg-rose-50')
    expect(wrapper.find('#errorEmail').text()).toBe(
      'Veuillez vérifier votre adresse mail.'
    )

    await emailInput.setValue('valid-email@example.com')
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.validEmail).toBe(true)
    expect(wrapper.find('#errorEmail').exists()).toBe(false)
  })

  it('updates isCheckboxChecked when CheckBox emits checkBoxChange', async () => {
    const wrapper = mount(ConsumptionEmailResult)
    const checkBox = wrapper.findComponent(CheckBox)

    await checkBox.vm.$emit('checkBoxChange', true)
    expect(wrapper.vm.isCheckboxChecked).toBe(true)

    await checkBox.vm.$emit('checkBoxChange', false)
    expect(wrapper.vm.isCheckboxChecked).toBe(false)
  })

  it('calls openPrivacy when privacy link is clicked', async () => {
    const wrapper = mount(ConsumptionEmailResult)
    const privacyLink = wrapper.find('[data-testid="privacy-link"]')

    // @ts-ignore
    const windowOpenSpy = jest
      .spyOn(window, 'open')
      .mockImplementation(() => {})

    await privacyLink.trigger('click')
    const privacyLinkData = legalList.find(
      (elt) => elt.slug === 'confidentialite'
    )
    // @ts-ignore
    expect(windowOpenSpy).toHaveBeenCalledWith(privacyLinkData.link, '_blank')

    windowOpenSpy.mockRestore()
  })
})
