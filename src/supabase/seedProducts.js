import { supabase } from './supabase'
import products from '../data/products'

export async function seedProducts() {
  const { data, error } = await supabase
    .from('products')
    .insert(products.map(p => ({
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description
    })))

  if (error) {
    console.error('Error seeding products:', error)
  } else {
    console.log('Products uploaded successfully!', data)
  }
}