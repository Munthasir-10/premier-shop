import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase/supabase'
import { useCart } from '../context/CartContext'
import './Products.css'
import { FaShoppingCart } from 'react-icons/fa'

function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(['All'])
  const [selected, setSelected] = useState('All')
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart()

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')

    if (error) {
      console.error('Error fetching products:', error)
    } else {
      setProducts(data)
      const cats = ['All', ...new Set(data.map(p => p.category))]
      setCategories(cats)
    }
    setLoading(false)
  }

  const filtered = selected === 'All' ? products : products.filter(p => p.category === selected)

  if (loading) return <div className="loading">Loading products...</div>

  return (
    <div className="products-page">
      <h2 className="products-title">Our Products</h2>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selected === cat ? 'active' : ''}`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-category">{product.category}</div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-footer">
              <span className="product-price">£{product.price.toFixed(2)}</span>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                <FaShoppingCart /> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products