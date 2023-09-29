export interface ILogin {
  name: string,
  email: string
}

export interface IDataStorage {
  status: string,
  username: string,
  createAt: Date,
}

export interface IAuthContext {
  user: null | IDataStorage,
  login: (payload: ILogin) => void
  logout: () => void
}

export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}

export type DataProp = {
  next?: string,
  prev?: string,
  resultIds?: string[],
  total?: number
}