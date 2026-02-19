import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { FaTruck, FaStore, FaShieldAlt } from 'react-icons/fa'

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to <span>Premier</span></h1>
        <p>Your local off licence — spirits, beers, wines & more delivered to your door or ready to collect!</p>
        <Link to="/products" className="hero-btn">Shop Now</Link>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <FaTruck size={40} color="#e94560" />
          <h3>Home Delivery</h3>
          <p>Get your order delivered straight to your door.</p>
        </div>
        <div className="feature-card">
          <FaStore size={40} color="#e94560" />
          <h3>Click & Collect</h3>
          <p>Order online and pick up from our store.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt size={40} color="#e94560" />
          <h3>18+ Only</h3>
          <p>We are committed to responsible retailing.</p>
        </div>
      </div>

    </div>
  )
}

export default Home