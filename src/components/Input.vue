<template>
  <div class="space-y-1 w-full">
    <label v-if="label" :for="id" class="block text-sm text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>

    <div :class="[
      'relative flex items-center border rounded-md transition bg-white dark:bg-gray-800',
      error ? 'border-red-500' : 'border-gray-300 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary',
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    ]">
      <!-- Prefix Icon -->
      <component v-if="icon && iconPosition === 'left'" :is="icon" class="w-5 h-5 text-gray-400 ml-2" />

      <input v-bind="$attrs" :id="id" :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled"
        @input="handleInput" class="flex-1 bg-transparent border-0 focus:outline-none focus:ring-0 px-3 py-2" />

      <!-- Suffix Icon -->
      <component v-if="icon && iconPosition === 'right'" :is="icon" class="w-5 h-5 text-gray-400 mr-2" />
    </div>

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = withDefaults(defineProps<{
  id: string
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  icon?: any // Vue component
  iconPosition?: 'left' | 'right'
}>(), {
  type: 'text',
  disabled: false,
  iconPosition: 'left'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>
