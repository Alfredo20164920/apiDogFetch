/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react';
import { api } from '../API/index';
import { DataProp } from '../types/index';

export interface IFilterCtx {
  filterDogs: string[] | null | undefined
  totalDogs: number | undefined
  filters: FilterQuery | undefined
  setFilter: (c: FilterQuery) => void
}

export interface FilterQuery {
  breeds?: string[] | undefined,
  from?: number,
}

export const FilterContext = createContext<IFilterCtx>({filterDogs: [], totalDogs: 0,filters: {} ,setFilter: () => {}});

export const FilterContextProvider = ({children} :any) => {
  // const { filterDogs } = useContext(FilterContext);
  const [dogsIds, setDogsIds] = useState<DataProp>({})
  const [filterOptions, setFilterOptions] = useState<FilterQuery>();

  async function getDogsFiltered (payload?: FilterQuery) {
    await api.get("/dogs/search", {params: {breeds: payload?.breeds, from: payload?.from}})
      .then( resp => {
        setFilterOptions(payload);
        setDogsIds(resp.data)
      })
      .catch(e => console.log(e));
  }
  
  return (
    <>
      <FilterContext.Provider 
        value={{
          filterDogs: dogsIds.resultIds, 
          totalDogs: dogsIds.total, 
          filters: filterOptions,
          setFilter: getDogsFiltered
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  )
}

export default FilterContext;
