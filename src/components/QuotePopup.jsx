import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle2 } from 'lucide-react'
import { CONTACT } from '../data/siteData'

export default function QuotePopup() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', from: '', to: '', date: '', service: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Auto-open popup shortly after the page loads (only once per browser session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('quotePopupShown')
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true)
        sessionStorage.setItem('quotePopupShown', 'true')
      }, 1500) // 1.5 second delay so it doesn't feel jarring
      return () => clearTimeout(timer)
    }
  }, [])

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!/^\d{10}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Enter a valid email address'
    if (!form.from.trim()) e.from = 'Please enter moving from city'
    if (!form.to.trim()) e.to = 'Please enter moving to city'
    if (!form.message.trim()) e.message = 'Please enter a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return

    setLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '123c63a7-388e-4f07-b8c8-b6924f5ee2f6',
          subject: 'New Quote Request (Popup) - Elite Cargo',
          from_name: 'Elite Cargo Website',
          name: form.name,
          email: form.email,
          phone: form.mobile,
          from_city: form.from,
          to_city: form.to,
          moving_date: form.date || 'Not specified',
          service_type: form.service || 'General inquiry',
          message: form.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', mobile: '', email: '', from: '', to: '', date: '', service: '', message: '' })
        // Auto-close popup a few seconds after success
        setTimeout(() => {
          setSubmitted(false)
          setOpen(false)
        }, 3000)
      } else {
        alert('Error sending message. Please try again.')
        console.error('Web3Forms error:', data)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (err) =>
    `w-full border rounded-lg px-4 py-3 text-sm text-navy placeholder:text-gray-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 transition-all ${
      err ? 'border-red-400' : 'border-gray-200 focus:border-orange'
    }`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-orange hover:text-white text-navy flex items-center justify-center transition-colors z-10 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="p-7 md:p-8">
              {/* decorative corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-orange/5 rounded-bl-full pointer-events-none" />

              <span className="text-orange text-xs font-bold tracking-widest">GET A FREE QUOTE</span>
              <h2 className="font-display text-2xl font-bold text-navy mt-1 mb-6">Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">Thank You!</h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Your message has been sent. Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input placeholder="Your Name *" value={form.name} onChange={update('name')} className={inputClass(errors.name)} disabled={loading} />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input placeholder="Mobile Number *" value={form.mobile} onChange={update('mobile')} className={inputClass(errors.mobile)} disabled={loading} />
                    {errors.mobile && <p className="text-[11px] text-red-500 mt-1">{errors.mobile}</p>}
                  </div>
                  <div>
                    <input placeholder="Email Address *" value={form.email} onChange={update('email')} className={inputClass(errors.email)} disabled={loading} />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input placeholder="Moving From *" value={form.from} onChange={update('from')} className={inputClass(errors.from)} disabled={loading} />
                    {errors.from && <p className="text-[11px] text-red-500 mt-1">{errors.from}</p>}
                  </div>
                  <div>
                    <input placeholder="Moving To *" value={form.to} onChange={update('to')} className={inputClass(errors.to)} disabled={loading} />
                    {errors.to && <p className="text-[11px] text-red-500 mt-1">{errors.to}</p>}
                  </div>
                  <div>
                    <input type="date" value={form.date} onChange={update('date')} className={inputClass()} disabled={loading} />
                  </div>
                  <select value={form.service} onChange={update('service')} className={`${inputClass()} sm:col-span-2 text-gray-500`} disabled={loading}>
                    <option value="">Type of Service</option>
                    <option>Household Relocation</option>
                    <option>Office Shifting</option>
                    <option>Car Transportation</option>
                    <option>Bike Transportation</option>
                    <option>Warehousing</option>
                    <option>International Moving</option>
                  </select>
                  <div className="sm:col-span-2">
                    <textarea placeholder="Your Message *" rows={3} value={form.message} onChange={update('message')} className={inputClass(errors.message)} disabled={loading} />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-500/20 hover:-translate-y-0.5 duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}