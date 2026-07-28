import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import CoverflowCarousel from '../components/CoverflowCarousel'
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
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? PHOTOS : PHOTOS.filter((p) => p.cat === active)),
    [active]
  )

  // Shape the filtered photos for the carousel's expected prop shape
  const carouselItems = useMemo(
    () => filtered.map((p) => ({ image: p.src, title: p.alt, category: p.cat })),
    [filtered]
  )

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const stepLightbox = (dir) => {
    if (lightboxIndex === null) return
    setLightboxIndex((i) => (i + dir + filtered.length) % filtered.length)
  }

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

      {/* FILTERS + COVERFLOW */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-wrap gap-3 mb-10 justify-center">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
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

          <Reveal delay={0.1}>
            {carouselItems.length > 0 ? (
              <>
                <CoverflowCarousel items={carouselItems} onSelect={openLightbox} autoPlayMs={3200} />
                {/* road strip — ties the carousel to the truck/route motif used elsewhere on the site */}
                <div className="mt-6 h-2 max-w-md mx-auto rounded-full bg-navy/10 overflow-hidden">
                  <div className="h-full w-full route-banner-road opacity-40" />
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Tap a photo to view it full size — hover the carousel to pause and browse.
                </p>
              </>
            ) : (
              <p className="text-center text-sm text-gray-400 py-16">No photos in this category yet.</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[100] bg-navy/90 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); stepLightbox(-1) }}
              aria-label="Previous photo"
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  className="w-full h-auto max-h-[75vh] object-contain bg-black"
                />
              </div>
              <div className="text-center mt-4">
                <span className="text-orange text-xs font-bold tracking-widest uppercase">
                  {filtered[lightboxIndex].cat}
                </span>
                <p className="text-white text-sm mt-1">{filtered[lightboxIndex].alt}</p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); stepLightbox(1) }}
              aria-label="Next photo"
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}