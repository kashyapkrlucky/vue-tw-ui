<script setup lang="ts">
import { computed } from 'vue'
import { Loader } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
  loading?: boolean
  disabled?: boolean
}>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  iconOnly: false,
  loading: false,
  disabled: false
})

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold transition rounded cursor-pointer'

  const variants: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    warning: 'bg-yellow-400 text-black hover:bg-yellow-500',
    outline: 'border border-gray-400 text-black hover:bg-gray-100',
    ghost: 'bg-transparent text-black hover:bg-gray-100',
    link: 'text-blue-500 underline hover:text-blue-700'
  }

  const sizes: Record<string, string> = {
    sm: props.iconOnly ? 'p-2 text-sm' : 'px-3 py-1 text-sm',
    md: props.iconOnly ? 'p-2.5 text-base' : 'px-4 py-2 text-base',
    lg: props.iconOnly ? 'p-3 text-lg' : 'px-5 py-3 text-lg'
  }

  const disabledClass = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : ''

  return [base, variants[props.variant] ?? variants.primary, sizes[props.size], disabledClass]
})
</script>

<template>
  <button :type="props.type" :class="classes" :disabled="props.disabled || props.loading"
    :aria-disabled="props.disabled || props.loading">
    <template v-if="props.loading">
      <Loader class="animate-spin w-5 h-5" />
    </template>

    <template v-else>
      <slot />
    </template>
  </button>
</template>
