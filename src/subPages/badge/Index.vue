<template>
  <page-wraper>
    <demo-group title="组件类型">
      <demo-group-item :title="$t('zhanShiXiaoXiShuLiang')">
        <wd-badge custom-class="badge" :value="12">
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="3" bg-color="green">
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="1" type="primary">
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="2" type="warning">
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-0') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="1" type="success">
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="2" type="info">
          <wd-button :round="false" type="danger" size="small">{{ $t('huiFu-1') }}</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>

    <demo-group title="组件状态">
      <demo-group-item :title="$t('dianZhuangLeiXing')">
        <wd-badge custom-class="badge" is-dot>{{ $t('shuJuChaXun') }}</wd-badge>
        <wd-badge custom-class="badge" is-dot>
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-4') }}</wd-button>
        </wd-badge>
      </demo-group-item>
      <demo-group-item :title="$t('xianShi_0Zhi')">
        <wd-badge custom-class="badge" :value="0" show-zero>
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="0">
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-5') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="0" is-dot>
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-6') }}</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>

    <demo-group title="组件变体">
      <demo-group-item title="徽标形状">
        <wd-badge custom-class="badge" :value="12" shape="square">
          <wd-button :round="false" type="info" size="small">方形</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="12" shape="bubble">
          <wd-button :round="false" type="info" size="small">气泡</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>

    <demo-group title="组件样式">
      <demo-group-item :title="$t('keDingYiXiaoXiZuiDaZhi')">
        <wd-badge custom-class="badge" :value="200" :max="99">
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="200" :max="10">
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-2') }}</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>

    <demo-group title="特殊样式">
      <demo-group-item title="描边徽标">
        <wd-badge custom-class="badge" :value="12" border>
          <wd-button :round="false" type="primary" size="small">描边</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="1" border type="primary">
          <wd-button :round="false" type="danger" size="small">描边</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" :value="999" border type="warning">
          <wd-button :round="false" type="success" size="small">描边</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>

    <demo-group title="内容形态">
      <demo-group-item :title="$t('ziDingYiNeiRong')">
        <wd-badge custom-class="badge" value="new">
          <wd-button :round="false" type="info" size="small">{{ $t('pingLun') }}</wd-button>
        </wd-badge>
        <wd-badge custom-class="badge" value="hot">
          <wd-button :round="false" type="info" size="small">{{ $t('huiFu-3') }}</wd-button>
        </wd-badge>
      </demo-group-item>
    </demo-group>
  </page-wraper>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
:deep(.badge) {
  margin: 0 30px 20px 0;
  display: inline-block;
}
</style>
