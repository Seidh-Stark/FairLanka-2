import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { packageService } from '../services/packageService'
import styles from './DetailPage.module.css'

const PackageDetail = () => {
  const { slug } = useParams()
  const [pkg, setPkg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [openDays, setOpenDays] = useState(new Set())
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleOpen = (index) => {
    setOpenDays((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  const toggleExpandAll = (count) => {
    setAllExpanded((prev) => {
      const nextAll = !prev
      setOpenDays(nextAll ? new Set(Array.from({ length: count }, (_, i) => i)) : new Set())
      return nextAll
    })
  }

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const data = await packageService.getBySlug(slug)
        setPkg(data)
      } catch (error) {
        console.error('Error fetching package:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPackage()
  }, [slug])

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
                  <div className={styles.itineraryHeaderBar}>
                    <h3>Itinerary</h3>
                    <button
                      type="button"
                      className={styles.expandAllButton}
                      onClick={() => toggleExpandAll(pkg.itinerary.length)}
                    >
                      {allExpanded ? 'Collapse all' : 'Expand all'}
                    </button>
                  </div>

                  <div className={styles.itineraryGrid}>
                    {pkg.itinerary.map((day, index) => {
                      const isOpen = openDays.has(index)

                      return (
                        <div
                          key={index}
                          className={`${styles.itineraryItem} ${isOpen ? styles.open : ''}`}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isOpen}
                          onClick={() => toggleOpen(index)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleOpen(index)
                            }
                          }}
                        >
                          <div className={styles.itineraryHeader}>
                            <span className={styles.dayBadge}>Day {day.day}</span>
                            <h4 className={styles.itineraryTitle}>{day.title}</h4>
                            <span className={`${styles.chevron} ${isOpen ? styles.open : ''}`}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </div>

                          <div className={styles.itineraryBody}>
                            <p className={styles.itineraryDesc}>{day.description}</p>
                          </div>
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
