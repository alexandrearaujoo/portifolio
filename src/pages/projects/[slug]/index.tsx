import Link from 'next/link';
import { useRouter } from 'next/router';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { Container } from '../../../styles/pages/SingleProject';
import { projects } from '../../../database/projects';
import Head from 'next/head';
import PageError from '../../../components/PageError';

const SingleProject = () => {
  const { query } = useRouter();

  const project = projects.find(({ slug }) => slug == query.slug);

  if (!project) {
    return <PageError />;
  }

  return (
    <Container>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Header />
      <BannerProject
        title={project.title}
        type={project.type}
        img={project.img}
      />

      <main>
        <p>{project.description}</p>
        <div>
          <Link href={project.link}>
            <a target="blank">Ver projeto online</a>
          </Link>
          <Link href={project.github}>
            <a target="blank">Ver repositório</a>
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default SingleProject;
