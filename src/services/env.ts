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
  console.log('getUrlBackOffice')
  console.log('import.meta', import.meta)
  console.log('import.meta.env', import.meta.env)
  console.log(
    'import.meta.env.VITE_URL_BACKOFFICE',
    import.meta.env.VITE_URL_BACKOFFICE
  )
  const envVar = await import.meta.env
  const url = envVar.VITE_URL_BACKOFFICE
  return url
}

export async function getEnedisSandboxPrm() {
  const envVar = await import.meta.env
  const prm = envVar.VITE_ENEDIS_SANDBOX_PRM
  return prm
}
