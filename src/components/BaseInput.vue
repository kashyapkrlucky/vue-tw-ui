<script setup lang="ts">
defineProps<{
  id: string;
  modelValue: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
}>()

const emit = defineEmits(['update:modelValue'])

// Use a type-safe handler
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>
    <input :id="id" :type="type || 'text'" :placeholder="placeholder" :value="modelValue" @input="handleInput"
      autocomplete="on"
      class="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-gray-50 focus:ring-1 focus:ring-primary" />
    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>
