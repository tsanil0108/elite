import { NavLink } from 'react-router-dom'
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { CONTACT } from '../data/siteData'

const quickLinks = ['Home', 'About Us', 'Services', 'Industries', 'Branches', 'Gallery', 'Contact Us']
const quickPaths = ['/', '/about', '/services', '/industries', '/branches', '/gallery', '/contact']
const ourServices = ['Household Relocation', 'Office Shifting', 'Car Transportation', 'Bike Transportation', 'Warehousing', 'International Moving']

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
              <Truck className="text-orange" size={18} />
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-lg">ELITE CARGO</div>
              <div className="text-[9px] tracking-[0.2em] text-gray-400 -mt-1">PACKERS & MOVERS</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">Your trusted partner for safe, secure and reliable relocation services across India.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l, i) => (
              <li key={l}><NavLink to={quickPaths[i]} className="hover:text-orange transition-colors">{l}</NavLink></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {ourServices.map((l) => (
              <li key={l} className="hover:text-orange transition-colors cursor-default">{l}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={14} className="text-orange shrink-0" /> {CONTACT.phone1}</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-orange shrink-0" /> {CONTACT.phone2}</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-orange shrink-0" /> {CONTACT.email}</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-orange shrink-0 mt-0.5" /> <span>{CONTACT.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <span>© 2024 Elite Cargo Packers & Movers. All Rights Reserved.</span>
        <div className="flex gap-6">
          <span className="hover:text-orange cursor-default">Privacy Policy</span>
          <span className="hover:text-orange cursor-default">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  )
}
