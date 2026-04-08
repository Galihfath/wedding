'use client'

import { invitationData } from '@/lib/invitation-data'
import GuestGreeting from './GuestGreeting'
import { motion } from 'framer-motion'

export default function Opening({
  onOpen,
}: {
  onOpen: () => void
}) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: 'blur(6px)' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="max-w-2xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <GuestGreeting />
        </motion.div>

        <motion.p
          className="text-xs tracking-[0.35em] uppercase text-[var(--sage)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Undangan Pernikahan
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-light leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {invitationData.couple.bride.name} &{' '}
          {invitationData.couple.groom.name}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[var(--muted)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {invitationData.event.displayDate}
        </motion.p>

        <motion.p
          className="text-sm md:text-base leading-relaxed text-[var(--muted)]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk
          hadir dan memberikan doa restu pada hari bahagia kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button
            onClick={onOpen}
            className="inline-flex items-center justify-center rounded-full bg-[#e8dfd0] px-6 py-3 text-[#342f2b] transition hover:-translate-y-[1px]"
          >
            Buka Undangan
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}