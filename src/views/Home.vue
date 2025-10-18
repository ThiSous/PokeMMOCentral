<script setup lang="ts">
import ExpandableSection from '../components/ExpandableSection.vue'
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
      />
      <ExpandableSection openLabel="▼ Gym Rerun" closeLabel="▲ Gym Rerun">
        <h2>Six Pillars</h2>
        <p>Six Pillars é um time de médio custo e alto retorno.</p>
        <p>Escolha qual variação irá utilizar:</p>
        <ul>
          <li><router-link to="/Rota-Basica">Rota Básica</router-link></li>
          <li><RouterLink>Rota Padrão</RouterLink></li>
          <li><RouterLink>Rota Técnina</RouterLink></li>
          <li><RouterLink>Rota veterana</RouterLink></li>
        </ul>
        <br />
        <h2>Seven Hells</h2>
        <p>
          Seven Hells é um time de alto custo porém facil de se utilizar, sendo recomendado para
          rotas multi-tela.
        </p>
        <ul>
          <li>Rota Única</li>
        </ul>
      </ExpandableSection>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/styles/views/home.css';
</style>
