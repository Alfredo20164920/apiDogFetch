import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 60vh;
  min-height: 500px;
  background-color: #0096C7;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

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
  color: #fff;
`

export const InputStyled = styled.input`
  padding: 0.8rem;
  width: 90%;
  border-radius: 10px;
  font-size: 1em;
  border: none;


  @media (max-width: 700px){
    width: 90%;
  }
`

export const Submit = styled(InputStyled)`
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 1.2em;
  font-weight: bold;
  width: 90%;
  align-self: center;
  background-color: #fff;
  cursor: pointer;

  &:hover{
    background-color: #023E8A;
    color: white;
  } 
`

export const Error = styled.p`
  font-size: 1em;
  letter-spacing: 0.1em;
  color: #cc0000;
  font-weight: 500;

`