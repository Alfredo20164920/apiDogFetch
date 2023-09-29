import { Dog } from '../../types/index';
import { Container, Icon, ImageStyled, MainText, TextLabel } from './styled';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

interface ICardProps {
  data: Dog,
  favorites?: string[]
  isSingle?: boolean
  setFavorite?: (c: string) => void
}

const Component = ({data, favorites, isSingle,setFavorite}: ICardProps) => {
  const {id, name, age, img, breed} = data;
  
  const isFavorite = favorites?.includes(id);

  const handleToggleFavorite = () => {
    setFavorite?.(id);
  }

  return (
    <Container $isbig={isSingle}>
      <ImageStyled src={img}/>
      <MainText>{name} - {age} years</MainText>
      <TextLabel>{breed}</TextLabel>
      {
        favorites ? <Icon icon={!isFavorite ? faHeartRegular : faHeartSolid} onClick={handleToggleFavorite}/> : null
      }
    </Container>
  )
  
}

export {Component as Card}
export default Component