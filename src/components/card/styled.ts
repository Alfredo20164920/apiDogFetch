import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IContainerProps {
  $isbig?: boolean
}

export const Container = styled.div<IContainerProps>`
  background-color: #f2f2f2;
  border-radius: 15px;
  height: ${props => !props.$isbig ? '250px' : '600px'};
  position: relative;
  width: 100%;
`

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  filter: brightness(0.7);
`

export const MainText = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  font-size: 1em;
  color: white;
  font-weight: bold;
`

export const TextLabel = styled.p`
  position: absolute;
  bottom: 0.5rem;
  left: 1rem;
  font-size: 0.8em;
  color: black;
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
`

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 1.4em;
`