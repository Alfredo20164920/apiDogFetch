import { useContext, useEffect, useState } from 'react';
import { Container } from './styled'
import { api } from '../../API/index';
import FilterContext from '../../context/filter';
import { Dog } from '../../types/index';
import { Card, Pagination } from '../../components';
import { useLocalStorage, LOCAL_STORAGE_KEYS } from '../../hooks/useLocalStorage';

export interface IFilterParams {
  breeds?: string[],
}

const Component = () => {
  const {filterDogs, filters} = useContext(FilterContext);

  const [data, setdata] = useState<Dog[]>([])
  const [storedValue, setValue] = useLocalStorage(LOCAL_STORAGE_KEYS.FAVORITES_DOGS, []);

  useEffect(() => {
    api.post("/dogs", filterDogs, {withCredentials: true})
      .then(res => {
        const {data} = res;
        setdata(data);
      })
      .catch(e => console.log(e));

  }, [filterDogs, filters])

  const saveFavorite = (id: string) => {
    if(storedValue.length === 0) {
      setValue([id]);
    }
    else {
      const isFavorite = storedValue.includes(id);
      if(!isFavorite) {
        setValue([...storedValue, id])
      } else {
        const newStorageItem = storedValue.filter((savedId: string) => savedId !== id);
        setValue(newStorageItem)
      }
    }
  }
  
  return (
    <Container>
      {data.map((item, index: number) => <Card key={index} data={item} setFavorite={saveFavorite} favorites={storedValue} />)}
      <Pagination />
    </Container>
  )
}

export {Component as GridCards}
export default Component