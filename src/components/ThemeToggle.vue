<script setup lang="ts">
import { theme } from '@/assets/styles/components/themes'

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggleTheme">
    <i :class="theme === 'light' ? 'fa-solid fa-lightbulb' : 'fa-regular fa-lightbulb'"></i>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  background-color: var(--background-color);
  color: var(--color-text);
}
</style>
