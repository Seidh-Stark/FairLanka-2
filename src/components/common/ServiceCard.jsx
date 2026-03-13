import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

const ServiceCard = ({ imageSrc, icon, iconSrc, title, description, ctaText, ctaTo, ctaAction }) => {
  return (
    <article className={styles.card} tabIndex={0}>
      {imageSrc ? (
        <div className={styles.cardImage} aria-hidden>
          <img src={imageSrc} alt={title} />
        </div>
      ) : (
        <div className={styles.icon} aria-hidden>
          {iconSrc ? (
            <img src={iconSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
          ) : (
            <span dangerouslySetInnerHTML={{ __html: icon }} />
          )}
        </div>
      )}
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
