// @ts-nocheck
import { shallowMount } from '@vue/test-utils'
import AutocalsolResultGraph from '@/components/results/AutocalsolResultGraph.vue'
import autocalsolResultExample from '@/tests/stores/autocalsolResultExample.json'
import type { VueWrapper } from '@vue/test-utils'

const HighchartsMock = {
  template: '<div></div>',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  name: 'highcharts',
}

const autocalsolData = autocalsolResultExample
describe('AutocalsolResultGraph.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    const consoByHour = autocalsolData.consoByHour
    const prodByHour = autocalsolData.prodByHour

    wrapper = shallowMount(AutocalsolResultGraph, {
      props: {
        consoByHour,
        prodByHour,
      },
      global: {
        components: { highcharts: HighchartsMock },
      },
    })
  })

  test('renders the graph with the provided data', () => {
    expect(wrapper.exists()).toBe(true)
  })

  test('renders the sun and moon icons', () => {
    const sunIcon = wrapper.find('img[src$="sun.svg"]')
    const moonIcon = wrapper.find('img[src$="moon.svg"]')

    expect(sunIcon.exists()).toBe(true)
    expect(moonIcon.exists()).toBe(true)
  })

  test('renders the labels for "Midi" and "Minuit"', () => {
    const labels = wrapper.findAll('span')
    const midiLabel = labels.filter((label) => label.text() === 'Midi')
    const minuitLabel = labels.filter((label) => label.text() === 'Minuit')

    expect(midiLabel.length).toBe(1)
    expect(minuitLabel.length).toBe(1)
  })

  test('renders the autoconsumption and resale labels', () => {
    const labels = wrapper.findAll('span')
    const resaleLabel = labels.filter((label) => label.text() === 'Revente')
    const autoconsumptionLabel = labels.filter(
      (label) => label.text() === 'Autoconsommation'
    )

    expect(resaleLabel.length).toBe(1)
    expect(autoconsumptionLabel.length).toBe(1)
  })

  test('sets correct plotOptions for areaspline', () => {
    const highchartsComponent = wrapper.findComponent({ name: 'highcharts' })
    expect(highchartsComponent.exists()).toBe(true)

    // Access chartOptions from the component instance directly
    const chartOptions = wrapper.vm.chartOptions
    const plotOptions = chartOptions.plotOptions

    // Test plotOptions for areaspline
    expect(plotOptions.areaspline).toBeDefined()
    expect(plotOptions.areaspline.marker).toBeDefined()
    expect(plotOptions.areaspline.marker.enabled).toBe(false)
    expect(plotOptions.areaspline.states).toBeDefined()
    expect(plotOptions.areaspline.states.inactive).toBeDefined()
    expect(plotOptions.areaspline.states.inactive.opacity).toBe(1)
    expect(plotOptions.areaspline.states.hover).toBeDefined()
    expect(plotOptions.areaspline.states.hover.enabled).toBe(false)
  })

  test('sets correct chart options', () => {
    const highchartsComponent = wrapper.findComponent({ name: 'highcharts' })
    expect(highchartsComponent.exists()).toBe(true)

    // Access chartOptions from the component instance directly
    const chartOptions = wrapper.vm.chartOptions
    const chart = chartOptions.chart

    // Test chart options
    expect(chart).toBeDefined()
    expect(chart.type).toBe('areaspline')
    expect(chart.width).toBe(730)
    expect(chart.height).toBe(400)
    expect(chart.marginLeft).toBe(30)
  })

  test('sets correct xAxis options', () => {
    const highchartsComponent = wrapper.findComponent({ name: 'highcharts' })
    expect(highchartsComponent.exists()).toBe(true)

    // Access chartOptions from the component instance directly
    const chartOptions = wrapper.vm.chartOptions
    const xAxis = chartOptions.xAxis

    // Test xAxis options
    expect(xAxis.categories).toEqual(wrapper.vm.xAxis)
    expect(xAxis.labels.useHTML).toBe(true)
    expect(xAxis.labels.formatter).toBeInstanceOf(Function)
    expect(xAxis.rotation).toBe(0)
    expect(xAxis.tickPositions).toEqual(wrapper.vm.tickPositions)
    expect(xAxis.tickInterval).toBe(1)

    // Test formatter function
    const formatterFunction = xAxis.labels.formatter
    const mockFormatterContext12h = { value: '12h' }
    const mockFormatterContext0h = { value: '0h' }
    const mockFormatterContextOther = { value: '6h' }

    expect(formatterFunction.call(mockFormatterContext12h)).toBe(
      '<div style="width: 2px; height: 15px; background-color: black;" />'
    )
    expect(formatterFunction.call(mockFormatterContext0h)).toBe(
      '<div style="width: 2px; height: 15px; background-color: black;" />'
    )
    expect(formatterFunction.call(mockFormatterContextOther)).toBe(
      '<span style="font-size: 9px;">6h</span>'
    )
  })

  test('sets correct yAxis options', () => {
    const highchartsComponent = wrapper.findComponent({ name: 'highcharts' })
    expect(highchartsComponent.exists()).toBe(true)

    // Access chartOptions from the component instance directly
    const chartOptions = wrapper.vm.chartOptions
    const yAxis = chartOptions.yAxis

    // Test yAxis title options
    expect(yAxis.title.text).toBe('Energie (kWh)')
    expect(yAxis.title.align).toBe('high')
    expect(yAxis.title.rotation).toBe(0)
    expect(yAxis.title.offset).toBe(0)
    expect(yAxis.title.y).toBe(-20)
    expect(yAxis.title.x).toBe(70)
    expect(yAxis.title.style).toEqual({
      fontSize: '11px',
      fontWeight: 'bold',
    })

    // Test yAxis labels, lineWidth and gridLineWidth options
    expect(yAxis.labels.enabled).toBe(false)
    expect(yAxis.lineWidth).toBe(1)
    expect(yAxis.gridLineWidth).toBe(0)
  })

  test('sets correct series options', () => {
    const highchartsComponent = wrapper.findComponent({ name: 'highcharts' })
    expect(highchartsComponent.exists()).toBe(true)

    // Access chartOptions and data from the component instance directly
    const chartOptions = wrapper.vm.chartOptions
    const consommationData = wrapper.vm.consommationData
    const productionData = wrapper.vm.productionData
    const intersectionData = wrapper.vm.intersectionData
    const series = chartOptions.series

    // Test Consommation series
    expect(series[0].name).toBe('Consommation')
    expect(series[0].data).toEqual(consommationData)
    expect(series[0].color).toBe('#D1FAE5')
    expect(series[0].lineColor).toBe('#0F766E')
    expect(series[0].fillOpacity).toBe(0.6)

    // Test Production series
    expect(series[1].name).toBe('Production')
    expect(series[1].data).toEqual(productionData)
    expect(series[1].color).toBe('#4F46E5')
    expect(series[1].lineColor).toBe('#F59E0B')
    expect(series[1].fillOpacity).toBe(0.7)
    expect(series[1].lineWidth).toBe(4)

    // Test Intersection series
    expect(series[2].name).toBe('Intersection')
    expect(series[2].data).toEqual(intersectionData)
    expect(series[2].color).toBe('#10B981')
    expect(series[2].lineWidth).toBe(0)
    expect(series[2].fillOpacity).toBe(1)
  })
})
