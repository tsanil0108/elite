import { Truck, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { CONTACT } from '../data/siteData'
import logo from '../assets/Logo.png'

const quickLinks = ['Home', 'About Us', 'Services', 'Industries', 'Gallery', 'Contact Us']
const quickSections = ['home', 'about', 'services', 'industries', 'industries', 'gallery', 'contact']
const ourServices = [
  'Household Relocation',
  'Office Shifting',
  'Car Transportation',
  'Bike Transportation',
  'Warehousing',
  'International Moving',
]

const socialLinks = [
  { Icon: Facebook, href: 'https://www.facebook.com/share/1936Y4u5y9/' },
  { Icon: Instagram, href: 'https://www.instagram.com/elitecargopackersandmovers06?utm_source=qr&igsh=YmlmNmJwenBoamlm' },
]

export default function Footer({ scrollToSection }) {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand Section */}
        <div className="col-span-2">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 mb-4 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Elite Cargo Packers & Movers logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div className="font-display font-extrabold text-white text-lg">ELITE CARGO</div>
              <div className="text-[9px] tracking-[0.2em] text-gray-400 -mt-1">
                PACKERS & MOVERS
              </div>
            </div>
          </button>
          <p className="text-sm text-gray-400 max-w-xs">
            Your trusted partner for safe, secure and reliable relocation services across India.
          </p>
          <div className="flex gap-3 mt-5">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link, i) => (
              <li key={link}>
                <button
                  onClick={() => handleNavClick(quickSections[i])}
                  className="hover:text-orange transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {ourServices.map((service) => (
              <li key={service} className="hover:text-orange transition-colors cursor-pointer">
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-left w-full"
                >
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT.phone1}`}
                className="flex items-center gap-2 hover:text-orange transition-colors"
              >
                <Phone size={14} className="text-orange shrink-0" /> {CONTACT.phone1}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href={`tel:${CONTACT.phone2}`}
                className="flex items-center gap-2 hover:text-orange transition-colors"
              >
                <Phone size={14} className="text-orange shrink-0" /> {CONTACT.phone2}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-orange transition-colors"
              >
                <Mail size={14} className="text-orange shrink-0" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-orange shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 py-5 px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <span>© 2024 Elite Cargo Packers & Movers. All Rights Reserved.</span>
        <div className="flex gap-6">
          <button className="hover:text-orange cursor-default">Privacy Policy</button>
          <button className="hover:text-orange cursor-default">Terms & Conditions</button>
        </div>
      </div>
    </footer>
  )
}