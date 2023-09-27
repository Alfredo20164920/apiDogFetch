import styled from "styled-components";

export const Container = styled.aside`
  background-color: beige;
  grid-area: filter;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 1.4rem;
`

export const FilterContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FilterLabel = styled.label`
  font-size: 1em;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.4rem;
`

export const Button = styled.input`
  padding: 0.2rem 0.5rem;
  background-color: white;
  border-radius: 10px;
  font-size: 1em;
  color: black;
  border: 1px solid black
`