import styled from "styled-components";

export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  justify-content: right;
  align-items: center;
`

export const Button = styled.input`
  font-size: 1em;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  border: 1px solid #003049;
  background-color: #fff;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  &:hover{
    background-color: #0077B6;
    color: white;
    border: 1px solid #fff;
  }
`