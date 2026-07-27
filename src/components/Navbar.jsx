import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Truck, Menu, X } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="hidden md:flex bg-navy-dark text-white text-xs px-6 lg:px-10 py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck size={14} />
          <span>All Over India Door to Door Delivery</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${CONTACT.phone1}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} /> {CONTACT.phone1}
          </a>
          <a href={`tel:${CONTACT.phone2}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Phone size={13} /> {CONTACT.phone2}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-orange transition-colors">
            <Mail size={13} /> {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white/95 backdrop-blur px-5 lg:px-10 py-3 flex items-center justify-between border-b border-gray-100 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
            <Truck className="text-white" size={20} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-navy text-lg tracking-tight">ELITE <span className="text-navy">CARGO</span></div>
            <div className="text-[10px] tracking-[0.2em] text-gray-500 -mt-1">PACKERS & MOVERS</div>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-orange ${isActive ? 'text-orange' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${CONTACT.phone1}`} className="flex items-center gap-2 border-2 border-navy text-navy font-semibold text-sm px-4 py-2 rounded-lg hover:bg-navy hover:text-white transition-colors">
            <Phone size={15} /> Call Now
          </a>
          <NavLink to="/contact" className="bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-200">
            Get Free Quote
          </NavLink>
        </div>

        <button className="lg:hidden text-navy" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-navy">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button>
              </div>
              <nav className="flex flex-col gap-5 text-gray-700 font-medium">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `pb-2 border-b border-gray-100 ${isActive ? 'text-orange' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="mt-8 bg-orange text-white text-center font-semibold py-3 rounded-lg">
                Get Free Quote
              </NavLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
