import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Truck, Menu, X } from 'lucide-react'
import { NAV_LINKS, CONTACT } from '../data/siteData'
import logo from '../assets/Logo.png'

export default function Navbar({ activeSection, scrollToSection }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const update = () => setHeaderHeight(el.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setOpen(false)
  }

  const getSectionId = (route) => {
    const routeMap = {
      '/': 'home',
      '/about': 'about',
      '/services': 'services',
      '/industries': 'industries',
      '/gallery': 'gallery',
      '/contact': 'contact',
    }
    return routeMap[route] || 'home'
  }

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-50">
        {/* Top Strip */}
        <div className="hidden md:flex bg-navy-dark text-white text-xs px-6 lg:px-10 py-2 items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck size={14} />
            <span>All Over India Door to Door Delivery</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="flex items-center gap-1.5 hover:text-orange transition-colors"
            >
              <Phone size={13} /> {CONTACT.phone1}
            </a>
            <a
              href={`tel:${CONTACT.phone2}`}
              className="flex items-center gap-1.5 hover:text-orange transition-colors"
            >
              <Phone size={13} /> {CONTACT.phone2}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-orange transition-colors"
            >
              <Mail size={13} /> {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`bg-white/95 backdrop-blur px-5 lg:px-10 py-3 flex items-center justify-between border-b border-gray-100 transition-shadow ${
            scrolled ? 'shadow-md' : ''
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Elite Cargo Packers & Movers logo"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-navy text-lg tracking-tight">
                ELITE <span className="text-navy">CARGO</span>
              </div>
              <div className="text-[10px] tracking-[0.2em] text-gray-500 -mt-1">
                PACKERS & MOVERS
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
            {NAV_LINKS.map((link) => {
              const sectionId = getSectionId(link.to)
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(sectionId)}
                  className={`relative py-1 transition-colors hover:text-orange ${
                    isActive ? 'text-orange' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange rounded-full"
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phone1}`}
              className="flex items-center gap-2 border-2 border-navy text-navy font-semibold text-sm px-4 py-2 rounded-lg hover:bg-navy hover:text-white transition-colors"
            >
              <Phone size={15} /> Call Now
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-200"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Mobile Menu */}
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
                  <button onClick={() => setOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
                <nav className="flex flex-col gap-5 text-gray-700 font-medium">
                  {NAV_LINKS.map((link) => {
                    const sectionId = getSectionId(link.to)
                    const isActive = activeSection === sectionId
                    return (
                      <button
                        key={link.to}
                        onClick={() => handleNavClick(sectionId)}
                        className={`pb-2 border-b border-gray-100 text-left ${
                          isActive ? 'text-orange' : ''
                        }`}
                      >
                        {link.label}
                      </button>
                    )
                  })}
                </nav>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="mt-8 bg-orange text-white text-center font-semibold py-3 rounded-lg"
                >
                  Get Free Quote
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  )
}