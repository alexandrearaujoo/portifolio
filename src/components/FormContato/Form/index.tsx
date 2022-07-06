import { Container, Input, FormContainer, TextArea } from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendContactMail } from '../../../services/sendMail';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

interface SendMailProps {
  name: string;
  email: string;
  message: string;
}

const Form = () => {

  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Minimo de 2 caracteres')
      .required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    message: yup.string().required('Campo obrigatório')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = async (data: any) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_KEY
      );
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
          placeholder={errors.email?.message.toString() || 'Email'}
          {...register('email')}
        />
        <TextArea
          placeholder={errors.message?.message.toString() || 'Mensagem'}
          {...register('message')}
        />
        <button type="submit">Enviar</button>
      </FormContainer>
    </Container>
  );
};

export default Form;
