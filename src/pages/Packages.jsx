import { useState, useEffect } from 'react'
import PackageCard from '../components/common/PackageCard'
import { packageService } from '../services/packageService'
import styles from './Destinations.module.css'

const Packages = () => {
  const [packages, setPackages] = useState([])
  const [filteredPackages, setFilteredPackages] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  const categories = ['All', 'Day Tour', 'Multi-Day', 'Adventure', 'Luxury', 'Cultural']

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await packageService.getAll()
        setPackages(data || [])
        setFilteredPackages(data || [])
      } catch (error) {
        console.error('Error fetching packages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPackages(packages)
    } else {
      setFilteredPackages(
        packages.filter(pkg => pkg.category === selectedCategory)
      )
    }
  }, [selectedCategory, packages])

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Tour Packages</h1>
          <p>Discover our curated travel experiences across Sri Lanka</p>
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
            <p className={styles.loading}>Loading packages...</p>
          ) : filteredPackages.length > 0 ? (
            <div className="grid grid-3">
              {filteredPackages.map(pkg => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          ) : (
            <p className={styles.noResults}>No packages found in this category.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default Packages
