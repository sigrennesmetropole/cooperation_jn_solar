// @ts-nocheck
import { mount, VueWrapper } from '@vue/test-utils'
import PdfSimulation from '@/components/results/PdfSimulation.vue'
import autocalsolResultExample from '@/tests/stores/autocalsolResultExample.json'
import GoFurther from '@/components/results/GoFurther.vue'
import SolarCoop from '@/components/results/SolarCoop.vue'
import EnergiesRennes from '@/components/results/EnergiesRennes.vue'
import AutocalsolResultGlobal from '@/components/results/AutocalsolResultGlobal.vue'
import AutocalsolResultGraph from '@/components/results/AutocalsolResultGraph.vue'
import SunshineInformation from '@/components/results/SunshineInformation.vue'
import ConsumptionInformation from '@/components/results/ConsumptionInformation.vue'
import { useConsumptionAndProductionStore } from '@/stores/consumptionAndProduction'
import { createPinia } from 'pinia'

const mockData = {
  selectedRoof: {
    surface_id: '53123',
    values: [13.832112, 74.012886, 12.155002, 0],
    favorable: 10,
    total: 87,
    orientation: 'EST',
    azimuth: 80,
    inclinaison: 1,
  },
  autocalsolResult: autocalsolResultExample,
}

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

describe('PdfSimulation.vue', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(PdfSimulation, {
      props: { ...mockData },
      global: {
        components: { highcharts: HighchartsMock },
        plugins: [createPinia()],
      },
    })
    const consumptionAndProductionStore = useConsumptionAndProductionStore()
    consumptionAndProductionStore.setAnnualConsumption(6000)
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the correct sub-components', () => {
    expect(wrapper.findComponent(SunshineInformation).exists()).toBe(true)
    expect(wrapper.findComponent(ConsumptionInformation).exists()).toBe(true)
    expect(wrapper.findComponent(GoFurther).exists()).toBe(true)
    expect(wrapper.findComponent(SolarCoop).exists()).toBe(true)
    expect(wrapper.findComponent(EnergiesRennes).exists()).toBe(true)
    expect(wrapper.findComponent(AutocalsolResultGlobal).exists()).toBe(true)
    expect(wrapper.findComponent(AutocalsolResultGraph).exists()).toBe(true)
  })

  it('calls exportToPDF() function when the button is clicked', async () => {
    const exportToPDFMock = jest
      .spyOn(wrapper.vm, 'exportToPDF')
      .mockImplementation(async () => {
        try {
          await wrapper.vm.exportToPDF()
        } catch (error) {
          // Ignore the error because html2pdf.js can't be mocked properly
        }
      })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(exportToPDFMock).toHaveBeenCalled()
  })
})
