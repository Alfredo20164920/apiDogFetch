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