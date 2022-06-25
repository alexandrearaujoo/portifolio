import { Container, Input, FormContainer, TextArea } from './styles';

const Form = () => {
  return (
    <Container>
      <FormContainer data-aos='fade-up'>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
};

export default Form;
