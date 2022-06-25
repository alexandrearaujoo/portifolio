import { Container } from "./styles"
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'
import Link from "next/link"

const Footer = () => {

  const backToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={backToTop}>Voltar ao topo</button>
        <section>
          <Link href="https://github.com/alexandrearaujoo">
            <a target="blank"><AiOutlineGithub /></a>
          </Link>
          <Link href="https://www.linkedin.com/in/alexandrearaujoo/">
            <a target="blank"><AiFillLinkedin /></a>
          </Link>
        </section>
      </div>
    </Container>
  )
}

export default Footer
