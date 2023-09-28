import { Dog } from '../../types/index';
import { Container, Icon, ImageStyled, MainText, TextLabel } from './styled';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

interface ICardProps {
  data: Dog,
  favorites: string[]
  setFavorite: (c: string) => void
}

const Component = ({data, favorites,setFavorite}: ICardProps) => {
  const {id, name, age, img, breed} = data;
  
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    setFavorite(id);
  }

  return (
    <Container>
      <ImageStyled src={img}/>
      <MainText>{name} - {age} years</MainText>
      <TextLabel>{breed}</TextLabel>
      <Icon icon={!isFavorite ? faHeartRegular : faHeartSolid} onClick={handleToggleFavorite}/>
    </Container>
  )
  
}

export {Component as Card}
export default Component