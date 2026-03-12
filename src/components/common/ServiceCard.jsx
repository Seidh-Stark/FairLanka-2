import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ icon, title, description, ctaText, ctaTo, ctaAction }) => {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.icon} aria-hidden dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {ctaText && (ctaTo || ctaAction) && (
        <div style={{ marginTop: 8 }}>
          {ctaTo ? (
            <Link to={ctaTo} className="btn btn-primary">{ctaText}</Link>
          ) : (
            <button onClick={ctaAction} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>{ctaText}</button>
          )}
        </div>
      )}
    </article>
  )
}

export default ServiceCard
