import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Stories from '../components/StoriesList/stories'
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>

      <Head>
        <title>Jampa.dev</title>
      </Head>
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

      <main>
        <div className="intro">
          <div className="container">
            <h2 className="cool-s"> Hiya,  </h2>
            <h3>I am Jampa Uchoa </h3>
            <p style={{ fontSize: "1.5em" }}> I'm an entrepreneur / developer / engineering manager. </p>
            <p style={{ fontSize: "2em" }}> This blog will cover things that I learned along the road. </p>
            <p style={{ fontSize: "1em" }}> Hopefully something can be useful. </p>
          </div>
        </div>

        <div className="about-me container">
          <h2> My Stories </h2>
          <Stories posts={allPosts} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'slug',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
