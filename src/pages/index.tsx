import Conhecimentos from '../components/Conhecimentos';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { HomeContainer } from '../styles/pages/Home';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Projetos />
        <Conhecimentos />
      </main>
    </HomeContainer>
  );
}
