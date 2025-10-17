<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'
import { computed } from 'vue'
import { theme } from '@/assets/styles/components/themes'

// Computa o caminho da imagem conforme o tema
const themeImage = computed(() =>
  theme.value === 'dark'
    ? new URL('@/assets/images/noBgWhite.png', import.meta.url).href
    : new URL('@/assets/images/noBgBlack.png', import.meta.url).href,
)
</script>

<template>
  <div class="nav">
    <img :src="themeImage" />
    <div class="nav-items">
      <router-link class="items" to="/">Home</router-link>
      <router-link class="items" to="/sobre">Sobre</router-link>
      <ThemeToggle />
    </div>
  </div>
</template>

<style>
@import '@/assets/styles/components/nav.css';
</style>
