import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useEnedisStore = defineStore('enedisStore', () => {
  const isEnedisRedirection: Ref<boolean> = ref(false)

  function setIsEnedisRedirection(newValue: boolean) {
    isEnedisRedirection.value = newValue
  }

  return {
    isEnedisRedirection,
    setIsEnedisRedirection,
  }
})
