import { useParams, Navigate } from 'react-router-dom'
import ProsePage from '../prose/ProsePage'
import { postBySlug } from '../../seo/posts'

const formatDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = postBySlug(slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <ProsePage
      kicker="Alterity Blog"
      title={post.title}
      meta={`${post.byline} · ${formatDate(post.datePublished)}`}
      intro={post.intro}
      sections={post.sections}
    />
  )
}
