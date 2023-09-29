/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const LOCAL_STORAGE_KEYS = {
  FAVORITES_DOGS: "FAVORITES_DOGS",
  AUTH_PROFILE: "AUTH_PROFILE",
};

export const useLocalStorage = (
  key: string,
  initialValue: any
): [any, (any: any) => void, () => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (valueToStore: any) => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const removeStorage = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  return [storedValue, setValue, removeStorage];
};
