<template>
  <wd-cell
    :custom-class="`wd-form-item ${customClass}`"
    :custom-style="customStyle"
    :use-title-slot="!!$slots.title"
    :title="title"
    :title-width="titleWidth"
    :icon="icon"
    :icon-size="iconSize"
    :icon-prefix="iconPrefix"
    :required="isRequired"
    :size="size"
    :value-align="valueAlign"
    :center="center"
    :ellipsis="ellipsis"
    :asterisk-position="asteriskPosition"
    :border="border"
    :hide-asterisk="hideAsterisk"
    :custom-icon-class="customIconClass"
    :custom-label-class="customLabelClass"
    :custom-title-class="customTitleClass"
    :custom-value-class="customValueClass"
  >
    <template #title v-if="$slots.title">
      <slot name="title"></slot>
    </template>

    <slot></slot>
    <view v-if="errorMessage" class="wd-form-item__error-message">{{ errorMessage }}</view>
  </wd-cell>
</template>
<script lang="ts">
export default {
  name: 'wd-form-item',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useParent } from '../composables/useParent'
import WdCell from '../wd-cell/wd-cell.vue'
import { FORM_KEY } from '../wd-form/types'
import { formItemProps } from './types'

const props = defineProps(formItemProps)

const { parent: form, index } = useParent(FORM_KEY)

const errorMessage = computed(() => {
  if (form && props.prop && form.errorMessages && form.errorMessages[props.prop]) {
    return form.errorMessages[props.prop]
  } else {
    return ''
  }
})

const border = computed(() => {
  if (index.value > 0 && form && form.props.border) {
    return true
  } else {
    return props.border
  }
})

// 是否展示必填
const isRequired = computed(() => {
  let formRequired = false
  if (form && form.props.rules) {
    const rules = form.props.rules
    for (const key in rules) {
      if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
        formRequired = rules[key].some((rule) => rule.required)
      }
    }
  }
  return props.required || (props.rules && props.rules.some((rule) => rule.required)) || formRequired
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
