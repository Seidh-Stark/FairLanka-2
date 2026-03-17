import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import gsap from 'gsap'
import { packageService } from '../services/packageService'
import styles from './DetailPage.module.css'

const PackageDetail = () => {
  const { slug } = useParams()
  const [pkg, setPkg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [expandedDay, setExpandedDay] = useState(null)
  const cardsRef = useRef([])

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

  // Animate itinerary cards on load
  useEffect(() => {
    if (pkg && cardsRef.current.length > 0) {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      })
    }
  }, [pkg])

  const toggleDayExpand = (dayIndex) => {
    if (expandedDay === dayIndex) {
      setExpandedDay(null)
    } else {
      setExpandedDay(dayIndex)
    }
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
                  
                  {/* Desktop Timeline */}
                  <div style={{ display: 'none' }} className="desktop-timeline">
                    {pkg.itinerary.map((day, index) => (
                      <div key={index} style={{ marginBottom: '24px' }}>
                        <h4 style={{ color: '#1b6b4f', fontSize: '1.25rem' }}>Day {day.day}</h4>
                        <p style={{ color: '#666666', lineHeight: '1.8' }}>{day.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Premium Accordion Cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '24px 0' }}>
                    {pkg.itinerary.map((day, index) => (
                      <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{
                          position: 'relative',
                          background: 'linear-gradient(135deg, #ffffff 0%, rgba(248, 249, 250, 0.98) 100%)',
                          borderRadius: '16px',
                          border: `1px solid ${expandedDay === index ? 'rgba(27, 107, 79, 0.12)' : 'rgba(27, 107, 79, 0.08)'}`,
                          boxShadow: expandedDay === index ? '0 12px 32px rgba(27, 107, 79, 0.1)' : '0 8px 24px rgba(27, 107, 79, 0.06)',
                          transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                          cursor: 'pointer',
                          padding: '14px 16px',
                          overflow: 'hidden',
                        }}
                        onClick={() => toggleDayExpand(index)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            toggleDayExpand(index)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {/* Card Header */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            marginBottom: expandedDay === index ? '12px' : 0,
                            paddingBottom: expandedDay === index ? '12px' : 0,
                            borderBottom: expandedDay === index ? '1px solid rgba(27, 107, 79, 0.06)' : 'none',
                          }}
                        >
                          <div
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'linear-gradient(135deg, #1b6b4f 0%, #2c5530 100%)',
                              color: 'white',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              padding: '6px 10px',
                              borderRadius: '18px',
                              flexShrink: 0,
                              boxShadow: '0 3px 12px rgba(27, 107, 79, 0.2)',
                              letterSpacing: '0.3px',
                            }}
                          >
                            Day {day.day}
                          </div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{
                              color: '#1b6b4f',
                              fontSize: '0.95rem',
                              fontWeight: 700,
                              margin: '0',
                              lineHeight: '1.35',
                              letterSpacing: '-0.2px',
                            }}>
                              {day.title}
                            </h4>
                            <p style={{
                              color: '#757575',
                              fontSize: '0.85rem',
                              margin: '6px 0 0 0',
                              lineHeight: '1.45',
                              display: expandedDay === index ? 'block' : '-webkit-box',
                              WebkitLineClamp: expandedDay === index ? 'unset' : 2,
                              WebkitBoxOrient: expandedDay === index ? 'unset' : 'vertical',
                              overflow: 'hidden',
                            }}>
                              {day.description}
                            </p>
                          </div>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20px',
                            height: '20px',
                            marginLeft: 'auto',
                            flexShrink: 0,
                            color: '#1b6b4f',
                            fontSize: '0.9rem',
                            transition: 'transform 0.3s ease',
                            transform: expandedDay === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}>
                            ▼
                          </span>
                        </div>
                      </div>
                    ))}
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
