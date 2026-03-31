import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, test, vi } from 'vitest'
import WdDialog from '@/uni_modules/wot-design-uni/components/wd-dialog/wd-dialog.vue'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('WdDialog', () => {
  test('beforeConfirm 返回 false 时阻止确认', async () => {
    const wrapper = mount(WdDialog)
    const success = vi.fn()
    const beforeConfirm = vi.fn(() => false)

    ;(wrapper.vm as any).dialogState.show = true
    ;(wrapper.vm as any).dialogState.type = 'confirm'
    ;(wrapper.vm as any).dialogState.success = success
    ;(wrapper.vm as any).dialogState.beforeConfirm = beforeConfirm

    await (wrapper.vm as any).toggleModal('confirm')

    expect(beforeConfirm).toHaveBeenCalledWith('')
    expect(success).not.toHaveBeenCalled()
  })

  test('beforeConfirm 返回 Promise<true> 时通过确认', async () => {
    const wrapper = mount(WdDialog)
    const success = vi.fn()
    const beforeConfirm = vi.fn(() => Promise.resolve(true))

    ;(wrapper.vm as any).dialogState.show = true
    ;(wrapper.vm as any).dialogState.type = 'prompt'
    ;(wrapper.vm as any).dialogState.success = success
    ;(wrapper.vm as any).dialogState.beforeConfirm = beforeConfirm
    ;(wrapper.vm as any).inputVal = 'test'

    await (wrapper.vm as any).toggleModal('confirm')
    await nextTick()
    await sleep(0)

    expect(beforeConfirm).toHaveBeenCalledWith('test')
    expect(success).toHaveBeenCalledWith({ action: 'confirm', value: 'test' })
  })
})
