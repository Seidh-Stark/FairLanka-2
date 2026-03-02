import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/AppContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Packages from './pages/Packages'
import PackageDetail from './pages/PackageDetail'
import Activities from './pages/Activities'
import About from './pages/About'
import TravelGuide from './pages/TravelGuide'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Services from './pages/Services'
import './styles/global.css'

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:slug" element={<DestinationDetail />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:slug" element={<PackageDetail />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/about" element={<About />} />
              <Route path="/travel-guide" element={<TravelGuide />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Layout>
        </Router>
      </AppProvider>
    </AuthProvider>
  )
}

export default App
