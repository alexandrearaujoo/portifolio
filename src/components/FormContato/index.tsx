import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

const FormContato = () => {
  return (
    <Container>
      <SectionTitle
        title={<>Precisa dos meus serviços ?</>}
        description={
          <>Preencha o formulário abaixo que irei retornar em breve</>
        }
      />
      <Form />
    </Container>
  );
};

export default FormContato;
