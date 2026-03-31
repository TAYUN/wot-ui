<template>
  <page-wraper>
    <view class="page-picker-view">
      <demo-group title="组件类型">
        <demo-group-item title="基本用法" no-padding>
          <view class="page-picker-view__result">当前值：{{ value1.join(' / ') }}</view>
          <wd-picker-view v-model="value1" :columns="columns1" />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件状态">
        <demo-group-item :title="$t('jin-yong-xuan-xiang')" no-padding>
          <view class="page-picker-view__result">当前值：{{ value2.join(' / ') }}</view>
          <wd-picker-view v-model="value2" :columns="columns2" />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件变体">
        <demo-group-item title="立即触发" no-padding>
          <view class="page-picker-view__result">当前值：{{ value3.join(' / ') }}</view>
          <view class="page-picker-view__result">变更信息：{{ changeMessage }}</view>
          <wd-picker-view v-model="value3" :columns="columns2" immediate-change @change="handleImmediateChange" />
        </demo-group-item>

        <demo-group-item :title="$t('duo-lie')" no-padding>
          <view class="page-picker-view__result">当前值：{{ value4.join(' / ') }}</view>
          <wd-picker-view v-model="value4" :columns="columns4" />
        </demo-group-item>

        <demo-group-item :title="$t('duo-ji-lian-dong')" no-padding>
          <view class="page-picker-view__result">当前值：{{ value5.join(' / ') }}</view>
          <wd-picker-view v-model="value5" :columns="cascadeColumns" cascade />
        </demo-group-item>
      </demo-group>

      <demo-group title="特殊用法">
        <demo-group-item title="自定义字段" no-padding>
          <view class="page-picker-view__result">当前值：{{ value6.join(' / ') }}</view>
          <wd-picker-view v-model="value6" :columns="columns6" value-key="id" label-key="text" />
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const value1 = ref<string[]>([t('xuanXiang_1-0')])
const columns1 = ref([
  { label: t('xuanXiang_1-0'), value: t('xuanXiang_1-0') },
  { label: t('xuanXiang_2-0'), value: t('xuanXiang_2-0') },
  { label: t('xuanXiang_3-0'), value: t('xuanXiang_3-0') },
  { label: t('xuan-xiang-4'), value: t('xuan-xiang-4') },
  { label: t('xuan-xiang-5'), value: t('xuan-xiang-5') },
  { label: t('xuan-xiang-6'), value: t('xuan-xiang-6') },
  { label: t('xuan-xiang-7'), value: t('xuan-xiang-7') }
])

const value2 = ref<string[]>([t('xuanXiang_1-0')])
const value3 = ref<string[]>([t('xuanXiang_1-0')])
const changeMessage = ref('未触发')

const columns2 = ref([
  { label: t('xuanXiang_1-0'), value: t('xuanXiang_1-0') },
  { label: t('xuanXiang_2-0'), value: t('xuanXiang_2-0') },
  { label: t('xuanXiang_3-0'), value: t('xuanXiang_3-0'), disabled: true },
  { label: t('xuan-xiang-4'), value: t('xuan-xiang-4') },
  { label: t('xuan-xiang-5'), value: t('xuan-xiang-5') },
  { label: t('xuan-xiang-6'), value: t('xuan-xiang-6') },
  { label: t('xuan-xiang-7'), value: t('xuan-xiang-7') }
])

const value4 = ref([t('zhong-nan-da-xue-0'), t('ruan-jian-gong-cheng-0')])
const columns4 = ref([
  [
    { value: t('zhong-shan-da-xue-0'), label: t('zhong-shan-da-xue-0') },
    { value: t('zhong-nan-da-xue-0'), label: t('zhong-nan-da-xue-0') },
    { value: t('hua-nan-li-gong-da-xue-0'), label: t('hua-nan-li-gong-da-xue-0') }
  ],
  [
    { value: t('ji-suan-ji-ke-xue-yu-ji-shu-0'), label: t('ji-suan-ji-ke-xue-yu-ji-shu-0') },
    { value: t('ruan-jian-gong-cheng-0'), label: t('ruan-jian-gong-cheng-0') },
    { value: t('tong-xin-gong-cheng-0'), label: t('tong-xin-gong-cheng-0') },
    { value: t('fa-xue-0'), label: t('fa-xue-0') },
    { value: t('jing-ji-xue-0'), label: t('jing-ji-xue-0') }
  ]
])

const value5 = ref(['110000', '110100', '110102'])
const cascadeColumns = ref([
  {
    label: t('bei-jing'),
    value: '110000',
    children: [
      {
        label: t('bei-jing'),
        value: '110100',
        children: [
          { label: t('dong-cheng-qu'), value: '110101' },
          { label: t('xi-cheng-qu'), value: '110102' },
          { label: t('zhao-yang-qu'), value: '110105' },
          { label: t('feng-tai-qu'), value: '110106' },
          { label: t('shi-jing-shan-qu'), value: '110107' }
        ]
      }
    ]
  },
  {
    label: t('guang-dong-sheng'),
    value: '440000',
    children: [
      {
        label: t('guang-zhou-shi'),
        value: '440100',
        children: [
          { label: t('li-wan-qu'), value: '440103' },
          { label: t('yue-xiu-qu'), value: '440104' },
          { label: t('hai-zhu-qu'), value: '440105' }
        ]
      },
      {
        label: t('shao-guan-shi'),
        value: '440200',
        children: [{ label: t('wu-jiang-qu'), value: '440203' }]
      },
      {
        label: t('shen-zhen-shi'),
        value: '440300',
        children: [
          { label: t('luo-hu-qu'), value: '440303' },
          { label: t('fu-tian-qu'), value: '440304' }
        ]
      },
      {
        label: t('zhu-hai-shi'),
        value: '440400',
        children: [
          { label: t('xiang-zhou-qu'), value: '440402' },
          { label: t('dou-men-qu'), value: '440403' },
          { label: t('jin-wan-qu'), value: '440404' }
        ]
      },
      {
        label: t('shan-tou-shi'),
        value: '440500',
        children: [
          { label: t('long-hu-qu'), value: '440507' },
          { label: t('jin-ping-qu'), value: '440511' }
        ]
      }
    ]
  }
])

const value6 = ref<(string | number)[]>([1])
const columns6 = ref([
  { id: 1, text: '选项一' },
  { id: 2, text: '选项二' },
  { id: 3, text: '选项三' }
])

function handleImmediateChange({ selectedLabels, columnIndex }: any) {
  changeMessage.value = `${selectedLabels.join(' / ')}（第 ${columnIndex} 列）`
}
</script>
<style lang="scss" scoped>
.page-picker-view__result {
  padding: 12px 16px 0;
  color: var(--wot-text-secondary);
  font-size: 14px;
  line-height: 20px;
}
</style>
