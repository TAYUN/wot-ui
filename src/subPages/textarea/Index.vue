<template>
  <page-wraper>
    <view class="page-textarea">
      <demo-group title="组件类型" transparent>
        <demo-group-item :title="$t('ji-ben-shi-yong')" no-padding>
          <wd-textarea v-model="value1" :placeholder="$t('qing-tian-xie-ping-jia')" />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件状态" transparent>
        <demo-group-item :title="$t('zhi-du')" no-padding>
          <wd-textarea v-model="value8" readonly clearable />
        </demo-group-item>
        <demo-group-item :title="$t('jinYong')" no-padding>
          <wd-textarea v-model="value11" disabled clearable />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件变体" transparent>
        <demo-group-item :title="$t('qing-kong-an-niu-he-zi-shu-xian-zhi')" no-padding>
          <wd-textarea v-model="value2" :maxlength="120" clearable show-word-limit />
        </demo-group-item>
        <demo-group-item :title="$t('you-zhi-qie-ju-jiao-shi-zhan-shi-qing-kong-an-niu')" no-padding>
          <wd-textarea v-model="value14" clear-trigger="focus" :maxlength="120" clearable show-word-limit />
        </demo-group-item>
        <demo-group-item :title="$t('dian-ji-qing-chu-an-niu-shi-bu-zi-dong-ju-jiao')" no-padding>
          <wd-textarea v-model="value15" :focus-when-clear="false" :maxlength="120" clearable show-word-limit />
        </demo-group-item>
        <demo-group-item :title="$t('gao-du-zi-shi-ying')" no-padding>
          <wd-textarea v-model="value3" auto-height clearable />
        </demo-group-item>
      </demo-group>

      <demo-group title="组件样式">
        <demo-group-item title="紧凑布局">
          <wd-textarea v-model="value7" compact :placeholder="$t('qing-tian-xie-ping-jia')" />
        </demo-group-item>
      </demo-group>

      <demo-group title="特殊样式" transparent>
        <demo-group-item title="结合表单使用" no-padding>
          <wd-form :model="formData" border title-width="98px">
            <wd-form-item title="基本用法" prop="basic">
              <wd-textarea v-model="formData.basic" placeholder="请输入" compact />
            </wd-form-item>
            <wd-form-item title="禁用" prop="disabled">
              <wd-textarea v-model="formData.disabled" disabled placeholder="请输入" compact />
            </wd-form-item>
            <wd-form-item title="清空按钮" prop="clearable">
              <wd-textarea v-model="formData.clearable" clearable placeholder="请输入" compact />
            </wd-form-item>
            <wd-form-item title="高度自适应" prop="autoHeight">
              <wd-textarea v-model="formData.autoHeight" auto-height clearable placeholder="请输入" compact />
            </wd-form-item>
            <wd-form-item title="字数限制" prop="limit">
              <wd-textarea v-model="formData.limit" :maxlength="240" show-word-limit clearable compact placeholder="请输入" />
            </wd-form-item>
            <wd-form-item title="必填" prop="required" required>
              <wd-textarea v-model="formData.required" placeholder="请输入" compact />
            </wd-form-item>
            <wd-form-item title="只读" prop="readonly">
              <wd-textarea v-model="formData.readonly" readonly :maxlength="240" show-word-limit placeholder="请输入" compact />
            </wd-form-item>
          </wd-form>
        </demo-group-item>
      </demo-group>
    </view>
  </page-wraper>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const value1 = ref<string>('')
const value2 = ref<string>(t('zhi-chi-qing-kong-he-zi-shu-xian-zhi-de-wen-ben-yu'))
const value3 = ref<string>(t('shu-ru-wen-zi-hou-shu-ru-kuang-gao-du-gen-sui-zi-shu-duo-shao-bian-hua'))
const value7 = ref<string>('')
const value8 = ref<string>(t('zhi-du-zhi-du-zhi-du'))
const value11 = ref<string>(t('jin-yong-jin-yong-jin-yong'))
const value14 = ref<string>('')
const value15 = ref<string>('')

const formData = ref({
  basic: '',
  disabled: t('gai-shu-ru-kuang-jin-yong'),
  clearable: '',
  autoHeight: '',
  limit: '',
  required: '',
  readonly: t('zhi-du-zhi-du-zhi-du-0')
})
</script>
<style lang="scss" scoped>
.page-textarea {
  :deep(.demo-group-item__content) {
    overflow: hidden;
  }
}
</style>
