<template>
  <button v-bind="$attrs" :type="props.type" :class="[computedClasses, $attrs.class]" :style="computedStyle"
    :disabled="props.disabled || props.loading" :aria-disabled="props.disabled || props.loading"
    :aria-busy="props.loading" @click="handleClick">
    <template v-if="props.loading">
      <Loader class="animate-spin w-5 h-5" />
    </template>

    <template v-else>
      <!-- Icon Left -->
      <component v-if="props.icon && props.iconPosition === 'left' && !props.iconOnly" :is="props.icon"
        class="w-4 h-4 mr-2" />

      <!-- Label / Slot -->
      <template v-if="props.iconOnly && props.icon">
        <component :is="props.icon" class="w-5 h-5" />
      </template>
      <template v-else>
        <slot v-if="$slots.default">{{ props.label }}</slot>
        <span v-else>{{ props.label }}</span>
      </template>

      <!-- Icon Right -->
      <component v-if="props.icon && props.iconPosition === 'right' && !props.iconOnly" :is="props.icon"
        class="w-4 h-4 ml-2" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Loader } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  label?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'link' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
  loading?: boolean
  disabled?: boolean
  backgroundColor?: string
  fullWidth?: boolean
  icon?: any // Vue component
  iconPosition?: 'left' | 'right'
}>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  iconOnly: false,
  loading: false,
  disabled: false,
  fullWidth: false,
  iconPosition: 'left'
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const computedStyle = computed(() => ({
  backgroundColor: props.backgroundColor || undefined
}))

const computedClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-semibold transition rounded cursor-pointer'

  const variants: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
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
  const widthClass = props.fullWidth ? 'w-full' : ''

  return [
    base,
    variants[props.variant] ?? variants.primary,
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
