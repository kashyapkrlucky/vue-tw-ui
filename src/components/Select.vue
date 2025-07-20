<template>
  <div class="space-y-1 w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {{ label }}
    </label>

    <select v-bind="$attrs" :id="id" :disabled="disabled" :value="modelValue" @change="handleChange"
      class="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string | number
  label: string
}

const props = withDefaults(defineProps<{
  id: string
  modelValue: string | number
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  options: Option[]
}>(), {
  disabled: false,
  placeholder: 'Select an option'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>
