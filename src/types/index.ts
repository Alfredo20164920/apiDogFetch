export interface ILogin {
  name: string,
  email: string
}

export interface IAuthContext {
  user: null | object,
  login: (payload: ILogin) => void
}

export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
}