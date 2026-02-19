import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import FloatingCart from './Components/FloatingCart'
import AgeVerification from './Components/AgeVerification'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <AgeVerification />
      <Navbar />
      <FloatingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App