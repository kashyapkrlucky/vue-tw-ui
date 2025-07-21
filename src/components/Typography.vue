<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'caption' | 'error' | 'label'
  align?: 'left' | 'center' | 'right' | 'justify'
  color?: string
}>(), {
  variant: 'p',
  align: 'left'
})

const tag = computed(() => {
  const map: Record<string, string> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    caption: 'span',
    error: 'div',
    label: 'label',
    small: 'small'
  }
  return map[props.variant] || 'p'
})

const classes = computed(() => {
  const variants: Record<string, string> = {
    h1: 'text-3xl font-bold text-gray-900',
    h2: 'text-2xl font-semibold text-gray-600',
    h3: 'text-xl font-semibold text-gray-700',
    p: 'text-base text-gray-800',
    span: 'text-base text-gray-600',
    caption: 'text-sm text-gray-400',
    error: 'text-sm text-red-600',
    label: 'text-sm font-medium text-gray-500',
    small: 'text-xs text-gray-500'
  }

  const alignClass = `text-${props.align}`
  const customColor = props.color || ''

  return [variants[props.variant] ?? variants.p, alignClass, customColor]
})
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
