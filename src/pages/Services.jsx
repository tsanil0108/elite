import { NavLink } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import servicesHero from '../assets/services-hero.png'
import deliveryGuy from '../assets/delivery-guy.png'
import { SERVICES, PROCESS_STEPS, WHY_CHOOSE_US, CONTACT } from '../data/siteData'

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">OUR SERVICES</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Complete Moving Solutions<br /><span className="text-orange">Tailored For You</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md mb-6">
              From packing to delivery, we provide end-to-end relocation services with care, safety and complete transparency.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-medium text-navy">
              {[
                { t: 'Safe & Secure Handling', icon: 'ShieldCheck' },
                { t: 'On-Time Delivery', icon: 'Clock' },
                { t: 'Pan India Network', icon: 'MapPin' },
                { t: '24/7 Customer Support', icon: 'Headphones' },
              ].map((x) => (
                <span key={x.t} className="flex items-center gap-2">
                  <Icon name={x.icon} size={15} className="text-orange" /> {x.t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={servicesHero} alt="Elite Cargo team loading truck" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-widest">WHAT WE OFFER</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2">Our Premium Services</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="font-semibold text-navy text-[15px] mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <NavLink to="/contact" className="inline-flex items-center gap-1 text-orange text-xs font-semibold hover:gap-2 transition-all">
                Learn More <ArrowRight size={13} />
              </NavLink>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <span className="text-orange text-xs font-bold tracking-widest">OUR 5 STEP PROCESS</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2">Simple. Transparent. Reliable.</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px border-t-2 border-dashed border-navy/20" />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="text-center relative">
              <div className="w-14 h-14 mx-auto rounded-full bg-white shadow-md flex items-center justify-center text-navy mb-4 relative z-10 border-2 border-navy">
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">{s.step}</span>
                <Icon name={s.icon} size={22} />
              </div>
              <p className="text-sm font-semibold text-navy mb-1">{s.title}</p>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-widest">WHY CHOOSE ELITE CARGO</span>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {WHY_CHOOSE_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy shrink-0">
                <Icon name={w.icon} size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">{w.title}</p>
                <p className="text-xs text-gray-500">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <Reveal className="bg-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Ready to Move? Get Your <span className="text-orange">Free Quote</span> Now!
            </h3>
            <p className="text-gray-300 text-sm">Let Elite Cargo Packers & Movers make your move easy & stress-free.</p>
          </div>
          <div className="flex items-center gap-5 relative z-10 shrink-0">
            <a href={`tel:${CONTACT.phone1}`} className="flex items-center gap-2 text-white text-sm font-semibold">
              <Phone size={16} className="text-orange" /> {CONTACT.phone1}
            </a>
            <NavLink to="/contact" className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Get Free Quote <ArrowRight size={16} />
            </NavLink>
          </div>
          <img src={deliveryGuy} alt="" className="hidden lg:block w-28 absolute right-8 -bottom-2 opacity-90" />
        </Reveal>
      </section>
    </div>
  )
}
