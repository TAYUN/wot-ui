<template>
  <page-wraper>
    <view>
      <wd-cell-group border>
        <wd-cell :title="$t('xuan-ze-di-zhi')" is-link :value="showValue1" @click="show1 = true" />
        <wd-col-picker v-model="value1" v-model:visible="show1" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm1" />

        <wd-cell :title="$t('chu-shi-xuan-xiang')" is-link :value="showValue2" @click="show2 = true" />
        <wd-col-picker
          v-model="value2"
          v-model:visible="show2"
          :columns="areaData2"
          :column-change="columnChange"
          auto-complete
          @confirm="handleConfirm2"
        />

        <wd-cell :title="$t('jinYong')" :value="showValue3" disabled />
        <wd-col-picker v-model="value3" v-model:visible="show3" :columns="areaData3" :column-change="columnChange1" @confirm="handleConfirm3" />

        <wd-cell :title="$t('zhi-du')" :value="showValue3" clickable />
        <!-- 复用 value3 数据，但不提供点击打开逻辑，模拟只读 -->

        <wd-cell :title="$t('jin-yong-xuan-xiang')" is-link :value="showValue4" @click="show4 = true" />
        <wd-col-picker v-model="value4" v-model:visible="show4" :columns="areaData4" :column-change="columnChange1" @confirm="handleConfirm4" />

        <wd-cell :title="$t('xuan-xiang-ti-shi-xin-xi')" is-link :value="showValue5" @click="show5 = true" />
        <wd-col-picker v-model="value5" v-model:visible="show5" :columns="areaData5" :column-change="columnChange1" @confirm="handleConfirm5" />

        <wd-cell :title="$t('zhan-shi-ge-shi-hua')" is-link :value="showValue6" @click="show6 = true" />
        <wd-col-picker v-model="value6" v-model:visible="show6" :columns="areaData3" :column-change="columnChange1" @confirm="handleConfirm6" />

        <wd-cell :title="$t('biaoTi-0')" is-link :value="showValue7" @click="show7 = true" />
        <wd-col-picker
          v-model="value7"
          v-model:visible="show7"
          :title="$t('xuan-ze-di-zhi')"
          :columns="areaData1"
          :column-change="columnChange1"
          @confirm="handleConfirm7"
        />

        <wd-cell title="before-confirm" is-link :value="showValue8" @click="show8 = true" />
        <wd-col-picker
          v-model="value8"
          v-model:visible="show8"
          :columns="areaData1"
          :column-change="columnChange1"
          :before-confirm="beforeConfirm"
          @confirm="handleConfirm8"
        />

        <wd-cell :title="$t('cuo-wu')" is-link :value="showValue9" @click="show9 = true" />
        <!-- error 状态主要体现在 cell 上，这里简单演示 -->
        <wd-col-picker v-model="value9" v-model:visible="show9" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm9" />

        <wd-cell :title="$t('bi-tian')" is-link :value="showValue10" required @click="show10 = true" />
        <wd-col-picker v-model="value10" v-model:visible="show10" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm10" />

        <wd-cell :title="$t('bi-tian-xing-hao-zai-you-ce')" is-link :value="showValue16" required marker-side="after" @click="show16 = true" />
        <wd-col-picker v-model="value16" v-model:visible="show16" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm16" />
      </wd-cell-group>
    </view>
    <demo-block
      :title="
        $t(
          'yi-ban-columnchange-shi-ge-yi-bu-huo-qu-shu-ju-de-cao-zuo-chu-fa-columnchange-zu-jian-hui-you-mo-ren-loading-shu-ju-xiang-ying-hou-guan-bi-loading'
        )
      "
      transparent
    >
      <wd-cell-group>
        <wd-cell :title="$t('xuan-ze-di-zhi')" is-link :value="showValue11" @click="show11 = true" />
      </wd-cell-group>
      <wd-col-picker v-model="value11" v-model:visible="show11" :columns="areaData1" :column-change="columnChange2" @confirm="handleConfirm11" />
    </demo-block>

    <demo-block :title="$t('da-xiao')" transparent>
      <wd-cell-group>
        <wd-cell :title="$t('xuan-ze-di-zhi')" is-link :value="showValue13" size="large" @click="show13 = true" />
      </wd-cell-group>
      <wd-col-picker v-model="value13" v-model:visible="show13" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm13" />
    </demo-block>

    <demo-block :title="$t('zi-ding-yi-xuan-ze-qi')" transparent>
      <view style="margin-left: 15px">
        <view style="margin-bottom: 10px"></view>
        <view style="margin-bottom: 10px">{{ $t('dang-qian-xuan-zhong-xiang-displayvalue') }} {{ displayValue }}</view>

        <wd-button @click="show15 = true">{{ $t('xuan-ze-di-zhi') }}</wd-button>
        <wd-col-picker v-model="value15" v-model:visible="show15" :columns="areaData1" :column-change="columnChange1" @confirm="handleConfirm" />
      </view>
    </demo-block>
    <wd-toast />
  </page-wraper>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useToast } from '@/uni_modules/wot-design-uni'
import type { ColPickerColumnChange } from '@/uni_modules/wot-design-uni/components/wd-col-picker/types'
import { useColPickerData } from '@/hooks/useColPickerData'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { colPickerData, findChildrenByCode } = useColPickerData()
const toast = useToast()

const value1 = ref<any[]>([])
const showValue1 = ref<string>('')
const show1 = ref<boolean>(false)

const value2 = ref<string[]>([])
const showValue2 = ref<string>('')
const show2 = ref<boolean>(false)

const value3 = ref<any[]>(['130000', '130200', '130204'])
const showValue3 = ref<string>('河北省/唐山市/古冶区')
const show3 = ref<boolean>(false)

const value4 = ref<any[]>([])
const showValue4 = ref<string>('')
const show4 = ref<boolean>(false)

const value5 = ref<any[]>([])
const showValue5 = ref<string>('')
const show5 = ref<boolean>(false)

const value6 = ref<any[]>(['130000', '130200', '130204'])
const showValue6 = ref<string>('唐山市-古冶区')
const show6 = ref<boolean>(false)

const value7 = ref<any[]>([])
const showValue7 = ref<string>('')
const show7 = ref<boolean>(false)

const value8 = ref<any[]>([])
const showValue8 = ref<string>('')
const show8 = ref<boolean>(false)

const value9 = ref<any[]>([])
const showValue9 = ref<string>('')
const show9 = ref<boolean>(false)

const value10 = ref<any[]>([])
const showValue10 = ref<string>('')
const show10 = ref<boolean>(false)

const value11 = ref<any[]>([])
const showValue11 = ref<string>('')
const show11 = ref<boolean>(false)

const value13 = ref<any[]>([])
const showValue13 = ref<string>('')
const show13 = ref<boolean>(false)

const value14 = ref<any[]>([])
const showValue14 = ref<string>('')
const show14 = ref<boolean>(false)

const value15 = ref<any[]>([])
const show15 = ref<boolean>(false)

const value16 = ref<any[]>([])
const showValue16 = ref<string>('')
const show16 = ref<boolean>(false)

const displayValue = ref<string>('')

onMounted(async () => {
  toast.loading(t('shu-ju-jia-zai-zhong'))
  await sleep()
  toast.close()
  value2.value = ['150000', '150100', '150121']
  showValue2.value = '内蒙古自治区/呼和浩特市/土默特左旗' // 模拟回显
})

const areaData1 = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])

const areaData2 = ref<any[]>([])
const areaData3 = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '130000')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  }),
  findChildrenByCode(colPickerData, '130200')!.map((item) => {
    return {
      value: item.value,
      label: item.text
    }
  })
])
const areaData4 = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
      disabled: item.value === '140000'
    }
  })
])
const areaData5 = ref<any[]>([
  colPickerData.map((item) => {
    return {
      value: item.value,
      label: item.text,
      disabled: item.value === '140000',
      tip:
        item.value === '140000'
          ? t('gai-di-qu-wu-huo-zan-shi-wu-fa-xuan-ze')
          : item.value === '150000'
          ? t('gai-di-qu-pei-song-shi-jian-ke-neng-jiao-chang')
          : ''
    }
  })
])

const columnChange1: ColPickerColumnChange = ({ selectedItem, resolve, finish }) => {
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}

const columnChange: ColPickerColumnChange = async ({ selectedItem, resolve, finish }) => {
  await sleep(0.3)
  const areaData = findChildrenByCode(colPickerData, selectedItem.value)
  if (areaData && areaData.length) {
    resolve(
      areaData.map((item) => {
        return {
          value: item.value,
          label: item.text
        }
      })
    )
  } else {
    finish()
  }
}

const columnChange2: ColPickerColumnChange = ({ selectedItem, resolve, finish }) => {
  setTimeout(() => {
    if (Math.random() > 0.7) {
      finish(false)
      toast.error(t('shu-ju-qing-qiu-shi-bai-qing-zhong-shi'))
      return
    }
    const areaData = findChildrenByCode(colPickerData, selectedItem.value)
    if (areaData && areaData.length) {
      resolve(
        areaData.map((item) => {
          return {
            value: item.value,
            label: item.text
          }
        })
      )
    } else {
      finish()
    }
  }, 300)
}

const beforeConfirm = (value: (string | number)[], selectedItems: Record<string, any>[], resolve: (isPass: boolean) => void) => {
  if (parseInt(String(value[2])) > 120000) {
    toast.error(t('gai-di-qu-ku-cun-bu-zu'))
    resolve(false)
  } else {
    resolve(true)
  }
}

function sleep(second: number = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000 * second)
  })
}

function handleConfirm({ selectedItems }: any) {
  displayValue.value = selectedItems
    .map((item: any) => {
      return item.label
    })
    .join('')
}

const handleConfirm1 = ({ selectedItems }: any) => {
  showValue1.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm2 = ({ selectedItems }: any) => {
  showValue2.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm3 = ({ selectedItems }: any) => {
  showValue3.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm4 = ({ selectedItems }: any) => {
  showValue4.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm5 = ({ selectedItems }: any) => {
  showValue5.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm6 = ({ selectedItems }: any) => {
  showValue6.value = selectedItems[selectedItems.length - 2].label + '-' + selectedItems[selectedItems.length - 1].label
}

const handleConfirm7 = ({ selectedItems }: any) => {
  showValue7.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm8 = ({ selectedItems }: any) => {
  showValue8.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm9 = ({ selectedItems }: any) => {
  showValue9.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm10 = ({ selectedItems }: any) => {
  showValue10.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm11 = ({ selectedItems }: any) => {
  showValue11.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm13 = ({ selectedItems }: any) => {
  showValue13.value = selectedItems.map((item: any) => item.label).join('/')
}

const handleConfirm16 = ({ selectedItems }: any) => {
  showValue16.value = selectedItems.map((item: any) => item.label).join('/')
}
</script>
<style lang="scss" scoped></style>
