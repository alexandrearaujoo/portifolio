import Link from 'next/link';
import { Container } from './styles';
import PageNotFoundAnimation from '../../lotties/42479-page-not-found-404.json'
import Lottie from "react-lottie";
import Head from 'next/head';

const PageError = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <Head>
        <title>Page not found</title>
      </Head>
      <Lottie options={defaultOptions} heigth='100%' width='80%'/>
      <span>Page Not Found</span>
      <Link href="/">
        <a>Voltar para homepage</a>
      </Link>
    </Container>
  );
};
export default PageError;
