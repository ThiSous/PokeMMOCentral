// src/components/useExpandableSection.ts
import { ref, computed } from 'vue'

export interface ExpandableProps {
  openLabel?: string
  closeLabel?: string
}

export function ExpandableSection(props: ExpandableProps) {
  const isOpen = ref(false)
  const toggle = () => (isOpen.value = !isOpen.value)

  const openLabel = computed(() => props.openLabel || '▼ Mostrar conteúdo')
  const closeLabel = computed(() => props.closeLabel || '▲ Fechar')

  return {
    isOpen,
    toggle,
    openLabel,
    closeLabel,
  }
}
