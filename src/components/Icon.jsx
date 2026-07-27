import * as Icons from 'lucide-react'

export default function Icon({ name, size = 22, className = '' }) {
  const Cmp = Icons[name] || Icons.Circle
  return <Cmp size={size} className={className} />
}
