import { ImageReveal } from '../ScrollAnimations'
import styles from './ActivityCard.module.css'

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <ImageReveal>
          <img src={activity.image} alt={activity.title} className={styles.image} />
        </ImageReveal>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{activity.title}</h3>
        <p className={styles.description}>{activity.description}</p>
      </div>
    </div>
  )
}

export default ActivityCard
