import styled from "styled-components";

export const Container = styled.header`
  grid-area: nav;
  background-color: brown;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`

export const ButtonLogOut = styled.input`
  font-size: 1em;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: aqua;

  }
`