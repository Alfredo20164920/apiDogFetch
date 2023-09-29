import { useNavigate } from "react-router"
import { Button, Container, Error } from "./styled"
import { useState } from 'react';

interface IMatchProps {
  favoritesCount: number
}

const Component = ({favoritesCount}: IMatchProps) => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleRedirect = () => {
    if(favoritesCount < 4) setError(true);
    else{
      setError(false)
      navigate('/match');
    }
  }

  return (
    <Container>
      {error ? <Error>You need to choose 4 dogs or more</Error> : null}
      <Button type="button" value={"Match dog"} onClick={handleRedirect}/>
    </Container>
  )
}

export {Component as MatchButton}
export default Component