import { useNavigate } from "react-router"
import { Button, Container } from "./styled"

interface IMatchProps {
  favoritesCount: number
}

const Component = ({favoritesCount}: IMatchProps) => {

  const navigate = useNavigate();
  const handleRedirect = () => {
    if(favoritesCount < 2) alert('Error');
    else navigate('/match');
  }

  return (
    <Container>
      <Button type="button" value={"Match dog"} onClick={handleRedirect}/>
    </Container>
  )
}

export {Component as MatchButton}
export default Component