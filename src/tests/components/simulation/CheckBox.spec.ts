import { mount } from '@vue/test-utils'
import CheckBox from '@/components/simulation/CheckBox.vue'

describe('CheckBox', () => {
  it('renders correctly when not checked', () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: false,
        isChecked: false,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly when checked', () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: false,
        isChecked: true,
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('changes the status when clicked', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: false,
        isChecked: false,
      },
    })

    const checkboxDiv = wrapper.find('div.shadow-sm')
    await checkboxDiv.trigger('click')

    expect(wrapper.emitted('checkBoxChange')).toBeTruthy()
    expect(wrapper.emitted('checkBoxChange')?.[0]).toEqual([true])

    await checkboxDiv.trigger('click')

    expect(wrapper.emitted('checkBoxChange')?.[1]).toEqual([false])
  })

  it('displays the error border when isOnError is true and isChecked is false', () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: true,
        isChecked: false,
      },
    })

    const checkboxDiv = wrapper.find('div.shadow-sm')

    expect(checkboxDiv.classes()).toContain('border-red-600')
  })

  it('displays the focus border when the input is focused', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: false,
        isChecked: false,
      },
    })

    await wrapper.find('input').trigger('focus')

    const checkboxDiv = wrapper.find('div.shadow-sm')

    expect(checkboxDiv.classes()).toContain('border-2')
    expect(checkboxDiv.classes()).toContain('border-black')
  })

  it('changes the status when keyup.enter is triggered', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        isOnError: false,
        isChecked: false,
      },
    })

    const checkboxDiv = wrapper.find('div.shadow-sm')
    await checkboxDiv.trigger('keyup.enter')

    expect(wrapper.emitted('checkBoxChange')).toBeTruthy()
    expect(wrapper.emitted('checkBoxChange')?.[0]).toEqual([true])

    await checkboxDiv.trigger('keyup.enter')

    expect(wrapper.emitted('checkBoxChange')?.[1]).toEqual([false])
  })
})
