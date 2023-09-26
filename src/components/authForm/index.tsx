import { Caption, Container, FormStyled, InputContainer, InputStyled, Submit } from './styled';

const Component = () => {
  return (
    <Container>
      <FormStyled>
        <InputContainer>
          <Caption htmlFor='email'>Email</Caption>
          <InputStyled type='email' id='email' name='email' placeholder='john@doe.com' autoFocus/>
        </InputContainer>

        <InputContainer>
          <Caption htmlFor='password'>Password</Caption>
          <InputStyled type='password' id='password' name='password' />
        </InputContainer>

        <Submit type='button' value={"Submit"}/>
      </FormStyled>
    </Container>
  )
}

export {Component as AuthForm}
export default Component
