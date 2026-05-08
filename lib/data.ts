export const WA_NUMBER = '6281513050035'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Saya%20ingin%20konsultasi%20pajak%2C%20akuntansi%2C%20dan%20audit`
export const PHONE_DISPLAY = '+62 815-1305-0035'
export const EMAIL = 'info@polapajak.id'
export const ADDRESS = 'Jl. Dirgantara Raya, Arcadia Residence No. B8, Jatiasih, Bekasi 17426'
export const INSTAGRAM_URL = 'https://www.instagram.com/polapajak.id?igsh=MWJkb3Z3aWx0Zm85dg=='

export const navLinks = [
  { label: 'Beranda',     href: '#beranda' },
  { label: 'Layanan',     href: '#layanan' },
  { label: 'Tentang Kami',href: '#tentang' },
  { label: 'Kontak',      href: '#kontak' },
]

export const heroChips = [
  'Akurat & Terpercaya',
  'Efisien & Tepat Waktu',
  'Kepatuhan Terjamin',
  'Solusi Berkelanjutan',
]

export type LayananDetail = {
  tagline: string
  description: string
  features: { title: string; desc: string }[]
  deliverables: string[]
  idealFor: string[]
}

export type Layanan = {
  id: string
  title: string
  icon: string
  items: string[]
  detail: LayananDetail
}

export const layananData: Layanan[] = [
  {
    id: 'konsultasi',
    title: 'Konsultasi Pajak',
    icon: 'FileText',
    items: ['Perencanaan Pajak', 'Review Pajak', 'Tax Advisory'],
    detail: {
      tagline: 'Strategi pajak yang efisien, taat regulasi, dan minim risiko.',
      description:
        'Mitra konsultasi pajak yang membantu Anda menyusun strategi end-to-end — dari perencanaan, review berkala, hingga advisory atas perubahan regulasi terkini. Kami merancang skema yang optimal secara fiskal namun tetap berada dalam koridor compliance.',
      features: [
        { title: 'Perencanaan Pajak Strategis', desc: 'Optimasi beban pajak dalam koridor regulasi yang aman.' },
        { title: 'Review Pajak Komprehensif', desc: 'Tax health check untuk identifikasi risiko & peluang.' },
        { title: 'Advisory Real-Time', desc: 'Konsultasi reguler atas regulasi & putusan terbaru.' },
        { title: 'Mitigasi Sengketa', desc: 'Strategi preventif sebelum masalah muncul.' },
      ],
      deliverables: [
        'Tax Planning Document',
        'Risk Assessment Report',
        'Advisory Memo Bulanan',
        'Update Regulasi Berkala',
      ],
      idealFor: ['Perusahaan Menengah–Besar', 'UMKM Berkembang', 'PMA / Multinasional'],
    },
  },
  {
    id: 'pajak-bulanan',
    title: 'Pajak Bulanan',
    icon: 'Calculator',
    items: ['PPh 25/23/4(2)', 'PPN', 'PPh Final'],
    detail: {
      tagline: 'Pelaporan bulanan tepat waktu, perhitungan akurat — tanpa drama deadline.',
      description:
        'Kelola seluruh kewajiban pajak rutin Anda — PPh 25, PPh 23, PPh 4 ayat (2), PPN, dan PPh Final — dengan workflow yang terstruktur. Kami pastikan e-SPT, e-Faktur, dan e-Bupot tersubmit sebelum deadline DJP, dengan dokumentasi lengkap untuk audit trail.',
      features: [
        { title: 'PPh Pasal 25 / 29', desc: 'Angsuran bulanan & PPh terutang akhir tahun.' },
        { title: 'PPh 23 & PPh 4(2)', desc: 'Pemotongan tepat klasifikasi & e-Bupot.' },
        { title: 'PPN & e-Faktur', desc: 'Faktur Pajak digital + validasi otomatis DJP.' },
        { title: 'Adaptasi Coretax', desc: 'Migrasi & operasional di sistem perpajakan terbaru.' },
      ],
      deliverables: [
        'Bukti Setor Pajak (BPN)',
        'SPT Masa PPh & PPN',
        'Faktur Pajak Output / Input',
        'Laporan Rekonsiliasi PPN',
      ],
      idealFor: ['PT / CV Aktif', 'PKP & Non-PKP', 'PMA / PMDN'],
    },
  },
  {
    id: 'pembukuan',
    title: 'Pembukuan',
    icon: 'BookOpen',
    items: ['Pencatatan Transaksi', 'Rekonsiliasi Bank', 'Jurnal & Ledger'],
    detail: {
      tagline: 'Catatan keuangan yang rapi, terstandar, dan siap diaudit kapan saja.',
      description:
        'Pencatatan transaksi sesuai SAK ETAP/PSAK dengan workflow modern: input mingguan, rekonsiliasi bank otomatis, jurnal terstruktur, dan ledger lengkap. Anda fokus ke bisnis, kami yang menjaga buku Anda tetap auditable.',
      features: [
        { title: 'Pencatatan Berkala', desc: 'Input transaksi mingguan, bukan akhir bulan.' },
        { title: 'Rekonsiliasi Bank', desc: 'Cocokan saldo otomatis & deteksi diskrepansi.' },
        { title: 'Software Industri', desc: 'Accurate, Xero, atau MYOB — sesuai preferensi Anda.' },
        { title: 'Cloud & Backup', desc: 'Data terenkripsi, akses real-time 24/7.' },
      ],
      deliverables: [
        'Buku Besar (General Ledger)',
        'Buku Pembantu (Subledger)',
        'Laporan Rekonsiliasi Bulanan',
        'Trial Balance Periode',
      ],
      idealFor: ['Startup & UMKM', 'Kantor Cabang', 'Perusahaan Tanpa Tim Akuntansi'],
    },
  },
  {
    id: 'laporan',
    title: 'Laporan Keuangan',
    icon: 'BarChart3',
    items: ['Laporan Laba Rugi', 'Neraca', 'Arus Kas'],
    detail: {
      tagline: 'Insight bisnis yang akurat dan sesuai standar PSAK / SAK ETAP.',
      description:
        'Susun laporan keuangan profesional sebagai alat decision-making, bukan sekadar dokumen administratif. Kami menyajikan data finansial yang transparan, terstandar, dan siap untuk kepentingan bank, investor, atau audit eksternal.',
      features: [
        { title: 'Laporan Laba Rugi', desc: 'Profitabilitas per periode & per segmen bisnis.' },
        { title: 'Neraca / Position', desc: 'Aset, liabilitas, dan ekuitas terstruktur.' },
        { title: 'Arus Kas', desc: 'Operasi, investasi, pendanaan dengan metode direct / indirect.' },
        { title: 'Catatan / CALK', desc: 'Notes lengkap dengan rincian per akun signifikan.' },
      ],
      deliverables: [
        'Laporan Laba Rugi Komprehensif',
        'Statement of Financial Position',
        'Laporan Arus Kas',
        'Catatan atas Laporan Keuangan',
      ],
      idealFor: ['Pelaporan ke Bank / Investor', 'Persiapan Audit', 'Internal Management'],
    },
  },
  {
    id: 'payroll',
    title: 'Payroll',
    icon: 'Users',
    items: ['Perhitungan Gaji', 'PPh 21 Karyawan', 'BPJS & Slip Gaji'],
    detail: {
      tagline: 'Penggajian aman, akurat, dan slip digital langsung ke karyawan.',
      description:
        'Sistem payroll end-to-end: perhitungan gaji bulanan, PPh 21 per karyawan dengan TER terbaru, BPJS Ketenagakerjaan & Kesehatan, hingga distribusi slip gaji digital. Confidential, accurate, on time — setiap bulan.',
      features: [
        { title: 'Perhitungan Otomatis', desc: 'Gaji pokok, tunjangan, lembur, bonus, potongan.' },
        { title: 'PPh 21 Per Karyawan', desc: 'Sesuai TER & PTKP regulasi terbaru.' },
        { title: 'BPJS Integration', desc: 'Setoran 2 program + sinkronisasi data karyawan.' },
        { title: 'Slip Gaji Digital', desc: 'Email langsung atau via portal karyawan.' },
      ],
      deliverables: [
        'Daftar Gaji Bulanan',
        'Bukti Potong 1721-A1 Tahunan',
        'Bukti Setor BPJS',
        'Slip Gaji Per Karyawan',
      ],
      idealFor: ['Perusahaan 5–500+ Karyawan', 'Multi-Cabang', 'Outsourcing Friendly'],
    },
  },
  {
    id: 'compliance',
    title: 'Compliance & Lainnya',
    icon: 'ClipboardList',
    items: ['SPT Tahunan Badan', 'SPT Tahunan Pribadi', 'Pendampingan Pemeriksaan'],
    detail: {
      tagline: 'Compliance menyeluruh — dari pelaporan rutin sampai kasus spesial.',
      description:
        'Layanan kepatuhan lengkap: SPT Tahunan Badan & Pribadi, pendampingan pemeriksaan pajak (tax audit), penyusunan dokumen sengketa, hingga asistensi atas berbagai isu administrasi perpajakan yang membutuhkan perhatian khusus.',
      features: [
        { title: 'SPT Tahunan Badan', desc: '1771 + seluruh lampiran sesuai jenis usaha.' },
        { title: 'SPT Tahunan Pribadi', desc: '1770 / 1770S / 1770SS untuk pemilik & direksi.' },
        { title: 'Pendampingan Pemeriksaan', desc: 'Tax audit defense end-to-end & komunikasi DJP.' },
        { title: 'Sengketa & Banding', desc: 'Keberatan, banding, hingga peninjauan kembali.' },
      ],
      deliverables: [
        'SPT Tahunan & Bukti e-Filing',
        'Tax Audit Working Paper',
        'Letter of Response / Tanggapan',
        'Compliance Calendar Tahunan',
      ],
      idealFor: ['Annual Compliance', 'Persiapan Pemeriksaan', 'Penyelesaian Kasus Pajak'],
    },
  },
]

export const statsData = [
  { value: '200',  suffix: '+', label: 'Klien Terpercaya',
    description: 'Berbagai industri telah mempercayakan pengelolaan pajak & keuangannya kepada kami.' },
  { value: '500',  suffix: '+', label: 'Projek Selesai',
    description: 'Penugasan pajak, akuntansi, dan audit yang telah kami tuntaskan dengan baik.' },
  { value: '100',  suffix: '%', label: 'Tingkat Kepatuhan',
    description: 'Laporan tepat waktu, akurat, dan sesuai regulasi perpajakan.' },
  { value: '15',   suffix: '+', label: 'Tahun Pengalaman',
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
      'Polapajak membantu kami mengelola pajak dengan rapi dan pelaporan keuangan jadi lebih rapi. Timnya responsif dan sangat profesional.',
    name: 'Sutrisno', role: 'Managing Partner', company: 'PT Esdea Assistance Management', rating: 5,
  },
  {
    quote:
      'Layanan Polapajak Consulting sangat memudahkan kami, mulai dari perhitungan pajak hingga pelaporan pajak bulanan. Sangat direkomendasikan!',
    name: 'Koko', role: 'Owner Restaurant', company: 'PT Putra Tanjung Komat', rating: 5,
  },
  {
    quote:
      'Penjelasan jelas, solusi tepat, dan selalu update terkait regulasi terbaru. Polapajak the best!',
    name: 'Claudika Ega', role: 'Project Manager', company: 'PT Zekon Indonesia', rating: 5,
  },
]
