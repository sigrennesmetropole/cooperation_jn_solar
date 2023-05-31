import { mount, VueWrapper } from '@vue/test-utils'
import GoFurther from '@/components/results/GoFurther.vue'
import { createTestingPinia } from '@pinia/testing'
import { useConfigStore } from '@/stores/config'
import configuration from '@/tests/config/configuration_test.json'

describe('LabelsProfitability', () => {
  let wrapper: VueWrapper
  let configStore

  beforeEach(async () => {
    const testingPinia = createTestingPinia()
    configStore = useConfigStore(testingPinia)
    configStore.config = configuration
    wrapper = mount(GoFurther, {
      global: {
        plugins: [testingPinia],
      },
    })
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('contains h2', () => {
    const GoFurtherTitle = wrapper.find('h2')
    expect(GoFurtherTitle.exists()).toBe(true)
    expect(GoFurtherTitle.classes()).toContain('text-2xl')
  })
})
