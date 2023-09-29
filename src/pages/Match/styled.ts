import styled from "styled-components";

export const Container = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Button = styled.input`
  font-size: 1em;
  padding: 1rem 3rem;
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