import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { Container } from '../styles/pages/Projects';

const Projects = () => {
  return (
    <Container>
      <Header />

      <main className="container">
        <ProjectCard
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <ProjectCard
          title="Projeto 02"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <ProjectCard
          title="Projeto 03"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
        <ProjectCard
          title="Projeto 04"
          type="Website"
          slug="teste"
          img="https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        />
      </main>
    </Container>
  );
};

export default Projects;
