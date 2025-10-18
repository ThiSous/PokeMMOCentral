<script setup lang="ts">
defineProps<{
  src: string
  pokeName: string
  type: string
  ivs:string
  evs:string
  moves:string[]
  nature:string
  itemName: string
  itemImg: string
  hability: string
}>()
const defaultImg = 'https://img.pokemondb.net/artwork/vector/absol.png'
</script>

<template>
  <div class="card-background">
    <h3 class="title"><span :class="type">{{ pokeName || 'Testando' }}</span></h3>
    <img class="card-img" :src="src || defaultImg" :alt="pokeName || 'Absol'" />
    <div class="card-infos">
      <p>Item: <img :src="itemImg" :alt="itemName">{{ itemName }}</p>
      <p>Habilidade: {{ hability }}</p>
      <p>Nature: {{nature}}</p><br />
      <p>{{ ivs }}</p><br />
      <p>{{evs}}</p><br />
      <p>{{moves[0]|| 'Vazio'}}</p>
      <p>{{moves[1]|| 'Vazio'}}</p>
      <p>{{moves[2]|| 'Vazio'}}</p>
      <p>{{moves[3]|| 'Vazio'}}</p>
      
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/components/pokemon-card.css';
</style>
