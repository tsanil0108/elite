import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Star, ArrowRight, MapPin as MapPinIcon, Plus, Minus, ShieldCheck, LocateFixed, Headphones } from 'lucide-react'
import { useState } from 'react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import heroTruck from '../assets/hero-truck.png'
import deliveryGuy from '../assets/delivery-guy.png'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery4 from '../assets/gallery-4.png'
import {
  SERVICES, PROCESS_STEPS, STATS, TESTIMONIALS, BRANDS, FAQS, BRANCHES,
} from '../data/siteData'

const perks = [
  { title: 'GPS Tracking', desc: 'Real Time Updates', icon: 'LocateFixed' },
  { title: 'Door Delivery', desc: 'Safe & Secure', icon: 'PackageCheck' },
  { title: 'Insurance', desc: '100% Protection', icon: 'ShieldCheck' },
  { title: '24x7 Support', desc: "We're Always Here", icon: 'Headphones' },
]

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-navy"
      >
        <span className="text-sm">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-orange shrink-0 ml-3">
          <Plus size={18} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-sm text-gray-500">{a}</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-navy/20 text-navy text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            >
              <span className="flex text-orange">{'★★★★★'}</span> India's Trusted Moving Partner
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.05]"
            >
              Move Without<br /><span className="text-orange">Stress.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-500 mt-5 max-w-md text-[15px]"
            >
              Premium relocation solutions for homes, offices and businesses across India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <NavLink to="/contact" className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 transition-all">
                Get Free Quote <ArrowRight size={18} />
              </NavLink>
              <NavLink to="/contact" className="border-2 border-navy text-navy font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 hover:bg-navy hover:text-white transition-colors">
                Track Shipment <ArrowRight size={18} />
              </NavLink>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 mt-9"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-navy/10 border-2 border-white flex items-center justify-center text-navy text-xs font-bold">{i}</div>
                ))}
              </div>
              <div>
                <div className="flex text-orange text-sm">{'★★★★★'}</div>
                <p className="text-xs text-gray-500">4.9/5 (2,500+ Reviews)</p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src={heroTruck} alt="Elite Cargo delivery truck on highway" className="w-full h-auto object-cover" />
            </motion.div>
            <div className="hidden md:flex flex-col gap-3 absolute -right-2 top-4">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 w-52"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center text-orange shrink-0">
                    <Icon name={p.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-navy leading-tight">{p.title}</p>
                    <p className="text-[11px] text-gray-500">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-9 bg-white border-y border-gray-100">
        <p className="text-center text-xs tracking-widest text-gray-400 font-semibold mb-6">TRUSTED BY INDIA'S LEADING BRANDS</p>
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-400 font-bold text-lg font-display">
          {BRANDS.map((b) => (
            <span key={b} className="hover:text-navy transition-colors">{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES + PROCESS + FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1.3fr_1fr] gap-10">
          {/* services */}
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">WHAT WE OFFER</span>
            <div className="flex items-center justify-between mt-2 mb-6">
              <h2 className="font-display text-2xl font-bold text-navy">Our Premium Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.slice(0, 4).map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                    <Icon name={s.icon} size={20} />
                  </div>
                  <h3 className="font-semibold text-navy text-sm mb-1.5">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  <NavLink to="/services" className="inline-flex items-center gap-1 text-orange text-xs font-semibold mt-3 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13} />
                  </NavLink>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* process + tracking */}
          <Reveal delay={0.1}>
            <span className="text-orange text-xs font-bold tracking-widest">OUR 5 STEP PROCESS</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-8">Simple. Transparent. Reliable.</h2>
            <div className="flex justify-between mb-10">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.step} className="flex flex-col items-center text-center relative flex-1">
                  {i !== 0 && <div className="absolute top-5 right-1/2 w-full h-px border-t border-dashed border-gray-300 -z-10" />}
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold mb-2">{s.step}</div>
                  <p className="text-xs font-semibold text-navy">{s.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-2xl p-6 text-white relative overflow-hidden">
              <p className="text-[10px] tracking-widest text-orange font-semibold">LIVE SHIPMENT TRACKING</p>
              <h3 className="font-display font-bold text-lg mt-1 mb-4">Real Time Tracking,<br />Complete Transparency</h3>
              <p className="text-xs text-gray-300 mb-5">Track your shipment in real time and stay updated at every step.</p>
              <NavLink to="/contact" className="inline-flex items-center gap-2 bg-orange text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-orange-dark transition-colors">
                Track Your Shipment <ArrowRight size={14} />
              </NavLink>
              <MapPinIcon className="absolute -right-4 -bottom-4 text-white/5" size={120} />
            </div>
          </Reveal>

          {/* faq + cta */}
          <Reveal delay={0.15}>
            <span className="text-orange text-xs font-bold tracking-widest">FAQS</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {FAQS.slice(0, 5).map((f, i) => (
                <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>

            <div className="bg-navy rounded-2xl mt-8 p-6 relative overflow-hidden flex items-end justify-between gap-4">
              <div className="relative z-10">
                <p className="text-[10px] tracking-widest text-orange font-semibold mb-2">READY TO MOVE?</p>
                <h3 className="font-display font-bold text-white text-lg mb-4">Get Your Free<br />Quote Now!</h3>
                <NavLink to="/contact" className="inline-flex items-center gap-2 bg-orange text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-orange-dark transition-colors">
                  Get Free Quote <ArrowRight size={14} />
                </NavLink>
              </div>
              <img src={deliveryGuy} alt="Elite Cargo delivery staff" className="w-24 h-auto object-contain relative z-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.slice(0, 4).map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="w-11 h-11 mx-auto rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-3">
                <Icon name={s.icon} size={20} />
              </div>
              <p className="font-display text-2xl font-extrabold text-navy">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY + TESTIMONIALS + BRANCHES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1.3fr_1fr] gap-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-orange text-xs font-bold tracking-widest">OUR GALLERY</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Glimpses of Our Work</h2>
            <div className="grid grid-cols-3 gap-3">
              {[gallery1, gallery2, gallery4].map((g, i) => (
                <Reveal key={i} delay={i * 0.1} className="rounded-xl overflow-hidden aspect-square group">
                  <img src={g} alt="Elite Cargo work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </Reveal>
              ))}
            </div>
            <NavLink to="/gallery" className="inline-flex items-center gap-2 bg-navy text-white text-xs font-semibold px-5 py-3 rounded-lg mt-5 hover:bg-navy-dark transition-colors">
              View More Photos <ArrowRight size={14} />
            </NavLink>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-orange text-xs font-bold tracking-widest">WHAT OUR CLIENTS SAY</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-6">Trusted by Thousands</h2>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1} className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="flex text-orange text-xs mb-2">{'★★★★★'}</div>
                  <p className="text-sm text-gray-600 mb-4">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy text-xs font-bold">{t.name.charAt(0)}</div>
                    <div>
                      <p className="text-xs font-semibold text-navy">{t.name}</p>
                      <p className="text-[11px] text-gray-400">{t.city}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="text-orange text-xs font-bold tracking-widest">OUR BRANCHES</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-4">Serving Across India</h2>
            <p className="text-xs text-gray-500 mb-5">We have a strong network across India to serve you better.</p>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center">
              <MapPinIcon className="text-navy/20 mb-4" size={90} strokeWidth={1} />
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs text-navy font-medium">
                {BRANCHES.map((b, i) => (
                  <span key={b}>{b}{i !== BRANCHES.length - 1 && <span className="text-gray-300 ml-3">|</span>}</span>
                ))}
              </div>
            </div>
            <NavLink to="/branches" className="inline-flex items-center gap-2 border-2 border-navy text-navy text-xs font-semibold px-5 py-3 rounded-lg mt-5 hover:bg-navy hover:text-white transition-colors">
              View All Branches <ArrowRight size={14} />
            </NavLink>
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY BANNER */}
      <section className="relative py-16 overflow-hidden">
        <img src={heroTruck} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="relative max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="text-green-600 text-xs font-bold tracking-widest mb-3">MOVING TOWARDS A GREENER TOMORROW</p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight mb-6">We Move, You Relax,<br />India Moves Forward.</h2>
            <div className="flex flex-wrap gap-8">
              {[
                { t: 'Eco Friendly', d: 'Packing Materials', icon: 'Leaf' },
                { t: 'Fuel Efficient', d: 'Transport', icon: 'Fuel' },
                { t: 'Responsible', d: 'Waste Management', icon: 'Recycle' },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Icon name={x.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{x.t}</p>
                    <p className="text-xs text-gray-500">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
