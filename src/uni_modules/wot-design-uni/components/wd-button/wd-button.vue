<template>
  <button
    :id="buttonId"
    :hover-class="`${disabled || loading ? '' : 'wd-button--active'}`"
    :style="customStyle"
    :class="[
      'wd-button',
      'is-' + type,
      'is-' + size,
      isIcon ? 'is-icon' : '',
      round ? 'is-round' : '',
      hairline ? 'is-hairline' : '',
      plain ? 'is-plain' : '',
      disabled ? 'is-disabled' : '',
      block ? 'is-block' : '',
      loading ? 'is-loading' : '',
      customClass
    ]"
    :hover-start-time="hoverStartTime"
    :hover-stay-time="hoverStayTime"
    :open-type="openTypeValue"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :app-parameter="appParameter"
    :show-message-card="showMessageCard"
    :session-from="sessionFrom"
    :lang="lang"
    :hover-stop-propagation="hoverStopPropagation"
    :scope="scope"
    @click="handleClick"
    @getAuthorize="handleGetAuthorize"
    @getuserinfo="handleGetuserinfo"
    @contact="handleConcat"
    @getphonenumber="handleGetphonenumber"
    @getrealtimephonenumber="handleGetrealtimephonenumber"
    @error="handleError"
    @launchapp="handleLaunchapp"
    @opensetting="handleOpensetting"
    @chooseavatar="handleChooseavatar"
    @agreeprivacyauthorization="handleAgreePrivacyAuthorization"
  >
    <view class="wd-button__content">
      <wd-loading v-if="loading" v-bind="customLoadingProps"></wd-loading>
      <wd-icon v-else-if="icon" custom-class="wd-button__icon" :name="icon" :classPrefix="classPrefix"></wd-icon>
      <view class="wd-button__text" v-if="$slots.default"><slot /></view>
    </view>
  </button>
</template>

<script lang="ts">
export default {
  name: 'wd-button',
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared'
  }
}
</script>

<script lang="ts" setup>
import wdIcon from '../wd-icon/wd-icon.vue'
import { computed, ref, useSlots } from 'vue'
import { buttonProps } from './types'
import { isDef, omitBy, isUndefined } from '../common/util'
import { type LoadingProps } from '../wd-loading/types'
const slots = useSlots()

const props = defineProps(buttonProps)
const emit = defineEmits([
  'click',
  'getuserinfo',
  'contact',
  'getphonenumber',
  'getrealtimephonenumber',
  'error',
  'launchapp',
  'opensetting',
  'chooseavatar',
  'agreeprivacyauthorization'
])

const customLoadingProps = computed(() => {
  const loadingProps: Partial<LoadingProps> = isDef(props.loadingProps) ? omitBy(props.loadingProps, isUndefined) : {}
  loadingProps.customSpinnerClass = `${isDef(loadingProps.customSpinnerClass) ? loadingProps.customSpinnerClass : ''} wd-button__loading`
  loadingProps.inheritColor = isDef(loadingProps.inheritColor) ? loadingProps.inheritColor : true
  return loadingProps
})

const openTypeValue = computed(() => {
  return props.disabled || props.loading ? undefined : props.openType
})

const isIcon = computed(() => {
  return !slots.default && props.icon
})

function handleClick(event: any) {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

/**
 * 支付宝小程序授权
 * @param event
 */
function handleGetAuthorize(event: any) {
  if (props.scope === 'phoneNumber') {
    handleGetphonenumber(event)
  } else if (props.scope === 'userInfo') {
    handleGetuserinfo(event)
  }
}

function handleGetuserinfo(event: any) {
  emit('getuserinfo', event.detail)
}

function handleConcat(event: any) {
  emit('contact', event.detail)
}

function handleGetphonenumber(event: any) {
  emit('getphonenumber', event.detail)
}

function handleGetrealtimephonenumber(event: any) {
  emit('getrealtimephonenumber', event.detail)
}

function handleError(event: any) {
  emit('error', event.detail)
}

function handleLaunchapp(event: any) {
  emit('launchapp', event.detail)
}

function handleOpensetting(event: any) {
  emit('opensetting', event.detail)
}

function handleChooseavatar(event: any) {
  emit('chooseavatar', event.detail)
}

function handleAgreePrivacyAuthorization(event: any) {
  emit('agreeprivacyauthorization', event.detail)
}
</script>

<style lang="scss" scoped>
@use './index.scss';
</style>
