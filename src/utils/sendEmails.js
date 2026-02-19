import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendOrderEmails(form, cart, totalPrice) {
  const orderId = Math.floor(Math.random() * 900000 + 100000)

  const orderItems = cart.map(item => ({
    name: item.name,
    units: item.quantity,
    price: (item.price * item.quantity).toFixed(2),
    image_url: ''
  }))

  // Customer Email
  await emailjs.send(SERVICE_ID, CUSTOMER_TEMPLATE_ID, {
    order_id: orderId,
    to_email: form.email,
    email: form.email,
    orders: orderItems,
    cost: {
      shipping: '0.00',
      tax: 'Included',
      total: totalPrice.toFixed(2)
    }
  }, PUBLIC_KEY)

  // Owner Email
  await emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, {
    order_id: orderId,
    to_email: 'OWNER_EMAIL_HERE',
    email: 'OWNER_EMAIL_HERE',
    customer_name: form.name,
    customer_email: form.email,
    customer_phone: form.phone,
    orders: orderItems,
    cost: {
      shipping: '0.00',
      tax: 'Included',
      total: totalPrice.toFixed(2)
    },
    delivery_method: form.method === 'delivery' ? 'Home Delivery' : 'Click & Collect',
    delivery_address: form.method === 'delivery' ? `${form.address}, ${form.postcode}` : 'Click & Collect',
    notes: form.notes || 'None'
  }, PUBLIC_KEY)

  return orderId
}