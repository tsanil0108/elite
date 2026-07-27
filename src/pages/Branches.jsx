import { MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import gallery5 from '../assets/gallery-5.png'

const BRANCH_LIST = [
  { city: 'Mumbai', region: 'Head Office', address: 'Shop No. 68, Radha Krishna SRA DDA Ltd. Bldg, Jogeshwari (West)' },
  { city: 'Pune', region: 'West India', address: 'Baner Road, Pune, Maharashtra' },
  { city: 'Delhi', region: 'North India', address: 'Karol Bagh, New Delhi' },
  { city: 'Ahmedabad', region: 'West India', address: 'SG Highway, Ahmedabad, Gujarat' },
  { city: 'Surat', region: 'West India', address: 'Ring Road, Surat, Gujarat' },
  { city: 'Chennai', region: 'South India', address: 'Anna Salai, Chennai, Tamil Nadu' },
  { city: 'Kolkata', region: 'East India', address: 'Park Street, Kolkata, West Bengal' },
  { city: 'Bengaluru', region: 'South India', address: 'MG Road, Bengaluru, Karnataka' },
  { city: 'Hyderabad', region: 'South India', address: 'Banjara Hills, Hyderabad, Telangana' },
  { city: 'Jaipur', region: 'North India', address: 'MI Road, Jaipur, Rajasthan' },
  { city: 'Lucknow', region: 'North India', address: 'Hazratganj, Lucknow, Uttar Pradesh' },
  { city: 'Patna', region: 'East India', address: 'Boring Road, Patna, Bihar' },
]

export default function Branches() {
  return (
    <div>
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <span className="text-orange text-xs font-bold tracking-widest">OUR BRANCHES</span>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-navy leading-tight mt-3 mb-5">
              Serving You<br /><span className="text-orange">Across India.</span>
            </h1>
            <p className="text-gray-500 text-[15px] max-w-md">
              With a strong network of branches in every region, Elite Cargo brings safe and reliable relocation closer to you.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={gallery5} alt="Elite Cargo fleet of trucks" className="w-full h-auto object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BRANCH_LIST.map((b, i) => (
            <Reveal key={b.city} delay={i * 0.04} className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center text-orange shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{b.city}</p>
                  <p className="text-[11px] text-orange font-medium mb-1.5">{b.region}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{b.address}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
