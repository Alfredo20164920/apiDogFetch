/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useContext } from 'react';
import { api } from '../API/index';

export interface IFilterCtx {
  filterDogs: string[] | null | undefined
  setFilter: (c: FilterQuery) => void
}

export interface FilterQuery {
  breeds?: string[],
}

export const FilterContext = createContext<IFilterCtx>({filterDogs: [], setFilter: () => {}});

export const FilterContextProvider = ({children} :any) => {
  const { filterDogs } = useContext(FilterContext);
  const [dogsIds, setDogsIds] = useState( () => {
    if(!filterDogs) return []

    getDogsFiltered();
  })
  async function getDogsFiltered (payload?: FilterQuery) {
    await api.get("/dogs/search", {params: payload})
      .then( resp => {
        setDogsIds(resp.data?.resultIds)
      })
      .catch(e => console.log(e));
  }
  return (
    <>
      <FilterContext.Provider value={{filterDogs: dogsIds, setFilter: getDogsFiltered}}>
        {children}
      </FilterContext.Provider>
    </>
  )
}

export default FilterContext;
