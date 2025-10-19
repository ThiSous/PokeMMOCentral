<script setup lang="ts">
defineProps<{
  pokeName: string
  pokeType: string
}>()
</script>

<template>
      <img
        :src="'https://img.pokemondb.net/sprites/black-white/anim/normal/'+pokeName.toLowerCase() +'.gif'"
        :alt="pokeName"
      /><span :class="pokeType">{{ pokeName.charAt(0).toLocaleUpperCase()+pokeName.slice(1).toLowerCase() }}</span>
</template>

<style scoped>
@import '@/assets/styles/components/pokeNameImg.css';
@import '@/assets/styles/components/pokemon-card.css';
</style>
