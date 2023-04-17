// @ts-nocheck
import AutocompletionSearch from '@/components/search_bar/AutocompletionSearch.vue'
import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import highlightedAutocompletion from './highlightedAutocompletion.json'

describe('AutocompletionSearch.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(AutocompletionSearch, {
      propsData: {
        isDisplayAutocompletion: true,
        isDisplayFilters: false,
        isEmptySearch: false,
        highlightedAutocompletion,
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the correct number of autocompletion items', () => {
    const autocompletionItems = wrapper.findAll('.autocompletion-item')
    expect(autocompletionItems.length).toBe(14)
  })

  it('emits the goToAddress event when an item is clicked', async () => {
    const autocompletionItems = wrapper.findAll('.autocompletion-item')
    await autocompletionItems[0].trigger('click')

    const goToAddressEvent = wrapper.emitted('goToAddress')
    expect(goToAddressEvent).toBeTruthy()
    expect(goToAddressEvent![0]).toEqual([
      {
        item: {
          insee: '35131',
          idlane: '3179',
          idaddress: '87781',
          number: '37',
          extension: '',
          building: 'B',
          addr1: '37 B',
          addr2: '37 B rue de Rennes',
          addr3: "37 B rue de <strong>Rennes</strong>, l'Hermitage",
          x: '-1.80428706975102',
          y: '48.1233099744015',
        },
        type: 'rva',
        addr: "37 B rue de <strong>Rennes</strong>, l'Hermitage",
      },
    ])
  })

  it('updates selectedIndex when mouse is over an item', async () => {
    const autocompletionItems = wrapper.findAll('.autocompletion-item')

    await autocompletionItems[0].trigger('mouseover')
    const selectedIndex = wrapper.vm.getSelectedIndex()
    expect(selectedIndex).toBe(0)
    expect(autocompletionItems[0].classes()).toContain('bg-neutral-100')

    await autocompletionItems[10].trigger('mouseover')
    const selectedIndex2 = wrapper.vm.getSelectedIndex()
    expect(selectedIndex2).toBe(10)
    expect(autocompletionItems[10].classes()).toContain('bg-neutral-100')
  })

  it('handles key up event correctly', async () => {
    //Set the selected index to 10
    const autocompletionItems = wrapper.findAll('.autocompletion-item')
    await autocompletionItems[10].trigger('mouseover')

    //Test the key up event
    const initialSelectedIndex = wrapper.vm.getSelectedIndex()
    wrapper.vm.onKeyPress(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
    const selectedIndex = wrapper.vm.getSelectedIndex()
    expect(selectedIndex).toBe(Math.max(initialSelectedIndex - 1, 0))
  })

  it('handles key down event correctly', async () => {
    //Set the selected index to 10
    const autocompletionItems = wrapper.findAll('.autocompletion-item')
    await autocompletionItems[10].trigger('mouseover')

    //Test the key down event
    const initialSelectedIndex = wrapper.vm.getSelectedIndex()
    wrapper.vm.onKeyPress(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
    const selectedIndex = wrapper.vm.getSelectedIndex()
    expect(selectedIndex).toBe(initialSelectedIndex + 1)
  })

  it('handles enter event correctly', async () => {
    //Set the selected index to 10
    const autocompletionItems = wrapper.findAll('.autocompletion-item')
    await autocompletionItems[10].trigger('mouseover')

    // Trigger the 'Enter' keydown event
    wrapper.vm.onKeyPress(new KeyboardEvent('keydown', { key: 'Enter' }))

    // Check if the 'goToAddress' event has been emitted
    const emittedEvents = wrapper.emitted()
    expect(emittedEvents.goToAddress).toBeTruthy()

    // Check the specific parameters passed to the 'goToAddress' event
    const eventData = emittedEvents.goToAddress[0][0]
    expect(eventData).toMatchObject({
      item: {
        insee: '35250',
        idlane: '1079',
        fantoir: '0022',
        type: 'Rue',
        name: 'Rue de Rennes',
        name2: 'RUE DE RENNES',
        name3: 'de Rennes',
        nameindex: 'Rennes (Rue de)',
        name4: 'Rue de <strong>Rennes</strong>, Saint-Armel',
        lowerCorner: '-1.6002134670577 48.0140820822421',
        upperCorner: '-1.59504190227835 48.0149596383537',
      },
      type: 'streets',
      addr: 'Rue de <strong>Rennes</strong>, Saint-Armel',
    })
  })
})
