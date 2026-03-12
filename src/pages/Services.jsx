import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const Services = () => {
  const whatsappNumber = '94764374114'

  const handleWhatsApp = (serviceTitle, message) => {
    const fullMessage = `${message}`
    const encodedMessage = encodeURIComponent(fullMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const services = [
    {
      id: 1,
      title: 'Airport Transfer',
      description: 'Comfortable and reliable airport transfers with professional drivers. Safe, timely, and hassle-free transportation from airport to your hotel or destination.',
      image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'whatsapp',
      message: 'Hello, I would like to book an Airport Transfer. Please provide more details',
      buttonText: '📱 Book Now'
    },
    {
      id: 2,
      title: 'Tour Packages',
      description: 'Handpicked round-trip tour packages to explore the best of Sri Lanka. From cultural heritage tours to adventure packages, we have something for everyone.',
      image: 'https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'link',
      link: '/packages',
      buttonText: '→ View All'
    },
    {
      id: 3,
      title: 'Day Tours',
      description: 'Exciting day tours to Sri Lanka\'s most popular destinations. Visit Sigiriya, Kandy, Galle, Yala Safari, Ella, and more in expertly guided day trips.',
      image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=1600',
      type: 'link',
      link: '/day-tours',
      buttonText: '→ View All'
    },
    {
      id: 4,
      title: 'Intercity Transfers',
      description: 'Convenient transfers between major cities and towns. Travel between Colombo, Kandy, Galle, Mirissa, Ella, and other destinations with comfort and ease.',
      image: 'https://images.pexels.com/photos/3595925/pexels-photo-3595925.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'whatsapp',
      message: 'Hello, I need information about Intercity Transfers',
      buttonText: '📱 Book Now'
    },
    {
      id: 5,
      title: 'Safaris In Sri Lanka',
      description: 'Thrilling wildlife safaris in Yala, Udawalawe, and other national parks. Spot leopards, elephants, crocodiles, and exotic birds in their natural habitat.',
      image: 'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'link',
      link: '/destinations?category=wildlife',
      buttonText: '→ View All'
    },
    {
      id: 6,
      title: 'Hotel Bookings',
      description: 'Book luxury resorts, boutique hotels, and budget accommodations across Sri Lanka. Find the perfect place to stay for your budget and preferences.',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'link',
      link: '/hotel-bookings',
      buttonText: '→ View Options'
    },
    {
      id: 7,
      title: 'Flight Bookings',
      description: 'Book international and domestic flights at competitive prices with trusted airline partners. Find best fares for flights to and from Sri Lanka.',
      image: 'https://images.pexels.com/photos/46148/airport-terminal-building-sky-46148.jpeg?auto=compress&cs=tinysrgb&w=1600',
      type: 'link',
      link: '/flight-bookings',
      buttonText: '→ View Options'
    }
  ]

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Premium Travel Services</h1>
          <p className={styles.heroSubtitle}>Complete travel solutions for a smooth and unforgettable Sri Lanka experience</p>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>7 Essential Travel Services</h2>
            <p className={styles.sectionSubtitle}>Choose the services you need for your perfect Sri Lankan adventure</p>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={service.id} className={styles.serviceCard} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className={styles.serviceFooter}>
                      {service.type === 'whatsapp' ? (
                        <button
                          className={styles.whatsappBtn}
                          onClick={() => handleWhatsApp(service.title, service.message)}
                        >
                          {service.buttonText}
                        </button>
                      ) : (
                        <Link to={service.link} className={styles.viewBtn}>
                          {service.buttonText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2>Need Help Choosing a Service?</h2>
            <p>Our travel experts are here to help you plan the perfect Sri Lankan experience</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services
