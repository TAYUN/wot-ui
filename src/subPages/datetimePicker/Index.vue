<template>
  <page-wraper>
    <demo-block transparent>
      <wd-cell-group border>
        <wd-cell
          title-width="33%"
          value-align="left"
          :title="$t('ri-qi-xuan-ze')"
          is-link
          placeholder="请选择"
          :value="value1"
          @click="show1 = true"
        />
        <wd-datetime-picker v-model="value1" v-model:visible="show1" @confirm="handleConfirm1" />

        <wd-cell :title="$t('ri-qi-xuan-ze-dai-miao')" is-link :value="formatDate(value18, 'datetime', true)" @click="show18 = true" />
        <wd-datetime-picker use-second v-model="value18" v-model:visible="show18" />

        <wd-cell :title="$t('nian-yue-ri')" is-link :value="formatDate(value2, 'date')" @click="show2 = true" />
        <wd-datetime-picker v-model="value2" type="date" v-model:visible="show2" @confirm="handleConfirm2" />

        <wd-cell :title="$t('nian-yue')" is-link :value="formatDate(value3, 'year-month')" @click="show3 = true" />
        <wd-datetime-picker v-model="value3" type="year-month" v-model:visible="show3" @confirm="handleConfirm3" />

        <wd-cell :title="$t('nian')" is-link :value="formatDate(value16, 'year')" @click="show16 = true" />
        <wd-datetime-picker v-model="value16" type="year" v-model:visible="show16" @confirm="handleConfirm16" />

        <wd-cell :title="$t('shi-fen')" is-link :value="value4" @click="show4 = true" />
        <wd-datetime-picker v-model="value4" type="time" v-model:visible="show4" @confirm="handleConfirm4" />

        <wd-cell :title="$t('shi-jian-xuan-ze-dai-miao')" is-link :value="value19" @click="show19 = true" />
        <wd-datetime-picker v-model="value19" type="time" use-second v-model:visible="show19" />

        <wd-cell :title="$t('zhan-shi-ge-shi')" is-link :value="customDisplayFormat(value5)" @click="show5 = true" />
        <wd-datetime-picker v-model="value5" v-model:visible="show5" @confirm="handleConfirm5" />

        <wd-cell :title="$t('nei-bu-ge-shi')" is-link :value="formatDate(value6, 'datetime')" @click="show6 = true" />
        <wd-datetime-picker v-model="value6" v-model:visible="show6" :formatter="formatter" @confirm="handleConfirm6" />

        <wd-cell :title="$t('guo-lv-xuan-xiang')" is-link :value="formatDate(value7, 'datetime')" @click="show7 = true" />
        <wd-datetime-picker v-model="value7" v-model:visible="show7" :filter="filter" @confirm="handleConfirm7" />

        <wd-cell title="before-confirm" is-link :value="formatDate(value8, 'datetime')" @click="show8 = true" />
        <wd-datetime-picker v-model="value8" v-model:visible="show8" :before-confirm="beforeConfirm" @confirm="handleConfirm8" />

        <wd-cell :title="$t('cuo-wu')" is-link :value="formatDate(value9, 'datetime')" custom-value-class="is-error" @click="show9 = true" />
        <wd-datetime-picker v-model="value9" v-model:visible="show9" @confirm="handleConfirm9" />

        <wd-cell :title="$t('bi-tian')" required is-link :value="formatDate(value10, 'datetime')" @click="show10 = true" />
        <wd-datetime-picker v-model="value10" v-model:visible="show10" @confirm="handleConfirm10" />

        <wd-cell
          :title="$t('bi-tian-xing-hao-zai-you-ce')"
          required
          asterisk-position="end"
          is-link
          :value="formatDate(value20, 'datetime')"
          @click="show20 = true"
        />
        <wd-datetime-picker v-model="value20" v-model:visible="show20" @confirm="handleConfirm20" />

        <wd-cell :title="$t('mo-ren-ri-qi')" is-link :value="formatDate(value2, 'datetime')" @click="showDefault = true" />
        <wd-datetime-picker v-model="value2" v-model:visible="showDefault" :default-value="value2" />

        <wd-cell :title="$t('shi-jian-fan-wei-yi-nian')" is-link :value="formatDate(value17, 'datetime')" @click="show17 = true" />
        <wd-datetime-picker :minDate="minDate" :maxDate="maxDate" v-model="value17" v-model:visible="show17" @confirm="handleConfirm1" />
      </wd-cell-group>
    </demo-block>
    <demo-block :title="$t('label-bu-chuan-0')" transparent>
      <wd-cell is-link :value="value11 ? value11 : '请选择'" @click="show11 = true" />
      <wd-datetime-picker v-model="value11" v-model:visible="show11" @confirm="handleConfirm11" />
    </demo-block>
    <demo-block :title="$t('da-xiao')" transparent>
      <wd-cell :title="$t('ri-qi-xuan-ze-0')" size="large" is-link :value="value12 ? value12 : '请选择'" @click="show12 = true" />
      <wd-datetime-picker size="large" v-model="value12" v-model:visible="show12" @confirm="handleConfirm12" />
    </demo-block>
    <demo-block :title="$t('ke-qing-kong')" transparent>
      <wd-cell-group border>
        <wd-cell :title="$t('ri-qi-xuan-ze-ke-qing-kong')" is-link :value="formatDate(valueClear1, 'datetime')" @click="showClear1 = true">
          <template v-if="valueClear1" #right-icon>
            <wd-icon name="error-fill" custom-class="wd-datetime-picker__clear" @click.stop="handleClear1" />
          </template>
        </wd-cell>
        <wd-datetime-picker v-model="valueClear1" v-model:visible="showClear1" @confirm="handleConfirmClear1" />

        <wd-cell :title="$t('qu-yu-xuan-ze-ke-qing-kong')" is-link :value="formatRange(valueClear2)" @click="showClear2 = true">
          <template v-if="valueClear2 && (valueClear2[0] || valueClear2[1])" #right-icon>
            <wd-icon name="error-fill" custom-class="wd-datetime-picker__clear" @click.stop="handleClear2" />
          </template>
        </wd-cell>
        <wd-datetime-picker v-model="valueClear2" v-model:visible="showClear2" @confirm="handleConfirmClear2" />
      </wd-cell-group>
    </demo-block>
    <demo-block :title="$t('zhi-kao-you-zhan-shi')" transparent>
      <wd-cell :title="$t('ri-qi-xuan-ze-1')" is-link :value="formatDate(value13, 'datetime')" @click="show13 = true" />
      <wd-datetime-picker v-model="value13" v-model:visible="show13" @confirm="handleConfirm13" />
    </demo-block>
    <demo-block :title="$t('qu-yu-xuan-ze')" transparent>
      <wd-cell :title="$t('ri-qi-xuan-ze-2')" is-link :value="formatRange(value14)" @click="show14 = true" />
      <wd-datetime-picker :title="$t('qing-xuan-ze-qu-jian')" v-model="value14" v-model:visible="show14" use-second @confirm="handleConfirm14" />
    </demo-block>
    <demo-block :title="$t('fan-wei-tab-zhan-shi-ge-shi')" transparent>
      <wd-cell :title="$t('ri-qi-xuan-ze-3')" is-link :value="formatRange(value15)" @click="show15 = true" />
      <wd-datetime-picker v-model="value15" v-model:visible="show15" @confirm="handleConfirm15" :display-format-tab-label="displayFormatTabLabel" />
    </demo-block>
    <demo-block title="超出隐藏" transparent>
      <wd-cell-group border>
        <wd-cell title="日期选择器超出隐藏" is-link :value="formatDate(valueEllipsis, 'datetime')" ellipsis @click="showEllipsis = true" />
        <wd-datetime-picker v-model="valueEllipsis" v-model:visible="showEllipsis" @confirm="handleConfirmEllipsis" />

        <wd-cell title="日期区间超出隐藏" is-link :value="formatRange(valueRangeEllipsis)" ellipsis @click="showRangeEllipsis = true" />
        <wd-datetime-picker v-model="valueRangeEllipsis" v-model:visible="showRangeEllipsis" @confirm="handleConfirmRangeEllipsis" />
      </wd-cell-group>
    </demo-block>
    <wd-toast />
  </page-wraper>
</template>
<script lang="ts" setup>
import { useToast } from '@/uni_modules/wot-design-uni'
import type { DatetimePickerViewFilter, DatetimePickerViewFormatter } from '@/uni_modules/wot-design-uni/components/wd-datetime-picker-view/types'
import type { DatetimePickerDisplayFormatTabLabel, DatetimePickerInstance } from '@/uni_modules/wot-design-uni/components/wd-datetime-picker/types'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import dayjs from '@/uni_modules/wot-design-uni/dayjs'
import { isArray } from '@/uni_modules/wot-design-uni/components/common/util'

const { t } = useI18n()

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
const show7 = ref(false)
const show8 = ref(false)
const show9 = ref(false)
const show10 = ref(false)
const show11 = ref(false)
const show12 = ref(false)
const show13 = ref(false)
const show14 = ref(false)
const show15 = ref(false)
const show16 = ref(false)
const show17 = ref(false)
const show18 = ref(false)
const show19 = ref(false)
const show20 = ref(false)
const showDefault = ref(false)
const showClear1 = ref(false)
const showClear2 = ref(false)
const showEllipsis = ref(false)
const showRangeEllipsis = ref(false)

const value1 = ref<string>('')
const value2 = ref<number>(Date.now())
const value3 = ref<number>(Date.now())
const value4 = ref<string>('09:20')
const value5 = ref<number>(Date.now())
const value6 = ref<number>(Date.now())
const value7 = ref<number>(Date.now())
const value8 = ref<number>(Date.now())
const value9 = ref<number>(Date.now())
const value10 = ref<number>(Date.now())
const value11 = ref<string>('')
const value12 = ref<string>('')
const value13 = ref<number>(Date.now())
const value14 = ref<any[]>(['', ''])
const value15 = ref<any[]>(['', Date.now()])
const value16 = ref(Date.now())
const value17 = ref(Date.now())
const value18 = ref(Date.now())
const value19 = ref('09:20:26')
const value20 = ref<number>(Date.now())
const valueClear1 = ref<number | string>(Date.now())
const valueClear2 = ref<any[]>([Date.now(), Date.now()])
const valueEllipsis = ref<number>(Date.now())
const valueRangeEllipsis = ref<any[]>([Date.now(), Date.now() + 7 * 24 * 60 * 60 * 1000])
const minDate = ref<number>(Date.now())
const now = new Date()
const maxDate = ref<number>(new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()).getTime())

const formatter: DatetimePickerViewFormatter = (type, value) => {
  let formatValue = ''

  switch (type) {
    case 'year':
      formatValue = value + t('nian-0')
      break
    case 'month':
      formatValue = value + t('yue')
      break
    case 'date':
      formatValue = value + t('ri')
      break
    case 'hour':
      formatValue = value + t('shi')
      break
    case 'minute':
      formatValue = value + t('fen')
      break
  }
  return formatValue
}
const filter: DatetimePickerViewFilter = (type, values) => {
  if (type === 'minute') {
    return values.filter((value) => value % 5 === 0)
  }
  return values
}

const toast = useToast()
const beforeConfirm = (value: number | string | (number | string)[], resolve: (isPass: boolean) => void, picker: DatetimePickerInstance) => {
  picker.setLoading(true)
  setTimeout(() => {
    picker.setLoading(false)
    if ((value as number) > Date.now()) {
      resolve(false)
      toast.error(t('bu-neng-xuan-ze-da-yu-jin-tian-de-ri-qi'))
    } else {
      resolve(true)
    }
  }, 2000)
}
const displayFormatTabLabel: DatetimePickerDisplayFormatTabLabel = (items) => {
  return t('items0label-nian-items1label-yue-items2label-ri-items3labelitems4label', [
    items[0].label,
    items[1].label,
    items[2].label,
    items[3].label,
    items[4].label
  ])
}

function formatDate(value: string | number, type: string, useSecond: boolean = false) {
  if (!value) return ''
  const date = dayjs(value)
  switch (type) {
    case 'date':
      return date.format('YYYY-MM-DD')
    case 'year-month':
      return date.format('YYYY-MM')
    case 'year':
      return date.format('YYYY')
    case 'datetime':
      return date.format(useSecond ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm')
    case 'time':
      return value
    default:
      return ''
  }
}

function formatRange(value: any[]) {
  if (!isArray(value)) return ''
  const [start, end] = value
  if (!start && !end) return ''
  return `${start ? dayjs(start).format('YYYY-MM-DD HH:mm:ss') : ''} - ${end ? dayjs(end).format('YYYY-MM-DD HH:mm:ss') : ''}`
}

function customDisplayFormat(value: any) {
  if (!value) return ''
  const date = dayjs(value)
  return t('items0label-nian-items1label-yue-items2label-ri-items3labelitems4label-0', [
    date.format('YYYY'),
    date.format('MM'),
    date.format('DD'),
    date.format('HH'),
    date.format('mm')
  ])
}

/** picker触发confirm事件，同步触发confirm事件 */
function handleConfirm1({ value }: any) {
  console.log(new Date(value))
}
function handleConfirm2({ value }: any) {
  console.log(value)
}
function handleConfirm3({ value }: any) {
  console.log(value)
}
function handleConfirm4({ value }: any) {
  console.log(value)
}
function handleConfirm5({ value }: any) {
  console.log(value)
}
function handleConfirm6({ value }: any) {
  console.log(value)
}
function handleConfirm7({ value }: any) {
  console.log(value)
}

function handleConfirm8({ value }: any) {
  console.log(value)
}
function handleConfirm9({ value }: any) {
  console.log(value)
}
function handleConfirm10({ value }: any) {
  console.log(value)
}
function handleConfirm11({ value }: any) {
  console.log(value)
}
function handleConfirm12({ value }: any) {
  console.log(value)
}
function handleConfirm13({ value }: any) {
  console.log(value)
}
function handleConfirm14({ value }: any) {
  console.log(value)
}
function handleConfirm15({ value }: any) {
  console.log(value)
}
function handleConfirm16({ value }: any) {
  console.log(value)
}
function handleConfirm20({ value }: any) {
  console.log(value)
}

function handleClear1() {
  valueClear1.value = ''
  console.log('datetime picker 1 cleared')
}

function handleConfirmClear1({ value }: any) {
  console.log('datetime picker 1 confirmed:', value)
}

function handleClear2() {
  valueClear2.value = ['', '']
  console.log('datetime picker 2 cleared')
}

function handleConfirmClear2({ value }: any) {
  console.log('datetime picker 2 confirmed:', value)
}

function handleConfirmEllipsis({ value }: any) {
  console.log('ellipsis datetime picker confirmed:', value)
}

function handleConfirmRangeEllipsis({ value }: any) {
  console.log('range ellipsis datetime picker confirmed:', value)
}

/** picker触发cancel事件，同步触发cancel事件 */
function onCancel() {}
</script>
<style lang="scss" scoped>
.is-error {
  color: var(--wot-input-error-color, #f56c6c);
}
.wd-datetime-picker__clear {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  font-size: 16px;
  color: var(--wot-cell-icon-color, #c8c9cc);
  z-index: 2;
}
</style>
