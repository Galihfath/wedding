'use client'

import Image from 'next/image'
import { invitationData } from '@/lib/invitation-data'
import FadeInUp from './motion/FadeInUp'

export default function Couple() {
  const { bride, groom } = invitationData.couple

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeInUp className="text-center">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--olive)]">
            The Wedding of
          </p>

          <h2
            className="mt-4 text-4xl font-light md:text-5xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Upit & Galih
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
            Dua hati yang dipertemukan dalam kasih, didekatkan dalam doa,
            dan dipersatukan dalam satu ikatan suci.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[40px] border border-[var(--line-soft)] bg-[var(--card)] px-6 py-10 shadow-[var(--shadow-glow)] backdrop-blur-xl md:px-10 md:py-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-80" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--saffron)]/40 to-transparent opacity-60" />

            {/* Photo area */}
            <div className="relative mt-6 flex justify-center">
              {/* glow */}
              <div className="pointer-events-none absolute bottom-0 h-24 w-[60%] rounded-full bg-[radial-gradient(circle,rgba(205,181,93,0.18)_0%,rgba(205,181,93,0.06)_40%,transparent_75%)] blur-2xl" />

              <div className="relative w-full max-w-[520px] md:max-w-[620px] flex justify-center">
                <Image
                  src="/images/couple-transparen.png"
                  alt="Bride and Groom"
                  width={1200}
                  height={1200}
                  className="
                    h-auto w-full object-contain
                    -translate-x-30 md:-translate-x-50
                  "
                  priority
                />
              </div>
            </div>

            {/* Text area */}
            <div className="mx-auto mt-8 max-w-4xl">
              <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
                <div className="text-center md:pr-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--olive)]">
                    Mempelai Wanita
                  </p>

                  <h3
                    className="mt-4 text-4xl font-light md:text-4xl"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {bride.fullName}
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                    {bride.parent}
                  </p>
                </div>

                <div className="text-center md:pl-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--olive)]">
                    Mempelai Pria
                  </p>

                  <h3
                    className="mt-4 text-4xl font-light md:text-4xl"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {groom.fullName}
                  </h3>

                  <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                    {groom.parent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}