<template>
  <page-wraper>
    <view class="page-loading">
      <demo-group title="组件类型">
        <demo-group-item title="类型">
          <view class="demo-row">
            <wd-loading custom-class="loading" />
            <wd-loading custom-class="loading" type="spinner" />
            <wd-loading custom-class="loading" type="dots" />
          </view>
        </demo-group-item>
      </demo-group>

      <demo-group title="组件样式">
        <demo-group-item title="颜色">
          <view class="demo-row">
            <wd-loading custom-class="loading" color="#fa34aa" />
            <wd-loading custom-class="loading" type="spinner" color="#fa34aa" />
            <wd-loading custom-class="loading" type="dots" color="#fa34aa" />
          </view>
        </demo-group-item>
        <demo-group-item title="大小">
          <view class="demo-row">
            <wd-loading custom-class="loading" :size="20" />
            <wd-loading custom-class="loading" type="spinner" :size="20" />
            <wd-loading custom-class="loading" type="dots" :size="20" />
          </view>
          <view class="demo-row">
            <wd-loading custom-class="loading" :size="30" />
            <wd-loading custom-class="loading" type="spinner" :size="30" />
            <wd-loading custom-class="loading" type="dots" :size="30" />
          </view>
          <view class="demo-row">
            <wd-loading custom-class="loading" size="50px" />
            <wd-loading custom-class="loading" type="spinner" size="50px" />
            <wd-loading custom-class="loading" type="dots" size="50px" />
          </view>
        </demo-group-item>
      </demo-group>

      <demo-group title="内容形态">
        <demo-group-item title="显示文字">
          <view class="demo-row">
            <wd-loading custom-class="loading" text="加载中..."></wd-loading>
            <wd-loading custom-class="loading">加载中...</wd-loading>
            <wd-loading custom-class="loading" type="spinner">加载中...</wd-loading>
          </view>
        </demo-group-item>
        <demo-group-item title="水平方向">
          <view class="demo-row">
            <wd-loading custom-class="loading" direction="horizontal" text="加载中..."></wd-loading>
            <wd-loading custom-class="loading" direction="horizontal">加载中...</wd-loading>
            <wd-loading custom-class="loading" direction="horizontal" type="spinner">加载中...</wd-loading>
          </view>
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.page-loading {
  .demo-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(.loading) {
    margin-right: 20px;
  }
}
</style>
