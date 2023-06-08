export async function getEnv() {
  const envVar = await import.meta.env
  const name = envVar.VITE_ENV
  return name
}

export async function isDev() {
  const envVar = await import.meta.env
  const dev = envVar.DEV
  return dev
}

export async function isProd() {
  const envVar = await import.meta.env
  const prod = envVar.PROD
  return prod
}

export async function getUrlBackOffice() {
  const envVar = await import.meta.env
  const url = envVar.VITE_URL_BACKOFFICE
  return url
}

export async function getEnedisSandboxPrm() {
  const envVar = await import.meta.env
  const prm = envVar.VITE_ENEDIS_SANDBOX_PRM
  return prm
}
