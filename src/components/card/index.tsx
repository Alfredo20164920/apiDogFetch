import { useState } from 'react';
import { Dog } from '../../types/index';
import { Container, Icon, ImageStyled, MainText, TextLabel } from './styled';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

interface ICardProps {
  data: Dog
}


const Component = ({data}: ICardProps) => {
  const {name, age, img, breed} = data;

  const [isFavorite, setIsFavorite] = useState(false)

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <Container>
      <ImageStyled src={img}/>
      <MainText>{name} - {age} years</MainText>
      <TextLabel>{breed}</TextLabel>
      <Icon icon={!isFavorite ? faHeartRegular : faHeartSolid} onClick={handleIsFavorite}/>
    </Container>
  )
  
}

export {Component as Card}
export default Component