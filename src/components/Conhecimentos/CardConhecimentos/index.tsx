import { ReactNode } from "react"
import { Container } from "./styles"

interface CardProps {
  title: string
  icon: ReactNode
}

const CardConhecimento = ({title, icon}: CardProps) => {
  return (
    <Container data-aos='fade-up'>
      <p>{title}</p>
      {icon}
    </Container>
  )
}

export default CardConhecimento
