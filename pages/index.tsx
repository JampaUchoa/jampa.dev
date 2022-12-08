import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Stories from '../components/StoriesList/stories'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>

      <Head>
        <title>Jampa.dev</title>
      </Head>

        <div className="intro">
          <div className="container">
            <h2> Hiya, </h2>
            <h3>I am Jampa / John / Joao Uchoa </h3>
            <p> I'm an entrepreneur turned developer turned engineering manager. </p>
            <p> This blog will cover things that I learned along the road. </p>
            <p> Hopefully something can be useful. </p>
          </div>
        </div>

        <div className="about-me container">
          <h2> <strong> My Stories </strong> </h2>
          <Stories posts={allPosts} />
        </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'subtitle',
    'slug',
    'excerpt',
    'date'
  ])

  return {
    props: { allPosts },
  }
}
