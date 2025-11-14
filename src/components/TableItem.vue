<script setup lang="ts">
import { Berry } from '@/scripts/BerryCalculator'
import Decimal from 'decimal.js'
import { onMounted } from 'vue'

const props = defineProps<{
  berry: Berry
}>()
function formatNumberBR(value: Decimal) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value.toNumber())
}

const berryValue = defineModel<Decimal>('berryValue')

onMounted(() => {
  if (!berryValue.value) {
    berryValue.value = new Decimal(props.berry.value)
  }
})

const emit = defineEmits<{
  (e: 'update', value: Berry): void
}>()

function updateValue(event: Event) {
  const value = new Decimal((event.target as HTMLInputElement).value || 0)
  const berry = {
    ...props.berry,
    value: value,
  }
  emit('update', berry)
}
</script>

<template>
  <div class="table-item">
    <p>{{ berry.name }}</p>
    <input
      @keydown.enter="updateValue"
      value="{{berry.value}}"
      type="number"
      v-model="berryValue"
    />
    <!--<p>{{ berry.value }}</p>-->
    <p>{{ berry.quantity }}</p>
    <p>{{ berry.seedMix[0]?.join(', ') ?? '' }}</p>
    <p>{{ formatNumberBR(berry.dailyProfit) }}</p>
    <p>{{ formatNumberBR(berry.npcTotalProfit) }}</p>
    <p>{{ berry.time }} Hrs</p>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/table-item.css';
</style>
