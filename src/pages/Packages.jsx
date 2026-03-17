import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { packageService } from '../services/packageService'
import styles from './Packages.module.css'

const Packages = () => {
  const [packages, setPackages] = useState([])
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [expandedDays, setExpandedDays] = useState({})
  const [loading, setLoading] = useState(true)

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
              <h3>Day-by-Day Itinerary</h3>
              {/* Desktop Timeline */}
              <div className={styles.timeline}>
                {selectedPackage.itinerary.map((day, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>Day {day.day}</div>
                    <div className={styles.timelineContent}>
                      <h4>{day.title}</h4>
                      <p>{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Mobile Card Layout */}
              <div className={styles.mobileItinerary}>
                {selectedPackage.itinerary.map((day, index) => (
                  <div
                    key={index}
                    className={`${styles.itineraryCard} ${expandedDays[index] ? styles.expanded : ''}`}
                    onClick={() => toggleDayExpand(index)}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.dayBadge}>Day {day.day}</div>
                      <div className={styles.expandIcon}>{expandedDays[index] ? '−' : '+'}</div>
                    </div>
                    <h4 className={styles.cardTitle}>{day.title}</h4>
                    <p className={`${styles.cardDescription} ${expandedDays[index] ? styles.fullDescription : ''}`}>
                      {day.description}
                    </p>
                  </div>
                ))}
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
