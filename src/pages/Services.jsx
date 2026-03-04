import { Link } from 'react-router-dom'
import styles from './Services.module.css'
import ServiceCard from '../components/common/ServiceCard'

const services = [
  {
    id: 'flight',
    title: 'Flight Booking',
    description: 'Book international and domestic flights at competitive prices with trusted airline partners.',
    benefits: ['Best fare matching', '24/7 support', 'Flexible cancellations'],
    image: 'https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'hotel',
    title: 'Hotel Booking',
    description: 'Luxury resorts, boutique hotels, and budget stays across Sri Lanka.',
    benefits: ['Curated properties', 'Exclusive rates', 'Personalized stays'],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'visa',
    title: 'Visa Assistance',
    description: 'Professional support for tourist visa processing and travel documentation.',
    benefits: ['ETA application support', 'Document review', 'Fast turnaround'],
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'pickup',
    title: 'Airport Pickup',
    description: 'Comfortable and safe airport transfers with professional drivers.',
    benefits: ['Meet & greet', 'Modern vehicles', 'Flight tracking'],
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'tours',
    title: 'Round tours, Day tours, Safaris',
    description: 'Tailored round tours, day tours and wildlife safaris to explore the best of Sri Lanka.',
    benefits: ['Custom itineraries', 'Local guides', 'Wildlife spotting'],
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600'
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
          <section key={s.id} className={`${styles.serviceSection} ${idx % 2 === 0 ? '' : styles.alt}`} id={s.id}>
            <div className={styles.container}>
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
                <Link to="/contact" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default Services
