import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import DestinationCard from '../components/common/DestinationCard'
import PackageCard from '../components/common/PackageCard'
import ActivityCard from '../components/common/ActivityCard'
import TestimonialCard from '../components/common/TestimonialCard'
import TravelInfoCard from '../components/common/TravelInfoCard'
import ServiceCard from '../components/common/ServiceCard'
import { destinationService } from '../services/destinationService'
import { packageService } from '../services/packageService'
import { testimonialService } from '../services/testimonialService'
import styles from './Home.module.css'

const Home = () => {
  const [topDestinations, setTopDestinations] = useState([])
  const [packages, setPackages] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
      id: 'pickup',
      title: 'Airport Pickup',
      description: 'Comfortable and safe airport transfers with professional drivers.',
      icon: '<img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Airport pickup" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />'
    },
    {
      id: 'flight',
      title: 'Flight Booking',
      description: 'Book international and domestic flights at competitive prices with trusted airline partners.',
      icon: '<img src="https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Flight booking" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />'
    },
    {
      id: 'hotel',
      title: 'Hotel Booking',
      description: 'Luxury resorts, boutique hotels, and budget stays across Sri Lanka.',
      icon: '<img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Hotel booking" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />'
    },
    {
      id: 'visa',
      title: 'Visa Assistance',
      description: 'Professional support for tourist visa processing and travel documentation.',
      icon: '<img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Visa assistance" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />'
    },
    {
      id: 'tours',
      title: 'Round tours, Day tours, Safaris',
      description: 'Tailored round tours, day tours and wildlife safaris to explore the best of Sri Lanka.',
      icon: '<img src="https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=200" alt="Tours and safaris" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />'
    }
  ]

  return (
    <div className={styles.home}>
      <Hero />

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Premium Travel Services</h2>
          <p className="section-subtitle">We provide complete travel solutions for a smooth and unforgettable Sri Lanka experience.</p>
          <div className="grid grid-5">
            {servicesPreview.map((s, i) => (
              <ServiceCard key={i} title={s.title} description={s.description} icon={s.icon} ctaText="Book Now" ctaTo={`/services#${s.id}`} />
            ))}
          </div>
          <div className={styles.viewAll} style={{marginTop:24}}>
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
      {topDestinations.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Top 15 Tourist Destinations</h2>
            <p className="section-subtitle">Discover some of our most popular destinations across Sri Lanka.</p>
            <div className="grid grid-4">
              {topDestinations.slice(0, 4).map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
            <div className={styles.viewAll} style={{marginTop:24}}>
              <Link to="/destinations" className="btn btn-secondary">View All Destinations</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Popular Activities</h2>
          <p className="section-subtitle">
            Discover exciting adventures and experiences waiting for you
          </p>
          <div className="grid grid-3">
            {activities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {packages.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Featured Tour Packages</h2>
            <p className="section-subtitle">
              Handpicked tours designed to give you the best of Sri Lanka
            </p>
            <div className="grid grid-3">
              {packages.slice(0, 3).map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
            <div className={styles.viewAll}>
              <Link to="/packages" className="btn btn-secondary">
                View All Packages
              </Link>
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
