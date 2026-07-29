import { createFileRoute } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = allBlogs.find((entry) => entry._meta.path === params.slug)
    if (!post) throw new Error('Note not found')
    return { post }
  },
  component: Note,
})

function Note() {
  const { post } = Route.useLoaderData()
  return (
    <main className="page-shell shell article reveal">
      <p className="article-meta">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.tags.join(' / ')}</p>
      <h1>{post.title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </main>
  )
}
