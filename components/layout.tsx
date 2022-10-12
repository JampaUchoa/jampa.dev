import Meta from './meta'
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <header className="container">
        <a href="/" style={{textDecoration: "inherit"}}>
          <h1 className="cool-gradient">
           ./Jampa.dev
          </h1>
        </a>
        <div className="links hidden">
          <a href="/blog"> Blog </a>
        </div>
        <div className="contacts">
          <a href="https://www.linkedin.com/in/jampauchoa/" target="_blank" rel="noreferrer noopener">
            <FiLinkedin />
          </a>
          <a href="https://github.com/JampaUchoa" target="_blank" rel="noreferrer noopener">
            <FiGithub />
          </a>
          <a href="mailto:hey@jampa.dev" target="_blank" rel="noreferrer noopener">
            <FiMail /> 
          </a>
        </div>
      </header>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
