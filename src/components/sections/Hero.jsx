import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Discover the Pearl of the Indian Ocean</h1>
          <p className={styles.subtitle}>
            Experience the magic of Sri Lanka with expertly crafted tours and
            unforgettable adventures
          </p>
          <div className={styles.buttons}>
            <Link to="/packages" className="btn btn-primary">
              Explore Packages
            </Link>
            <Link to="/destinations" className="btn btn-outline">
              View Destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
