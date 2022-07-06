import { Container, TextContainer, InfosContainer, BoxItem } from './styles';
import gifHello from '../../assets/robot.gif';
import CodeItem from '../CodeItem';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

const HomeHero = () => {
  return (
    <Container data-aos="fade-up">
      <img src={gifHello} alt="Hello" />

      <div>
        <TextContainer>
          <h1>Alexandre Araujo</h1>
          <h2>Desenvolvedor Front-end Jr</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem />
          <BoxItem data-aos="zoom-in">
            <div>
              <Link href="https://github.com/alexandrearaujoo">
                <a target="blank">
                  Github
                  <AiOutlineGithub />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/alexandrearaujoo/">
                <a target="blank">
                  Linkedin
                  <AiFillLinkedin />
                </a>
              </Link>
            </div>
          </BoxItem>
        </InfosContainer>
      </div>
    </Container>
  );
};

export default HomeHero;
