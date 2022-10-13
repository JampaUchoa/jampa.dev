import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import DateFormatter from '../../components/date-formatter'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="container article">
            <Head>
              <title>
                {post.title} - Jampa.dev
              </title>
              <meta property="og:image" content={post.coverImage} />
              <meta property="og:description" content={post.excerpt} />
              <meta name="description" content={post.excerpt} />
              <meta property="og:type" content="article" />

            </Head>

            <div className="post-header">
              <h1>{post.title}</h1>
              <h2>{post.subtitle}</h2>
              <div className="">
                <div className="post-date">
                  <DateFormatter dateString={post?.date} />
                </div>
              </div>
            </div>

            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'subtitle',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
