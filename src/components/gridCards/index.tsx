import { useContext, useEffect, useState } from 'react';
import { Container } from './styled'
import { api } from '../../API/index';
import FilterContext from '../../context/filter';
import { Dog } from '../../types/index';
import { Card, Pagination } from '../../components';

export interface IFilterParams {
  breeds?: string[],
}

const Component = () => {

  const [data, setdata] = useState<Dog[]>([])

  const {filterDogs, filters} = useContext(FilterContext);
  useEffect(() => {
    api.post("/dogs", filterDogs, {withCredentials: true})
      .then(res => {
        const {data} = res;
        setdata(data);
      })
      .catch(e => console.log(e))
  }, [filterDogs, filters])

  return (
    <Container>
      {data.map((item, index: number) => <Card key={index} data={item}/>)}
      <Pagination />
    </Container>
  )
}

export {Component as GridCards}
export default Component