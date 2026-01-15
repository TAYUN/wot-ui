<template>
  <page-wraper>
    <demo-block :title="$t('jiBenYongFa')">
      <wd-radio-group v-model="value0" @change="change">
        <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
        <wd-radio type="square" :value="3">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
        <wd-radio type="dot" :value="5">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block title="勾选在右侧">
      <wd-radio-group v-model="value2" @change="change" placement="right">
        <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
        <wd-radio type="square" :value="3">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
        <wd-radio type="dot" :value="5">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block :title="$t('xiu-gai-xing-zhuang-button-0')">
      <wd-radio-group type="button" v-model="value1" @change="change">
        <wd-radio :value="1" placement="right">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block :title="$t('tong-hang-zhan-shi')">
      <wd-radio-group v-model="value5" direction="horizontal">
        <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
        <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
        <wd-radio :value="3" placement="right">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
      </wd-radio-group>
      <wd-divider dashed></wd-divider>
      <wd-radio-group v-model="value6" direction="horizontal" type="dot">
        <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
        <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
      </wd-radio-group>
      <wd-divider dashed></wd-divider>
      <wd-radio-group v-model="value13" direction="horizontal" type="square" placement="right">
        <wd-radio :value="1">{{ $t('dan-xuan-kuang-1') }}</wd-radio>
        <wd-radio :value="2">{{ $t('dan-xuan-kuang-2') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block :title="$t('xiu-gai-xuan-zhong-yan-se')">
      <wd-radio-group v-model="value7" @change="change" checked-color="#fa4350">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
      <wd-divider dashed></wd-divider>
      <wd-radio-group type="dot" v-model="value12" @change="change" checked-color="#fa4350">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block title="修改未选中颜色">
      <wd-radio-group v-model="valueUnchecked" @change="change" unchecked-color="#fa4350">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block :title="$t('jinYong')">
      <wd-radio-group v-model="value1" disabled type="dot">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
      <view class="divider"></view>
      <wd-radio-group v-model="value1" disabled>
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
      <view class="divider"></view>
      <wd-radio-group v-model="value1" disabled type="button">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>

      <view class="divider"></view>
      <wd-radio-group v-model="value1" disabled type="square">
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block title="只读状态">
      <wd-radio-group v-model="valueReadonly" readonly>
        <wd-radio :value="1">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2">{{ $t('xuanXiang_2-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block title="允许取消选中">
      <wd-radio-group v-model="valueAllowUncheck" @change="change" allow-uncheck>
        <wd-radio :value="1">支持取消选中</wd-radio>
        <wd-radio :value="2">支持取消选中</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block :title="$t('radio-de-props-bi-radiogroup-de-you-xian-ji-gao')">
      <wd-radio-group hape="button" disabled checked-color="#fa4350" v-model="value11" @change="change">
        <wd-radio :value="1" checked-color="#000" :disabled="false">{{ $t('xuanXiang_1-0') }}</wd-radio>
        <wd-radio :value="2" :disabled="false">{{ $t('xuanXiang_2-0') }}</wd-radio>
        <wd-radio :value="3">{{ $t('xuanXiang_3-0') }}</wd-radio>
      </wd-radio-group>
    </demo-block>

    <demo-block title="结合Cell使用" transparent>
      <wd-radio-group hape="button" checked-color="#fa4350" v-model="value" @change="change">
        <wd-cell-group border insert>
          <wd-cell title="单选框 1" clickable @click="value = 1">
            <template #right-icon>
              <wd-radio :value="1" />
            </template>
          </wd-cell>
          <wd-cell title="单选框 2" clickable @click="value = 2">
            <template #right-icon>
              <wd-radio :value="2" />
            </template>
          </wd-cell>
        </wd-cell-group>
      </wd-radio-group>
    </demo-block>

    <demo-block title="自定义图标">
      <wd-radio-group v-model="valueCustom1">
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
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<number>(1)
const value0 = ref<number>(1)
const valueAllowUncheck = ref<number>(1)
const value1 = ref<number>(1)
const value2 = ref<number>(1)
const value3 = ref<number>(1)
const value4 = ref<number>(1)
const value5 = ref<number>(1)
const value6 = ref<number>(1)
const value7 = ref<number>(1)
const value8 = ref<number>(1)
const value9 = ref<number>(1)
const value10 = ref<number>(1)
const value11 = ref<number>(1)
const value12 = ref<number>(1)
const value13 = ref<number>(1)
const valueUnchecked = ref<number>(1)
const valueReadonly = ref<number>(1)
const valueCustom1 = ref<number>(1)
const valueCustom2 = ref<number>(1)

function change(e: any) {
  console.log(e)
}
</script>
<style lang="scss" scoped>
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}
.custom-icon {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background: #fa4350;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
