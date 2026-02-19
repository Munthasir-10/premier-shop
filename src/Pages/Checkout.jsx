import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { sendOrderEmails } from '../utils/sendEmails'
import './Checkout.css'
import { FaTruck, FaStore } from 'react-icons/fa'

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    method: 'delivery',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const id = await sendOrderEmails(form, cart, totalPrice)
      setOrderId(id)
      setSubmitted(true)
      clearCart()
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  if (cart.length === 0 && !submitted) {
    navigate('/products')
    return null
  }

  if (submitted) {
    return (
      <div className="order-success">
        <div className="success-box">
          <h2>🎉 Order Placed!</h2>
          <p>Thank you <strong>{form.name}</strong>! Your order <strong>#{orderId}</strong> has been received.</p>
          {form.method === 'delivery'
            ? <p>We will deliver to <strong>{form.address}, {form.postcode}</strong> shortly.</p>
            : <p>Your order will be ready for <strong>Click & Collect</strong> shortly.</p>
          }
          <p>A confirmation email has been sent to <strong>{form.email}</strong></p>
          <button onClick={() => navigate('/products')} className="back-btn">
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-container">

        <form className="checkout-form" onSubmit={handleSubmit}>

          <div className="method-select">
            <div
              className={`method-card ${form.method === 'delivery' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, method: 'delivery' })}
            >
              <FaTruck size={24} />
              <span>Home Delivery</span>
            </div>
            <div
              className={`method-card ${form.method === 'collect' ? 'active' : ''}`}
              onClick={() => setForm({ ...form, method: 'collect' })}
            >
              <FaStore size={24} />
              <span>Click & Collect</span>
            </div>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          {form.method === 'delivery' && (
            <>
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={form.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="postcode"
                placeholder="Postcode"
                value={form.postcode}
                onChange={handleChange}
                required
              />
            </>
          )}

          <textarea
            name="notes"
            placeholder="Any special notes? (optional)"
            value={form.notes}
            onChange={handleChange}
            rows={3}
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="place-order-btn" disabled={loading}>
            {loading ? 'Placing Order...' : `Place Order — £${totalPrice.toFixed(2)}`}
          </button>

        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x{item.quantity}</span>
              <span>£{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-total">
            <span>Total</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout