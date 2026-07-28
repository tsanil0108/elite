const ROUTES = [
  'MUMBAI → DELHI',
  'MUMBAI → BENGALURU',
  'MUMBAI → CHENNAI',
  'MUMBAI → KOLKATA',
  'MUMBAI → HYDERABAD',
  'MUMBAI → PUNE',
  'MUMBAI → AHMEDABAD',
  'MUMBAI → JAIPUR',
]

function Clouds() {
  return (
    <>
      <div className="route-banner-cloud route-banner-cloud-1 absolute top-4 left-0 w-20 h-6 bg-white/10 rounded-full blur-sm" />
      <div className="route-banner-cloud route-banner-cloud-2 absolute top-10 left-0 w-28 h-7 bg-white/[0.07] rounded-full blur-sm" />
      <div className="route-banner-cloud route-banner-cloud-3 absolute top-2 left-0 w-16 h-5 bg-white/[0.08] rounded-full blur-sm" />
    </>
  )
}

function Hills() {
  // Two parallax layers of soft rolling hills, each drawn twice for a
  // seamless infinite drift.
  const renderLayer = (className, points) => (
    <div className={`${className} absolute bottom-0 left-0 flex w-max`}>
      {[0, 1].map((n) => (
        <svg
          key={n}
          viewBox="0 0 600 90"
          preserveAspectRatio="none"
          className="w-[600px] h-[90px] shrink-0"
        >
          <path d={points} />
        </svg>
      ))}
    </div>
  )

  return (
    <>
      {renderLayer(
        'route-banner-hills-back fill-white/[0.05]',
        'M0,90 L0,55 Q75,20 150,50 T300,45 T450,55 T600,40 L600,90 Z'
      )}
      {renderLayer(
        'route-banner-hills-front fill-white/[0.09]',
        'M0,90 L0,65 Q90,35 180,60 T360,55 T540,65 L600,60 L600,90 Z'
      )}
    </>
  )
}

function Sun() {
  return (
    <div className="route-banner-sun absolute right-10 top-6 sm:right-16">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-200 via-orange to-orange-dark shadow-[0_0_40px_12px_rgba(247,121,31,0.35)]" />
    </div>
  )
}

function TruckSVG() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 300 110"
        className="route-banner-truck w-[220px] sm:w-[280px] md:w-[320px] h-auto drop-shadow-xl relative z-10"
      >
        {/* Headlight beam */}
        <g className="route-banner-headlight">
          <polygon points="238,52 300,42 300,66 238,60" fill="#ffd8a8" opacity="0.5" />
        </g>

        {/* Container */}
        <rect x="8" y="22" width="150" height="62" rx="5" fill="#dfc79c" stroke="#3a2a18" strokeWidth="2" />
        <line x1="8" y1="48" x2="158" y2="48" stroke="#3a2a18" strokeOpacity="0.35" strokeWidth="1.5" />
        <text x="83" y="46" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#1a1a1a">
          ELITE
        </text>
        <text x="83" y="66" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="11" fill="#c0431f">
          PACKERS
        </text>

        {/* Cab */}
        <path d="M158 84 L158 40 L200 40 L238 60 L238 84 Z" fill="#f7791f" stroke="#3a2a18" strokeWidth="2" />
        <path d="M204 45 L232 60 L204 60 Z" fill="#bfe4f5" stroke="#3a2a18" strokeWidth="1.5" />

        {/* Chassis */}
        <rect x="6" y="84" width="236" height="8" fill="#1a1a1a" />

        {/* Wheels */}
        <g>
          <circle cx="45" cy="94" r="14" fill="#1a1a1a" />
          <circle className="route-banner-wheel" cx="45" cy="94" r="6" fill="#777" />
          <line className="route-banner-wheel" x1="45" y1="88" x2="45" y2="100" stroke="#333" strokeWidth="1.5" />

          <circle cx="112" cy="94" r="14" fill="#1a1a1a" />
          <circle className="route-banner-wheel" cx="112" cy="94" r="6" fill="#777" />
          <line className="route-banner-wheel" x1="112" y1="88" x2="112" y2="100" stroke="#333" strokeWidth="1.5" />

          <circle cx="205" cy="94" r="14" fill="#1a1a1a" />
          <circle className="route-banner-wheel" cx="205" cy="94" r="6" fill="#777" />
          <line className="route-banner-wheel" x1="205" y1="88" x2="205" y2="100" stroke="#333" strokeWidth="1.5" />
        </g>
      </svg>
      {/* Soft moving shadow under the truck to sell the bob motion */}
      <div className="route-banner-shadow absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-[70%] h-3 bg-black/30 rounded-full blur-sm" />
    </div>
  )
}

export default function RouteBanner() {
  return (
    <section className="relative bg-gradient-to-b from-navy via-navy to-[#1c2f57] overflow-hidden">
      {/* sky + sun + clouds + hills + truck */}
      <div className="relative h-[170px] sm:h-[190px]">
        <Sun />
        <Clouds />
        <Hills />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[34px]">
          <TruckSVG />
        </div>
      </div>

      {/* road with guard rail + lane markings */}
      <div className="relative">
        {/* guard rail */}
        <div className="relative h-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300" />
        <div className="flex justify-between px-4 -mt-2 mb-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="w-1 h-3 bg-gray-400 rounded-b-sm" />
          ))}
        </div>

        {/* asphalt with center dashes */}
        <div className="route-banner-road relative h-12 bg-[#12141c] flex items-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #e7d3ad 0px, #e7d3ad 40px, transparent 40px, transparent 84px)',
              backgroundPosition: '0 50%',
              backgroundSize: '168px 3px',
              backgroundRepeat: 'repeat-x',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '3px',
            }}
          />
          {/* edge lines */}
          <div className="absolute top-1.5 left-0 right-0 h-[2px] bg-white/20" />
          <div className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-white/20" />
        </div>
      </div>

      {/* scrolling route ticker */}
      <div className="relative bg-gradient-to-r from-orange-dark via-orange to-orange-dark overflow-hidden py-3 border-t-2 border-navy-dark/40">
        <div className="route-banner-marquee-track flex w-max whitespace-nowrap">
          {[...ROUTES, ...ROUTES].map((r, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-2 text-white text-sm sm:text-base font-bold tracking-wide font-display"
            >
              <span className="text-white/70">▸</span> {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}