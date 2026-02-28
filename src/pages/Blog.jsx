import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogService } from '../services/blogService'
import styles from './Blog.module.css'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAll()
        setBlogs(data || [])
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Travel Blog</h1>
          <p>Stories, tips, and guides for your Sri Lankan adventure</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {loading ? (
            <p className={styles.loading}>Loading blog posts...</p>
          ) : blogs.length > 0 ? (
            <div className="grid grid-3">
              {blogs.map(blog => (
                <Link key={blog.id} to={`/blog/${blog.slug}`} className={styles.blogCard}>
                  <div className={styles.imageWrapper}>
                    <img src={blog.featured_image} alt={blog.title} />
                  </div>
                  <div className={styles.content}>
                    <span className={styles.category}>{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <span className={styles.readMore}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.noPosts}>No blog posts available yet. Check back soon!</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
