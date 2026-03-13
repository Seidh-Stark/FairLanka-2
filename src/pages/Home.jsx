import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import DestinationCard from '../components/common/DestinationCard'
import PackageCard from '../components/common/PackageCard'
import ActivityCard from '../components/common/ActivityCard'
import TestimonialCard from '../components/common/TestimonialCard'
import TravelInfoCard from '../components/common/TravelInfoCard'
import ServiceCard from '../components/common/ServiceCard'
import { ScrollReveal, StaggerReveal, TextReveal, HoverLift, MobileCardReveal, MobileStaggerReveal, MobileTextReveal, MobileHoverLift } from '../components/ScrollAnimations'
import { destinationService } from '../services/destinationService'
import { packageService } from '../services/packageService'
import { testimonialService } from '../services/testimonialService'
import airportIcon from '../assets/service-icons/airport-transfer-icon.jpg'
import tourPackageIcon from '../assets/service-icons/tour-package-icon.jpg'
import dayTourIcon from '../assets/service-icons/day-tour-icon.png'
import intercityIcon from '../assets/service-icons/intercity-transfers-icon.png'
import safarisIcon from '../assets/service-icons/Safaris-icon.jpg'
import hotelIcon from '../assets/service-icons/Hotel-booking-icon.jpg'
import flightIcon from '../assets/service-icons/flight-booking-icon.jpg'
import styles from './Home.module.css'

const Home = () => {
  const [topDestinations, setTopDestinations] = useState([])
  const [packages, setPackages] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const whatsappNumber = '94764374114'

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    const fetchData = async () => {
      try {
        const [allDestData, pkgData, testData] = await Promise.all([
          destinationService.getAll(),
          packageService.getFeatured(),
          testimonialService.getFeatured()
        ])
        setTopDestinations(allDestData || [])
        console.log('topDestinations loaded', allDestData)
        console.log('topDestinations length', allDestData.length)
        setPackages(pkgData || [])
        setTestimonials(testData || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const activities = [
    {
      title: 'Wildlife Safaris',
      description: 'Experience thrilling encounters with elephants, leopards, and exotic birds',
      image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Beach Holidays',
      description: 'Relax on pristine beaches with crystal clear waters and golden sands',
      image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cultural Tours',
      description: 'Explore ancient temples, UNESCO sites, and rich Sri Lankan heritage',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Adventure Sports',
      description: 'Trek mountains, surf waves, and discover thrilling outdoor activities',
      image: 'https://images.pexels.com/photos/163185/old-plane-aircraft-airplane-biplane-163185.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Wellness Retreats',
      description: 'Rejuvenate with Ayurveda treatments and yoga in peaceful settings',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Surfing',
      description: 'Ride world-class waves at famous surf spots along the coast',
      image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  const handleWhatsApp = (serviceTitle, message) => {
    const fullMessage = `${message}`
    const encodedMessage = encodeURIComponent(fullMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const travelInfo = [
    {
      title: 'Visa Information',
      description: 'Easy online ETA application. Most nationalities can get visa on arrival.'
    },
    {
      title: 'Currency',
      description: 'Sri Lankan Rupee (LKR). USD and major currencies widely accepted.'
    },
    {
      title: 'Best Time to Visit',
      description: 'Year-round destination. December to March ideal for beaches.'
    },
    {
      title: 'Transport',
      description: 'Tuk-tuks, trains, and private transfers available throughout.'
    }
  ]

  const servicesPreview = [
    {
      id: 'airport-transfer',
      title: 'Airport Transfer',
      description: 'Comfortable and safe airport transfers with professional drivers.',
      iconSrc: new URL('../assets/service-icons/airport-transfer-icon.jpg', import.meta.url).href
    },
    {
      id: 'tour-packages',
      title: 'Tour Packages',
      description: 'Handpicked round-trip tour packages to explore the best of Sri Lanka.',
      iconSrc: new URL('../assets/service-icons/tour-package-icon.jpg', import.meta.url).href
    },
    {
      id: 'day-tour',
      title: 'Day Tours',
      description: 'Exciting day tours to Sri Lanka\'s most popular destinations.',
      iconSrc: new URL('../assets/service-icons/day-tour-icon.png', import.meta.url).href
    },
    {
      id: 'intercity-transfers',
      title: 'Intercity Transfers',
      description: 'Convenient transfers between major cities and towns.',
      iconSrc: new URL('../assets/service-icons/intercity-transfers-icon.png', import.meta.url).href
    },
    {
      id: 'safaris',
      title: 'Safaris In Sri Lanka',
      description: 'Thrilling wildlife safaris in Yala, Udawalawe, and national parks.',
      iconSrc: new URL('../assets/service-icons/Safaris-icon.jpg', import.meta.url).href
    },
    {
      id: 'hotel-bookings',
      title: 'Hotel Bookings',
      description: 'Luxury resorts, boutique hotels, and budget stays across Sri Lanka.',
      iconSrc: new URL('../assets/service-icons/Hotel-booking-icon.jpg', import.meta.url).href
    },
    {
      id: 'flight-bookings',
      title: 'Flight Bookings',
      description: 'Book international and domestic flights at competitive prices.',
      iconSrc: new URL('../assets/service-icons/flight-booking-icon.jpg', import.meta.url).href
    }
  ]

  return (
    <div className={styles.home}>
      <Hero />

      <section className="section section-alt">
        <div className="container">
          {isMobile ? (
            <MobileTextReveal>
              <h2 className="section-title">Our Premium Travel Services</h2>
              <p className="section-subtitle">We provide complete travel solutions for a smooth and unforgettable Sri Lanka experience.</p>
            </MobileTextReveal>
          ) : (
            <TextReveal>
              <h2 className="section-title">Our Premium Travel Services</h2>
              <p className="section-subtitle">We provide complete travel solutions for a smooth and unforgettable Sri Lanka experience.</p>
            </TextReveal>
          )}
          {isMobile ? (
            <MobileStaggerReveal>
              <div className="grid grid-4">
                {servicesPreview.map((s, i) => {
                  const isWhatsApp = s.id === 'airport-transfer' || s.id === 'intercity-transfers'
                  return (
                    <MobileCardReveal key={i} index={i}>
                      <MobileHoverLift>
                        {isWhatsApp ? (
                          <ServiceCard 
                            title={s.title} 
                            description={s.description} 
                          iconSrc={s.iconSrc}
                          ctaText="Book Now"
                          ctaAction={() => handleWhatsApp(s.title, `Hello, I would like to book ${s.title}. Please provide more details`)}
                        />
                      ) : (
                        <ServiceCard title={s.title} description={s.description} iconSrc={s.iconSrc} ctaText="View Service" ctaTo={`/services#${s.id}`} />
                        )}
                      </MobileHoverLift>
                    </MobileCardReveal>
                  )
                })}
              </div>
            </MobileStaggerReveal>
          ) : (
            <StaggerReveal>
              <div className="grid grid-4">
                {servicesPreview.map((s, i) => {
                  const isWhatsApp = s.id === 'airport-transfer' || s.id === 'intercity-transfers'
                  return (
                    <div key={i} data-stagger>
                      <HoverLift>
                        {isWhatsApp ? (
                          <ServiceCard 
                            title={s.title} 
                            description={s.description} 
                            icon={s.icon} 
                            ctaText="Book Now"
                            ctaAction={() => handleWhatsApp(s.title, `Hello, I would like to book ${s.title}. Please provide more details`)}
                          />
                        ) : (
                          <ServiceCard title={s.title} description={s.description} icon={s.icon} ctaText="View Service" ctaTo={`/services#${s.id}`} />
                        )}
                      </HoverLift>
                    </div>
                  )
                })}
              </div>
            </StaggerReveal>
          )}
          <div className={styles.viewAll} style={{marginTop:24}}>
            {isMobile ? (
              <MobileCardReveal>
                <Link to="/services" className="btn btn-secondary">View All Services</Link>
              </MobileCardReveal>
            ) : (
              <ScrollReveal>
                <Link to="/services" className="btn btn-secondary">View All Services</Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
      {topDestinations.length > 0 && (
        <section className="section">
          <div className="container">
            <TextReveal>
              <h2 className="section-title">Top 15 Tourist Destinations</h2>
              <p className="section-subtitle">Discover some of our most popular destinations across Sri Lanka.</p>
            </TextReveal>
            <StaggerReveal>
              <div className="grid grid-4">
                {topDestinations.slice(0, 4).map((destination) => (
                  <div key={destination.id} data-stagger>
                    <HoverLift>
                      <DestinationCard destination={destination} />
                    </HoverLift>
                  </div>
                ))}
              </div>
            </StaggerReveal>
            <div className={styles.viewAll} style={{marginTop:24}}>
              <ScrollReveal>
                <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <TextReveal>
            <h2 className="section-title">Popular Activities</h2>
            <p className="section-subtitle">
              Discover exciting adventures and experiences waiting for you
            </p>
          </TextReveal>
          <StaggerReveal>
            <div className="grid grid-3">
              {activities.map((activity, index) => (
                <div key={index} data-stagger>
                  <HoverLift>
                    <ActivityCard activity={activity} />
                  </HoverLift>
                </div>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      {packages.length > 0 && (
        <section className="section">
          <div className="container">
            <TextReveal>
              <h2 className="section-title">Featured Tour Packages</h2>
              <p className="section-subtitle">
                Handpicked tours designed to give you the best of Sri Lanka
              </p>
            </TextReveal>
            <StaggerReveal>
              <div className="grid grid-3">
                {packages.slice(0, 3).map((pkg) => (
                  <div key={pkg.id} data-stagger>
                    <HoverLift>
                      <PackageCard package={pkg} />
                    </HoverLift>
                  </div>
                ))}
              </div>
            </StaggerReveal>
            <div className={styles.viewAll}>
              <ScrollReveal>
                <Link to="/packages" className="btn btn-secondary">
                  View All Packages
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Travel Information</h2>
          <p className="section-subtitle">
            Everything you need to know before visiting Sri Lanka
          </p>
          <div className="grid grid-4">
            {travelInfo.map((info, index) => (
              <TravelInfoCard key={index} info={info} />
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link to="/travel-guide" className="btn btn-outline">
              Complete Travel Guide
            </Link>
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Our Travelers Say</h2>
            <p className="section-subtitle">
              Real experiences from people who explored Sri Lanka with us
            </p>
            <div className="grid grid-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <div className={styles.cta}>
            <h2>Ready to Start Your Adventure?</h2>
            <p>Contact us today to plan your perfect Sri Lankan vacation</p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
