import { Container, SpanBlue, Description, SpanPurple } from './styles';

const CodeItem = () => {
  return (
    <Container data-aos="zoom-in">
      <SpanPurple>Infos</SpanPurple> {'\u007b'}
      <div>
        Sobre: {' '}
          <Description>
            Meu primeiro contato com programação foi em 2018 através de video
            aulas no Youtube, desde então venho tentando aprender e melhorar
            minhas habilidades, em 2020 me formei em Analise e Desenvolvimento de
            Sistemas na ETEC de Taboão da Serra porém não tive muito sucesso em
            começar a trabalhar na area. Em setembro de 2021, comecei
            um curso de Desenvolvimento Full Stack na Kenzie Academy onde venho
            evoluindo tecnicamente e pessoalmente.
          </Description>
      </div>
      {'\u007d'}
    </Container>
  );
};

export default CodeItem;
