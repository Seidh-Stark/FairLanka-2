import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HotelBookings.module.css'

const HotelBookings = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const hotelCategories = [
    {
      id: 'luxury',
      title: 'Luxury Hotels & Resorts',
      description: 'Five-star properties with world-class amenities, spa facilities, and personalized service.',
      features: ['5-star facilities', 'Premium dining', 'Spa & wellness', 'Ocean views', 'Concierge service', 'Swimming pools']
    },
    {
      id: 'boutique',
      title: 'Boutique Hotels',
      description: 'Charming, unique properties with intimate atmosphere and personalized hospitality.',
      features: ['Unique design', 'Personal service', 'Local cuisine', 'Cultural immersion', 'Small rooms', 'Rooftop bars']
    },
    {
      id: 'midrange',
      title: 'Mid-Range Hotels',
      description: 'Comfortable, well-equipped hotels offering good value for money with essential amenities.',
      features: ['Good comfort', 'Fair prices', 'Clean rooms', 'Wi-Fi', 'Restaurant', 'Front desk 24/7']
    },
    {
      id: 'budget',
      title: 'Budget Hotels & Hostels',
      description: 'Affordable accommodation options perfect for backpackers and budget-conscious travelers.',
      features: ['Budget pricing', 'Shared facilities', 'Social spaces', 'Kitchen access', 'Lockers', 'Basic comfort']
    }
  ]

  const popularDestinations = [
    {
      name: 'Colombo',
      image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Capital city with modern hotels and cultural attractions'
    },
    {
      name: 'Kandy',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cultural heart with temple views and botanical gardens'
    },
    {
      name: 'Negombo',
      image: 'https://images.pexels.com/photos/1522252/pexels-photo-1522252.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beach town closest to airport with water sports'
    },
    {
      name: 'Galle',
      image: 'https://images.pexels.com/photos/3535508/pexels-photo-3535508.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Historic fort and southern coast charm'
    },
    {
      name: 'Mirissa',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Popular beach destination with whale watching'
    },
    {
      name: 'Ella',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hill country with scenic views and tea plantations'
    }
  ]

  const hotelFeatures = [
    {
      icon: '🎯',
      title: 'Best Selection',
      description: 'Curated properties from luxury to budget'
    },
    {
      icon: '💰',
      title: 'Best Rates',
      description: 'Competitive prices with exclusive discounts'
    },
    {
      icon: '⭐',
      title: 'Verified Reviews',
      description: 'Real guest reviews and ratings'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock customer service'
    },
    {
      icon: '🔒',
      title: 'Secure Booking',
      description: 'Protected transactions and guarantees'
    },
    {
      icon: '🏆',
      title: 'Quality Assurance',
      description: 'All properties meet quality standards'
    }
  ]

  const bookingSteps = [
    {
      number: '1',
      title: 'Choose Your Hotel',
      description: 'Browse through our curated selection of hotels by category and destination'
    },
    {
      number: '2',
      title: 'Select Dates',
      description: 'Pick your check-in and check-out dates for best availability'
    },
    {
      number: '3',
      title: 'Review & Book',
      description: 'Review pricing, cancellation policy, and amenities before booking'
    },
    {
      number: '4',
      title: 'Enjoy Your Stay',
      description: 'Receive confirmation and enjoy exclusive perks as our guest'
    }
  ]

  const handleWhatsApp = () => {
    const message = 'Hello, I would like to book a hotel in Sri Lanka. Please provide available options and pricing.'
    const whatsappNumber = '94764374114'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hotel Bookings in Sri Lanka</h1>
          <p className={styles.heroSubtitle}>Find and book the perfect accommodation for your Sri Lankan adventure</p>
        </div>
      </div>

      <main className={styles.main}>
        {/* Categories Section */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Hotel Categories</h2>
            <p className={styles.sectionSubtitle}>Choose the type of accommodation that suits your travel style</p>

            <div className={styles.categoriesGrid}>
              {hotelCategories.map((category, index) => (
                <div
                  key={category.id}
                  className={`${styles.categoryCard} ${selectedCategory === category.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3>{category.title}</h3>
                  <p className={styles.description}>{category.description}</p>

                  {selectedCategory === category.id && (
                    <div className={styles.featuresList}>
                      {category.features.map((f, i) => (
                        <div key={i} className={styles.feature}>
                          <span className={styles.checkmark}>✓</span>
                          {f}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className={styles.destinationsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Popular Hotel Destinations</h2>
            <p className={styles.sectionSubtitle}>Book hotels in these top-rated locations</p>

            <div className={styles.destinationsGrid}>
              {popularDestinations.map((dest, index) => (
                <div
                  key={dest.name}
                  className={styles.destinationCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.destImage}>
                    <img src={dest.image} alt={dest.name} />
                  </div>
                  <div className={styles.destContent}>
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorksSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <p className={styles.sectionSubtitle}>4 Simple steps to book your perfect hotel</p>

            <div className={styles.stepsGrid}>
              {bookingSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={styles.stepCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Our Hotel Booking Service</h2>
            <p className={styles.sectionSubtitle}>Experience the best hotel booking experience</p>

            <div className={styles.featuresGrid}>
              {hotelFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={styles.featureCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Start Booking Your Hotel Today</h2>
            <p>Browse our collection or chat with our experts for personalized recommendations</p>
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

export default HotelBookings
