<script setup lang="ts">
defineProps<{
    region:string
}>()
</script>

<template>
  <div class="regionAdvisor">
    <h1>Vá para {{ region }}</h1>
    </div>
</template>

<style scoped>
@import '@/assets/styles/components/regionAdvisor.css';
</style>
