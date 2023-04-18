import { mount } from '@vue/test-utils'
import CertifiedInstaller from '@/components/simulation/CertifiedInstaller.vue'

describe('CertifiedInstaller', () => {
  it('renders correctly', () => {
    const wrapper = mount(CertifiedInstaller)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
