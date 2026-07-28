import { useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'
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

export default function Gallery({ scrollToSection }) {
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [imageLoaded, setImageLoaded] = useState({})

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

  // Keyboard shortcuts for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') stepLightbox(1)
      if (e.key === 'ArrowLeft') stepLightbox(-1)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filtered.length])

  const handleCategoryChange = (category) => {
    setActive(category)
    setImageLoaded({}) // Reset loaded state for new images
  }

  const currentPhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center relative z-10">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">GALLERY</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Moments That<br /><span className="text-orange">Move Us</span> Forward
            </h1>
            <p className="text-gray-600 text-[15px] max-w-md leading-relaxed">
              A glimpse of our operations, team, vehicles and happy customers. Every move we make is built on trust, care and commitment to excellence.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection && scrollToSection('contact')}
              className="mt-6 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </Reveal>

          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="h-full"
            >
              <img
                src={galleryHero}
                alt="Elite Cargo delivery truck"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* FILTERS + COVERFLOW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          {/* Category Filters */}
          <Reveal className="flex flex-wrap gap-3 mb-12 justify-center">
            {GALLERY_CATEGORIES.map((c, idx) => (
              <motion.button
                key={c}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleCategoryChange(c)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-lg border-2 transition-all duration-300 ${
                  active === c
                    ? 'bg-navy text-white border-navy shadow-lg scale-105'
                    : 'bg-white text-navy border-gray-200 hover:border-navy hover:text-navy'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </Reveal>

          {/* Carousel Section */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              {carouselItems.length > 0 ? (
                <motion.div
                  key={`carousel-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CoverflowCarousel items={carouselItems} onSelect={openLightbox} autoPlayMs={3200} />

                  {/* Road strip decoration */}
                  <div className="mt-8 flex justify-center">
                    <div className="h-2 w-48 rounded-full bg-gradient-to-r from-transparent via-navy/20 to-transparent overflow-hidden">
                      <motion.div
                        className="h-full w-full bg-gradient-to-r from-transparent via-orange/40 to-transparent"
                        animate={{ x: [-100, 100] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Instructions */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-xs text-gray-400 mt-4"
                  >
                    💡 Click a photo to view full size — hover to pause, arrow keys to navigate
                  </motion.p>
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-gray-400 py-16"
                >
                  No photos in this category yet.
                </motion.p>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              onClick={closeLightbox}
              aria-label="Close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 cursor-pointer"
            >
              <X size={20} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); stepLightbox(-1) }}
              aria-label="Previous photo"
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 cursor-pointer"
            >
              <ChevronLeft size={22} />
            </motion.button>

            {/* Main Image Container */}
            <motion.div
              key={`lightbox-${lightboxIndex}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="relative">
                  {/* Loading skeleton */}
                  {!imageLoaded[lightboxIndex] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
                  )}

                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    onLoad={() => setImageLoaded(prev => ({ ...prev, [lightboxIndex]: true }))}
                    className="w-full h-auto max-h-[75vh] object-contain"
                  />
                </div>
              </div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-center mt-6"
              >
                <span className="text-orange text-xs font-bold tracking-widest uppercase">
                  {currentPhoto.cat}
                </span>
                <p className="text-white text-sm mt-2 max-w-md mx-auto">{currentPhoto.alt}</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="text-gray-400 text-xs">
                    {lightboxIndex + 1} of {filtered.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Next Button */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); stepLightbox(1) }}
              aria-label="Next photo"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20 cursor-pointer"
            >
              <ChevronRight size={22} />
            </motion.button>

            {/* Keyboard hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 right-6 text-center"
            >
              <p className="text-white/60 text-xs">
                ⌨️ ESC to close · ← → to navigate · Click carousel to switch
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}