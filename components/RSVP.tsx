'use client'

import { useEffect, useState } from 'react'
import FadeInUp from './motion/FadeInUp'
import { supabase } from '@/lib/supabase'

type WishItem = {
  id: number
  name: string
  attendance_status: 'hadir' | 'tidak_hadir'
  message: string | null
  created_at: string
}

export default function RSVP() {
  const [name, setName] = useState('')
  const [attendanceStatus, setAttendanceStatus] = useState<'hadir' | 'tidak_hadir'>('hadir')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [wishes, setWishes] = useState<WishItem[]>([])
  const [countHadir, setCountHadir] = useState(0)
  const [countTidakHadir, setCountTidakHadir] = useState(0)

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from('rsvps')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setWishes(data)

      const hadir = data.filter((item) => item.attendance_status === 'hadir').length
      const tidakHadir = data.filter((item) => item.attendance_status === 'tidak_hadir').length

      setCountHadir(hadir)
      setCountTidakHadir(tidakHadir)
    }
  }

  useEffect(() => {
    fetchWishes()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage('')
    setErrorMessage('')

    const { error } = await supabase.from('rsvps').insert([
      {
        name,
        attendance_status: attendanceStatus,
        message,
      },
    ])

    setLoading(false)

    if (error) {
      setErrorMessage('Gagal mengirim RSVP. Coba lagi ya.')
      return
    }

    setSuccessMessage('RSVP berhasil dikirim. Terima kasih ya.')
    setName('')
    setAttendanceStatus('hadir')
    setMessage('')

    fetchWishes()
  }

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <FadeInUp className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--sage)]">
            RSVP & Ucapan
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Kehadiran & Doa
          </h2>
          <p className="mt-4 text-sm leading-7 md:text-base text-[var(--muted)]">
            Konfirmasi kehadiran dan tuliskan doa terbaik untuk kami.
          </p>
        </FadeInUp>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeInUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-[var(--line)] bg-white/50 p-6 md:p-8 space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">Nama</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 outline-none"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">Konfirmasi</label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendanceStatus('hadir')}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      attendanceStatus === 'hadir'
                        ? 'bg-[#e8dfd0] text-[#342f2b]'
                        : 'border border-[var(--line)] bg-transparent text-[var(--muted)]'
                    }`}
                  >
                    Hadir
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendanceStatus('tidak_hadir')}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      attendanceStatus === 'tidak_hadir'
                        ? 'bg-[#e8dfd0] text-[#342f2b]'
                        : 'border border-[var(--line)] bg-transparent text-[var(--muted)]'
                    }`}
                  >
                    Tidak Hadir
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--muted)]">Ucapan / Doa</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3 outline-none"
                  placeholder="Tuliskan doa dan ucapan terbaik"
                />
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-full bg-[#e8dfd0] px-6 py-3 text-[#342f2b] transition hover:-translate-y-[1px] disabled:opacity-60"
                >
                  {loading ? 'Mengirim...' : 'Kirim'}
                </button>

                {successMessage && (
                  <p className="text-sm text-green-700">{successMessage}</p>
                )}

                {errorMessage && (
                  <p className="text-sm text-red-700">{errorMessage}</p>
                )}
              </div>
            </form>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="rounded-[28px] border border-[var(--line)] bg-white/50 p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                    Hadir
                  </p>
                  <p
                    className="mt-3 text-3xl font-light"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {countHadir}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--line)] bg-white/40 p-5 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--sage)]">
                    Tidak Hadir
                  </p>
                  <p
                    className="mt-3 text-3xl font-light"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {countTidakHadir}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 max-h-[420px] overflow-y-auto pr-1">
                {wishes.length === 0 ? (
                  <p className="text-sm text-[var(--muted)]">
                    Belum ada ucapan. Jadilah yang pertama menuliskan doa terbaik.
                  </p>
                ) : (
                  wishes
                    .filter((item) => item.message && item.message.trim() !== '')
                    .map((item) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-[var(--line)] bg-white/40 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p
                            className="text-lg font-medium"
                            style={{ fontFamily: 'var(--font-serif)' }}
                          >
                            {item.name}
                          </p>
                          <span className="text-xs uppercase tracking-[0.2em] text-[var(--sage)]">
                            {item.attendance_status === 'hadir' ? 'Hadir' : 'Tidak Hadir'}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                          {item.message}
                        </p>
                      </div>
                    ))
                )}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}