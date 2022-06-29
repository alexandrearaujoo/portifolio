import Link from 'next/link';
import { Container } from './styles';
import PageNotFoundAnimation from '../../lotties/42479-page-not-found-404.json'
import Lottie from "react-lottie";

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
      <Lottie options={defaultOptions} heigth='100%' width='80%'/>
      <span>Page Not Found</span>
      <Link href="/">
        <a>Voltar para homepage</a>
      </Link>
    </Container>
  );
};
export default PageError;
