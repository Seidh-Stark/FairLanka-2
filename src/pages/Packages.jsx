import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { packageService } from '../services/packageService'
import styles from './Packages.module.css'

const Packages = () => {
  const [packages, setPackages] = useState([])
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [openDays, setOpenDays] = useState(new Set())
  const [allExpanded, setAllExpanded] = useState(false)
  const [loading, setLoading] = useState(true)

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
    const fetchPackages = async () => {
      try {
        const data = await packageService.getAll()
        setPackages(data || [])
      } catch (error) {
        console.error('Error fetching packages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  const toggleDayExpand = (dayIndex) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayIndex]: !prev[dayIndex],
    }))
  }

  const handleViewItinerary = (pkg) => {
    setSelectedPackage(pkg)
    window.scrollTo({ top: document.querySelector('#itinerary').offsetTop, behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero} style={{ backgroundImage: `url('/assets/destination/bentota-beach.jpg')` }}>
        <div className={styles.heroOverlay}>
          <div className="container">
            <h1>Explore Our Exclusive Sri Lanka Tour Packages</h1>
            <p>Discover unforgettable journeys across Sri Lanka including culture, wildlife, beaches, wellness, and adventure experiences tailored for international tourists.</p>
            <Link to="#packages" className="btn btn-primary">View Packages</Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className={styles.intro}>
            <h2>Premium Sri Lanka Tour Packages</h2>
            <p>These holiday packages offer the best of each destination, from wild adventures to city escapes and cultural tours to annual events. As one of the best travel agencies in Sri Lanka, we offer great value for money and the convenience of having all of your travel needs met, whether it's air tickets, accommodation, transportation, meals, or airport transfers.</p>
            <p>We offer packages that cater to a variety of soothing vacation needs, such as wellness, adventure, classical, wildlife, quality family time, honeymoon experience, and much more.</p>
            <p>Fair Lanka Tours also offers tailor-made tour packages if you require something more unique and different so that you can have a one-of-a-kind holiday experience tailored to your preferences and enjoyment.</p>
          </div>
        </div>
      </section>

      {/* Package Cards Section */}
      <section id="packages" className="section section-alt">
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Tour Packages</h2>
          {loading ? (
            <p>Loading packages...</p>
          ) : (
            <div className="grid grid-3">
              {packages.map((pkg) => (
                <div key={pkg.id} className={styles.packageCard}>
                  <div className={styles.cardImage} style={{ backgroundImage: `url("${encodeURI(pkg.image)}")` }}></div>
                  <div className={styles.cardContent}>
                    <h3>{pkg.title}</h3>
                    <p className={styles.description}>{pkg.description}</p>
                    <div className={styles.meta}>
                      <span><strong>Duration:</strong> {pkg.duration}</span>
                      <span><strong>Destinations:</strong> {pkg.destinations.join(', ')}</span>
                    </div>
                    <button onClick={() => handleViewItinerary(pkg)} className="btn btn-primary">View Full Itinerary</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Individual Package Section */}
      {selectedPackage && (
        <section id="itinerary" className="section">
          <div className="container">
            <div className={styles.itinerary}>
              <h2>{selectedPackage.title}</h2>
              <p>{selectedPackage.description}</p>
              <div className={styles.itineraryHeaderBar}>
                <h3>Day-by-Day Itinerary <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>(new UI)</span></h3>
                <button
                  type="button"
                  className={styles.expandAllButton}
                  onClick={() => toggleExpandAll(selectedPackage.itinerary.length)}
                >
                  {allExpanded ? 'Collapse all' : 'Expand all'}
                </button>
              </div>

              <div className={styles.itineraryGrid}>
                {selectedPackage.itinerary.map((day, index) => {
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
              <h3>Tour Highlights</h3>
              <ul className={styles.highlights}>
                {selectedPackage.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Tour Highlights Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className={styles.sectionTitle}>Tour Highlights</h2>
          <div className="grid grid-4">
            <div className={styles.highlight}>
              <div className={styles.icon}>🦌</div>
              <h4>Wildlife Safaris</h4>
            </div>
            <div className={styles.highlight}>
              <div className={styles.icon}>🏛️</div>
              <h4>Cultural Heritage Sites</h4>
            </div>
            <div className={styles.highlight}>
              <div className={styles.icon}>🏖️</div>
              <h4>Tropical Beaches</h4>
            </div>
            <div className={styles.highlight}>
              <div className={styles.icon}>🌿</div>
              <h4>Tea Plantation Landscapes</h4>
            </div>
            <div className={styles.highlight}>
              <div className={styles.icon}>🏔️</div>
              <h4>Adventure Activities</h4>
            </div>
            <div className={styles.highlight}>
              <div className={styles.icon}>🧘</div>
              <h4>Ayurveda Wellness Experiences</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="section">
        <div className="container">
          <div className={styles.testimonial}>
            <blockquote>
              "We would recommend Fair Lanka Tours to anyone traveling to Sri Lanka."
            </blockquote>
            <div className={styles.stars}>★★★★★</div>
            <cite>Happy Traveler</cite>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.cta}>
            <h2>Plan Your Dream Sri Lanka Holiday with Fair Lanka Tours</h2>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className="btn btn-primary">Request Custom Tour</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
