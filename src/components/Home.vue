<script setup lang="ts">
import ExpandableSection from './ExpandableSection.vue'
import { computed } from 'vue'
import { theme } from '@/assets/styles/components/themes'

// Computa o caminho da imagem conforme o tema
const themeImage = computed(() =>
  theme.value === 'dark'
    ? new URL('@/assets/images/banner.png', import.meta.url).href
    : new URL('@/assets/images/banner-light.png', import.meta.url).href,
)
</script>

<template>
  <div class="banner">
    <img :src="themeImage" alt="PokeMMOBanner" />
  </div>
  <div class="background">
    <h1 class="title">Bem-vindo ao PokeMMO Central</h1>
    <h2 class="title">Escolha a sua seção:</h2>
    <div class="expandable-label">
      <img
        class="gym-symbol"
        src="https://play.pokemonshowdown.com/sprites/trainers/brock.png"
        alt="Brock Sprite"
      /><ExpandableSection openLabel="▼ Gym Rerun" closeLabel="▲ Fechar guias">
        <h2>Guia para Iniciantes</h2>
        <p>
          Aqui você vai aprender o básico sobre como começar sua jornada, capturar pokémons e
          explorar as regiões.
        </p>
        <ul>
          <li>Como obter a Pokédex</li>
          <li>Primeiras batalhas</li>
          <li>Como funciona o sistema de níveis</li>
        </ul>
      </ExpandableSection>
    </div>

    <ExpandableSection>
      <p>Outro assunto</p>
    </ExpandableSection>
  </div>
</template>

<style>
@import '@/assets/styles/components/home.css';
</style>
