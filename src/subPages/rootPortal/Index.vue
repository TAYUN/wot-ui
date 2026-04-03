<template>
  <page-wraper :demo-config="{ transparent: true }" show-dark-mode>
    <view class="page-root-portal">
      <demo-group title="组件类型">
        <demo-group-item :title="$t('ji-chu-yong-fa')">
          <wd-button type="primary" @click="showBasic = true">{{ $t('xian-shi-ji-ben-tan-chuang') }}</wd-button>
        </demo-group-item>
      </demo-group>

      <demo-group title="特殊样式">
        <demo-group-item title="与弹层组件配合使用" no-padding>
          <wd-cell title="选择商品分类" :value="selectedLabel" is-link @click="showPicker = true" />
          <wd-select-picker v-model="selectedValues" v-model:visible="showPicker" :columns="columns1" root-portal @confirm="handlePickerConfirm" />
        </demo-group-item>
      </demo-group>

      <demo-group title="使用注意">
        <demo-group-item title="适用场景">
          <view class="page-root-portal__tips">
            <text class="page-root-portal__tip">适用于弹窗、弹出层等 fixed 定位容易失效的场景。</text>
            <text class="page-root-portal__tip">建议只在需要脱离父层级或避免被 transform、overflow 影响时开启。</text>
          </view>
        </demo-group-item>
      </demo-group>

      <wd-root-portal v-if="showBasic">
        <view class="basic-modal">
          <view class="basic-modal-content">
            <text class="basic-modal-title">{{ $t('ji-ben-tan-chuang') }}</text>
            <text class="basic-modal-text">{{ $t('zhe-shi-yi-ge-shi-yong-root-portal-de-ji-ben-tan-chuang-shi-li') }}</text>
            <wd-button type="primary" @click="showBasic = false">{{ $t('guan-bi') }}</wd-button>
          </view>
        </view>
      </wd-root-portal>
    </view>
  </page-wraper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const selectedValues = ref<string[]>([])
const selectedLabel = ref('')
const showPicker = ref(false)
const columns1 = ref<Record<string, any>[]>([
  {
    value: '101',
    label: t('nan-zhuang')
  },
  {
    value: '102',
    label: t('she-chi-pin')
  },
  {
    value: '103',
    label: t('nv-zhuang')
  },
  {
    value: '104',
    label: t('xie-xue')
  },
  {
    value: '105',
    label: t('nei-yi-pei-shi')
  },
  {
    value: '106',
    label: t('xiang-bao')
  },
  {
    value: '107',
    label: t('mei-zhuang-hu-fu')
  },
  {
    value: '108',
    label: t('ge-xing-qing-jie')
  },
  {
    value: '109',
    label: t('zhong-biao-zhu-bao')
  },
  {
    value: '110',
    label: t('shou-ji')
  },
  {
    value: '111',
    label: t('shu-ma')
  },
  {
    value: '112',
    label: t('dian-nao-ban-gong')
  }
])
const showBasic = ref(false)

function handlePickerConfirm({ value }: { value: string[] }) {
  selectedLabel.value = columns1.value
    .filter((item) => value.includes(item.value))
    .map((item) => item.label)
    .join('、')
}
</script>

<style lang="scss" scoped>
.page-root-portal__tips {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.page-root-portal__tip {
  display: block;
  color: #666;
  font-size: 14px;
  line-height: 22px;
}

.basic-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.basic-modal-content {
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 280px;
  text-align: center;
}

.basic-modal-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  display: block;
}

.basic-modal-text {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  display: block;
}
</style>
