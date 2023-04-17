import InputSearch from '@/components/search_bar/InputSearch.vue'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

describe('InputSearch.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(InputSearch, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            stubPatch: false,
            fakeApp: true,
          }),
        ],
      },
      propsData: {
        isDisplayAutocompletion: true,
        isEmptySearch: false,
        sizeBeginSearch: 0,
      },
    })
  })

  it('renders the component correctly', () => {
    // Check if the input element is rendered
    const inputElement = wrapper.find('input')
    expect(inputElement.exists()).toBe(true)

    // Check if the magnifying glass icon is rendered
    const magnifyingGlassIcon = wrapper.find('img[src$="magnifying-glass.svg"]')
    expect(magnifyingGlassIcon.exists()).toBe(true)

    // Check if the multiply icon is not rendered initially
    const multiplyIcon = wrapper.find('img[src$="icon-multiply.svg"]')
    expect(multiplyIcon.exists()).toBe(false)

    // Check if the filter icon is rendered
    const filterIcon = wrapper.find('img[src$="icon-filter-searchbar.svg"]')
    expect(filterIcon.exists()).toBe(true)
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emits toggleFilters event when filter button is clicked', async () => {
    // Find the filter button and trigger a click event
    const filterButton = wrapper.find('button[id="toggle-filters"]')
    await filterButton.trigger('click')

    // Check if the toggleFilters event has been emitted
    expect(wrapper.emitted().toggleFilters).toBeTruthy()
  })

  it('emits inputKeyUp event with the search value when input is typed', async () => {
    const wrapper = mount(InputSearch)

    // Find the input element and set its value
    const inputElement = wrapper.find('input')
    await inputElement.setValue('Some address')

    // Trigger the keyup event
    await inputElement.trigger('keyup')

    // Check if the inputKeyUp event has been emitted with the search value
    expect(wrapper.emitted().inputKeyUp).toBeTruthy()
    expect(wrapper.emitted().inputKeyUp[0]).toEqual(['Some address'])
  })

  it('calls emptySearch function when the empty search button is clicked', async () => {
    const inputElement = wrapper.find('input')
    await inputElement.setValue('Some address')

    // Find the filter button and trigger a click event
    const filterButton = wrapper.find('button[id="button-empty-search"]')
    await filterButton.trigger('click')

    // Check if the toggleFilters event has been emitted
    expect(wrapper.emitted().emptySearch).toBeTruthy()
  })
})
