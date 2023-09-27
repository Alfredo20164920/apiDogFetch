import { useContext, useEffect, useState } from 'react';
import { Container } from './styled'
// import AuthContext from '../../context/auth';
import { api } from '../../API/index';
import FilterContext from '../../context/filter';

export interface IFilterParams {
  breeds?: string[],
}

export interface Dog {
  id: string
  img: string
  name: string
  age: number
  zip_code: string
  breed: string
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
      {data.map((item, index: number) => <p key={index}>{item?.breed}</p>)}
    </Container>
  )
}

export {Component as GridCards}
export default Component