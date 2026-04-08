'use client'

import { useSearchParams } from 'next/navigation'

export default function GuestGreeting() {
  const searchParams = useSearchParams()
  const guest = searchParams.get('to')

  if (!guest) return null

  return (
    <div className="mb-6">
      <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--sage)]">
        Kepada Yth.
      </p>
      <p
        className="mt-3 text-2xl md:text-3xl font-light"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {decodeURIComponent(guest)}
      </p>
    </div>
  )
}