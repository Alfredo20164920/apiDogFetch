import { Container, FilterContainer, FilterLabel } from "./styled"
import { useState, useEffect, useRef, useContext } from 'react';
import { api } from '../../API/index';
import Select, { MultiValue } from 'react-select'
import FilterContext from '../../context/filter';

export type BreedsType = {
  value: string,
  label: string
}
const Component = () => {
  const { setFilter, filterDogs } = useContext(FilterContext);
  const [breeds, setBreeds] = useState<BreedsType[]>([]);
  const [filterBreeds, setFilterBreeds] = useState<string[]>([])

  const selectRef = useRef(null);

  if(typeof filterDogs === 'undefined') setFilter({breeds: [], from: 0})
  useEffect(() => {
    api.get('/dogs/breeds')
    .then(response => {
      const {data} = response
      const options = data.map((item: string) => {return {value: item.toLowerCase(), label: item}})
      setBreeds(options);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  const selectOptions = (event: MultiValue<BreedsType>) => {
    if(event.length === 0) {
      setFilter({breeds: [], from: 0})
    }
    else {
      const label = event.map(item => {
        setFilterBreeds([...filterBreeds, item.label]);
        return item.label
      })
      console.log(label)
      setFilter({breeds: label, from: 0})
    }
  }


  return (
    <Container>

      <FilterContainer>
        <FilterLabel htmlFor="breeds">Breed</FilterLabel>
        <Select 
          ref={selectRef} 
          options={breeds} 
          name="breeds" 
          isMulti 
          isSearchable 
          isClearable 
          onChange={(ev) => selectOptions(ev)}
        />
      </FilterContainer>      
    </Container>
  )
}

export {Component as Filter}
export default Component