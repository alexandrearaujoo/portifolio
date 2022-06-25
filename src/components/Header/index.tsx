import NavLink from '../NavLink';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <ul>
        <NavLink title='Home' path='/'/>
        <NavLink title='Projetos' path='/projetos'/>
      </ul>
    </Container>
  );
};

export default Header;
