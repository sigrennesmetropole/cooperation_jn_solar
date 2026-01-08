import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type View, viewList } from '@/model/views.model'

export const useViewsStore = defineStore('views', () => {
  const currentView: Ref<View> = ref(viewList.home)

  return { currentView }
})
