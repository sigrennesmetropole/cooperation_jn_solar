import { useDistrictStore } from '@/stores/districtInformations'
import { apiIrisService } from '@/services/api-code-iris'
import { apiEnedisDistrictService } from '@/services/api-enedis-district'
import { useAddressStore } from '@/stores/address'

async function gettingIrisCode(lat: string, lon: string) {
  const irisCode = await apiIrisService.getCodeIris(lat, lon)
  return irisCode
}

async function gettingDistrictDatas(codeIris: number) {
  const districtDatas = await apiEnedisDistrictService.getDistrictDatas(
    codeIris
  )
  return districtDatas
}

export async function getDistrictDatas() {
  const addressStore = useAddressStore()
  const districtStore = useDistrictStore()
  const irisCode = await gettingIrisCode(
    addressStore.latitude.toString(),
    addressStore.longitude.toString()
  )
  if (irisCode === null || irisCode == 0) {
    return
  }
  districtStore.setDistrictIrisCode(irisCode)

  const districtDatas = await gettingDistrictDatas(irisCode)
  districtStore.setDistrictProduction(districtDatas.totalProduction)
  districtStore.setDistrictNumberInstallations(
    districtDatas.totalPhotovoltaicSites
  )
}
