import { useState } from 'react';
import { Container, Input, FormContainer, TextArea } from './styles';

const Form = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  return (
    <Container>
      <FormContainer data-aos="fade-up">
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        />
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
};

export default Form;
