<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <div class="vp-ext vp-ext--top">Theme Top Slot</div>
    </template>

    <template #home-hero-after>
      <div class="vp-ext vp-ext--hero">Hero Extra Content</div>
    </template>

    <template #aside-outline-after>
      <div class="vp-ext vp-ext--aside">Aside Extra Content</div>
    </template>

    <template #layout-bottom>
      <div class="vp-ext vp-ext--bottom">Theme Bottom Slot</div>
    </template>
  </Layout>
</template>
