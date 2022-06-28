import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import CardProjeto from './CardProjeto';
import { Container } from './styles';

interface IProject {
  data :{
    id: number
    slug: string
    title: string
    type: string
    description: string
    img: string
    link: string
  }[]
}


const Projetos = (data: IProject) => {
  const projects = data.data.slice(0,3)

  return (
    <Container>
      <SectionTitle title="Projetos" />

      <section>
        {projects.map(({title, type, slug, img, id}) =>
          <CardProjeto key={id} title={title} type={type} slug={slug} img={img}/>
        )}
      </section>

      <Link href="/projects">
        <a>Ver todos os projetos</a>
      </Link>
    </Container>
  );
};

export default Projetos;
