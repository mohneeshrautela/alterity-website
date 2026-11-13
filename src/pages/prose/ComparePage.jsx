import { useParams, Navigate } from 'react-router-dom'
import ProsePage from './ProsePage'
import { COMPARE_PAGES } from './pagesData'

export default function ComparePage() {
  const { slug } = useParams()
  const page = COMPARE_PAGES[slug]
  if (!page) return <Navigate to="/" replace />

  return (
    <ProsePage
      kicker="Comparison"
      title={page.title}
      intro={page.intro}
      sections={page.sections}
      related={page.related || []}
    />
  )
}
