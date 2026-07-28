import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SectionDivider from './components/SectionDivider'
import TrackProgress from './components/TrackProgress'
// import AdvancedTrackProgress from './components/AdvancedTrackProgress'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import FloatingButtons from './components/FloatingButtons'
import QuotePopup from './components/QuotePopup'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    industries: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  }

  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName)
    setTimeout(() => {
      sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      const scrollableHeight = documentHeight - windowHeight
      const scrollPercent = scrollableHeight > 0 
        ? Math.min((scrollTop / scrollableHeight) * 100, 100)
        : 0
      
      setScrollProgress(scrollPercent)

      const scrollPosition = window.scrollY + 200

      Object.entries(sectionRefs).forEach(([sectionName, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionName)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* AUTO-OPEN QUOTE POPUP - shows on page load, user can close */}
      <QuotePopup />

      <ScrollToTop />
      
      {/* TRACK PROGRESS - Simple Version */}
      <TrackProgress 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        variant="vertical"
        showVehicle={true}
      />

      {/* Uncomment below to use Advanced Track instead
      <AdvancedTrackProgress 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        scrollProgress={scrollProgress}
      />
      */}

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="flex-1">
        
        {/* HOME - Pass scrollToSection prop */}
        <section ref={sectionRefs.home} id="home">
          <Home scrollToSection={scrollToSection} />
        </section>
        <SectionDivider style="waves" variant="light" height={80} />

        {/* ABOUT - Pass scrollToSection prop */}
        <section ref={sectionRefs.about} id="about">
          <About scrollToSection={scrollToSection} />
        </section>
        <SectionDivider style="curved" variant="light" height={80} />

        {/* SERVICES - Pass scrollToSection prop */}
        <section ref={sectionRefs.services} id="services">
          <Services scrollToSection={scrollToSection} />
        </section>
        <SectionDivider style="dots" variant="light" height={80} />

        {/* INDUSTRIES - Pass scrollToSection prop */}
        <section ref={sectionRefs.industries} id="industries">
          <Industries scrollToSection={scrollToSection} />
        </section>
        <SectionDivider style="lines" variant="light" height={80} />

        {/* GALLERY */}
        <section ref={sectionRefs.gallery} id="gallery">
          <Gallery scrollToSection={scrollToSection} />
        </section>
        <SectionDivider style="gradient" variant="light" height={60} />

        {/* CONTACT - Pass scrollToSection prop */}
        <section ref={sectionRefs.contact} id="contact">
          <Contact scrollToSection={scrollToSection} />
        </section>

      </main>

      <Footer scrollToSection={scrollToSection} />
      <FloatingButtons scrollToSection={scrollToSection} />
    </div>
  )
}

export default App