import Link from 'next/link'

type Props = {
  title: string
  subtitle: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  subtitle,
  excerpt,
  slug,
}: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>
        <h3 className="title">
          {title}
        </h3>
        <h4 className="sub-title">
          {subtitle}
        </h4>
        <p className="excerpt">
          {excerpt}
        </p>
      </a>
    </Link>
  )
}

export default PostPreview
