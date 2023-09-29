/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { useNavigate } from "react-router-dom";
import { IAuthContext, ILogin } from '../types/index';
import { api } from '../API/index';
import { useLocalStorage, LOCAL_STORAGE_KEYS } from '../hooks/useLocalStorage';



export const AuthContext = createContext<IAuthContext>({user: null, login: () => {}, logout: () => {}});

function addHoursToDate(objDate: Date, intHours: number) {
  const numberOfMlSeconds = objDate.getTime();
  const addMlSeconds = (intHours * 60) * 60000;
  const newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
  return newDateObj;
}

export const AuthContextProvider = ({children}: any) => {

  const [storedValue, setValue, removeStorage] = useLocalStorage(LOCAL_STORAGE_KEYS.AUTH_PROFILE, {})
  const navigate = useNavigate();

  const login = async (payload: ILogin) => {
    const storage = {
      status: 'ok',
      username: payload.name,
      expired: addHoursToDate(new Date, 1)
    };
    await api.post("/auth/login", payload, {withCredentials: true});
    setValue(storage);
    navigate('/');
  }

  const logout = async () => {
    await api.post('/auth/logout', null, {withCredentials: true})
    removeStorage();
    navigate('/login');
  }

  return (
    <>
      <AuthContext.Provider value={{user: storedValue, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  )


}

export default AuthContext;