import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { View } from '@/model/views.model'

export const useViewsStore = defineStore('views', () => {
  const currentView: Ref<View | null> = ref(null)
  const previousRoute: Ref<string | null> = ref(null)

  function setCurrentView(view: View) {
    currentView.value = view
  }

  return { currentView, previousRoute, setCurrentView }
})
