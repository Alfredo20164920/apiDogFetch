import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 20% auto;
  grid-template-areas: 
    "nav nav"
    "filter grid"
    ;
  background-color: #fdfdfd;
  width: 100%;
  height: 100vh;
  
`