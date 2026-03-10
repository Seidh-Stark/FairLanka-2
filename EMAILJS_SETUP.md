EmailJS Setup

1) Create an EmailJS account at https://www.emailjs.com/
2) Add an Email Service (e.g., Gmail via OAuth or SMTP). Note the service ID (e.g., `service_xxx`).
3) Create an Email Template. Include template variables used in `Contact.jsx`:
   - `from_name`
   - `from_email`
   - `phone`
   - `country`
   - `message`
   Set the template's recipient to your Gmail: mbyoonusahamed@gmail.com
4) Get your Public Key (User ID) from the EmailJS dashboard.
5) Create a `.env` file at the project root with these variables (Vite uses `VITE_` prefix):

VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx

6) Restart the dev server (`npm run dev`) or rebuild for preview.
7) Test the contact form on the site. Submissions are saved to Supabase and an email is sent via EmailJS.

Notes
- If you prefer not to expose the public key in source, use Netlify/Vercel environment variables when deploying.
- EmailJS public key is intended for client usage; do not commit real secrets to version control.
