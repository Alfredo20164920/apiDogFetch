import styled from "styled-components";

export const Container = styled.div`
  grid-area: grid;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.4rem;

  @media (max-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px){
    grid-template-columns: repeat(2, 1fr);
  }
`