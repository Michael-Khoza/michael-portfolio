import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/* ── Send contact form email ───────────────────────────────────────────────
   Setup steps:
   1. Go to https://www.emailjs.com — create free account
   2. Add a Gmail service → copy Service ID
   3. Create a template with these variables:
        {{from_name}}  {{from_email}}  {{subject}}  {{message}}  {{to_name}}
      Set "To Email" to: khozamichael21@gmail.com
   4. Copy Template ID + Public Key into your .env
──────────────────────────────────────────────────────────────────────────── */
export async function sendContactEmail({ name, email, subject, message }) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name:  name,
      from_email: email,
      subject:    subject || 'Portfolio Contact',
      message,
      to_name:    'Michael Khoza',
    },
    PUBLIC_KEY
  )
}
