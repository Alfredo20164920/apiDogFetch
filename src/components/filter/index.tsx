/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonsContainer, Container, FilterContainer, FilterLabel } from "./styled"
import { useState, useEffect, useRef, useContext } from 'react';
import { api } from '../../API/index';
import Select from 'react-select'
import FilterContext from '../../context/filter';

export type BreedsType = {
  value: string,
  label: string
}

const Component = () => {
  const { setFilter } = useContext(FilterContext);
  const [breeds, setBreeds] = useState<BreedsType[]>([]);
  const [filterBreed, setFilterBreed] = useState<string[]>([]);

  const selectRef = useRef<any>(null);

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

  const onClear = () => {
    setFilterBreed([])
    setFilter({breeds: []})
    selectRef.current?.clearValue();
  }

  const handleFilter = () => {
    console.log(filterBreed);
    setFilter({breeds: filterBreed})
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
          onChange={e => {e.map(item => setFilterBreed([...filterBreed, item.label]))}}
        />
      </FilterContainer>

      <ButtonsContainer>
    
        <Button value={"Search"} type="button" onClick={handleFilter} disabled={filterBreed.length === 0 ? true : false}/>
        {
          filterBreed.length !== 0 
            ? <Button value={"Clear filter"} type="button" onClick={onClear}/> 
            : null
        }
      </ButtonsContainer>
      
    </Container>
  )
}

export {Component as Filter}
export default Component