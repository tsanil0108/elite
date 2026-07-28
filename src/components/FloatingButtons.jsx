import { motion } from 'framer-motion'
import { Phone, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CONTACT } from '../data/siteData'

function buildWhatsAppLink(phone) {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/91${digits}`
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.655 4.527 1.793 6.393L4 29l7.79-1.752A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm.002 21.6a9.55 9.55 0 0 1-4.87-1.336l-.35-.208-4.62 1.04 1.02-4.52-.228-.36A9.56 9.56 0 1 1 16.006 24.6Zm5.27-7.17c-.288-.145-1.706-.842-1.97-.938-.264-.096-.456-.144-.648.144-.192.288-.744.938-.912 1.13-.168.192-.336.216-.624.072-.288-.144-1.216-.448-2.317-1.43-.856-.763-1.434-1.706-1.602-1.994-.168-.288-.018-.443.127-.587.13-.13.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.562-.888-2.14-.234-.562-.472-.486-.648-.494-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.402 0 1.417 1.032 2.786 1.176 2.978.144.192 2.03 3.098 4.918 4.343.687.297 1.222.474 1.64.606.689.22 1.315.189 1.81.115.552-.082 1.706-.697 1.946-1.37.24-.673.24-1.25.168-1.37-.072-.12-.264-.192-.552-.336Z" />
    </svg>
  )
}

export default function FloatingButtons({ scrollToSection }) {
  const whatsappLink = buildWhatsAppLink(CONTACT.phone1)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    if (scrollToSection) {
      scrollToSection('home')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3">
      {/* Call Button */}
      <motion.a
        href={`tel:${CONTACT.phone1}`}
        initial={{ opacity: 0, scale: 0.6, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-navy text-white flex items-center justify-center shadow-lg shadow-navy/30"
        aria-label="Call us now"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-navy"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <Phone size={22} className="relative z-10" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          Call Now
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.7, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-600/30"
        aria-label="Chat on WhatsApp"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
        />
        <WhatsAppIcon className="w-6 h-6 relative z-10" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#128C4A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.6, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.6, x: 30 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-lg shadow-orange/30"
          aria-label="Scroll to top"
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-orange"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.2 }}
          />
          <ArrowUp size={22} className="relative z-10" />
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-orange text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200">
            Back to Top
          </span>
        </motion.button>
      )}
    </div>
  )
}