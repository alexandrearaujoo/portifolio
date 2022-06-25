import Link from 'next/link';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { Container } from '../../../styles/pages/SingleProject';

const SingleProject = () => {
  return (
    <Container>
      <Header />
      <BannerProject title='Projeto 01' type='Website' img='https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png'/>

      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          numquam rerum iure illum corporis rem assumenda hic quisquam totam!
          Tenetur ipsam modi, molestiae dignissimos natus omnis tempora
          recusandae delectus voluptas?
        </p>
        <Link href="#">
          <a target='blank'>Ver projeto online</a>
        </Link>
      </main>
    </Container>
  );
};

export default SingleProject;
