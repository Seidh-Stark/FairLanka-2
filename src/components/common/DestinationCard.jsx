import { Link } from 'react-router-dom'
import styles from './DestinationCard.module.css'

const DestinationCard = ({ destination }) => {
  return (
    <Link to={`/destinations/${destination.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={destination.image_url} alt={destination.name} className={styles.image} />
        <div className={styles.overlay}>
          <span className={styles.category}>{destination.category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{destination.name}</h3>
        <p className={styles.description}>{destination.short_description}</p>
        <span className={styles.link}>Explore Destination →</span>
      </div>
    </Link>
  )
}

export default DestinationCard
