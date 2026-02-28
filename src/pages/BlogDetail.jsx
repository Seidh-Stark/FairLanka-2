import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogService } from '../services/blogService'
import styles from './DetailPage.module.css'

const BlogDetail = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogService.getBySlug(slug)
        setBlog(data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!blog) return <div className={styles.notFound}>Blog post not found</div>

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: `url(${blog.featured_image})` }}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1>{blog.title}</h1>
            <p className={styles.category}>{blog.category} • {blog.author}</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <p className={styles.description} style={{ whiteSpace: 'pre-line' }}>
                {blog.content}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
