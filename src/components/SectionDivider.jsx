import { motion } from 'framer-motion'

export default function SectionDivider({ 
  style = 'waves', 
  variant = 'light', 
  animated = true,
  height = 80,
  className = '' 
}) {
  const isDark = variant === 'dark'
  const primaryColor = isDark ? '#0a2559' : '#f7791f'
  const secondaryColor = isDark ? '#f7791f' : '#0a2559'
  const bgColor = isDark ? '#0a2559' : '#ffffff'

  const WavesDivider = () => (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {animated ? (
          <>
            <motion.path
              d="M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z"
              fill={primaryColor}
              initial={{ x: 0 }}
              animate={{ x: -100 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              opacity="0.7"
            />
            <motion.path
              d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
              fill={secondaryColor}
              initial={{ x: 0 }}
              animate={{ x: 100 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              opacity="0.5"
            />
          </>
        ) : (
          <>
            <path d="M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z" fill={primaryColor} opacity="0.7" />
            <path d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z" fill={secondaryColor} opacity="0.5" />
          </>
        )}
      </svg>
    </div>
  )

  const CurvedDivider = () => (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {animated ? (
          <motion.path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"
            fill={primaryColor}
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        ) : (
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill={primaryColor} />
        )}
      </svg>
    </div>
  )

  const DotsDivider = () => (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: 12,
            height: 12,
            backgroundColor: i === 2 ? primaryColor : secondaryColor,
          }}
          animate={
            animated
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )

  const LinesDivider = () => (
    <div className={`flex items-center justify-center gap-6 py-8 ${className}`}>
      {animated ? (
        <>
          <motion.div
            className="h-1"
            style={{ width: 60, backgroundColor: primaryColor }}
            animate={{ width: [60, 40, 60] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="text-2xl" style={{ color: primaryColor }}>✦</div>
          <motion.div
            className="h-1"
            style={{ width: 60, backgroundColor: primaryColor }}
            animate={{ width: [60, 40, 60] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
          />
        </>
      ) : (
        <>
          <div className="h-1 w-16" style={{ backgroundColor: primaryColor }} />
          <div className="text-2xl" style={{ color: primaryColor }}>✦</div>
          <div className="h-1 w-16" style={{ backgroundColor: primaryColor }} />
        </>
      )}
    </div>
  )

  const GradientDivider = () => (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      {animated ? (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)`,
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)`,
          }}
        />
      )}
    </div>
  )

  const ZigzagDivider = () => (
    <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {animated ? (
          <motion.polyline
            points="0,60 150,20 300,60 450,20 600,60 750,20 900,60 1050,20 1200,60 1200,120 0,120"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
        ) : (
          <polyline
            points="0,60 150,20 300,60 450,20 600,60 750,20 900,60 1050,20 1200,60 1200,120 0,120"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
        )}
      </svg>
    </div>
  )

  const dividerMap = {
    waves: WavesDivider,
    curved: CurvedDivider,
    dots: DotsDivider,
    lines: LinesDivider,
    gradient: GradientDivider,
    zigzag: ZigzagDivider,
  }

  const DividerComponent = dividerMap[style] || WavesDivider

  return <DividerComponent />
}