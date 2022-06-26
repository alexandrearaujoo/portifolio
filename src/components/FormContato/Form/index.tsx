import { Container, Input, FormContainer, TextArea } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendContactMail } from '../../../services/sendMail';
import toast from 'react-hot-toast';

interface SendMailProps {
  name: string;
  senderMail: string;
  content: string;
}

const Form = () => {
  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Minimo de 2 caracteres')
      .required('Campo obrigatório'),
    senderMail: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório'),
    content: yup.string().required('Campo obrigatório')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = async (data: SendMailProps) => {
    try {
      await sendContactMail(data);
      toast.success('Mensagem enviada');
      reset();
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar sua mensagem. Tente novamente!');
    }
  };

  return (
    <Container>
      <FormContainer data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder={errors.name?.message.toString() || 'Nome'}
          {...register('name')}
        />
        <Input
          type="text"
          placeholder={errors.senderMail?.message.toString() || 'Email'}
          {...register('senderMail')}
        />
        <TextArea
          placeholder={errors.content?.message.toString() || 'Mensagem'}
          {...register('content')}
        />
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
};

export default Form;
