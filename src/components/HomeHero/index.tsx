import { Container, TextContainer, InfosContainer } from './styles';
import picture from '../../assets/pessoa.webp';
import CodeItem from '../CodeItem';

const HomeHero = () => {
  return (
    <Container>
      <img src={picture} alt="Picture" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Alexandre</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem />
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
