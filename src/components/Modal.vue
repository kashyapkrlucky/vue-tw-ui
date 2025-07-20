<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('update:modelValue', false)
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})
onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm w-full h-full transition duration-300 ease-in"
        @click.self="emit('update:modelValue', false)" aria-modal="true" role="dialog">
        <div
          class="bg-white dark:bg-gray-900 p-4 border border-gray-100 shadow-md rounded-md min-w-md shadow-xl flex flex-col gap-4">
          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>
