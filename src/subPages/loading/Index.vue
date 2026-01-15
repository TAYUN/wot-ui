<template>
  <page-wraper>
    <demo-block title="基础用法">
      <view class="flex">
        <wd-loading custom-class="loading" />
        <wd-loading custom-class="loading" type="spinner" />
        <wd-loading custom-class="loading" type="dots" />
      </view>
    </demo-block>

    <demo-block :title="$t('spinner-lie-xing')">
      <view class="flex">
        <wd-loading type="spinner" custom-class="loading" />
      </view>
    </demo-block>

    <demo-block :title="$t('xiu-gai-yan-se')">
      <view class="flex">
        <wd-loading custom-class="loading" color="#fa34aa" />
        <wd-loading custom-class="loading" type="spinner" color="#fa34aa" />
        <wd-loading custom-class="loading" type="dots" color="#fa34aa" />
      </view>
    </demo-block>

    <demo-block title="修改大小">
      <view class="flex mb-20">
        <wd-loading custom-class="loading" :size="20" />
        <wd-loading custom-class="loading" type="spinner" :size="20" />
        <wd-loading custom-class="loading" type="dots" :size="20" />
      </view>
      <view class="flex mb-20">
        <wd-loading custom-class="loading" :size="30" />
        <wd-loading custom-class="loading" type="spinner" :size="30" />
        <wd-loading custom-class="loading" type="dots" :size="30" />
      </view>
      <view class="flex">
        <wd-loading custom-class="loading" size="50px" />
        <wd-loading custom-class="loading" type="spinner" size="50px" />
        <wd-loading custom-class="loading" type="dots" size="50px" />
      </view>
    </demo-block>

    <demo-block title="显示文字">
      <view class="flex mb-20">
        <wd-loading custom-class="loading" text="加载中..."></wd-loading>
        <wd-loading custom-class="loading">加载中...</wd-loading>
        <wd-loading custom-class="loading" type="spinner">加载中...</wd-loading>
      </view>
    </demo-block>

    <demo-block title="水平方向">
      <view class="flex mb-20">
        <wd-loading custom-class="loading" direction="horizontal" text="加载中..."></wd-loading>
        <wd-loading custom-class="loading" direction="horizontal">加载中...</wd-loading>
        <wd-loading custom-class="loading" direction="horizontal" type="spinner">加载中...</wd-loading>
      </view>
      <view class="flex my-4">
        <wd-loading type="spinner" custom-class="loading" :size="20" />
        <wd-loading type="spinner" custom-class="loading" :size="30" />
        <wd-loading type="spinner" custom-class="loading" size="50px" />
      </view>
    </demo-block>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
}
.mb-20 {
  margin-bottom: 20px;
}
:deep(.loading) {
  margin-right: 20px;
}
</style>
