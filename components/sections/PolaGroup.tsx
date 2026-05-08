'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, BarChart2, ArrowRight } from 'lucide-react'

const POLAKERJA_URL = 'https://polakerja.id'

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

export default function PolaGroup() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F0FDF4 50%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-5">
            <div
              className="relative rounded overflow-hidden shrink-0"
              style={{ width: 14, height: 14, background: '#15803D' }}
            >
              <Image
                src="/logo-icon.png"
                alt=""
                fill
                className="object-cover"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">
              Pola Group
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Solusi Terintegrasi untuk Bisnis Anda
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base">
            Pajak, akuntansi, audit, dan compliance dalam satu ekosistem.
            <br className="hidden sm:block" />
            Dua brand, satu komitmen — siap mendampingi bisnis Anda dari fondasi hingga pertumbuhan.
          </p>
        </motion.div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Polapajak — current site */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-8 bg-white"
            style={{
              border: '2px solid #15803D',
              boxShadow: '0 18px 40px rgba(21,128,61,0.14)',
            }}
          >
            <span
              className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ background: '#F0FDF4', color: '#15803D' }}
            >
              Anda di sini
            </span>

            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ background: '#F0FDF4' }}
            >
              <BarChart2 size={28} className="text-[#15803D]" strokeWidth={1.8} />
            </div>

            <p className="font-bold text-[#15803D] text-[11px] uppercase tracking-[0.2em] mb-2">
              Polapajak Consulting
            </p>
            <h3 className="font-extrabold text-gray-900 text-xl lg:text-2xl mb-3">
              Pajak, Akuntansi &amp; Audit
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Kelola pajak dan keuangan bisnis Anda bersama ahli — dari
              perencanaan pajak, pembukuan, hingga laporan keuangan yang rapi,
              tepat waktu, dan sesuai regulasi.
            </p>

            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#15803D]">•</span>
                Konsultasi &amp; perencanaan pajak strategis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D]">•</span>
                Pembukuan &amp; laporan keuangan PSAK
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D]">•</span>
                Payroll &amp; compliance pajak bulanan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#15803D]">•</span>
                Audit, advisory &amp; pendampingan pemeriksaan
              </li>
            </ul>
          </motion.div>

          {/* Polakerja — visit other */}
          <motion.a
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href={POLAKERJA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-8 text-white overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_28px_60px_rgba(27,78,216,0.45)]"
            style={{
              background: 'linear-gradient(135deg, #1B4ED8 0%, #1E40AF 60%, #1E3A8A 100%)',
              boxShadow: '0 20px 45px rgba(27,78,216,0.32)',
            }}
          >
            {/* dotted pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            />
            {/* blob top-right */}
            <div
              className="pointer-events-none absolute -top-16 -right-12 w-56 h-56 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(191,219,254,0.35), transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            {/* blob bottom-left */}
            <div
              className="pointer-events-none absolute -bottom-20 -left-16 w-64 h-64 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(96,165,250,0.30), transparent 70%)',
                filter: 'blur(50px)',
              }}
            />

            {/* external link indicator */}
            <div
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.28)',
              }}
            >
              <ArrowUpRight size={16} />
            </div>

            {/* icon */}
            <div
              className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.28)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
              }}
            >
              <ShieldCheck size={28} className="text-white" strokeWidth={1.8} />
            </div>

            <p className="relative font-bold text-blue-100 text-[11px] uppercase tracking-[0.2em] mb-2">
              Polakerja Consulting
            </p>
            <h3 className="relative font-extrabold text-white text-xl lg:text-2xl mb-3">
              ISO, Legalitas &amp; Perizinan
            </h3>

            {/* trust pills */}
            <div className="relative flex flex-wrap gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                <span className="text-blue-200">●</span> ISO 9001 / 14001 / 45001
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                <span className="text-blue-200">●</span> NIB / OSS / SBU
              </span>
            </div>

            <p className="relative text-blue-50/90 text-sm leading-relaxed mb-5">
              Bangun fondasi compliance bisnis Anda — dari sertifikasi standar
              internasional, legalitas, perizinan, hingga sistem manajemen yang
              siap audit.
            </p>

            <ul className="relative flex flex-col gap-2 text-sm text-blue-50/90 mb-7">
              <li className="flex items-start gap-2">
                <span className="text-blue-200">•</span>
                Sertifikasi ISO 9001 / 14001 / 45001 / 37001
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">•</span>
                Pendirian PT, NIB &amp; OSS, perizinan akta
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">•</span>
                SBU &amp; SKK Konstruksi (LPJK)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-200">•</span>
                Sistem manajemen &amp; pendampingan audit
              </li>
            </ul>

            {/* CTA pill */}
            <span
              className="relative inline-flex items-center gap-2 font-bold text-sm rounded-full px-5 py-2.5 transition-all group-hover:gap-3"
              style={{
                background: '#FFFFFF',
                color: '#1B4ED8',
                boxShadow: '0 8px 20px rgba(15,23,42,0.18)',
              }}
            >
              Kunjungi Polakerja
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
