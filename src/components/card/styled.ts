import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IContainerProps {
  $isbig?: boolean
}

export const Container = styled.div<IContainerProps>`
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
  bottom: 3rem;
  left: 1rem;
  font-size: 1em;
  color: #fff;
  font-weight: bold;
`

export const TextLabel = styled.p`
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  font-size: 0.8em;
  color: black;
  background-color: #0077B6;
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
  color: white;
  font-weight: bold;
`

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 1.6em;
`

export const SubText = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 1rem;
  color: #fff;
  font-size: 0.8em;
`