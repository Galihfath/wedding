'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Opening from '@/components/Opening'
import InvitationContent from '@/components/InvitationContent'

export default function Home() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <main className="overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Opening key="opening" onOpen={() => setIsOpened(true)} />
        ) : (
          <InvitationContent key="content" />
        )}
      </AnimatePresence>
    </main>
  )
}