import { ButtonLogOut, Container, UserText } from './styled'
import { useContext } from 'react';
import AuthContext from '../../context/auth';
import { useLocalStorage, LOCAL_STORAGE_KEYS } from '../../hooks/useLocalStorage';

const Component = () => {
  const {logout} = useContext(AuthContext);
  const [storedValue] = useLocalStorage(LOCAL_STORAGE_KEYS.AUTH_PROFILE, {});
  return (
    <Container>
      <UserText>{storedValue.username}</UserText>
      <ButtonLogOut type='button' value={'Logout'} onClick={logout}/>
    </Container>
  )
}

export {Component as Nav}
export default Component