<template>
  <div class="flex flex-col">
    <header>
      <nav role="tablist" class="flex border-b border-gray-400 select-none">
        <button v-for="tab in tabs" :key="tab.name" role="tab" :aria-selected="currentTab.name === tab.name"
          :tabindex="currentTab.name === tab.name ? 0 : -1" @click="setTab(tab)"
          @keydown.enter.space.prevent="setTab(tab)" :class="tabClass(tab)">
          <component v-if="(type === 2 || type === 3) && tab.icon" :is="tab.icon" :class="iconClass"
            aria-hidden="true" />
          <span>{{ tab.name }}</span>
        </button>
      </nav>
    </header>

    <section role="tabpanel" tabindex="0"
      class="p-6 border border-t-0 border-gray-400 bg-white rounded-b-md min-h-[150px]" v-html="currentTab.content"
      :aria-labelledby="`tab-${currentTab.name}`" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, defineProps } from 'vue'

interface Tab {
  name: string
  content: string
  icon?: any
}

const props = defineProps<{
  tabs: Tab[]
  type: 1 | 2 | 3
}>()

const currentTab = ref<Tab>(props.tabs[0])

const setTab = (tab: Tab) => {
  currentTab.value = tab
}

watch(
  () => props.tabs,
  (newTabs) => {
    if (!newTabs.find((t) => t.name === currentTab.value.name)) {
      currentTab.value = newTabs[0]
    }
  }
)

const tabClass = (tab: Tab) => {
  const base =
    'flex items-center gap-2 p-3 transition-colors duration-300 ease-in-out focus:outline-none cursor-pointer select-none'

  if (props.type === 1) {
    return [
      base,
      'flex-1 justify-center',
      currentTab.value.name === tab.name
        ? 'border-b-2 border-red-600 text-red-600 font-semibold'
        : 'text-gray-600 hover:text-red-600',
    ]
  }

  if (props.type === 2) {
    return [
      base,
      'justify-start',
      currentTab.value.name === tab.name
        ? 'border-b-2 border-red-600 text-red-600 font-semibold'
        : 'text-gray-600 hover:text-red-600',
    ]
  }

  // type 3: pills style tabs
  return [
    base,
    'justify-center rounded-full px-5 py-2 m-1',
    currentTab.value.name === tab.name
      ? 'bg-red-600 text-white shadow-lg'
      : 'bg-gray-200 text-gray-700 hover:bg-red-100',
  ]
}

const iconClass = props.type === 3 ? 'w-4 h-4' : 'w-5 h-5'
</script>
