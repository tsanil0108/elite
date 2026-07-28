import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [])
  return null
}