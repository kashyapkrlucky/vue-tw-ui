<script setup lang="ts">
import { computed } from 'vue'
import { Loader } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  label?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'outline' | 'ghost' | 'link' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
  loading?: boolean
  disabled?: boolean
  backgroundColor?: string
  fullWidth?: boolean
  color?: string // Tailwind color class e.g. 'text-blue-600'
  outline?: boolean
  icon?: any
  iconPosition?: 'left' | 'right'
}>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  iconOnly: false,
  loading: false,
  disabled: false,
  fullWidth: false,
  iconPosition: 'left',
  outline: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const computedStyle = computed(() => ({
  backgroundColor: props.backgroundColor || undefined
}))

const iconSizeClass = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  return sizes[props.size] ?? 'w-5 h-5'
})

const computedClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium transition rounded-md cursor-pointer focus:outline-none'

  const variants: Record<string, string> = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    info: 'bg-blue-500 text-white hover:bg-blue-600',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600',
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
  const widthClass = props.fullWidth ? 'w-full' : ''

  let variantClass = variants[props.variant] ?? variants.primary

  if (props.outline) {
    // Outline button: ensure a border-* class. If user passed text-*, convert to border-*
    const provided = props.color || ''
    const borderColor = provided.startsWith('border-')
      ? provided
      : provided.startsWith('text-')
        ? provided.replace('text-', 'border-')
        : provided.startsWith('bg-')
          ? provided.replace('bg-', 'border-')
          : 'border-gray-400'
    const textColor = provided.startsWith('text-') ? provided : 'text-black'
    variantClass = `bg-transparent ${borderColor} ${textColor} hover:bg-gray-50`
  } else if (props.color) {
    // Solid/ghost/link variants overridden by color: accept bg-* or text-*; default sensible pairing
    const provided = props.color
    if (provided.startsWith('bg-')) {
      // Keep given background, default text to white for contrast
      variantClass = `${provided} text-white hover:brightness-110`
    } else if (provided.startsWith('text-')) {
      // Only text color override; keep neutral background
      variantClass = `bg-gray-100 ${provided} hover:bg-gray-200`
    } else {
      // Fallback: apply as-is and hope it's a valid utility
      variantClass = `${provided}`
    }
  }

  return [
    base,
    variantClass,
    sizes[props.size] ?? sizes.md,
    disabledClass,
    widthClass
  ]
})

const handleClick = (e: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <button v-bind="$attrs" :type="props.type" :class="[computedClasses, $attrs.class]" :style="computedStyle"
    :disabled="props.disabled || props.loading" :aria-disabled="props.disabled || props.loading"
    :aria-busy="props.loading" @click="handleClick">

    <template v-if="props.loading">
      <Loader :class="iconSizeClass + ' animate-spin'" />
    </template>

    <template v-else>
      <component v-if="props.icon && props.iconPosition === 'left' && !props.iconOnly" :is="props.icon"
        :class="iconSizeClass + ' mr-2'" />

      <template v-if="props.iconOnly && props.icon">
        <component :is="props.icon" :class="iconSizeClass" />
      </template>
      <template v-else>
        <slot v-if="$slots.default">{{ props.label }}</slot>
        <span v-else>{{ props.label }}</span>
      </template>

      <component v-if="props.icon && props.iconPosition === 'right' && !props.iconOnly" :is="props.icon"
        :class="iconSizeClass + ' ml-2'" />
    </template>
  </button>
</template>
