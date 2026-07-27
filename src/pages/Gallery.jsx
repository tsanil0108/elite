import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from '../components/Reveal'
import galleryHero from '../assets/gallery-hero-truck.png'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import gallery5 from '../assets/gallery-5.png'
import gallery6 from '../assets/gallery-6.png'
import gallery7 from '../assets/gallery-7.png'
import gallery8 from '../assets/gallery-8.png'
import gallery9 from '../assets/gallery-9.png'
import gallery10 from '../assets/gallery-10.png'
import { GALLERY_CATEGORIES } from '../data/siteData'

const PHOTOS = [
  { src: gallery1, cat: 'Packing & Moving', alt: 'Team wrapping a sofa for transport' },
  { src: gallery2, cat: 'Warehouse', alt: 'Organized warehouse storage' },
  { src: gallery3, cat: 'Packing & Moving', alt: 'Staff packing a box' },
  { src: gallery4, cat: 'Our Fleet', alt: 'Car loaded in transport truck' },
  { src: gallery5, cat: 'Our Fleet', alt: 'Fleet of Elite Cargo trucks' },
  { src: gallery6, cat: 'Packing & Moving', alt: 'Team wrapping furniture' },
  { src: gallery7, cat: 'Our Fleet', alt: 'Bike packed in wooden crate' },
  { src: gallery8, cat: 'Office', alt: 'Office relocation in progress' },
  { src: gallery9, cat: 'Happy Customers', alt: 'Staff greeting happy customers' },
  { src: gallery10, cat: 'Team', alt: 'Elite Cargo team group photo' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [count, setCount] = useState(10)

  const filtered = active === 'All' ? PHOTOS : PHOTOS.filter((p) => p.cat === active)
  const visible = filtered.slice(0, count)

  return (
    <div>
      {/* HERO */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">GALLERY</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Moments That<br /><span className="text-orange">Move Us</span> Forward
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md">
              A glimpse of our operations, team, vehicles and happy customers. Every move we make is built on trust, care and commitment.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={galleryHero} alt="Elite Cargo delivery truck" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-wrap gap-3 mb-10">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => { setActive(c); setCount(10) }}
                className={`text-xs font-semibold px-4 py-2.5 rounded-lg border transition-colors ${
                  active === c
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-gray-200 hover:border-navy'
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div
                  key={p.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="rounded-xl overflow-hidden aspect-[4/3] group relative shadow-soft"
                >
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-[11px] font-medium">{p.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {count < filtered.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setCount((c) => c + 10)}
                className="inline-flex items-center gap-2 border-2 border-navy text-navy text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                Load More Photos <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
