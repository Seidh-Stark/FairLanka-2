import styles from './TestimonialCard.module.css'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <div className={styles.card}>
      <div className={styles.rating}>{renderStars(testimonial.rating)}</div>
      <p className={styles.review}>{testimonial.review}</p>
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
