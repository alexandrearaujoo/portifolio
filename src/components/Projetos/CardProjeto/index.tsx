import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Overlay, ProjetoContainer, TextContainer } from './styles';

interface CardProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

const CardProjeto = ({ title, type, slug, img }: CardProps) => {
  return (
    <ProjetoContainer imgUrl={img} data-aos='fade-up'>
      <section>
        <Overlay></Overlay>
        <TextContainer>
          <h1># {title}</h1>
          <h2> - {type}</h2>
        </TextContainer>
      </section>

      <Link href={`/projects/${slug}`}>
        <a>
          Ver mais <AiOutlineRightCircle />
        </a>
      </Link>
    </ProjetoContainer>
  );
};

export default CardProjeto;
