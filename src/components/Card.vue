<script setup lang="ts">
const props = withDefaults(defineProps<{
  noPadding?: boolean
  noShadow?: boolean
}>(), {
  noPadding: false,
  noShadow: false
})
</script>

<template>
  <div :class="[
    'rounded-xl bg-white dark:bg-gray-800',
    props.noPadding ? '' : 'p-4',
    props.noShadow ? '' : 'shadow-sm'
  ]">
    <slot />
  </div>
</template>
