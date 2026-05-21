export const WA_NUMBER = '6281513050035'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Saya%20ingin%20konsultasi%20pajak%2C%20akuntansi%2C%20dan%20audit`
export const PHONE_DISPLAY = '+62 815-1305-0035'
export const EMAIL = 'polapajak.id@gmail.com'
export const ADDRESS = 'Jl. Dirgantara Raya, Arcadia Residence No. B8, Jatiasih, Bekasi 17426'
export const INSTAGRAM_URL = 'https://www.instagram.com/polapajak.id'

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
  benefits: string[]
  itemDetails: { name: string; desc: string }[]
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
      benefits: [
        'Strategi sesuai profil & industri bisnis Anda',
        'Penghematan pajak optimal dalam koridor regulasi',
        'Mitigasi risiko sengketa & sanksi DJP',
        'Didukung tim berpengalaman 15+ tahun',
      ],
      itemDetails: [
        { name: 'Perencanaan Pajak Strategis', desc: 'Kami susun struktur pajak yang efisien dan aman, sehingga Anda dapat menghemat beban pajak tanpa keluar dari koridor regulasi.' },
        { name: 'Review Pajak Komprehensif', desc: 'Lewat tax health check menyeluruh, kami identifikasi celah risiko maupun peluang penghematan yang sering luput dari radar internal Anda.' },
        { name: 'Advisory Real-Time', desc: 'Setiap perubahan regulasi dan putusan terbaru langsung kami terjemahkan menjadi langkah praktis — Anda tidak perlu memantau DJP setiap hari.' },
        { name: 'Mitigasi Sengketa', desc: 'Kami petakan titik rawan sejak awal agar potensi sengketa dicegah jauh sebelum berkembang menjadi masalah serius.' },
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
      benefits: [
        'Pelaporan tepat waktu — bebas denda keterlambatan',
        'Perhitungan akurat sesuai ketentuan terbaru',
        'Workflow terstruktur dengan reminder deadline',
        'Adaptif terhadap sistem Coretax DJP',
      ],
      itemDetails: [
        { name: 'PPh Pasal 25 / 29', desc: 'Angsuran bulanan dan PPh terutang akhir tahun kami hitung tepat sasaran, sehingga tidak ada kejutan saat tutup buku tahunan.' },
        { name: 'PPh 23 & PPh 4(2)', desc: 'Pemotongan sesuai klasifikasi yang benar lengkap dengan e-Bupot — bukti potong rapi, terdokumentasi, dan siap diaudit kapan saja.' },
        { name: 'PPN & e-Faktur', desc: 'Faktur Pajak digital diterbitkan dan tervalidasi otomatis ke DJP — meminimalkan risiko tolakan dan menjaga arus kas Anda tetap lancar.' },
        { name: 'Adaptasi Coretax', desc: 'Tim kami sudah terbiasa dengan sistem Coretax DJP terbaru, jadi transisi maupun operasional Anda tetap berjalan mulus tanpa kebingungan teknis.' },
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
      benefits: [
        'Buku rapi dan auditable kapan saja',
        'Sesuai standar SAK ETAP / PSAK terkini',
        'Akses laporan real-time via cloud',
        'Software industri (Accurate, Xero, MYOB)',
      ],
      itemDetails: [
        { name: 'Pencatatan Berkala', desc: 'Transaksi kami input secara mingguan, bukan menumpuk di akhir bulan — laporan keuangan Anda selalu terkini saat dibutuhkan.' },
        { name: 'Rekonsiliasi Bank', desc: 'Saldo dicocokkan otomatis dan diskrepansi langsung kami tandai, sehingga buku Anda tetap akurat dan auditable kapan pun.' },
        { name: 'Software Industri', desc: 'Kami fleksibel menggunakan Accurate, Xero, atau MYOB sesuai preferensi Anda — tidak perlu repot ganti sistem yang sudah berjalan.' },
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
      benefits: [
        'Format profesional siap untuk bank & investor',
        'Sesuai standar PSAK / SAK ETAP',
        'Insight bisnis untuk decision-making',
        'Siap audit eksternal tanpa drama',
      ],
      itemDetails: [
        { name: 'Laporan Laba Rugi', desc: 'Profitabilitas per periode maupun per segmen bisnis kami sajikan jelas — Anda tahu persis dari mana laba terbaik datang dan area mana yang perlu diperbaiki.' },
        { name: 'Neraca / Position', desc: 'Aset, liabilitas, dan ekuitas tersusun rapi sesuai standar PSAK — siap dipresentasikan ke bank, investor, maupun auditor eksternal kapan saja.' },
        { name: 'Arus Kas', desc: 'Laporan arus kas operasi, investasi, dan pendanaan kami susun lengkap, sehingga Anda paham betul ke mana setiap rupiah bisnis Anda mengalir.' },
        { name: 'Catatan / CALK', desc: 'Catatan atas laporan keuangan kami lengkapi dengan rincian akun signifikan — laporan Anda bukan hanya rapi, tetapi juga transparan dan kredibel di mata pengambil keputusan.' },
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
      benefits: [
        'Confidential & accurate setiap bulan',
        'PPh 21 sesuai TER & PTKP terbaru',
        'BPJS Kesehatan & Ketenagakerjaan terintegrasi',
        'Slip gaji digital langsung ke karyawan',
      ],
      itemDetails: [
        { name: 'Perhitungan Otomatis', desc: 'Gaji pokok, tunjangan, lembur, bonus, dan potongan kami hitung otomatis dan akurat — tidak ada lagi salah hitung yang berpotensi memicu komplain karyawan.' },
        { name: 'PPh 21 Per Karyawan', desc: 'Perhitungan PPh 21 selalu mengikuti TER dan PTKP regulasi terbaru, sehingga Anda dan karyawan sama-sama tenang soal pajak penghasilan.' },
        { name: 'BPJS Integration', desc: 'Setoran BPJS Kesehatan dan Ketenagakerjaan beres tepat waktu setiap bulan, lengkap dengan sinkronisasi data karyawan tanpa membebani tim Anda.' },
        { name: 'Slip Gaji Digital', desc: 'Slip gaji dikirim langsung ke email atau portal karyawan — profesional, paperless, dan kerahasiaan data tetap terjaga.' },
      ],
      idealFor: ['Perusahaan 5–500+ Karyawan', 'Multi-Cabang', 'Outsourcing Friendly'],
    },
  },
  {
    id: 'compliance',
    title: 'Compliance & Lainnya',
    icon: 'ClipboardList',
    items: ['SPT Tahunan Badan', 'SPT Tahunan Pribadi', 'SP2DK & Pemeriksaan'],
    detail: {
      tagline: 'Compliance menyeluruh — dari pelaporan rutin sampai upaya hukum perpajakan.',
      description:
        'Layanan kepatuhan lengkap: SPT Tahunan Badan dan Pribadi, pendampingan SP2DK dan pemeriksaan pajak, hingga upaya hukum sengketa, banding, dan restitusi PPN/PPh. Kami siapkan dokumen, strategi, dan pendampingan langsung dengan DJP maupun Pengadilan Pajak — agar kasus tuntas, risiko terukur, dan hak Anda sebagai wajib pajak tetap terjaga.',
      benefits: [
        'Pendampingan ahli sepanjang proses',
        'Pengalaman puluhan kasus SP2DK & pemeriksaan',
        'Strategi sengketa berbasis yurisprudensi terbaru',
        'Komunikasi DJP yang efektif & profesional',
      ],
      itemDetails: [
        { name: 'SPT Tahunan Badan', desc: 'Kami susun SPT 1771 lengkap dengan seluruh lampiran sesuai jenis usaha Anda — laporan rapi, tepat waktu, dan minim risiko temuan dari DJP.' },
        { name: 'SPT Tahunan Pribadi', desc: 'SPT 1770/1770S/1770SS untuk pemilik dan direksi kami urus tuntas, sehingga compliance pribadi Anda sejalan dengan compliance perusahaan.' },
        { name: 'Pendampingan, SP2DK, dan Pemeriksaan', desc: 'Begitu Anda menerima SP2DK atau surat pemeriksaan, kami langsung dampingi — telaah substansi, susun tanggapan, siapkan dokumen pendukung, hingga hadir bersama Anda di setiap interaksi dengan DJP.' },
        { name: 'Sengketa, Banding, dan Restitusi', desc: 'Saat hasil pemeriksaan tidak sesuai atau Anda berhak atas restitusi, kami bawa kasus melalui keberatan, banding di Pengadilan Pajak, hingga PK di MA — argumentasi kuat berbasis yurisprudensi terbaru, restitusi cepat sampai terbit SKPLB.' },
      ],
      idealFor: ['Annual Compliance', 'Pendamping SP2DK & Pemeriksaan', 'Penyelesaian Sengketa & Restitusi'],
    },
  },
]

export const statsData = [
  { value: '200',  suffix: '+', label: 'Klien Percaya',
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
