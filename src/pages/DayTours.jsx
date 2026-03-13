import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal, StaggerReveal, TextReveal, HoverLift } from '../components/ScrollAnimations'
import styles from './DayTours.module.css'

const DayTours = () => {
  const [expandedTour, setExpandedTour] = useState(null)

  const dayTours = [
    {
      id: 1,
      title: 'Sigiriya & Dambulla Cultural Day Tour',
      highlights: ['Visit the famous Sigiriya Rock Fortress', 'Explore Dambulla Cave Temple'],
      activities: [
        'Climb the Sigiriya Lion Rock',
        'See ancient fresco paintings and mirror wall',
        'Visit the Royal Gardens & water gardens',
        'Explore Dambulla cave temples with Buddha statues',
        'Optional village safari (bullock cart + boat ride)'
      ],
      description: 'This is one of the most popular cultural day tours in Sri Lanka.',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    },
    {
      id: 2,
      title: 'Kandy Cultural & Heritage Day Tour',
      highlights: ['Visit Temple of the Sacred Tooth Relic', 'Walk around Royal Botanic Gardens Peradeniya'],
      activities: [
        'Visit the Temple of the Tooth (UNESCO heritage site)',
        'Walk around scenic Kandy Lake',
        'Explore Peradeniya Botanical Garden',
        'Gem museum & lapidary visit',
        'Tea factory visit & tasting',
        'Watch Kandyan cultural dance show'
      ],
      description: 'Experience the cultural heart of Sri Lanka with ancient temples and royal gardens.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
  
    },
    {
      id: 3,
      title: 'Galle & Southern Coast Day Tour',
      highlights: ['Explore Galle Fort, historic colonial fortress', 'Visit UNESCO heritage site'],
      activities: [
        'Walk inside Galle Fort streets',
        'Visit Dutch Church & Lighthouse',
        'See stilt fishermen in Weligama',
        'Relax at Unawatuna beach',
        'Visit turtle hatchery in Kosgoda'
      ],
      description: 'Explore the historic Galle Fort and discover the charm of the southern coast.',
      image: 'https://images.pexels.com/photos/3535508/pexels-photo-3535508.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    },
    {
      id: 4,
      title: 'Yala Safari Wildlife Day Tour',
      highlights: ['Visit Yala National Park', 'One of the highest leopard densities in the world'],
      activities: [
        '4x4 jeep safari inside the park',
        'Spot leopards, elephants, crocodiles, peacocks',
        'Bird watching',
        'Nature photography'
      ],
      description: 'Experience thrilling wildlife encounters in one of Asia\'s best national parks.',
      image: 'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    },
    {
      id: 5,
      title: 'Ella Scenic Nature Day Tour',
      highlights: ['Visit the famous Nine Arches Bridge', 'World-class hiking and tea plantations'],
      activities: [
        'Hike Little Adam\'s Peak',
        'Visit Nine Arches Bridge and watch the train',
        'Visit Ravana Falls',
        'Tea plantation walk',
        'Cafe & mountain view photos'
      ],
      description: 'Ella is famous for tea plantations, waterfalls and scenic hikes.',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    },
    {
      id: 6,
      title: 'Bentota Adventure & River Safari Tour',
      highlights: ['Boat safari in Madu River', 'Water sports and mangrove exploration'],
      activities: [
        'Madu River mangrove boat safari',
        'Visit cinnamon island',
        'Turtle hatchery visit',
        'Fish therapy',
        'Jet ski / banana boat / water sports in Bentota'
      ],
      description: 'Most demanded day tour by tourists - adventure and nature combined.',
      image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '7-9 hours (Adjustable)'
      
    },
    {
      id: 7,
      title: 'Mirissa Whale Watching & Beach Day Tour',
      highlights: ['Famous whale watching location', 'Opportunity to see Blue Whales, Dolphins & Sperm Whales'],
      activities: [
        'Early morning Whale Watching Boat Safari',
        'Chance to see Blue Whales, Dolphins & Sperm Whales',
        'Relax at Mirissa Beach',
        'Visit Coconut Tree Hill viewpoint',
        'Optional snorkeling or swimming'
      ],
      description: 'One of the best whale watching locations in the world (November – April season).',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    },
    {
      id: 8,
      title: 'Hiriketiya Beach & Surf Day Tour',
      highlights: ['Beautiful horseshoe bay', 'Trending beach destination with great surfing'],
      activities: [
        'Surfing lessons for beginners',
        'Relax on the tropical beach',
        'Visit nearby Dikwella town',
        'Enjoy beach cafés and sunset views',
        'Optional snorkeling or swimming'
      ],
      description: 'Hiriketiya is becoming one of the trendiest beach destinations in Sri Lanka.',
      image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '7-9 hours (Adjustable)'
      
    },
    {
      id: 9,
      title: 'Colombo City Exploration Day Tour',
      highlights: ['Explore the capital city Colombo', 'Culture, shopping, and city life'],
      activities: [
        'Visit Gangaramaya Temple',
        'Walk around Galle Face Green',
        'Shopping in Pettah Market',
        'Photo stop at Lotus Tower',
        'Visit Independence Square',
        'Colombo street food tasting'
      ],
      description: 'Great for tourists who want to see culture, shopping, and city life in one day.',
      image: 'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '6-8 hours (Adjustable)'
      
    },
    {
      id: 10,
      title: 'Udawalawe Elephant Safari Day Tour',
      highlights: ['See large elephant herds', 'One of the best places to see wild elephants closely'],
      activities: [
        '4x4 jeep safari in the national park',
        'See large elephant herds',
        'Visit Udawalawe Elephant Transit Home',
        'Spot water buffalo, deer, crocodiles, birds',
        'Wildlife photography'
      ],
      description: 'This park is one of the best places in Sri Lanka to see wild elephants closely.',
      image: 'https://images.pexels.com/photos/17314505/pexels-photo-17314505.jpeg?auto=compress&cs=tinysrgb&w=1600',
      duration: '8-10 hours (Adjustable)'
      
    }
  ]

  const mostPopular = [1, 2, 4, 5, 6, 9]

  const handleWhatsApp = (tourTitle) => {
    const message = `Hello, I would like to book the "${tourTitle}" day tour. Please provide more details and pricing.`
    const whatsappNumber = '94764374114'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const toggleExpand = (id) => {
    setExpandedTour(expandedTour === id ? null : id)
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Day Tours in Sri Lanka</h1>
          <p className={styles.heroSubtitle}>Explore the best of Sri Lanka with our expertly crafted day tours</p>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.toursSection}>
          <div className={styles.container}>
            <TextReveal>
              <h2 className={styles.sectionTitle}>10 Amazing Day Tours</h2>
              <p className={styles.sectionSubtitle}>Choose from our most popular day tour experiences</p>
            </TextReveal>

            <StaggerReveal>
              <div className={styles.toursGrid}>
                {dayTours.map((tour, index) => (
                  <div key={tour.id} data-stagger>
                    <HoverLift className={`${styles.tourCard} ${expandedTour === tour.id ? styles.expanded : ''}`}>
                      <div className={styles.tourImage}>
                        <img src={tour.image} alt={tour.title} />
                        {mostPopular.includes(tour.id) && (
                          <span className={styles.badge}>Most Popular</span>
                        )}
                      </div>

                  <div className={styles.tourContent}>
                    <h3>{tour.title}</h3>
                    <p className={styles.duration}>{tour.duration}</p>
                    <p className={styles.price}>{tour.price}</p>
                    <p className={styles.description}>{tour.description}</p>

                    {expandedTour === tour.id && (
                      <div className={styles.expandedContent}>
                        <div className={styles.highlights}>
                          <h4>Highlights</h4>
                          <ul>
                            {tour.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>

                        <div className={styles.activities}>
                          <h4>Activities</h4>
                          <ul>
                            {tour.activities.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className={styles.tourFooter}>
                      <button
                        className={styles.expandBtn}
                        onClick={() => toggleExpand(tour.id)}
                      >
                        {expandedTour === tour.id ? 'Show Less ▲' : 'Show More ▼'}
                      </button>
                      <button
                        className={styles.whatsappBtn}
                        onClick={() => handleWhatsApp(tour.title)}
                      >
                        📱 Book Now
                      </button>
                    </div>
                    </div>
                  </HoverLift>
                </div>
              ))}
            </div>
            </StaggerReveal>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Ready to Book Your Day Tour?</h2>
            <p>Contact us for custom itineraries, group bookings, and special arrangements</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DayTours
