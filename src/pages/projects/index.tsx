import Head from 'next/head';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { Container } from '../../styles/pages/Projects';
import { projects } from '../../database/projects';

const Projects = () => {
  return (
    <Container>
      <Head>
        <title>Projetos | Meu portfólio</title>
      </Head>
      <Header />

      <main className="container">
        {projects.map(({title, type, slug, img, id}) =>
          <ProjectCard key={id} title={title} type={type} slug={slug} img={img}/>
        )}
      </main>
    </Container>
  );
};

export default Projects;
