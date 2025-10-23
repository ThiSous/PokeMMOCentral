<script setup lang="ts">
import TableItem from '@/components/TableItem.vue'
import { start, Berry } from '@/scripts/BerryGuide'
import { onMounted, ref } from 'vue'

const berryList = ref<Berry[]>([])

onMounted(async () => {
  const berries = await start()
  berryList.value = berries
  console.log(berryList.value)
})
</script>

<template>
  <div class="background">
    <div class="table">
      <div class="table-header">
        <p>Berry</p>
        <p>Sementes</p>
        <p>Lucro total</p>
        <p>Lucro diário</p>
      </div>
      <TableItem v-for="(berry, index) in berryList" :key="berry.id" :berry="berry" :class="index % 2 === 0 ? 'bg-even' : 'bg-odd'" />
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/berry-guide.css';
</style>
