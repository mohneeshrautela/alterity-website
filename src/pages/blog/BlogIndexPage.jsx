import { Link } from 'react-router-dom'
import { POSTS } from '../../seo/posts'
import './blog.css'

export default function BlogIndexPage() {
  return (
    <div className="blog-index">
      <div className="blog-index__inner">
        <span className="blog-index__eyebrow">Alterity Blog</span>
        <h1 className="blog-index__title">Voice AI, priced and explained plainly</h1>
        <p className="blog-index__intro">
          Notes from the Alterity team on voice agent pricing, billing, pilots and
          multilingual calling in India.
        </p>
        <div className="blog-index__list">
          {POSTS.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-index__item">
              <h2 className="blog-index__item-title">{post.title}</h2>
              <p className="blog-index__item-desc">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
