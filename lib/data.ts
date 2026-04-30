export const WA_NUMBER = '6281234567890'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20PolaPajak%2C%20saya%20ingin%20konsultasi%20pajak`
export const PHONE_DISPLAY = '+62 812-3456-7890'
export const EMAIL = 'info@polapajak.id'
export const ADDRESS = 'Jl. TB Simatupang No. 18, Jakarta Selatan, DKI Jakarta 12560'

export const navLinks = [
  { label: 'Beranda',     href: '#beranda' },
  { label: 'Layanan',     href: '#layanan' },
  { label: 'Tentang Kami',href: '#tentang' },
  { label: 'Blog',        href: '#blog' },
  { label: 'Kontak',      href: '#kontak' },
]

export const heroChips = [
  'Akurat & Terpercaya',
  'Efisien & Tepat Waktu',
  'Kepatuhan Terjamin',
  'Solusi Berkelanjutan',
]

export const layananData = [
  {
    id: 'konsultasi',
    title: 'Konsultasi Pajak',
    icon: 'FileText',
    items: ['Perencanaan Pajak', 'Review Pajak', 'Tax Advisory'],
  },
  {
    id: 'pajak-bulanan',
    title: 'Pajak Bulanan',
    icon: 'Calculator',
    items: ['PPh 25/23/4(2)', 'PPN', 'PPh Final'],
  },
  {
    id: 'pembukuan',
    title: 'Pembukuan',
    icon: 'BookOpen',
    items: ['Pencatatan Transaksi', 'Rekonsiliasi Bank', 'Jurnal & Ledger'],
  },
  {
    id: 'laporan',
    title: 'Laporan Keuangan',
    icon: 'BarChart3',
    items: ['Laporan Laba Rugi', 'Neraca', 'Arus Kas'],
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: 'Users',
    items: ['Perhitungan Gaji', 'PPh 21 Karyawan', 'BPJS & Slip Gaji'],
  },
  {
    id: 'compliance',
    title: 'Compliance & Lainnya',
    icon: 'ClipboardList',
    items: ['SPT Tahunan Badan', 'SPT Tahunan Pribadi', 'Pendampingan Pemeriksaan'],
  },
]

export const statsData = [
  { value: '500',  suffix: '+', label: 'Klien Terpercaya',
    description: 'Berbagai industri telah mempercayakan pengelolaan pajak & keuangannya kepada kami.' },
  { value: '150',  suffix: '+', label: 'Profesional Berpengalaman',
    description: 'Tim berpengalaman dan kompeten di bidang pajak & akuntansi.' },
  { value: '98',   suffix: '%', label: 'Tingkat Kepatuhan',
    description: 'Laporan tepat waktu, akurat, dan sesuai regulasi perpajakan.' },
  { value: '10',   suffix: '+', label: 'Tahun Pengalaman',
    description: 'Memberikan solusi terbaik untuk pertumbuhan bisnis Anda.' },
]

export const prosesData = [
  { step: '01', title: 'Konsultasi Awal',         icon: 'MessageCircle',
    description: 'Memahami kebutuhan, tujuan, dan kondisi perpajakan bisnis Anda.' },
  { step: '02', title: 'Analisis & Perencanaan',  icon: 'FileText',
    description: 'Menganalisis data dan menyusun strategi pajak yang optimal.' },
  { step: '03', title: 'Eksekusi',                icon: 'Edit',
    description: 'Melaksanakan perhitungan, pencatatan, dan pelaporan secara akurat.' },
  { step: '04', title: 'Review & Monitoring',     icon: 'ClipboardCheck',
    description: 'Meninjau hasil dan memastikan kepatuhan serta efisiensi berkelanjutan.' },
  { step: '05', title: 'Laporan & Evaluasi',      icon: 'BarChart3',
    description: 'Menyampaikan laporan dan memberikan rekomendasi untuk pertumbuhan bisnis.' },
]

export const tentangPoints = [
  'Tim profesional dan berpengalaman',
  'Pendekatan personal & solusi tepat sasaran',
  'Teknologi modern & proses efisien',
  'Kerahasiaan data & keamanan terjamin',
  'Layanan responsif & komunikatif',
]

export const tentangPillars = [
  { icon: 'ShieldCheck', title: 'Terpercaya',
    desc: 'Integritas dan kepercayaan adalah prioritas kami.' },
  { icon: 'Users',       title: 'Profesional',
    desc: 'Didukung tim ahli di bidang pajak & akuntansi.' },
  { icon: 'Leaf',        title: 'Berkelanjutan',
    desc: 'Solusi jangka panjang untuk pertumbuhan bisnis Anda.' },
]

export const testimoniData = [
  {
    quote:
      'PolaPajak membantu kami mengelola pajak dengan rapi dan pelaporan keuangan jadi lebih rapi. Timnya responsif dan sangat profesional.',
    name: 'Arief Budiman', role: 'Direktur Utama', company: 'PT. Mitra Karya Solusi', rating: 5,
  },
  {
    quote:
      'Layanan PolaPajak sangat memudahkan kami, mulai dari perhitungan pajak hingga pelaporan pajak bulanan. Sangat direkomendasikan!',
    name: 'Dewi Lestari', role: 'Finance Manager', company: 'PT. Sejahtera Abadi', rating: 5,
  },
  {
    quote:
      'Penjelasan jelas, solusi tepat, dan selalu update terkait regulasi terbaru. PolaPajak the best!',
    name: 'Rudi Hartono', role: 'CEO', company: 'CV. Mandiri Jaya', rating: 5,
  },
]
