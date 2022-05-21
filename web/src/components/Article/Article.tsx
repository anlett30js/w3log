import { Link, routes } from '@redwoodjs/router'

import CommentsCell from 'src/components/CommentsCell'

import MarkdownIt from 'markdown-it'

import CommentForm from 'src/components/CommentForm'

import type { Post } from 'types/graphql'

interface Props {
  article: Omit<Post, 'createdAt'>
  summary?: boolean
}

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}

const md = new MarkdownIt()

const formattedBody = ({ article, summary }: Props) => {
  const output = md.render(article.body)
  if (summary) {
    return truncate(output, 200)
  }
  return output
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div
        className="mt-2 text-gray-900 font-light"
        dangerouslySetInnerHTML={{
          __html: formattedBody({ article, summary }),
        }}
      ></div>
      {!summary && (
        <div className="mt-12">
          <CommentForm postId={article.id} />
          <div className="mt-12">
            <CommentsCell postId={article.id} />
          </div>
        </div>
      )}
    </article>
  )
}

export default Article
