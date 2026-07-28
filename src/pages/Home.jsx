import { motion } from 'framer-motion'
import { Star, ArrowRight, MapPin as MapPinIcon, Plus, Minus, ShieldCheck, LocateFixed, Headphones, Package, Truck as TruckIcon, Sparkles } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import RouteBanner from '../components/RouteBanner'
import heroTruck from '../assets/hero-truck.png'
import deliveryGuy from '../assets/delivery-guy.png'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery4 from '../assets/gallery-4.png'
import {
  SERVICES, PROCESS_STEPS, STATS, TESTIMONIALS, BRANDS, FAQS, SERVICE_CITIES,
} from '../data/siteData'

const perks = [
  { title: 'Door Delivery', desc: 'Safe & Secure', icon: 'PackageCheck' },
  { title: 'Insurance', desc: '100% Protection', icon: 'ShieldCheck' },
  { title: '24x7 Support', desc: "We're Always Here", icon: 'Headphones' },
]

/* ---------- small reusable decorative bits ---------- */

// Soft blurred glow blob used to fill empty background space
function GlowBlob({ className, color = 'bg-orange/10', delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${color} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [0.9, 1.05, 0.9] }}
      transition={{ opacity: { duration: 1, delay }, scale: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay } }}
    />
  )
}

// Faint dotted grid pattern to give texture to otherwise empty sections
function DotGrid({ className }) {
  return (
    <div
      className={`absolute pointer-events-none opacity-[0.35] ${className}`}
      style={{
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '18px 18px',
      }}
    />
  )
}

// Small icon that drifts up and down slowly, used to add life to empty corners
function FloatingIcon({ icon: IconCmp, className, duration = 5, delay = 0 }) {
  return (
    <motion.div
      className={`absolute text-navy/10 pointer-events-none ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <IconCmp size={38} strokeWidth={1.2} />
    </motion.div>
  )
}

// Animated counter for stat numbers — counts up when it scrolls into view
function CountUp({ value }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const numeric = parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0
          const suffix = String(value).replace(/[0-9,]/g, '')
          const duration = 1200
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const current = Math.round(numeric * progress)
            setDisplay(current.toLocaleString() + suffix)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, started])

  return <span ref={ref}>{display}</span>
}

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: 'rgba(247,121,31,0.4)' }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-shadow hover:shadow-md"
    >
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
    </motion.div>
  )
}

export default function Home({ scrollToSection }) {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* fill the empty background with soft glowing blobs + floating icons */}
        <GlowBlob className="w-72 h-72 -top-10 -left-16" color="bg-orange/10" />
        <GlowBlob className="w-96 h-96 -bottom-24 -right-10" color="bg-navy/10" delay={1.5} />
        <FloatingIcon icon={Package} className="left-[6%] top-[62%] hidden lg:block" duration={6} />
        <FloatingIcon icon={Sparkles} className="left-[46%] top-[10%] hidden lg:block" duration={5.5} delay={0.6} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16 grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center">
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
              <motion.div
                whileHover={{ y: -3, scale: 1.03, boxShadow: '0 12px 28px rgba(247,121,31,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-colors"
                >
                  Get Free Quote <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 mt-9"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="w-9 h-9 rounded-full bg-navy/10 border-2 border-white flex items-center justify-center text-navy text-xs font-bold"
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex text-orange text-sm">{'★★★★★'}</div>
                <p className="text-xs text-gray-500">4.9/5 (200+ Reviews)</p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
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
                  whileHover={{ x: -4, scale: 1.03, boxShadow: '0 10px 24px rgba(10,37,89,0.18)' }}
                  className="bg-white shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 w-52"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                    className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center text-orange shrink-0"
                  >
                    <Icon name={p.icon} size={18} />
                  </motion.div>
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

      {/* TRUCK + ROUTE ANIMATION */}
      <RouteBanner />

      {/* SERVICES + PROCESS + FAQ */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <DotGrid className="w-64 h-64 -top-6 -right-6 text-navy" />
        <GlowBlob className="w-80 h-80 top-1/3 -left-24" color="bg-orange/[0.06]" delay={0.8} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1.3fr_1fr] gap-10">
          {/* services */}
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">WHAT WE OFFER</span>
            <div className="flex items-center justify-between mt-2 mb-6">
              <h2 className="font-display text-2xl font-bold text-navy">Our Premium Services</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.slice(0, 4).map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 14px 28px rgba(247,121,31,0.15)', borderColor: 'rgba(247,121,31,0.35)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white rounded-xl p-5 border border-gray-100 h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4"
                    >
                      <Icon name={s.icon} size={20} />
                    </motion.div>
                    <h3 className="font-semibold text-navy text-sm mb-1.5">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="inline-flex items-center gap-1 text-orange text-xs font-semibold mt-3 hover:gap-2 transition-all cursor-pointer"
                    >
                      Learn More <ArrowRight size={13} />
                    </button>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* process */}
          <Reveal delay={0.1}>
            <span className="text-orange text-xs font-bold tracking-widest">OUR 5 STEP PROCESS</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-8">Simple. Transparent. Reliable.</h2>
            <div className="flex justify-between mb-10">
              {PROCESS_STEPS.map((s, i) => (
                <Reveal key={s.step} delay={0.15 + i * 0.08} className="flex flex-col items-center text-center relative flex-1">
                  {i !== 0 && <div className="absolute top-5 right-1/2 w-full h-px border-t border-dashed border-gray-300 -z-10" />}
                  <motion.div
                    whileHover={{ scale: 1.15, boxShadow: '0 6px 16px rgba(10,37,89,0.35)' }}
                    animate={{ boxShadow: ['0 0 0 0 rgba(10,37,89,0)', '0 0 0 6px rgba(10,37,89,0.06)', '0 0 0 0 rgba(10,37,89,0)'] }}
                    transition={{ boxShadow: { duration: 2.6, repeat: Infinity, delay: i * 0.3 } }}
                    className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold mb-2"
                  >
                    {s.step}
                  </motion.div>
                  <p className="text-xs font-semibold text-navy">{s.title}</p>
                </Reveal>
              ))}
            </div>

            {/* fills the leftover space below the process steps with a supporting visual */}
            <Reveal delay={0.3} className="rounded-2xl border border-dashed border-navy/15 bg-white/60 p-5 flex items-center gap-4">
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center text-navy shrink-0"
              >
                <TruckIcon size={20} />
              </motion.div>
              <p className="text-xs text-gray-500">
                Every move is planned end-to-end, from the first survey to doorstep delivery, so nothing is left to chance.
              </p>
            </Reveal>
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

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ boxShadow: '0 16px 32px rgba(10,37,89,0.35)' }}
              className="bg-navy rounded-2xl mt-8 p-6 relative overflow-hidden flex items-end justify-between gap-4"
            >
              <GlowBlob className="w-40 h-40 -top-10 -right-10" color="bg-orange/20" />
              <div className="relative z-10">
                <p className="text-[10px] tracking-widest text-orange font-semibold mb-2">READY TO MOVE?</p>
                <h3 className="font-display font-bold text-white text-lg mb-4">Get Your Free<br />Quote Now!</h3>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="inline-flex items-center gap-2 bg-orange text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-orange-dark transition-colors cursor-pointer"
                  >
                    Get Free Quote <ArrowRight size={14} />
                  </button>
                </motion.div>
              </div>
              <motion.img
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src={deliveryGuy}
                alt="Elite Cargo delivery staff"
                className="w-24 h-auto object-contain relative z-10"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-14 bg-white border-y border-gray-100 overflow-hidden">
        <DotGrid className="w-full h-full inset-0 text-navy opacity-[0.15]" />
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.slice(0, 4).map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6, boxShadow: '0 10px 24px rgba(247,121,31,0.3)' }}
                animate={{ y: [0, -4, 0] }}
                transition={{ y: { duration: 2.4, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' } }}
                className="w-11 h-11 mx-auto rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-3"
              >
                <Icon name={s.icon} size={20} />
              </motion.div>
              <p className="font-display text-2xl font-extrabold text-navy">
                <CountUp value={s.value} />
              </p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY + TESTIMONIALS + BRANCHES */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <GlowBlob className="w-96 h-96 top-0 right-0" color="bg-navy/[0.05]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1.3fr_1fr] gap-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-orange text-xs font-bold tracking-widest">OUR GALLERY</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Glimpses of Our Work</h2>
            <div className="grid grid-cols-3 gap-3">
              {[gallery1, gallery2, gallery4].map((g, i) => (
                <Reveal key={i} delay={i * 0.1} className="rounded-xl overflow-hidden aspect-square group relative">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                    src={g}
                    alt="Elite Cargo work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors pointer-events-none" />
                </Reveal>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block mt-5">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="inline-flex items-center gap-2 bg-navy text-white text-xs font-semibold px-5 py-3 rounded-lg hover:bg-navy-dark transition-colors cursor-pointer"
              >
                View More Photos <ArrowRight size={14} />
              </button>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-orange text-xs font-bold tracking-widest">WHAT OUR CLIENTS SAY</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-6">Trusted by Thousands</h2>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(247,121,31,0.18)', borderColor: 'rgba(247,121,31,0.3)' }}
                    className="bg-white rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex text-orange text-xs mb-2">{'★★★★★'}</div>
                    <p className="text-sm text-gray-600 mb-4">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy text-xs font-bold">{t.name.charAt(0)}</div>
                      <div>
                        <p className="text-xs font-semibold text-navy">{t.name}</p>
                        <p className="text-[11px] text-gray-400">{t.city}</p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="text-orange text-xs font-bold tracking-widest">PAN-INDIA DELIVERY</span>
            <h2 className="font-display text-2xl font-bold text-navy mt-2 mb-4">Delivering Across India</h2>
            <p className="text-xs text-gray-500 mb-5">Based in Mumbai, we deliver door-to-door across the country.</p>
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 14px 28px rgba(10,37,89,0.12)' }}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center relative overflow-hidden"
            >
              <DotGrid className="w-full h-full inset-0 text-navy" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <MapPinIcon className="text-navy/20 mb-4" size={90} strokeWidth={1} />
              </motion.div>
              <div className="relative flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs text-navy font-medium">
                {SERVICE_CITIES.map((b, i) => (
                  <span key={b}>{b}{i !== SERVICE_CITIES.length - 1 && <span className="text-gray-300 ml-3">|</span>}</span>
                ))}
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block mt-5">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 border-2 border-navy text-navy text-xs font-semibold px-5 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors cursor-pointer"
              >
                Get a Free Quote <ArrowRight size={14} />
              </button>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* SUSTAINABILITY BANNER */}
      <section className="relative py-16 overflow-hidden">
        <img src={heroTruck} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <GlowBlob className="w-72 h-72 top-1/4 right-10 hidden lg:block" color="bg-green-500/10" />
        <div className="relative max-w-4xl px-6 lg:px-10">
          <Reveal>
            <p className="text-green-600 text-xs font-bold tracking-widest mb-3">MOVING TOWARDS A GREENER TOMORROW</p>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight mb-6">We Move, You Relax,<br />India Moves Forward.</h2>
            <div className="flex flex-wrap gap-8">
              {[
                { t: 'Eco Friendly', d: 'Packing Materials', icon: 'Leaf' },
                { t: 'Fuel Efficient', d: 'Transport', icon: 'Fuel' },
                { t: 'Responsible', d: 'Waste Management', icon: 'Recycle' },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 0.1} className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ scale: { duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' } }}
                    className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"
                  >
                    <Icon name={x.icon} size={18} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{x.t}</p>
                    <p className="text-xs text-gray-500">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}