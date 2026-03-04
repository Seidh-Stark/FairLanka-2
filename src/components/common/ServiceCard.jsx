import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ icon, title, description, ctaText, ctaTo }) => {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.icon} aria-hidden dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {ctaText && ctaTo && (
        <div style={{ marginTop: 8 }}>
          <Link to={ctaTo} className="btn btn-primary">{ctaText}</Link>
        </div>
      )}
    </article>
  )
}

export default ServiceCard
