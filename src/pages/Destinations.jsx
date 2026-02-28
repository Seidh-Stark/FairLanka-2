import { useState, useEffect } from 'react'
import DestinationCard from '../components/common/DestinationCard'
import { destinationService } from '../services/destinationService'
import styles from './Destinations.module.css'

const Destinations = () => {
  const [destinations, setDestinations] = useState([])
  const [filteredDestinations, setFilteredDestinations] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Cultural', 'Beach', 'Wildlife', 'Adventure', 'Hill Country']

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await destinationService.getAll()
        setDestinations(data || [])
        setFilteredDestinations(data || [])
      } catch (error) {
        console.error('Error fetching destinations:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredDestinations(destinations)
    } else {
      setFilteredDestinations(
        destinations.filter(dest => dest.category === selectedCategory)
      )
    }
  }, [selectedCategory, destinations])

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Destinations</h1>
          <p>Explore the breathtaking beauty of Sri Lanka</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  selectedCategory === category ? styles.active : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <p className={styles.loading}>Loading destinations...</p>
          ) : filteredDestinations.length > 0 ? (
            <div className="grid grid-3">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          ) : (
            <p className={styles.noResults}>No destinations found in this category.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Destinations
