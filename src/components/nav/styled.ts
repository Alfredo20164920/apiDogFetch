import styled from "styled-components";

export const Container = styled.header`
  grid-area: nav;
  background-color: #ADE8F4;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

export const ButtonLogOut = styled.input`
  font-size: 1em;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: #0077B6;
    color: white;
  }
`

export const UserText = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  color: #003049;
`