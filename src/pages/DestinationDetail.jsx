import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { destinationService } from '../services/destinationService'
import styles from './DetailPage.module.css'

const DestinationDetail = () => {
  const { slug } = useParams()
  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const data = await destinationService.getBySlug(slug)
        setDestination(data)
      } catch (error) {
        console.error('Error fetching destination:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDestination()
  }, [slug])

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!destination) return <div className={styles.notFound}>Destination not found</div>

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: `url(${destination.image_url})` }}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1>{destination.name}</h1>
            <p className={styles.category}>{destination.category}</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <h2>About {destination.name}</h2>
              <p className={styles.description}>{destination.description}</p>

              {destination.images && destination.images.length > 0 && (
                <div className={styles.gallery}>
                  <h3>Gallery</h3>
                  <div className={styles.images}>
                    {destination.images.map((img, index) => (
                      <img key={index} src={img} alt={`${destination.name} ${index + 1}`} className={styles.galleryImage} />
                    ))}
                  </div>
                </div>
              )}

              {destination.attractions && destination.attractions.length > 0 && (
                <>
                  <h3>Popular Attractions</h3>
                  <ul className={styles.list}>
                    {destination.attractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                  </ul>
                </>
              )}

              {destination.best_time_to_visit && (
                <>
                  <h3>Best Time to Visit</h3>
                  <p>{destination.best_time_to_visit}</p>
                </>
              )}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <h3>Plan Your Visit</h3>
                <p>Interested in visiting {destination.name}?</p>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DestinationDetail
