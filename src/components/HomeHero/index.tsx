import { Container, TextContainer, InfosContainer, BoxItem } from './styles';
import picture from '../../assets/my-picture.webp';
import CodeItem from '../CodeItem';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

const HomeHero = () => {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Picture" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Alexandre</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem />
          <BoxItem data-aos="zoom-in">
            <div>
              <Link href="https://github.com/alexandrearaujoo">
                <a target="blank">
                  <AiOutlineGithub />
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/alexandrearaujoo/">
                <a target="blank">
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
