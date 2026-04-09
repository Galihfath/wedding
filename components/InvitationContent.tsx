'use client'

import { motion } from 'framer-motion'
import Couple from './Couple'
import Event from './Event'
import RSVP from './RSVP'
import Gift from './Gift'

export default function InvitationContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Couple />
      <Event />
      <RSVP />
      <Gift />
    </motion.div>
  )
}