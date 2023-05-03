import InformationsLinky from '@/components/simulation/InformationsLinky.vue'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import nock from 'nock'

describe('InformationsLinky.vue', () => {
  let wrapper: VueWrapper

  beforeEach(async () => {
    wrapper = mount(InformationsLinky, {
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
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
    nock.cleanAll()
  })

  it('renders the component correctly', () => {
    expect(wrapper.exists()).toBe(true)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displays Enedis signature image', () => {
    const enedisSignatureImage = wrapper.find(
      'img[src$="enedis-signature.svg"]'
    )
    expect(enedisSignatureImage.exists()).toBe(true)
  })

  it('displays Enedis personal space image', () => {
    const enedisSpaceImage = wrapper.find(
      'img[src$="enedis-personal-space.svg"]'
    )
    expect(enedisSpaceImage.exists()).toBe(true)
  })
})
