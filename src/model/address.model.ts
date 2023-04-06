export type AddressRva = {
  addr1: string
  addr2: string
  addr3: string
  building: string
  extension: string
  idaddress: string
  idlane: string
  insee: string
  number: string
  x: string
  y: string
  zipcode: string
}

export type AddressOrganization = {
  id: number
  x?: number
  y?: number
  addr: string
}

export type AddressCommune = {
  insee: string
  lowerCorner: string
  name: string
  name2: string
  nameindex: string
  upperCorner: string
}

export type AddressStreet = {
  fantoir: string
  idlane: string
  insee: string
  lowerCorner: string
  name: string
  name2: string
  name3: string
  name4: string
  nameindex: string
  type: string
  upperCorner: string
}

export type AutoCompletion = {
  addressRva: AddressRva[]
  addressOrganization: AddressOrganization[]
  communes: AddressCommune[]
  streets: AddressStreet[]
}
