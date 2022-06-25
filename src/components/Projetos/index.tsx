import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import CardProjeto from './CardProjeto';
import { Container } from './styles';

const Projetos = () => {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <CardProjeto 
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <CardProjeto
          title="Projeto 02"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <CardProjeto
          title="Projeto 03"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <CardProjeto
          title="Projeto 04"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
      </section>

      <Link href="/projetos">
        <a>Ver todos os projetos</a>
      </Link>
    </Container>
  );
};

export default Projetos;
