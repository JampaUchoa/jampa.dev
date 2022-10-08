import type Author from './author'

type PostType = {
  slug: string
  title: string
  subtitle?: string
  date?: string
  coverImage?: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
