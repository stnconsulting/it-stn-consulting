// src/stores/useUiStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isContactModalOpen = ref(false)

  function openContactModal() {
    isContactModalOpen.value = true
  }

  return { isContactModalOpen, openContactModal }
})