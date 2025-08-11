import React, { useState } from 'react'

const EMAIL = 'precisionphysiocardiff@outlook.com'
const INSTA = 'precision_physiocardiff'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Precision Physiotherapy Cardiff" className="h-8 w-auto" />
          <span className="sr-only">Precision Physiotherapy Cardiff</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
          <a href="#contact" className="btn btn-primary ml-2">Book</a>
        </nav>
        <div className="md:hidden">
          <a href="#contact" className="btn btn-primary text-sm">Book</a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      className="relative"
      style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
          Precision Physiotherapy Cardiff
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-100 max-w-2xl">
          Specialist MSK & Sports Physiotherapy in Cardiff — evidence-based treatment and personalised rehab.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="btn btn-primary shadow-soft"
            href={`mailto:${EMAIL}?subject=Appointment%20Enquiry%20-%20Precision%20Physiotherapy%20Cardiff`}
          >
            Book via Email
          </a>
          <a
            className="btn btn-outline bg-white/10 backdrop-blur border-white/60 text-white"
            href={`https://instagram.com/${INSTA}`}
            target="_blank" rel="noreferrer"
          >
            Book via Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { t: 'MSK Outpatients', d: 'Assessment, hands-on treatment, and individual exercise prescription for MSK conditions.' },
    { t: 'First Contact Practitioner', d: 'Rapid assessment and management, reducing GP wait and speeding up care.' },
    { t: 'Sports Rehab & S&C', d: 'Return-to-play planning and strength & conditioning for football and rugby.' },
    { t: 'Injection Screening', d: 'Clinical assessment and screening for injection therapy (where available).' },
    { t: 'Teleconsultation', d: 'Remote sessions for progress checks, exercise updates, and triage.' },
    { t: 'Rehab Classes', d: 'Small-group or 1:1 sessions focusing on lasting strength and movement quality.' },
  ]
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="text-gray-600 mt-2">Clinic & mobile services tailored to athletes, weekend warriors, and anyone wanting reliable pain-free movement.</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <div key={i} className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
            <h3 className="font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            <div className="mt-4">
              <a href="#contact" className="text-brand text-sm">Enquire</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold">About Precision Physiotherapy Cardiff</h2>
          <p className="mt-3 text-gray-600">Led by a clinical specialist physiotherapist with 9+ years NHS MSK experience and extensive sports physio work. Precision-focused assessments and a pragmatic approach to return-to-sport and daily function.</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <li>• Advanced MSK master's modules</li>
            <li>• Injection therapy trained (where available)</li>
            <li>• FCP clinic experience</li>
            <li>• Mentoring & team leadership</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn btn-primary">Book a consultation</a>
            <a href={`https://instagram.com/${INSTA}`} target="_blank" rel="noreferrer" className="text-brand text-sm">Follow on Instagram</a>
          </div>
        </div>
        <div className="space-y-4">
          <Testimonial quote="Saved my season — fantastic rehab and clear plans to get me back on the pitch." author="A. Lewis, amateur footballer" />
          <Testimonial quote="Thorough assessment and excellent exercise guidance. Professional and personalised." author="J. Patel" />
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-gray-600">Use the form or choose a booking option below. We’ll reply within 48 hours.</p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary"
              href={`mailto:${EMAIL}?subject=Appointment%20Enquiry%20-%20Precision%20Physiotherapy%20Cardiff`}>Book via Email</a>
            <a className="btn btn-outline"
              href={`https://instagram.com/${INSTA}`} target="_blank" rel="noreferrer">Book via Instagram</a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you.html" className="space-y-4">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm text-gray-700 flex flex-col">
                Name
                <input name="name" required className="mt-1 rounded-md border-gray-200 shadow-sm focus:ring-brand focus:border-brand" />
              </label>
              <label className="text-sm text-gray-700 flex flex-col">
                Email
                <input name="email" type="email" required className="mt-1 rounded-md border-gray-200 shadow-sm focus:ring-brand focus:border-brand" />
              </label>
            </div>
            <label className="text-sm text-gray-700 flex flex-col">
              Phone (optional)
              <input name="phone" className="mt-1 rounded-md border-gray-200 shadow-sm focus:ring-brand focus:border-brand" />
            </label>
            <label className="text-sm text-gray-700 flex flex-col">
              Message
              <textarea name="message" rows="4" required className="mt-1 rounded-md border-gray-200 shadow-sm focus:ring-brand focus:border-brand" />
            </label>
            <div className="flex items-center gap-3">
              <button type="submit" className="btn btn-primary">Send message</button>
              <span className="text-sm text-gray-500">We’ll reply by email.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Testimonial({ quote, author }) {
  return (
    <blockquote className="rounded-xl p-4 bg-brand/5 border-l-4 border-brand/30">
      <p className="text-gray-800">“{quote}”</p>
      <footer className="mt-2 text-sm text-gray-600">— {author}</footer>
    </blockquote>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Precision Physiotherapy Cardiff</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="hover:text-brand">Services</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
          <a href={`https://instagram.com/${INSTA}`} target="_blank" rel="noreferrer" className="hover:text-brand">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
