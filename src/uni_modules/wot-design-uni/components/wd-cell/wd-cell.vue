<template>
  <view
    :class="['wd-cell', isBorder ? 'is-border' : '', size ? 'is-' + size : '', center ? 'is-center' : '', customClass]"
    :style="customStyle"
    :hover-class="isLink || clickable ? 'is-hover' : 'none'"
    :hover-stay-time="70"
    @click="onClick"
  >
    <view :class="`wd-cell__wrapper wd-cell__wrapper--${layout}`">
      <view v-if="showLeft" class="wd-cell__left" :style="titleWidth ? 'min-width:' + titleWidth + ';max-width:' + titleWidth + ';' : ''">
        <text v-if="isRequired && !hideAsterisk && asteriskPosition === 'start'" class="wd-cell__required wd-cell__required--left">*</text>
        <!--左侧icon部位-->
        <slot name="icon">
          <wd-icon v-if="icon" :name="icon" :size="iconSize" :custom-class="`wd-cell__icon  ${customIconClass}`"></wd-icon>
        </slot>

        <view class="wd-cell__title">
          <!--title BEGIN-->
          <slot v-if="useTitleSlot && $slots.title" name="title"></slot>
          <text v-else-if="title" :class="customTitleClass">{{ title }}</text>

          <!--title END-->

          <!--label BEGIN-->
          <slot name="label">
            <view v-if="label" :class="`wd-cell__label ${customLabelClass}`">{{ label }}</view>
          </slot>
          <!--label END-->
        </view>
        <text v-if="isRequired && !hideAsterisk && asteriskPosition === 'end'" class="wd-cell__required">*</text>
      </view>
      <!--right content BEGIN-->
      <view class="wd-cell__right">
        <view class="wd-cell__body">
          <!--文案内容-->
          <view
            :class="`wd-cell__value ${customValueClass} wd-cell__value--${valueAlign} ${ellipsis ? 'wd-cell__value--ellipsis' : ''} ${
              showPlaceholder ? 'wd-cell__placeholder' : ''
            }`"
          >
            <slot>
              {{ showPlaceholder ? placeholder : value }}
            </slot>
          </view>
          <!--箭头-->
          <wd-icon v-if="isLink" custom-class="wd-cell__arrow-right" :name="arrowDirection" :class-prefix="iconPrefix" />
          <slot v-else name="right-icon" />
        </view>
      </view>
      <!--right content END-->
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'wd-cell',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../wd-icon/wd-icon.vue'
import { computed, useSlots } from 'vue'
import { useCell } from '../composables/useCell'

import { cellProps } from './types'
import { isDef } from '../common/util'

const props = defineProps(cellProps)
const emit = defineEmits(['click'])

// 获取插槽
const slots = useSlots()

const cell = useCell()

const isBorder = computed(() => {
  return Boolean(isDef(props.border) ? props.border : cell.border.value)
})

const isRequired = computed(() => {
  return props.required
})

// 是否展示左侧部分
const showLeft = computed(() => {
  // 插槽优先级高于props
  // 有icon插槽或icon属性
  const hasIcon = slots.icon || props.icon
  // 有title插槽或title属性
  const hasTitle = (slots.title && props.useTitleSlot) || props.title
  // 有label插槽或label属性
  const hasLabel = slots.label || props.label

  return hasIcon || hasTitle || hasLabel
})

const showPlaceholder = computed(() => {
  return Boolean(props.placeholder && (props.value === '' || props.value === undefined || props.value === null) && !slots.default)
})

/**
 * @description 点击cell的handle
 */
function onClick() {
  const url = props.to

  if (props.clickable || props.isLink) {
    emit('click')
  }
  if (url && props.isLink) {
    if (props.replace) {
      uni.redirectTo({ url })
    } else {
      uni.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
