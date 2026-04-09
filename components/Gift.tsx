'use client'

import FadeInUp from './motion/FadeInUp'
import { invitationData } from '@/lib/invitation-data'

export default function Gift() {
  const { gift } = invitationData

  if (!gift?.enabled) return null

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <FadeInUp className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--sage)]">
            {gift.title}
          </p>

          <h2
            className="mt-4 text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Tanda Kasih
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base text-[var(--muted)]">
            {gift.description}
          </p>
        </FadeInUp>

        {/* Content */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* Alamat */}
          <FadeInUp delay={0.1}>
            <div className="rounded-[28px] border border-[var(--line)] bg-white/50 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                Kirim Hadiah
              </p>

              <div className="mt-5 space-y-3">
                <p
                  className="text-xl font-medium text-[var(--foreground)]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {gift.address.recipient}
                </p>

                <p className="text-sm leading-7 text-[var(--muted)]">
                  {gift.address.detail}
                </p>

                <p className="text-sm text-[var(--muted)]">
                  {gift.address.phone}
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Rekening */}
          <FadeInUp delay={0.2}>
            <div className="rounded-[28px] border border-[var(--line)] bg-white/50 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                Amplop Digital
              </p>

              <div className="mt-5 space-y-4">
                {gift.bankAccounts.map((account) => (
                  <div
                    key={`${account.bank}-${account.accountNumber}`}
                    className="rounded-2xl border border-[var(--line)] bg-white/40 p-4"
                  >
                    <p className="text-sm text-[var(--muted)]">
                      {account.bank}
                    </p>

                    <p
                      className="mt-2 text-xl font-medium tracking-wide text-[var(--foreground)]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {account.accountNumber}
                    </p>

                    <p className="mt-2 text-sm text-[var(--muted)]">
                      a.n. {account.accountHolder}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Closing */}
        <FadeInUp delay={0.3} className="mt-8 text-center">
          <p className="text-sm italic leading-7 text-[var(--muted)]">
            Terima kasih atas setiap doa, kehadiran, dan perhatian yang diberikan.
          </p>
        </FadeInUp>

      </div>
    </section>
  )
}