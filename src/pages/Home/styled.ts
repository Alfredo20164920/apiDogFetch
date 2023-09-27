import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: minmax(150px, 400px) auto;
  grid-template-areas: 
    "nav nav "
    "filter grid "
    ;
  background-color: #000;
  width: 100%;
  height: 100vh;
  
`