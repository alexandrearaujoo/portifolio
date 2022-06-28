import { useEffect } from 'react';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { HomeContainer } from '../styles/pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import {projects} from '../database/projects'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Projetos data={projects}/>
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}
