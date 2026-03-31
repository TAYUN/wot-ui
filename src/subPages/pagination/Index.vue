<template>
  <page-wraper>
    <view class="page-pagination">
      <demo-group title="组件类型" transparent>
        <demo-group-item :title="$t('jiBenYongFa')" no-padding>
          <wd-pagination v-model="page1" :total="total1" @change="handleChange1" />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件变体" transparent>
        <demo-group-item title="按钮风格" no-padding>
          <view class="page-pagination__stack">
            <wd-pagination v-model="page4" :total="total4" button-variant="plain" @change="handleChange4" />
            <wd-pagination v-model="page5" :total="total5" button-variant="dashed" @change="handleChange5" />
            <wd-pagination v-model="page6" :total="total6" button-variant="base" @change="handleChange6" />
          </view>
        </demo-group-item>
        <demo-group-item :title="$t('icon-tu-biao-0')" no-padding>
          <wd-pagination v-model="page2" :total="total2" show-icon @change="handleChange2" />
        </demo-group-item>
        <demo-group-item :title="$t('wen-zi-ti-shi')" no-padding>
          <wd-pagination v-model="page3" :total="total3" :page-size="pageSize3" @change="handleChange3" show-icon show-message />
        </demo-group-item>
      </demo-group>

      <demo-group title="内容形态" transparent>
        <demo-group-item title="自定义插槽" no-padding>
          <wd-pagination v-model="page7" :total="total7" show-message @change="handleChange7">
            <template #prev="{ modelValue }">
              <wd-button :disabled="modelValue <= 1" @click="page7 -= 1" size="small" type="danger">上一页</wd-button>
            </template>
            <template #next="{ modelValue, totalPageNum }">
              <wd-button :disabled="modelValue >= totalPageNum" @click="page7 += 1" size="small" type="danger">下一页</wd-button>
            </template>
            <template #size="{ modelValue, totalPageNum }">
              <view class="custom-pagination__content">
                <text class="custom-pagination__page">{{ modelValue }}</text>
                <text class="custom-pagination__separator">/</text>
                <text class="custom-pagination__total">{{ totalPageNum }}</text>
              </view>
            </template>
            <template #message="{ total }">
              <view class="custom-pagination__message">当前第{{ page7 }}页，共{{ total }}条数据</view>
            </template>
          </wd-pagination>
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const page1 = ref<number>(1)
const total1 = ref<number>(190)
const page2 = ref<number>(1)
const total2 = ref<number>(19)
const page3 = ref<number>(1)
const total3 = ref<number>(160)
const pageSize3 = ref<number>(20)

function handleChange1({ value }: any) {
  console.log(value)
}
function handleChange2({ value }: any) {
  console.log(value)
}
function handleChange3({ value }: any) {
  console.log(value)
}

const page4 = ref<number>(1)
const total4 = ref<number>(190)

function handleChange4({ value }: any) {
  console.log(value)
}

const page5 = ref<number>(1)
const total5 = ref<number>(190)

function handleChange5({ value }: any) {
  console.log(value)
}

const page6 = ref<number>(1)
const total6 = ref<number>(190)

function handleChange6({ value }: any) {
  console.log(value)
}

const page7 = ref<number>(1)
const total7 = ref<number>(190)

function handleChange7({ value }: any) {
  console.log(value)
}
</script>
<style lang="scss" scoped>
.page-pagination {
  :deep(.demo-group-item__content) {
    overflow: hidden;
  }
}

.page-pagination__stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-block {
  margin-right: 0;
}
.custom-pagination__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.custom-pagination__page {
  color: #f00;
}
.custom-pagination__separator {
  margin: 0 5px;
}
.custom-pagination__total {
  color: #00f;
}
.custom-pagination__message {
  margin-top: 10px;
  color: #999;
  text-align: center;
}
</style>
