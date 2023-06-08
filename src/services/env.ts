export function isDev() {
  return import.meta.env.DEV
}

export function isProd() {
  return import.meta.env.PROD
}

export function getUrlBackOffice() {
  return import.meta.env.VITE_URL_BACKOFFICE
}

export function getEnedisSandboxPrm() {
  return import.meta.env.VITE_ENEDIS_SANDBOX_PRM
}
