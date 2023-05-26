import { useConfigStore } from '@/stores/config'

export function getConfigFromKey(key: string) {
  const configStore = useConfigStore()
  const keys = key.split('.')
  if (configStore.config === null) {
    configStore.setDefaultConfig()
  }
  let obj = configStore.config
  for (let i = 0; i < keys.length; i++) {
    if (obj === null || !obj.hasOwnProperty(keys[i])) {
      return null
    }
    // @ts-ignore
    obj = obj[keys[i]]
  }
  return obj
}
