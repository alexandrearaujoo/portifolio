import { AiFillHtml5 } from 'react-icons/ai';
import { SiTypescript, SiPostgresql, SiPython, SiDjango } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import SectionTitle from '../SectionTitle';
import CardConhecimento from './CardConhecimentos';
import { Container } from './styles';

const Conhecimentos = () => {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <div>
        <CardConhecimento title="HTML" icon={<AiFillHtml5 />} />
        <CardConhecimento title="CSS" icon={<FaCss3Alt />} />
        <CardConhecimento title="Javascript" icon={<IoLogoJavascript />} />
        <CardConhecimento title="Typescript" icon={<SiTypescript />} />
        <CardConhecimento title="ReactJS" icon={<FaReact />} />
        <CardConhecimento title="NextJS" icon={<TbBrandNextjs />} />
        <CardConhecimento title="PostgreSQL" icon={<SiPostgresql />} />
        <CardConhecimento title="NodeJS" icon={<DiNodejs />} />
        <CardConhecimento title="Python" icon={<SiPython />} />
        <CardConhecimento title="Django" icon={<SiDjango />} />
      </div>
    </Container>
  );
};

export default Conhecimentos;
