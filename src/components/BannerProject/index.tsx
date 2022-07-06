import { Container, Overlay } from "./styles"

interface BannerProps {
  title: string
  type: string
  img: string
}

const BannerProject = ({title, type, img} :BannerProps) => {
  return (
    <Container imgUrl={img}>
      <Overlay />
      saudações
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  )
}

export default BannerProject
