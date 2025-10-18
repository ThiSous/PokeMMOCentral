<template>
  <section class="expandable">
    <button class="expand-btn" @click="toggle">
      <slot name="header">
        {{ isOpen ? closeLabel : openLabel }}
      </slot>
    </button>

    <transition name="expand">
      <div v-if="isOpen" class="expand-content">
        <slot />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { ExpandableSection, type ExpandableProps } from './ExpandableSection'

const props = defineProps<ExpandableProps>()
const { isOpen, toggle, openLabel, closeLabel} = ExpandableSection(props)
</script>

<style scoped>
@import '@/assets/styles/components/expandableSection.css';
</style>
