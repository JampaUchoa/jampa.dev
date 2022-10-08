import markdownStyles from './markdown-styles.module.scss'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="post-body">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
