import PostPreview from '../Preview/post-preview'
import type Post from '../../interfaces/post'
import styles from "./stories.module.scss"

type Props = {
  posts: Post[]
}

const Stories = ({ posts }: Props) => {
  return (
    <section className={styles.stories}>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          subtitle={post.subtitle}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  )
}

export default Stories
