import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal, StaggerReveal, TextReveal, HoverLift } from '../components/ScrollAnimations'
import styles from './FlightBookings.module.css'

const FlightBookings = () => {
  const [selectedFlightType, setSelectedFlightType] = useState(null)

  const flightTypes = [
    {
      id: 'roundtrip',
      title: 'Round-Trip Flights',
      description: 'Complete journey with return flights, ideal for vacation planning.',
      icon: '🔄'
    },
    {
      id: 'oneway',
      title: 'One-Way Flights',
      description: 'Flexible travel option for open-ended journeys or relocations.',
      icon: '→'
    },
    {
      id: 'multicity',
      title: 'Multi-City Flights',
      description: 'Visit multiple destinations in a single trip with custom routing.',
      icon: '🌍'
    },
    {
      id: 'group',
      title: 'Group Bookings',
      description: 'Discounted rates and dedicated support for group travel.',
      icon: '👥'
    }
  ]

  const popularRoutes = [
    {
      from: 'Colombo (CMB)',
      to: 'Bangkok (BKK)',
      duration: '~3.5 hours',
      airlines: 'Thai Airways, Mihin Lanka'
    },
    {
      from: 'Colombo (CMB)',
      to: 'Dubai (DXB)',
      duration: '~4 hours',
      airlines: 'Emirates, FlyDubai'
    },
    {
      from: 'Colombo (CMB)',
      to: 'Singapore (SIN)',
      duration: '~4.5 hours',
      airlines: 'SriLankan, Singapore Airlines'
    },
    {
      from: 'Colombo (CMB)',
      to: 'Delhi (DEL)',
      duration: '~3 hours',
      airlines: 'Air India, IndiGo'
    },
    {
      from: 'Colombo (CMB)',
      to: 'London (LHR)',
      duration: '~11 hours',
      airlines: 'Turkish Airlines, Emirates'
    },
    {
      from: 'Colombo (CMB)',
      to: 'Sydney (SYD)',
      duration: '~13 hours',
      airlines: 'SriLankan, Qantas'
    }
  ]

  const partnerAirlines = [
    { name: 'SriLankan Airways', logo: '✈️', description: 'National carrier with excellent service' },
    { name: 'Emirates', logo: '✈️', description: 'Premium Middle East gateway' },
    { name: 'Thai Airways', logo: '✈️', description: 'Best connectivity to Southeast Asia' },
    { name: 'Singapore Airlines', logo: '✈️', description: 'Award-winning service excellence' },
    { name: 'Mihin Lanka', logo: '✈️', description: 'Budget-friendly regional flights' },
    { name: 'Air India', logo: '✈️', description: 'Top choice for India connections' }
  ]

  const benefits = [
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Compare and get the lowest fares from all airlines'
    },
    {
      icon: '🔔',
      title: 'Price Alerts',
      description: 'Get notified when prices drop for your preferred routes'
    },
    {
      icon: '⭐',
      title: 'Top Airlines',
      description: 'Book with trusted, reputable international airlines'
    },
    {
      icon: '🛂',
      title: 'Visa Support',
      description: 'Assistance with visa requirements for your destination'
    },
    {
      icon: '🧳',
      title: 'Travel Insurance',
      description: 'Optional travel insurance for peace of mind'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Customer support throughout your journey'
    }
  ]

  const bookingTips = [
    {
      number: '1',
      title: 'Book in Advance',
      tip: 'Get better prices by booking 2-3 weeks before travel'
    },
    {
      number: '2',
      title: 'Be Flexible',
      tip: 'Flying on off-peak days (Tuesday-Thursday) saves money'
    },
    {
      number: '3',
      title: 'Clear Your Cookies',
      tip: 'Clear browser cookies for more accurate price comparison'
    },
    {
      number: '4',
      title: 'Check Baggage',
      tip: 'Confirm baggage allowance and extra fees before booking'
    }
  ]

  const handleWhatsApp = () => {
    const message = 'Hello, I would like to book a flight. Please provide flight options and availability.'
    const whatsappNumber = '94764374114'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Flight Bookings</h1>
          <p className={styles.heroSubtitle}>Book your flights to and from Sri Lanka with the best fares</p>
        </div>
      </div>

      <main className={styles.main}>
        {/* Flight Types Section */}
        <section className={styles.flightTypesSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>Flight Types</h2>
              <p className={styles.sectionSubtitle}>Choose the type of flight that suits your travel needs</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.typesGrid}>
                {flightTypes.map((type, index) => (
                  <div
                    key={type.id}
                    data-stagger
                    className={`${styles.typeCard} ${selectedFlightType === type.id ? styles.active : ''}`}
                    onClick={() => setSelectedFlightType(selectedFlightType === type.id ? null : type.id)}
                  >
                    <div className={styles.typeIcon}>{type.icon}</div>
                    <h3>{type.title}</h3>
                    <p>{type.description}</p>
                  </div>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Popular Routes */}
        <section className={styles.routesSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>Popular Routes</h2>
              <p className={styles.sectionSubtitle}>Book flights on these popular international routes</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.routesGrid}>
                {popularRoutes.map((route, index) => (
                  <div
                    key={`${route.from}-${route.to}`}
                    data-stagger
                    className={styles.routeCard}
                  >
                    <div className={styles.routeFrom}>{route.from}</div>
                    <div className={styles.routeArrow}>✈️</div>
                    <div className={styles.routeTo}>{route.to}</div>
                    <div className={styles.routeInfo}>
                      <p className={styles.duration}>{route.duration}</p>
                      <p className={styles.airlines}>{route.airlines}</p>
                    </div>
                  </div>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Partner Airlines */}
        <section className={styles.airlinesSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>Partner Airlines</h2>
              <p className={styles.sectionSubtitle}>We work with leading international airlines</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.airlinesGrid}>
                {partnerAirlines.map((airline, index) => (
                  <div
                    key={airline.name}
                    data-stagger
                    className={styles.airlineCard}
                  >
                    <div className={styles.airlineLogo}>{airline.logo}</div>
                    <h3>{airline.name}</h3>
                    <p>{airline.description}</p>
                  </div>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>Why Book With Us</h2>
              <p className={styles.sectionSubtitle}>Experience hassle-free flight booking</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.benefitsGrid}>
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    data-stagger
                    className={styles.benefitCard}
                  >
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Booking Tips */}
        <section className={styles.tipsSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>Travel Smart - Booking Tips</h2>
              <p className={styles.sectionSubtitle}>Get the best deals with these pro tips</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.tipsGrid}>
                {bookingTips.map((tip) => (
                  <div key={tip.number} data-stagger className={styles.tipCard}>
                  <div className={styles.tipNumber}>{tip.number}</div>
                  <h3>{tip.title}</h3>
                  <p>{tip.tip}</p>
                </div>
              ))}
            </div>
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <ScrollReveal>
              <h2>Ready to Book Your Flight?</h2>
              <p>Search our database or let our experts find the best options for you</p>
            </ScrollReveal>
            <div className={styles.ctaButtons}>
              <button className={styles.whatsappBtn} onClick={handleWhatsApp}>
                📱 Chat on WhatsApp
              </button>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default FlightBookings
