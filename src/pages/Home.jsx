import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ukmData } from '../data/ukmData';

function Home() {
  const navigate = useNavigate();

  // State untuk animasi judul (menggunakan index untuk lebih aman)
  const [titleIndex, setTitleIndex] = useState(1);  // Mulai dari 1 untuk langsung ada karakter
  const titleText = 'Selamat Datang di SIU';
  const titleChars = titleText.split('');

  // State untuk toggle item (awalnya false, muncul saat tombol diklik)
  const [showItems, setShowItems] = useState(false);

  // useEffect untuk animasi judul (simpel, berulang terus menerus, tanpa jeda)
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => {
        if (prevIndex < titleChars.length) {
          return prevIndex + 1;  // Tambah index
        } else {
          return 1;  // Reset ke 1 (bukan 0) untuk langsung mulai lagi
        }
      });
    }, 150);  // Interval per huruf

    return () => clearInterval(interval);  // Cleanup
  }, [titleChars.length]);  // Depend on length untuk safety

  // Build displayedTitle dari slice (mencegah )
  const displayedTitle = titleChars.slice(0, titleIndex).join('');

  return (
    <div>
      <div className='bg-emerald-500 pb-10'>
        {/* Hero Section (tanpa container, full-width) */}
        <div className="text-center mb-12 py-16">
          <h1 className="text-7xl font-extrabold text-gray-800 mb-4 mt-4">{displayedTitle}</h1>  {/* Tanpa fallback */}
          <p className="text-2xl text-white mb-8 mt-8">Platform Sistem Informasi UKM. Dapatkan informasi detail dan terbaru UKM yang anda Minati.</p>
          <button 
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300 mt-8" 
            onClick={() => setShowItems(!showItems)}  // Toggle showItems
          >
            About US
          </button>
        </div>

        {/* Section Fitur (slide down berdasarkan showItems) */}
        <div className={`container mx-auto overflow-hidden transition-all duration-500 ${showItems ? 'max-h-96' : 'max-h-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold text-emerald-600 mb-2">Anggota</h2>
              <p>Kelola daftar anggota UKM dengan mudah.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold text-emerald-600 mb-2">Forum</h2>
              <p>Diskusikan ide dan berbagi informasi.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold text-emerald-600 mb-2">Kegiatan</h2>
              <p>Lihat dan ikuti kegiatan terbaru.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Daftar UKM (dengan container) */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">UKM yang Tersedia</h2>
          <p className="text-lg text-gray-600">Jelajahi berbagai Unit Kegiatan Mahasiswa di kampus kami.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ukmData && ukmData.length > 0 ? ukmData.map((ukm) => (  // Check jika data ada
            <div 
              key={ukm.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 transition duration-300 cursor-pointer"
              onClick={() => navigate(`/ukm/${ukm.id}`)}
            >
              <img src={ukm.gambar || '/default-image.jpg'} alt={ukm.nama || 'UKM'} className="w-full h-32 object-cover rounded-lg mb-4" />  {/* Fallback gambar */}
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">{ukm.nama || 'Nama UKM'}</h3>  {/* Fallback nama */}
              <p className="text-gray-700 mb-4">{ukm.deskripsi || 'Deskripsi UKM'}</p>  {/* Fallback deskripsi */}
              <div className="text-sm text-gray-600 mb-4">
                <p><strong>Anggota:</strong> {ukm.anggota ? ukm.anggota.length : 0}</p>  {/* Fallback array */}
                <p><strong>Kegiatan:</strong> {ukm.kegiatan ? ukm.kegiatan.length : 0}</p>
                <p><strong>Laporan:</strong> {ukm.laporan ? ukm.laporan.length : 0}</p>
              </div>
            </div>
          )) : (
            <p className="text-center text-gray-600">Data UKM tidak tersedia.</p>  // Pesan jika data kosong
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
