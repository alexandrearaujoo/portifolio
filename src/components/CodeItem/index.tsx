import { Container, SpanBlue, Description, SpanPurple, Title } from './styles';

const CodeItem = () => {
  return (
    <Container data-aos='zoom-in'>
      <Title>//Minha apresentação </Title>
      <SpanPurple>Infos</SpanPurple> {'\u007b'}
      <div>
        Nome: <SpanBlue>Alexandre</SpanBlue>
      </div>
      <div>
        Sobrenome: <SpanBlue>Araujo</SpanBlue>
      </div>
      <div>
        Sobre:
         <Description>
          Meu primeiro contato com
        </Description>
      </div>
      {'\u007d'}
    </Container>
  );
};

export default CodeItem;
