import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ testimonial, featured = false }) => {
  const renderStars = (rating = 5) => {
    return '★'.repeat(Math.min(5, rating)) + '☆'.repeat(Math.max(0, 5 - rating))
  }

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.topRow}>
        <span className={styles.source}>{testimonial.source || 'Traveler Review'}</span>
        <span className={styles.tripBadge}>Tripadvisor</span>
      </div>

      <div className={styles.ratingRow}>
        <div className={styles.rating}>{renderStars(testimonial.rating)}</div>
        <span className={styles.verified}>Verified Traveler</span>
      </div>

      <p className={styles.review}>“{testimonial.review}”</p>

      <div className={styles.customer}>
        {testimonial.customer_photo && (
          <img
            src={testimonial.customer_photo}
            alt={testimonial.customer_name}
            className={styles.photo}
          />
        )}
        <div className={styles.info}>
          <h4 className={styles.name}>{testimonial.customer_name}</h4>
          <p className={styles.country}>{testimonial.customer_country}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
