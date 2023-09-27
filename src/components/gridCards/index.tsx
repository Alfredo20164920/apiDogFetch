import { useContext, useEffect } from 'react';
import { Container } from './styled'
// import AuthContext from '../../context/auth';
import { api } from '../../API/index';
import FilterContext from '../../context/filter';

export interface IFilterParams {
  breeds?: string[],

}

const Component = () => {

  const {filterDogs} = useContext(FilterContext);
  console.log(filterDogs);
  useEffect(() => {
    api.post("/dogs", filterDogs, {withCredentials: true})
      .then(res => {
        console.log(res.data)
      })
      .catch(e => console.log(e))
  }, [filterDogs])

  return (
    <Container>
      grid
    </Container>
  )
}

export {Component as GridCards}
export default Component