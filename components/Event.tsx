import { invitationData } from '@/lib/invitation-data'
import FadeInUp from './motion/FadeInUp'

export default function Event() {
  const { venue, schedule, displayDate } = invitationData.event

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInUp className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--sage)]">
            Detail Acara
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Wedding Event
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="rounded-[28px] border border-[var(--line)] bg-white/50 p-8 md:p-10">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                Venue
              </p>

              <h3
                className="mt-4 text-3xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {venue.name}
              </h3>

              <p className="mt-4 text-base text-[var(--muted)]">
                {displayDate}
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base text-[var(--muted)]">
                {venue.address}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {schedule.map((item, index) => (
                <FadeInUp key={item.title} delay={0.15 + index * 0.1}>
                  <div className="rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.45)] p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                      {item.title}
                    </p>
                    <p
                      className="mt-4 text-2xl md:text-3xl font-light"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.time}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/60"
              >
                Buka Peta
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}