import Meta from './meta'
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <header className="container">
        <a href="/">
          <h1 className="cool-gradient">
            Jampa.dev
          </h1>
        </a>
        <div className="links hidden">
          <a href="/blog"> Blog </a>
        </div>
        <div className="contacts">
          <a href="https://github.com/JampaUchoa">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jampauchoa/">
            <FaLinkedin />
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
