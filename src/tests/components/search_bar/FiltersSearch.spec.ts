import FiltersSearch from '@/components/search_bar/FiltersSearch.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, afterEach, expect, it } from 'vitest'

describe('FiltersSearch.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(FiltersSearch, {
      propsData: {
        isDisplayFilters: true,
        filters: [
          {
            name: 'Communes',
            active: false,
          },
          {
            name: 'Adresses',
            active: true,
          },
          {
            name: 'Voies',
            active: false,
          },
          {
            name: 'Organismes',
            active: true,
          },
        ],
      },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displays the filters', () => {
    const filters = wrapper.findAll('label')
    expect(filters).toHaveLength(4)
    expect(filters[0].text()).toBe('Communes')
    expect(filters[1].text()).toBe('Adresses')
    expect(filters[2].text()).toBe('Voies')
    expect(filters[3].text()).toBe('Organismes')
  })

  it('emits closeFilters event when close button is clicked', async () => {
    const closeButton = wrapper.find('button')
    await closeButton.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('closeFilters')
    expect(wrapper.emitted().closeFilters).toHaveLength(1)
  })

  it('emits closeFilters event when pressing Enter key on close button', async () => {
    const closeButton = wrapper.find('button')
    await closeButton.trigger('keyup.enter')

    expect(wrapper.emitted()).toHaveProperty('closeFilters')
    expect(wrapper.emitted().closeFilters).toHaveLength(1)
  })

  it('sets buttonIsFocus to true when button receives focus', async () => {
    const closeButton = wrapper.find('button')
    await closeButton.trigger('focus')
    // @ts-ignore
    expect(wrapper.vm.buttonIsFocus).toBe(true)
  })

  it('sets buttonIsFocus to false when button loses focus', async () => {
    const closeButton = wrapper.find('button')
    await closeButton.trigger('focus')
    // @ts-ignore
    expect(wrapper.vm.buttonIsFocus).toBe(true)

    await closeButton.trigger('blur')
    // @ts-ignore
    expect(wrapper.vm.buttonIsFocus).toBe(false)
  })
})
