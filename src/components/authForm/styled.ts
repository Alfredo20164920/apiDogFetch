import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60vh;
  min-height: 500px;
  background-color: #0101;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px){
    width: 60%;
  }

  @media (max-width: 700px){
    width: 90%;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 2rem;

  @media (max-width: 700px){
    width: 90%;
  }
`

export const InputContainer = styled.div`
  gap: 8px;
  width: 100%;
`

export const Caption = styled.label`
  font-size: 1.6rem;
  color: #000;
`

export const InputStyled = styled.input`
  padding: 0.8rem;
  width: 90%;
  border: 1px solid #000;
  border-radius: 10px;
  @media (max-width: 700px){
    width: 90%;
  }
`

export const Submit = styled(InputStyled)`
  background-color: aliceblue;
  padding: 0.5rem;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  width: 90%;
  align-self: center;
  cursor: pointer;

  
`