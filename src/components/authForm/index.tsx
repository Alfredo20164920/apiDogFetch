import { Caption, Container, FormStyled, InputContainer, InputStyled, Submit } from './styled';
import { useState, useContext } from 'react';
import AuthContext from '../../context/auth';

const Component = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    const payload = {
      name, email
    }
    await login(payload);
  }

  return (
    <Container>
      <FormStyled>
        <InputContainer>
          <Caption htmlFor='email'>Email</Caption>
          <InputStyled
            type='email'
            id='email' 
            name='email' 
            placeholder='john@doe.com' 
            autoFocus 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <Caption htmlFor='username'>UserName</Caption>
          <InputStyled 
            type='text' 
            id='username' 
            name='username'   
            placeholder='John Doe'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </InputContainer>

        <Submit type='button' value={"Submit"} onClick={handleLogin} />
      </FormStyled>
    </Container>
  )
}

export { Component as AuthForm }
export default Component
