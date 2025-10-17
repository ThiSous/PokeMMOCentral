<script setup lang="ts">
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import './assets/base.css'
</script>

<template>
  <main>
    <Nav />
    <router-view />
    <Footer />
  </main>
</template>
