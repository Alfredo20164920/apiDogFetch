import { ButtonLogOut, Container } from './styled'
import { useContext } from 'react';
import AuthContext from '../../context/auth';

const Component = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Container>
      <p>name</p>
      <ButtonLogOut type='button' value={'Logout'} onClick={logout}/>
    </Container>
  )
}

export {Component as Nav}
export default Component