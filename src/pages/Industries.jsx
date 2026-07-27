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
  return (
    <div>
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">INDUSTRIES WE SERVE</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Relocation Expertise<br />Across <span className="text-orange">Every Sector.</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md">
              From homes to warehouses, our tailored logistics solutions serve a wide range of industries with the same care and reliability.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutHero} alt="Elite Cargo truck" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.05} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                <Icon name={ind.icon} size={22} />
              </div>
              <h3 className="font-semibold text-navy text-[15px] mb-2">{ind.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal className="bg-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Don't see your industry listed?</h3>
            <p className="text-gray-300 text-sm">We build custom relocation plans for any business, of any size.</p>
          </div>
          <NavLink to="/contact" className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shrink-0">
            Talk to Our Team <ArrowRight size={16} />
          </NavLink>
        </Reveal>
      </section>
    </div>
  )
}
