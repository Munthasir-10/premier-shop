import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE;
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const OWNER_EMAIL = 'munthasir1010@gmail.com';

export async function sendOrderEmails(form, cart, totalPrice) {
  const orderId = Math.floor(Math.random() * 900000 + 100000);

  const orderItems = cart.map((item) => ({
    name: item.name,
    units: item.quantity,
    price: (item.price * item.quantity).toFixed(2),
    image_url: "",
  }));

  // DEBUG - check values before sending
  console.log('SERVICE_ID:', SERVICE_ID)
  console.log('CUSTOMER_TEMPLATE_ID:', CUSTOMER_TEMPLATE_ID)
  console.log('OWNER_TEMPLATE_ID:', OWNER_TEMPLATE_ID)
  console.log('PUBLIC_KEY:', PUBLIC_KEY)
  console.log('Customer email:', form.email)
  console.log('Owner email:', OWNER_EMAIL)

  // Customer Email
  try {
    await emailjs.send(
      SERVICE_ID,
      CUSTOMER_TEMPLATE_ID,
      {
        order_id: orderId,
        to_email: form.email,
        email: form.email,
        orders: orderItems,
        cost: {
          shipping: "0.00",
          tax: "Included",
          total: totalPrice.toFixed(2),
        },
      },
      PUBLIC_KEY,
    );
    console.log('Customer email sent successfully!')
  } catch (err) {
    console.error('Customer email failed:', err)
  }

  // Owner Email
  try {
    await emailjs.send(
      SERVICE_ID,
      OWNER_TEMPLATE_ID,
      {
        order_id: orderId,
        to_email: OWNER_EMAIL,
        email: OWNER_EMAIL,
        customer_name: form.name,
        customer_email: form.email,
        customer_phone: form.phone,
        orders: orderItems,
        cost: {
          shipping: "0.00",
          tax: "Included",
          total: totalPrice.toFixed(2),
        },
        delivery_method:
          form.method === "delivery" ? "Home Delivery" : "Click & Collect",
        delivery_address:
          form.method === "delivery"
            ? `${form.address}, ${form.postcode}`
            : "Click & Collect",
        notes: form.notes || "None",
      },
      PUBLIC_KEY,
    );
    console.log('Owner email sent successfully!')
  } catch (err) {
    console.error('Owner email failed:', err)
  }

  return orderId;
}