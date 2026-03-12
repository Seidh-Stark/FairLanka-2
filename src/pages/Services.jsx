import { Link } from 'react-router-dom'
import styles from './Services.module.css'
import ServiceCard from '../components/common/ServiceCard'

const whatsappNumber = '94764374114'

const services = [
  {
    id: 'airport-transfer',
    title: 'Airport Transfer',
    description: 'Comfortable and safe airport transfers with professional drivers.',
    benefits: ['Meet & greet', 'Modern vehicles', 'Flight tracking'],
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%20would%20like%20to%20book%20an%20Airport%20Transfer.%20Please%20provide%20more%20details.'
  },
  {
    id: 'tour-packages',
    title: 'Tour Packages',
    description: 'Tailored round tours to explore the best of Sri Lanka.',
    benefits: ['Custom itineraries', 'Local guides', 'Memorable experiences'],
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%27m%20interested%20in%20your%20Tour%20Packages.%20Can%20you%20share%20more%20information%3F'
  },
  {
    id: 'day-tour',
    title: 'Day Tour',
    description: 'Exciting day tours to discover Sri Lanka\'s hidden gems.',
    benefits: ['Flexible schedules', 'Expert guides', 'Cultural insights'],
    image: 'https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%20would%20like%20to%20book%20a%20Day%20Tour%20in%20Sri%20Lanka.'
  },
  {
    id: 'intercity-transfers',
    title: 'Intercity Transfers',
    description: 'Reliable intercity transfers across Sri Lanka.',
    benefits: ['Comfortable rides', 'Punctual service', 'Safe travel'],
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%20need%20an%20Intercity%20Transfer%20in%20Sri%20Lanka.%20Please%20assist.'
  },
  {
    id: 'safaris',
    title: 'Safaris in Sri Lanka',
    description: 'Thrilling wildlife safaris to see Sri Lanka\'s amazing animals.',
    benefits: ['Wildlife spotting', 'Experienced guides', 'Adventure'],
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%27m%20interested%20in%20booking%20a%20Safari%20in%20Sri%20Lanka.'
  },
  {
    id: 'hotel-bookings',
    title: 'Hotel Bookings',
    description: 'Luxury resorts, boutique hotels, and budget stays across Sri Lanka.',
    benefits: ['Curated properties', 'Exclusive rates', 'Personalized stays'],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%20need%20help%20with%20Hotel%20Bookings%20in%20Sri%20Lanka.'
  },
  {
    id: 'flight-bookings',
    title: 'Flight Bookings',
    description: 'Book international and domestic flights at competitive prices.',
    benefits: ['Best fare matching', '24/7 support', 'Flexible cancellations'],
    image: 'https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=1600',
    message: 'Hello%2C%20I%20would%20like%20assistance%20with%20Flight%20Bookings.'
  }
]

const Services = () => {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Complete Travel Services in Sri Lanka</h1>
          <p>End-to-end travel solutions — from flights and hotels to visas and transfers.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>

      <main>
        {services.map((s, idx) => (
          <section key={s.id} className={`${styles.serviceSection} ${idx % 2 === 0 ? '' : styles.alt}`}>
            <div className={`${styles.container} ${styles.card}`} style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className={styles.left}>
                <img src={s.image} alt={s.title} className={styles.image} />
              </div>
              <div className={styles.right}>
                <h2>{s.title}</h2>
                <p className={styles.lead}>{s.description}</p>
                <ul className={styles.benefits}>
                  {s.benefits.map((b) => (<li key={b}>{b}</li>))}
                </ul>
                <p className={styles.text}>We tailor this service to your needs and make sure every detail is handled professionally.</p>
                <a href={`https://wa.me/${whatsappNumber}?text=${s.message}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book</a>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default Services
