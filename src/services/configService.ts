import { useConfigStore } from '@/stores/config'

export function getConfigFromKey(key: string) {
  const configStore = useConfigStore()
  const keys = key.split('.')
  let obj = configStore.config
  for (let i = 0; i < keys.length; i++) {
    if (obj === null || !obj.hasOwnProperty(keys[i])) {
      throw new Error(`Key ${key} not found in config`)
    }
    // @ts-ignore
    obj = obj[keys[i]]
  }
  return obj
}

export function getStringFromConfig(key: string): string {
  const value = getConfigFromKey(key)
  if (typeof value === 'string') {
    return value
  } else {
    throw new Error(`Value at key ${key} is not a string`)
  }
}

export function getNumberFromConfig(key: string): number {
  const value = getConfigFromKey(key)
  if (typeof value === 'number') {
    return value
  } else {
    throw new Error(`Value at key ${key} is not a number`)
  }
}
