import { invitationData } from '@/lib/invitation-data'
import FadeInUp from './motion/FadeInUp'

export default function Couple() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInUp className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--sage)]">
            Mempelai
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Bride & Groom
          </h2>
        </FadeInUp>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeInUp delay={0.1} className="text-center">
            <div className="mx-auto mb-6 h-28 w-28 rounded-full border border-[var(--line)] bg-white/40" />

            <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
              Mempelai Wanita
            </p>

            <h3
              className="mt-4 text-4xl md:text-5xl font-light"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {invitationData.couple.bride.name}
            </h3>

            <p className="mt-3 text-base text-[var(--muted)]">
              {invitationData.couple.bride.fullName}
            </p>

            <p className="mt-4 text-sm leading-7 md:text-base text-[var(--muted)]">
              {invitationData.couple.bride.parent}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2} className="text-center">
            <div className="mx-auto mb-6 h-28 w-28 rounded-full border border-[var(--line)] bg-white/40" />

            <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
              Mempelai Pria
            </p>

            <h3
              className="mt-4 text-4xl md:text-5xl font-light"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {invitationData.couple.groom.name}
            </h3>

            <p className="mt-3 text-base text-[var(--muted)]">
              {invitationData.couple.groom.fullName}
            </p>

            <p className="mt-4 text-sm leading-7 md:text-base text-[var(--muted)]">
              {invitationData.couple.groom.parent}
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}