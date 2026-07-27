import { NavLink } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, MapPin, Quote } from 'lucide-react'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import aboutHero from '../assets/about-hero-truck.png'
import teamPacking from '../assets/team-packing.png'
import { STATS, WHY_CHOOSE_US, VALUES, JOURNEY } from '../data/siteData'

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">ABOUT ELITE CARGO</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Moving Trust.<br />Delivering <span className="text-orange">Excellence.</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md mb-6">
              Elite Cargo Packers & Movers is one of India's most trusted relocation companies, providing end-to-end moving solutions for homes, offices, and vehicles across the country.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-medium text-navy">
              {[
                { t: 'Safe & Secure', icon: 'ShieldCheck' },
                { t: 'On-Time Delivery', icon: 'Clock' },
                { t: 'Pan India Network', icon: 'MapPin' },
              ].map((x) => (
                <span key={x.t} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100">
                  <Icon name={x.icon} size={15} className="text-orange" /> {x.t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={aboutHero} alt="Elite Cargo truck" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-navy py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-2xl font-extrabold">{s.value}</p>
              <p className="text-[11px] text-gray-300">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">WHO WE ARE</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-5">Your Trusted Moving Partner</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Founded with a commitment to deliver safe, reliable and affordable relocation solutions, Elite Cargo Packers & Movers has grown into a national brand with a strong network and a customer-first approach.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We combine experienced professionals, modern equipment and proven processes to ensure your belongings reach their destination safely and on time.
            </p>
            <NavLink to="/contact" className="inline-flex items-center gap-2 bg-navy text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-navy-dark transition-colors">
              Get to Know Us <ArrowRight size={15} />
            </NavLink>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={teamPacking} alt="Elite Cargo team packing" className="w-full h-auto object-cover" />
            </div>
            <div className="hidden md:block bg-white shadow-xl rounded-2xl p-6 absolute -right-6 -bottom-8 w-64">
              <Quote className="text-orange mb-2" size={22} />
              <p className="text-sm text-gray-600 mb-3">Our mission is simple – to make every move stress-free and every customer for life.</p>
              <p className="text-xs font-semibold text-navy">— Team Elite Cargo</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-widest">WHY CHOOSE US</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2">We Go the Extra Mile for You</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {WHY_CHOOSE_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 mx-auto rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-3">
                <Icon name={w.icon} size={20} />
              </div>
              <p className="text-sm font-semibold text-navy mb-1">{w.title}</p>
              <p className="text-xs text-gray-500">{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <span className="text-orange text-xs font-bold tracking-widest">OUR VALUES</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2">The Values That Drive Us</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08} className="text-center max-w-[180px]">
              <div className="w-14 h-14 mx-auto rounded-full bg-orange/10 flex items-center justify-center text-orange mb-3">
                <Icon name={v.icon} size={24} />
              </div>
              <p className="font-semibold text-navy text-sm mb-1">{v.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-14">
          <span className="text-orange text-xs font-bold tracking-widest">OUR JOURNEY</span>
          <h2 className="font-display text-3xl font-bold text-navy mt-2">Growing Stronger Every Day</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px border-t-2 border-dashed border-navy/20" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.1} className="text-center relative">
                <div className="w-14 h-14 mx-auto rounded-full bg-navy text-white flex items-center justify-center mb-4 relative z-10">
                  <Icon name={j.icon} size={22} />
                </div>
                <p className="font-display font-bold text-orange text-lg mb-1.5">{j.year}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{j.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
