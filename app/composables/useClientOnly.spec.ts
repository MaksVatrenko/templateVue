
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { useClientOnly } from './useClientOnly'
import { defineComponent } from 'vue'

describe('useClientOnly', () => {
  it('should return isMounted as false on server and true on client', async () => {
    const TestComponent = defineComponent({
      setup() {
        const { isMounted } = useClientOnly()
        return { isMounted }
      },
      template: '<div>{{ isMounted }}</div>',
    })

    const wrapper = mount(TestComponent)

    expect(wrapper.text()).toBe('false')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toBe('true')
  })
})
