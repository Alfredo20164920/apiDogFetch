import { Container } from './styled';
import { Filter, GridCards, Nav } from '../../components';

const Component = () => {
  return (
    <Container>
      <Nav />
      <Filter />
      <GridCards />
    </Container>
  )
}

export {Component as Home}
export default Component