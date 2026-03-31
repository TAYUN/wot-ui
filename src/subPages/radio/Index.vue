<template>
  <page-wraper>
    <view class="page-radio">
      <demo-group title="组件类型">
        <demo-group-item :title="$t('jiBenYongFa')">
          <wd-radio-group v-model="valueBasic" @change="change">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio type="square" :value="3">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
            <wd-radio type="dot" :value="5">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item :title="$t('xiu-gai-xing-zhuang-button-0')">
          <wd-radio-group v-model="valueButton" type="button" @change="change">
            <wd-radio :value="1" placement="right">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
      </demo-group>

      <demo-group title="组件状态">
        <demo-group-item :title="$t('jinYong')">
          <wd-radio-group v-model="valueDisabled" disabled type="dot">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueDisabled" disabled>
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueDisabled" disabled type="button">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueDisabled" disabled type="square">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item title="只读状态">
          <wd-radio-group v-model="valueReadonly" readonly>
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item title="允许取消选中">
          <wd-radio-group v-model="valueAllowUncheck" allow-uncheck @change="change">
            <wd-radio :value="1">支持取消选中</wd-radio>
            <wd-radio :value="2">支持取消选中</wd-radio>
          </wd-radio-group>
        </demo-group-item>
      </demo-group>

      <demo-group title="组件样式">
        <demo-group-item title="图标位置">
          <wd-radio-group v-model="valuePlacement" @change="change">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio type="square" :value="3">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
            <wd-radio type="dot" :value="5">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valuePlacementRight" placement="right" @change="change">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio type="square" :value="3">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
            <wd-radio type="dot" :value="5">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item :title="$t('xiu-gai-xuan-zhong-yan-se')">
          <wd-radio-group v-model="valueCheckedColor" checked-color="#fa4350" @change="change">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueCheckedColorDot" type="dot" checked-color="#fa4350" @change="change">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item title="修改未选中颜色">
          <wd-radio-group v-model="valueUnchecked" unchecked-color="#fa4350" @change="change">
            <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
      </demo-group>

      <demo-group title="特殊样式">
        <demo-group-item :title="$t('radio-de-props-bi-radiogroup-de-you-xian-ji-gao')">
          <wd-radio-group v-model="valuePriority" type="button" disabled checked-color="#fa4350" @change="change">
            <wd-radio :value="1" checked-color="#000" :disabled="false">{{ $t('xuanXiang_1-0') }}</wd-radio>
            <wd-radio :value="2" :disabled="false">{{ $t('xuanXiang_2-0') }}</wd-radio>
            <wd-radio :value="3">{{ $t('xuanXiang_3-0') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item title="结合 Cell 使用">
          <wd-radio-group v-model="valueCell" checked-color="#fa4350" @change="change">
            <wd-cell-group border insert>
              <wd-cell title="单选框 1" clickable @click="valueCell = 1">
                <template #right-icon>
                  <wd-radio :value="1" />
                </template>
              </wd-cell>
              <wd-cell title="单选框 2" clickable @click="valueCell = 2">
                <template #right-icon>
                  <wd-radio :value="2" />
                </template>
              </wd-cell>
            </wd-cell-group>
          </wd-radio-group>
        </demo-group-item>
        <demo-group-item title="自定义图标">
          <wd-radio-group v-model="valueCustom">
            <wd-radio :value="1">
              自定义图标
              <template #icon="{ isChecked }">
                <wd-icon :name="isChecked ? 'star-fill' : 'star'" size="22px" :color="isChecked ? '#fa4350' : '#ccc'" />
              </template>
            </wd-radio>
            <wd-radio :value="2">
              自定义图标
              <template #icon="{ isChecked }">
                <wd-icon :name="isChecked ? 'star-fill' : 'star'" size="22px" :color="isChecked ? '#fa4350' : '#ccc'" />
              </template>
            </wd-radio>
          </wd-radio-group>
        </demo-group-item>
      </demo-group>

      <demo-group title="布局能力">
        <demo-group-item :title="$t('tong-hang-zhan-shi')">
          <wd-radio-group v-model="valueHorizontal" direction="horizontal">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
            <wd-radio :value="3" placement="right">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueHorizontalDot" direction="horizontal" type="dot">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
          <wd-divider dashed></wd-divider>
          <wd-radio-group v-model="valueHorizontalSquare" direction="horizontal" type="square" placement="right">
            <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
            <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
          </wd-radio-group>
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const valueBasic = ref<number>(1)
const valueButton = ref<number>(1)
const valueDisabled = ref<number>(1)
const valueReadonly = ref<number>(1)
const valueAllowUncheck = ref<number>(1)
const valuePlacement = ref<number>(1)
const valuePlacementRight = ref<number>(1)
const valueCheckedColor = ref<number>(1)
const valueCheckedColorDot = ref<number>(1)
const valueUnchecked = ref<number>(1)
const valuePriority = ref<number>(1)
const valueCell = ref<number>(1)
const valueCustom = ref<number>(1)
const valueHorizontal = ref<number>(1)
const valueHorizontalDot = ref<number>(1)
const valueHorizontalSquare = ref<number>(1)

function change(event: { value: string | number | boolean | null }) {
  console.log(event)
}
</script>

<style lang="scss" scoped>
.page-radio {
  :deep(.wd-divider) {
    margin: 12px 0;
  }
}
</style>
