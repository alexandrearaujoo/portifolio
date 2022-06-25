import Link from "next/link"
import { Container, Overlay } from "./styles"

interface ProjectProps {
  title: string
  type:string
  slug: string
  img: string
}

const ProjectCard = ({title, type, slug, img}: ProjectProps) => {
  return (
    <Container imgUrl={img} data-aos='fade-up'>
      <Link href={`/projects/${slug}`}>
        <a>
          <Overlay />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  )
}


export default ProjectCard
