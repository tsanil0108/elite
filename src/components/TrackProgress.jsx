import { motion } from 'framer-motion'
import { Truck, Home, Info, Briefcase, Building2, Image, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

/**
 * TrackProgress Component
 * Shows user's journey through page sections with animated track
 * 
 * Props:
 *   - activeSection: current section name ('home', 'about', etc)
 *   - scrollToSection: function to navigate to section
 *   - variant: 'vertical' | 'horizontal' (default: 'vertical')
 *   - showVehicle: boolean (default: true)
 */

export default function TrackProgress({ 
  activeSection, 
  scrollToSection, 
  variant = 'vertical', 
  showVehicle = true 
}) {
  const [progress, setProgress] = useState(0)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  // Define all sections
  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'industries', label: 'Industries', icon: Building2 },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: Mail },
  ]

  const currentIndex = sections.findIndex(s => s.id === activeSection)
  const progressPercent = ((currentIndex + 1) / sections.length) * 100

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      // Calculate scroll percentage (0-100)
      const scrollPercent = Math.min(
        (scrollTop / (documentHeight - windowHeight)) * 100, 
        100
      )
      setScrollPercentage(scrollPercent)
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Choose between vertical or horizontal layout
  if (variant === 'horizontal') {
    return (
      <HorizontalTrack 
        sections={sections} 
        currentIndex={currentIndex} 
        scrollToSection={scrollToSection} 
        progress={progress} 
        showVehicle={showVehicle} 
      />
    )
  }

  return (
    <VerticalTrack 
      sections={sections} 
      currentIndex={currentIndex} 
      scrollToSection={scrollToSection} 
      progress={progress} 
      showVehicle={showVehicle} 
    />
  )
}

// ========== VERTICAL TRACK - Sticky Left Sidebar ==========
function VerticalTrack({ 
  sections, 
  currentIndex, 
  scrollToSection, 
  progress, 
  showVehicle 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {/* Track Line - Progress Bar */}
      <div className="absolute left-[18px] top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-navy to-orange rounded-full overflow-hidden">
        {/* Animated Fill */}
        <motion.div
          className="w-full bg-gradient-to-b from-orange to-navy rounded-full"
          animate={{ scaleY: progress / 100 }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          style={{ transformOrigin: 'top' }}
        />
      </div>

      {/* Section Dots with Icons */}
      {sections.map((section, idx) => {
        const Icon = section.icon
        const isActive = idx === currentIndex
        const isCompleted = idx < currentIndex
        const isNext = idx === currentIndex + 1

        return (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              isActive
                ? 'bg-orange text-white shadow-lg shadow-orange/50 scale-125'
                : isCompleted
                  ? 'bg-orange text-white scale-100'
                  : 'bg-white text-navy border-2 border-navy/20 hover:border-orange'
            }`}
            title={section.label}
          >
            {showVehicle && isActive ? (
              // Rotating truck on active section
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Truck size={18} />
              </motion.div>
            ) : (
              // Section icon
              <Icon size={18} />
            )}
          </motion.button>
        )
      })}

      {/* Hover Labels */}
      <div className="absolute left-16 top-0 flex flex-col justify-around h-full pointer-events-none">
        {sections.map((section) => (
          <motion.div
            key={`label-${section.id}`}
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-xs font-semibold text-navy whitespace-nowrap bg-white/80 backdrop-blur px-2 py-1 rounded pointer-events-auto cursor-pointer hover:bg-orange hover:text-white transition-all"
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ========== HORIZONTAL TRACK - Top Progress Bar ==========
function HorizontalTrack({ 
  sections, 
  currentIndex, 
  scrollToSection, 
  progress, 
  showVehicle 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-20 z-40 bg-white border-b border-gray-200 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        {/* Title */}
        <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-widest">
          Your Journey
        </p>

        {/* Main Track */}
        <div className="relative">
          {/* Background Track Line */}
          <div className="absolute left-0 right-0 top-5 h-1 bg-gradient-to-r from-orange/20 via-navy/20 to-orange/20 rounded-full">
            {/* Animated Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-orange via-navy to-orange rounded-full"
              animate={{ scaleX: progress / 100 }}
              transition={{ type: 'spring', stiffness: 50, damping: 30 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {/* Section Dots */}
          <div className="flex justify-between relative z-10">
            {sections.map((section, idx) => {
              const Icon = section.icon
              const isActive = idx === currentIndex
              const isCompleted = idx < currentIndex

              return (
                <motion.div
                  key={section.id}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Dot Button */}
                  <motion.button
                    onClick={() => scrollToSection(section.id)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
                      isActive
                        ? 'bg-orange text-white border-orange shadow-lg shadow-orange/50 scale-110'
                        : isCompleted
                          ? 'bg-orange text-white border-orange scale-100'
                          : 'bg-white text-navy border-gray-300 hover:border-orange'
                    }`}
                    title={section.label}
                  >
                    {showVehicle && isActive ? (
                      // Rotating truck
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Truck size={20} />
                      </motion.div>
                    ) : (
                      // Section icon
                      <Icon size={20} />
                    )}

                    {/* Pulsing Ring on Active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-orange"
                        animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className={`text-xs font-semibold text-center whitespace-nowrap transition-colors ${
                      isActive ? 'text-orange' : isCompleted ? 'text-navy' : 'text-gray-500'
                    }`}
                  >
                    {section.label}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Progress Stats */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-gray-600">
            Journey Progress: <span className="font-bold text-orange">
              {Math.round(progress)}%
            </span>
          </p>
          <p className="text-xs text-gray-500">
            {currentIndex + 1} of {sections.length} sections
          </p>
        </div>
      </div>
    </motion.div>
  )
}