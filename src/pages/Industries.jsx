import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import aboutHero from '../assets/about-hero-truck.png'

const INDUSTRIES = [
  { title: 'Residential', desc: 'End-to-end home relocation for families moving within or across cities.', icon: 'Home' },
  { title: 'Corporate & IT', desc: 'Office shifting with zero downtime for corporates and IT parks.', icon: 'Building2' },
  { title: 'Retail & E-commerce', desc: 'Warehousing and last-mile distribution for retail brands.', icon: 'ShoppingBag' },
  { title: 'Banking & Finance', desc: 'Secure, confidential relocation for bank branches and offices.', icon: 'Landmark' },
  { title: 'Hospitality', desc: 'Furniture & equipment moving for hotels and resorts.', icon: 'Hotel' },
  { title: 'Healthcare', desc: 'Careful handling of medical and lab equipment relocation.', icon: 'HeartPulse' },
  { title: 'Automotive', desc: 'Dealership and showroom vehicle transport across India.', icon: 'Car' },
  { title: 'Manufacturing', desc: 'Heavy machinery and industrial equipment logistics.', icon: 'Factory' },
]

export default function Industries() {
  // Auto-cycling highlight through the industries grid — runs on its own
  const [activeIndustry, setActiveIndustry] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % INDUSTRIES.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50 relative overflow-hidden">
        <div className="blob absolute -top-10 -right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
        <div className="blob absolute bottom-0 left-0 w-56 h-56 bg-navy/10 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center relative">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">INDUSTRIES WE SERVE</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Relocation Expertise<br />Across <span className="text-orange">Every Sector.</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md mb-6">
              From homes to warehouses, our tailored logistics solutions serve a wide range of industries with the same care and reliability.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-medium text-navy">
              {INDUSTRIES.slice(0, 4).map((x, i) => (
                <span
                  key={x.title}
                  className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 float-slow"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <Icon name={x.icon} size={15} className="text-orange" /> {x.title}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl relative">
            <img src={aboutHero} alt="Elite Cargo truck" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES GRID — one card auto-highlights on rotation */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => {
            const isActive = i === activeIndustry
            return (
              <Reveal
                key={ind.title}
                delay={i * 0.05}
                className={`bg-white rounded-xl p-6 border transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5
                  ${isActive ? 'border-orange shadow-xl -translate-y-1.5 ring-2 ring-orange/20' : 'border-gray-100'}
                `}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500
                    ${isActive ? 'bg-orange text-white' : 'bg-navy/5 text-navy'}
                  `}
                >
                  <Icon name={ind.icon} size={22} />
                </div>
                <h3 className="font-semibold text-navy text-[15px] mb-2">{ind.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* AUTO-SCROLLING MARQUEE STRIP — continuous, pauses on hover */}
      <section className="py-14 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <span className="text-orange text-xs font-bold tracking-widest">TRUSTED ACROSS SECTORS</span>
          <h2 className="font-display text-2xl font-bold text-navy mt-2">One Team, Every Industry</h2>
        </div>
        <div className="marquee-wrap relative w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <div className="marquee-track flex gap-4 w-max">
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div
                key={`${ind.title}-${i}`}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-4 shrink-0"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center text-navy shrink-0">
                  <Icon name={ind.icon} size={18} />
                </div>
                <span className="text-sm font-semibold text-navy whitespace-nowrap">{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal className="bg-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="blob absolute -top-16 -right-16 w-64 h-64 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Don't see your industry listed?</h3>
            <p className="text-gray-300 text-sm">We build custom relocation plans for any business, of any size.</p>
          </div>
          <NavLink to="/contact" className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shrink-0 relative z-10">
            Talk to Our Team <ArrowRight size={16} />
          </NavLink>
        </Reveal>
      </section>
    </div>
  )
}