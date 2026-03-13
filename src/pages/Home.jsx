import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import DestinationCard from '../components/common/DestinationCard'
import PackageCard from '../components/common/PackageCard'
import ActivityCard from '../components/common/ActivityCard'
import TestimonialCard from '../components/common/TestimonialCard'
import TravelInfoCard from '../components/common/TravelInfoCard'
import ServiceCard from '../components/common/ServiceCard'
import airportTransfersImg from '../assets/service-images/airport-transfers.jpg'
import tourPackageImg from '../assets/service-images/tour-package.jpg'
import dayTourImg from '../assets/service-images/day-tour.png'
import intercityTransfersImg from '../assets/service-images/intercity-transfers.jpg'
import safarisImg from '../assets/service-images/safaris.jpg'
import hotelBookingImg from '../assets/service-images/Hotel-booking-icon.jpg'
import flightBookingImg from '../assets/service-images/flight-booking-icon.jpg'
import { ScrollReveal, StaggerReveal, TextReveal, HoverLift, MobileCardReveal, MobileStaggerReveal, MobileTextReveal, MobileHoverLift } from '../components/ScrollAnimations'
import { destinationService } from '../services/destinationService'
import { packageService } from '../services/packageService'
import { testimonialService } from '../services/testimonialService'
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
      id: 'airport-transfers',
      title: 'Airport Transfers',
      description: 'Comfortable and safe airport transfers with professional drivers.',
      imageSrc: airportTransfersImg
    },
    {
      id: 'tour-packages',
      title: 'Tour Packages',
      description: 'Handpicked round-trip tour packages to explore the best of Sri Lanka.',
      imageSrc: tourPackageImg
    },
    {
      id: 'day-tour',
      title: 'Day Tours',
      description: 'Exciting day tours to Sri Lanka\'s most popular destinations.',
      imageSrc: dayTourImg
    },
    {
      id: 'intercity-transfers',
      title: 'Intercity Transfers',
      description: 'Convenient transfers between major cities and towns.',
      imageSrc: intercityTransfersImg
    },
    {
      id: 'safaris',
      title: 'Safaris In Sri Lanka',
      description: 'Thrilling wildlife safaris in Yala, Udawalawe, and national parks.',
      imageSrc: safarisImg
    },
    {
      id: 'hotel-bookings',
      title: 'Hotel Bookings',
      description: 'Luxury resorts, boutique hotels, and budget stays across Sri Lanka.',
      imageSrc: hotelBookingImg
    },
    {
      id: 'flight-bookings',
      title: 'Flight Bookings',
      description: 'Book international and domestic flights at competitive prices.',
      imageSrc: flightBookingImg
    }
  ]

  return (
    <div className={styles.home}>
      <Hero />

      <section className="section">
        <div className="container">
          <TextReveal>
            <h2 className="section-title">About Fair Lanka Travels</h2>
            <p className="section-subtitle">
              Fair Lanka Travels is a registered travel service provider under the Sri Lanka Government Individual Trading Registration (R/No: 2368019). With over 10 years of experience in the tourism industry and more than 3 years as a professional travel agent, we are committed to providing reliable and memorable travel experiences across Sri Lanka.
            </p>
          </TextReveal>

          <StaggerReveal>
            <div className="grid grid-3">
              <div className={styles.aboutItem} data-stagger>
                <h3>Professional & Friendly</h3>
                <p>We deliver personalized service with a friendly local touch and expert guidance.</p>
              </div>
              <div className={styles.aboutItem} data-stagger>
                <h3>Local Expertise</h3>
                <p>Our team knows Sri Lanka inside out and crafts experiences that feel authentic.</p>
              </div>
              <div className={styles.aboutItem} data-stagger>
                <h3>Safe & Comfortable</h3>
                <p>We partner with trusted transport providers to keep your journeys smooth and secure.</p>
              </div>
              <div className={styles.aboutItem} data-stagger>
                <h3>Tailor-Made Tours</h3>
                <p>Every itinerary can be adjusted to match your pace, interests, and budget.</p>
              </div>
              <div className={styles.aboutItem} data-stagger>
                <h3>Transparent Pricing</h3>
                <p>Clear, competitive rates with no hidden fees—just honest value.</p>
              </div>
              <div className={styles.aboutItem} data-stagger>
                <h3>Expert Support</h3>
                <p>We’re available to help before, during, and after your trip.</p>
              </div>
            </div>
          </StaggerReveal>

          <TextReveal>
            <h2 className="section-title" style={{ marginTop: 48 }}>Our Owner</h2>
            <p className="section-subtitle">
              Fair Lanka Travels is owned by Mr. Yoonus, a passionate young entrepreneur in the tourism field. He holds a Diploma in Inbound Tourism Management under a Government Registered Certificate, ensuring professional knowledge and quality service for every traveler.
            </p>
            <p className="section-subtitle">
              We specialize in Airport Transfers, Day Tours, Round Tours, Tailor-Made Tours, and Safaris across Sri Lanka, helping you explore the island with comfort and confidence. 🌴✈️
            </p>
          </TextReveal>
        </div>
      </section>

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
                  const isWhatsApp = s.id === 'airport-transfers' || s.id === 'intercity-transfers'
                  return (
                    <MobileCardReveal key={i} index={i}>
                      <MobileHoverLift>
                        {isWhatsApp ? (
                          <ServiceCard 
                            title={s.title} 
                            description={s.description} 
                            imageSrc={s.imageSrc}
                            ctaText="Book Now"
                            ctaAction={() => handleWhatsApp(s.title, `Hello, I would like to book ${s.title}. Please provide more details`)}
                          />
                        ) : (
                          <ServiceCard title={s.title} description={s.description} imageSrc={s.imageSrc} ctaText="View Service" ctaTo={`/services#${s.id}`} />
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
                  const isWhatsApp = s.id === 'airport-transfers' || s.id === 'intercity-transfers'
                  return (
                    <div key={i} data-stagger>
                      <HoverLift>
                        {isWhatsApp ? (
                          <ServiceCard 
                            title={s.title} 
                            description={s.description} 
                            imageSrc={s.imageSrc}
                            ctaText="Book Now"
                            ctaAction={() => handleWhatsApp(s.title, `Hello, I would like to book ${s.title}. Please provide more details`)}
                          />
                        ) : (
                          <ServiceCard title={s.title} description={s.description} imageSrc={s.imageSrc} ctaText="View Service" ctaTo={`/services#${s.id}`} />
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
