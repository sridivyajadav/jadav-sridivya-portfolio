# Jadav SriDivya — Portfolio

A high-performance single-page developer portfolio showcasing data analytics projects, SQL query optimization, reporting dashboards, and technical competencies.

**Live site:** https://jadav-sridivya-portfolio.vercel.app/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

## Tech Stack

- **React 19** — Component-driven frontend architecture
- **Vite** — Fast modern build tooling and hot module replacement
- **Tailwind CSS 4** — Modern utility-first styling engine
- **Framer Motion** — Fluid micro-interactions, badge physics, and entrance animations
- **AOS (Animate On Scroll)** — Scroll-triggered reveal animations
- **EmailJS** — Client-side direct contact form messaging
- **WebGL** — Interactive fluid splash cursor canvas effect

## Environment Variables

To enable contact form delivery via EmailJS, create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

> If these variables are omitted, the contact form automatically falls back to the user's default email client (`mailto:`).

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
