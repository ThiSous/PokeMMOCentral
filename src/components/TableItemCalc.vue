<script setup lang="ts">
import { Berry } from '@/scripts/BerryCalculator'
import Decimal from 'decimal.js'

defineProps<{
  berry: Berry
}>()
function formatNumberBR(value: Decimal) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value.toNumber())
}

</script>

<template>
  <div class="table-item">
    <p>{{ berry.name }}</p>
    <p>{{ berry.value }}</p>
    <p>{{ berry.seedMix[0]?.join(', ') ?? '' }}</p>
    <p>{{ formatNumberBR(berry.dailyProfit) }}</p>
    <p>{{ formatNumberBR(berry.npcDailyProfit) }}</p>
    <p>{{ berry.time }} Hrs</p>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/table-item-calculator.css';
</style>
