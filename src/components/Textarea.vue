<template>
  <div class="space-y-1 w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>

    <textarea v-bind="$attrs" :id="id" :placeholder="placeholder" :disabled="disabled" :value="modelValue"
      @input="handleInput" rows="4"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"></textarea>

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string
  modelValue: string
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement | null
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>
