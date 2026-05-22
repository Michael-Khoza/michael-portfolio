# Michael Khoza — Portfolio

React + Supabase + Jotform AI

---

## 1. Install dependencies
```bash
npm install
```

## 2. Add your photo
Copy your photo to:
```
src/assets/michael.jpg
```

## 3. Set up environment variables
```bash
copy .env.example .env
```
Open `.env` and fill in:
- `VITE_SUPABASE_URL` — from Supabase dashboard → Settings → API
- `VITE_SUPABASE_ANON_KEY` — from same page (anon public key)
- `VITE_JOTFORM_AGENT_URL` — from Jotform → your AI Agent → Publish → Embed → copy the iframe `src` URL

## 4. Set up Supabase table
1. Go to supabase.com → your project → SQL Editor
2. Paste the contents of `supabase_setup.sql` and click Run

## 5. Set up Jotform AI Agent
1. Go to jotform.com → Create → AI Agent
2. Train it: paste your bio, skills, experience, and contact info
3. Connect Gmail: inside Jotform Agent → Integrations → Gmail → authorise
4. Publish → Embed → copy the iframe `src` URL
5. Paste that URL into your `.env` as VITE_JOTFORM_AGENT_URL

## 6. Run locally
```bash
npm run dev
```
Visit http://localhost:5173

## 7. Deploy to Vercel (free)
```bash
npm install -g vercel
vercel
```
Add your 3 env vars in Vercel dashboard → Project → Settings → Environment Variables

---

## Project structure
```
src/
  assets/        ← put michael.jpg here
  components/
    Navbar.jsx / .module.css
    Hero.jsx   / .module.css
    About.jsx  / .module.css
    Skills.jsx / .module.css
    Credentials.jsx / .module.css
    Experience.jsx  / .module.css
    AIAgent.jsx     / .module.css   ← Jotform iframe lives here
    Contact.jsx     / .module.css   ← saves to Supabase
    Footer.jsx      / .module.css
  lib/
    supabase.js    ← Supabase client
  App.jsx
  main.jsx
  index.css
.env.example
supabase_setup.sql
```
