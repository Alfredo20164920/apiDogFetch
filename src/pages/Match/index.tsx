import { useContext, useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEYS, useLocalStorage } from '../../hooks/useLocalStorage';
import { api } from '../../API/index';
import { Dog } from '../../types/index';
import { Card } from '../../components';
import { Button, Container } from './styled';
import { useNavigate } from 'react-router';
import FilterContext from '../../context/filter';

const getDog = async (dog: string[]) => {
  return await api.post('/dogs', dog, { withCredentials: true });
}

const Component = () => {
  const navigate = useNavigate();
  const {setFilter} = useContext(FilterContext);
  const [storedValue, setValue] = useLocalStorage(LOCAL_STORAGE_KEYS.FAVORITES_DOGS, []);
  const [dog, setDog] = useState<Dog>({name: '', age: 0, breed: '', id: '', img: '', zip_code: ''})

  useEffect(() => {
    api.post('/dogs/match', storedValue, { withCredentials: true })
      .then(res => {
        const data = getDog([res.data?.match]);
        data.then(item => setDog(item.data[0])).catch(e => console.log(e));

      })
  }, [storedValue])

  const handleTryAgain = () => {
    setFilter({breeds: [], from: 0})
    setValue([]);
    navigate('/');
  }

  return (
    <Container>
      <h2>You match with this dog</h2>
      <Card data={dog} isSingle={true} />
      <Button type='button' value={'Try again'} onClick={handleTryAgain}/>
    </Container>
  )
}

export { Component as Match }
export default Component