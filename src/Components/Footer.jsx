import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Premier</h2>
          <p>Your local off licence in the heart of the community. Quality products, great prices.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 123 High Street, London, UK</p>
          <p><FaPhone /> 07700 900000</p>
          <p><FaEnvelope /> premier@gmail.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-hours">
          <h3>Opening Hours</h3>
          <p><FaClock /> Mon - Sat: 8am - 10pm</p>
          <p><FaClock /> Sunday: 10am - 8pm</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Premier Off Licence. All rights reserved.</p>
        <p>Please drink responsibly. 18+ only.</p>
      </div>
    </footer>
  )
}

export default Footer