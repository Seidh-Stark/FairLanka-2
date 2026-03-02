import { useState } from 'react'
import { inquiryService } from '../services/inquiryService'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await inquiryService.create(formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      })
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.')
      console.error('Error submitting inquiry:', err)
    } finally {
      setSubmitting(false)
    }
  }

  const whatsappNumber = '+94769132482'
  const whatsappMessage = 'Hello! I would like to inquire about your tour packages.'
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+','')}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>Get in touch and let us help plan your perfect Sri Lankan adventure</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.info}>
              <h2>Get in Touch</h2>
              <p>
                Have questions about our tours or need help planning your trip? We're here
                to help! Fill out the form or reach out to us directly.
              </p>

              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <h3>Email</h3>
                  <p>info@fairlanka.com</p>
                </div>
                <div className={styles.detail}>
                  <h3>Phone</h3>
                  <p>+94 76 913 2482</p>
                </div>
                <div className={styles.detail}>
                  <h3>WhatsApp</h3>
                  <p>+94 76 913 2482</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ marginTop: '12px' }}
                  >
                    Message on WhatsApp
                  </a>
                </div>
                <div className={styles.detail}>
                  <h3>Find Us</h3>
                  <p>
                    <a href="https://maps.google.com?q=Fair%20Lanka%20Travels,%20No.18/1%20Muhudu%20Mawatha,%20Weligama%2081700&ftid=0xd0cfe818e651a37:0x7b6f3d3c35705649&entry=gps&shh=CAE&lucs=,94297699,94284463,94231188,94280568,47071704,94218641,94282134,94286869&g_st=ic" target="_blank" rel="noopener noreferrer">
                      Google Maps
                    </a><br />
                    <a href="https://www.tripadvisor.com/Attraction_Review-g612380-d33497525-Reviews-Fair_Lanka_Travels-Weligama_Matara_Southern_Province.html" target="_blank" rel="noopener noreferrer">
                      Trip Advisor
                    </a><br />
                    <a href="https://www.facebook.com/share/1HFFgBN7x8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a><br />
                    <a href="https://www.instagram.com/fairlankatravels?igsh=NHh4ZWQzdG8yY2s2" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </p>
                </div>
                <div className={styles.detail}>
                  <h3>Office</h3>
                  <p>123 Galle Road<br />Colombo 03<br />Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>Thank You!</h3>
                  <p>
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2>Send us a Message</h2>

                  {error && <div className={styles.error}>{error}</div>}

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                    style={{ width: '100%' }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
