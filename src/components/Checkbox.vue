<template>
  <div class="flex items-start space-x-2">
    <input v-bind="$attrs" type="checkbox" :id="id" :checked="modelValue" :disabled="disabled" @change="handleChange"
      class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed" />

    <div class="flex flex-col">
      <label v-if="label" :for="id" class="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
        {{ label }}
      </label>
      <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string
  modelValue: boolean
  label?: string
  error?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>
