<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div class="flex items-center space-x-3">
    <span v-if="label" class="text-sm text-gray-700 dark:text-gray-300">{{ label }}</span>
    <button @click="emit('update:modelValue', !modelValue)" :aria-pressed="modelValue" role="switch" :class="[
      'relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary',
      modelValue ? 'bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
    ]" type="button">
      <span :class="[
        'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform',
        modelValue ? 'translate-x-5' : 'translate-x-0'
      ]" />
    </button>
  </div>
</template>
