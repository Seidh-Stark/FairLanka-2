import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { packageService } from '../services/packageService'
import styles from './DetailPage.module.css'

const PackageDetail = () => {
  const { slug } = useParams()
  const [pkg, setPkg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [expandedDays, setExpandedDays] = useState(new Set())

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const data = await packageService.getBySlug(slug)
        setPkg(data)
        // For desktop, expand all by default
        if (window.innerWidth >= 768) {
          setExpandedDays(new Set(data.itinerary?.map((_, i) => i) || []))
        }
      } catch (error) {
        console.error('Error fetching package:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPackage()
  }, [slug])

  const toggleExpanded = (index) => {
    setExpandedDays(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (!pkg) return <div className={styles.notFound}>Package not found</div>

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: `url(${pkg.image || pkg.image_url})` }}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1>{pkg.title}</h1>
            <p className={styles.category}>{pkg.category} • {pkg.duration}</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <div className={styles.main}>
              <h2>Package Overview</h2>
              <p className={styles.description}>{pkg.description}</p>

              {pkg.highlights && pkg.highlights.length > 0 && (
                <>
                  <h3>Highlights</h3>
                  <ul className={styles.list}>
                    {pkg.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}

              {pkg.itinerary && pkg.itinerary.length > 0 && (
                <>
                  <h3>Itinerary</h3>
                  <div className={styles.itineraryContainer}>
                    {pkg.itinerary.map((day, index) => {
                      const description = day.description
                      const [locationTitle, ...descParts] = description.split(':')
                      const fullDesc = descParts.join(':').trim() || description
                      return (
                        <div key={index} className={styles.itineraryItem} onClick={() => toggleExpanded(index)}>
                          <div className={styles.dayBadge}>Day {day.day}</div>
                          <h5 className={styles.locationTitle}>{locationTitle}</h5>
                          {expandedDays.has(index) && <p className={styles.itineraryDesc}>{fullDesc}</p>}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}

              {pkg.included && pkg.included.length > 0 && (
                <>
                  <h3>What's Included</h3>
                  <ul className={styles.list}>
                    {pkg.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {pkg.excluded && pkg.excluded.length > 0 && (
                <>
                  <h3>What's Not Included</h3>
                  <ul className={styles.list}>
                    {pkg.excluded.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className={styles.sidebar}>
              <div className={styles.card}>
                <h3>${pkg.price}</h3>
                <p>Per person</p>
                <Link to="/contact" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PackageDetail
