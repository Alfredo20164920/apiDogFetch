import { useContext, useEffect, useState } from 'react';
import { Container } from './styled'
// import AuthContext from '../../context/auth';
import { api } from '../../API/index';
import FilterContext from '../../context/filter';
import { Dog } from '../../types/index';
import { Card } from '../../components/card';

export interface IFilterParams {
  breeds?: string[],
}

const Component = () => {

  const [data, setdata] = useState<Dog[]>([])

  const {filterDogs} = useContext(FilterContext);
  useEffect(() => {
    api.post("/dogs", filterDogs, {withCredentials: true})
      .then(res => {
        const {data} = res;
        setdata(data);
      })
      .catch(e => console.log(e))
  }, [filterDogs])

  return (
    <Container>
      {data.map((item, index: number) => <Card key={index} data={item}/>)}
    </Container>
  )
}

export {Component as GridCards}
export default Component