import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'
import { FaTrash } from 'react-icons/fa'

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty!</h2>
        <Link to="/products" className="continue-btn">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>£{item.price.toFixed(2)} each</p>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <FaTrash
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
            <div className="cart-item-total">
              £{(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: £{totalPrice.toFixed(2)}</h3>
        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
      </div>
    </div>
  )
}

export default Cart