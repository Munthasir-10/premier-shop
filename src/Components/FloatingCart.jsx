import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'
import './FloatingCart.css'

function FloatingCart() {
  const { totalItems, totalPrice } = useCart()
  const navigate = useNavigate()

  if (totalItems === 0) return null

  return (
    <div className="floating-cart" onClick={() => navigate('/cart')}>
      <FaShoppingCart size={22} />
      <span className="floating-cart-count">{totalItems} items</span>
      <span className="floating-cart-price">£{totalPrice.toFixed(2)}</span>
    </div>
  )
}

export default FloatingCart