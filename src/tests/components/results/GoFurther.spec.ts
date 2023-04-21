import { mount } from '@vue/test-utils'
import GoFurther from '@/components/results/GoFurther.vue'

describe('LabelsProfitability', () => {
  const wrapper = mount(GoFurther)

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('contains h2', () => {
    const GoFurtherTitle = wrapper.find('h2')
    expect(GoFurtherTitle.exists()).toBe(true)
    expect(GoFurtherTitle.classes()).toContain('text-2xl')
  })
})
