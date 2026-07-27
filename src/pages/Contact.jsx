import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Headphones, ShieldCheck, Clock, MapPin, Phone, Mail, Send,
  Facebook, Instagram, Twitter, Youtube, Linkedin, CheckCircle2,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import contactHero from '../assets/contact-hero-truck.png'
import { CONTACT } from '../data/siteData'

const perks = [
  { t: '24/7 Support', icon: Headphones },
  { t: 'Safe & Secure', icon: ShieldCheck },
  { t: 'On-Time Delivery', icon: Clock },
  { t: 'Pan India Service', icon: MapPin },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', from: '', to: '', date: '', service: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^\d{10}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (!form.from.trim()) e.from = 'Please enter moving from city'
    if (!form.to.trim()) e.to = 'Please enter moving to city'
    if (!form.message.trim()) e.message = 'Please enter a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: '', mobile: '', email: '', from: '', to: '', date: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const inputClass = (err) =>
    `w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/40 transition-shadow ${
      err ? 'border-red-400' : 'border-gray-200 focus:border-orange'
    }`

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">CONTACT US</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              We're Here to<br />Help You <span className="text-orange">Move</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md mb-6">
              Have a question or need a moving quote? Our team is ready to assist you. Get in touch with us today!
            </p>
            <div className="flex flex-wrap gap-6">
              {perks.map((p) => (
                <div key={p.t} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                    <p.icon size={19} />
                  </div>
                  <span className="text-xs font-medium text-navy">{p.t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={contactHero} alt="Elite Cargo delivery truck by the waterfront" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO + MAP */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1fr_1fr] gap-8">
          {/* form */}
          <Reveal className="bg-white border border-gray-100 rounded-2xl p-7 shadow-soft">
            <h2 className="font-display text-xl font-bold text-navy mb-1">Send Us a Message</h2>
            <div className="w-10 h-1 bg-orange rounded-full mb-6" />

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-3 rounded-lg mb-5"
              >
                <CheckCircle2 size={18} /> Thanks! Your message has been sent — we'll contact you shortly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
              <div>
                <input placeholder="Your Name *" value={form.name} onChange={update('name')} className={inputClass(errors.name)} />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <input placeholder="Mobile Number *" value={form.mobile} onChange={update('mobile')} className={inputClass(errors.mobile)} />
                {errors.mobile && <p className="text-[11px] text-red-500 mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <input placeholder="Email Address *" value={form.email} onChange={update('email')} className={inputClass(errors.email)} />
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>
              <div>
                <input placeholder="Moving From *" value={form.from} onChange={update('from')} className={inputClass(errors.from)} />
                {errors.from && <p className="text-[11px] text-red-500 mt-1">{errors.from}</p>}
              </div>
              <div>
                <input placeholder="Moving To *" value={form.to} onChange={update('to')} className={inputClass(errors.to)} />
                {errors.to && <p className="text-[11px] text-red-500 mt-1">{errors.to}</p>}
              </div>
              <div>
                <input type="date" value={form.date} onChange={update('date')} className={inputClass()} />
              </div>
              <select value={form.service} onChange={update('service')} className={`${inputClass()} sm:col-span-2 text-gray-500`}>
                <option value="">Type of Service</option>
                <option>Household Relocation</option>
                <option>Office Shifting</option>
                <option>Car Transportation</option>
                <option>Bike Transportation</option>
                <option>Warehousing</option>
                <option>International Moving</option>
              </select>
              <div className="sm:col-span-2">
                <textarea placeholder="Your Message *" rows={4} value={form.message} onChange={update('message')} className={inputClass(errors.message)} />
                {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 duration-200">
                Send Message <Send size={16} />
              </button>
            </form>
          </Reveal>

          {/* info */}
          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-bold text-navy mb-1">Contact Information</h2>
            <div className="w-10 h-1 bg-orange rounded-full mb-6" />
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0"><Phone size={16} /></div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-0.5">Call Us</p>
                  <p className="text-xs text-gray-500">{CONTACT.phone1}</p>
                  <p className="text-xs text-gray-500">{CONTACT.phone2}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0"><Mail size={16} /></div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-0.5">Email Us</p>
                  <p className="text-xs text-gray-500">{CONTACT.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0"><MapPin size={16} /></div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-0.5">Our Address</p>
                  <p className="text-xs text-gray-500">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-white shrink-0"><Clock size={16} /></div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-0.5">Working Hours</p>
                  <p className="text-xs text-gray-500">{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* map */}
          <Reveal delay={0.15}>
            <h2 className="font-display text-xl font-bold text-navy mb-1">Our Location</h2>
            <div className="w-10 h-1 bg-orange rounded-full mb-6" />
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-soft mb-3">
              <iframe
                title="Elite Cargo location map"
                src="https://www.google.com/maps?q=Jogeshwari%20West%2C%20Mumbai&output=embed"
                width="100%"
                height="230"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-soft mb-6">
              <p className="text-sm font-semibold text-navy mb-1">Elite Cargo Packers & Movers</p>
              <p className="text-xs text-gray-500">{CONTACT.address}</p>
            </div>
            <h3 className="text-sm font-semibold text-navy mb-3">Connect With Us</h3>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((I, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors">
                  <I size={16} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
