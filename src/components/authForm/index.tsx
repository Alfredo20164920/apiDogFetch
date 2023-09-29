import { Caption, Container, Error, FormStyled, InputContainer, InputStyled, Submit } from './styled';
import { useState, useContext } from 'react';
import AuthContext from '../../context/auth';

const Component = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const { login } = useContext(AuthContext);

  const handleLogin = async () => {

    if(email === "" && name === "") setError(true)
    else {
      setError(false);
      const payload = {
        name, email
      }
      await login(payload);
    }

  }

  return (
    <Container>
      {
        error ? <Error>You need to fill all fields</Error> : null
      }
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
