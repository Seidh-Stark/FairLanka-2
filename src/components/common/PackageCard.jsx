import { Link } from 'react-router-dom'
import { ImageReveal } from '../ScrollAnimations'
import styles from './PackageCard.module.css'

const PackageCard = ({ package: pkg }) => {
  return (
    <Link to={`/packages/${pkg.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <ImageReveal>
          <img src={pkg.image || pkg.image_url} alt={pkg.title} className={styles.image} />
        </ImageReveal>
        <div className={styles.badge}>
          <span className={styles.duration}>{pkg.duration}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.category}>{pkg.category}</span>
          <span className={styles.price}>${pkg.price}</span>
        </div>
        <h3 className={styles.title}>{pkg.title}</h3>
        <p className={styles.description}>{pkg.short_description}</p>
        {pkg.highlights && pkg.highlights.length > 0 && (
          <ul className={styles.highlights}>
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
        <span className={styles.link}>View Details →</span>
      </div>
    </Link>
  )
}

export default PackageCard
