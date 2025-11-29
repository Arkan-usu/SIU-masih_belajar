// Data dummy untuk UKM
export const ukmData = [
  {
    id: 1,
    nama: 'UKM Olahraga',
    deskripsi: 'Menyelenggarakan kegiatan olahraga seperti futsal, basket, dan lari pagi.',
    gambar: 'https://via.placeholder.com/300x200?text=UKM+Olahraga',
    anggota: [
      { nama: 'Alice Johnson', jabatan: 'Ketua' },
      { nama: 'Bob Smith', jabatan: 'Anggota' },
      { nama: 'Charlie Brown', jabatan: 'Sekretaris' }
    ],
    kegiatan: [
      { nama: 'Turnamen Futsal', tanggal: '15 Okt 2023', deskripsi: 'Kompetisi antar mahasiswa.' },
      { nama: 'Lari Pagi', tanggal: '20 Okt 2023', deskripsi: 'Olahraga pagi bersama.' }
    ],
    laporan: [
      { kegiatan: 'Turnamen Futsal', peserta: 50, biaya: 'Rp 500.000' },
      { kegiatan: 'Lari Pagi', peserta: 30, biaya: 'Rp 200.000' }
    ]
  },
  {
    id: 2,
    nama: 'UKM Seni',
    deskripsi: 'Tempat berkumpulnya seniman muda untuk belajar musik, tari, dan seni rupa.',
    gambar: 'https://via.placeholder.com/300x200?text=UKM+Seni',
    anggota: [
      { nama: 'Diana Prince', jabatan: 'Ketua' },
      { nama: 'Eve Wilson', jabatan: 'Anggota' }
    ],
    kegiatan: [
      { nama: 'Workshop Musik', tanggal: '18 Okt 2023', deskripsi: 'Belajar alat musik.' },
      { nama: 'Pameran Seni', tanggal: '25 Okt 2023', deskripsi: 'Tampilkan karya seni.' }
    ],
    laporan: [
      { kegiatan: 'Workshop Musik', peserta: 40, biaya: 'Rp 300.000' },
      { kegiatan: 'Pameran Seni', peserta: 60, biaya: 'Rp 400.000' }
    ]
  },
  {
    id: 3,
    nama: 'UKM Teknologi',
    deskripsi: 'Fokus pada pengembangan skill IT, coding, dan inovasi teknologi.',
    gambar: 'https://via.placeholder.com/300x200?text=UKM+Teknologi',
    anggota: [
      { nama: 'Frank Miller', jabatan: 'Ketua' },
      { nama: 'Grace Lee', jabatan: 'Anggota' },
      { nama: 'Henry Ford', jabatan: 'Bendahara' }
    ],
    kegiatan: [
      { nama: 'Hackathon', tanggal: '22 Okt 2023', deskripsi: 'Kompetisi coding.' },
      { nama: 'Seminar AI', tanggal: '28 Okt 2023', deskripsi: 'Pelajari kecerdasan buatan.' }
    ],
    laporan: [
      { kegiatan: 'Hackathon', peserta: 25, biaya: 'Rp 1.000.000' },
      { kegiatan: 'Seminar AI', peserta: 35, biaya: 'Rp 600.000' }
    ]
  },
  {
    id: 4,
    nama: 'UKM Sosial',
    deskripsi: 'Mengorganisir kegiatan bakti sosial, donor darah, dan kampanye lingkungan.',
    gambar: 'https://via.placeholder.com/300x200?text=UKM+Sosial',
    anggota: [
      { nama: 'Ivy Green', jabatan: 'Ketua' },
      { nama: 'Jack Black', jabatan: 'Anggota' }
    ],
    kegiatan: [
      { nama: 'Donor Darah', tanggal: '10 Okt 2023', deskripsi: 'Bantu sesama dengan donor.' },
      { nama: 'Gotong Royong', tanggal: '15 Okt 2023', deskripsi: 'Bersihkan lingkungan.' }
    ],
    laporan: [
      { kegiatan: 'Donor Darah', peserta: 100, biaya: 'Rp 100.000' },
      { kegiatan: 'Gotong Royong', peserta: 80, biaya: 'Rp 150.000' }
    ]
  }
];