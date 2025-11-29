import { useParams, useNavigate } from 'react-router-dom';
import { ukmData } from '../data/ukmData';  // Import data UKM

function DetailUKM() {
  const { id } = useParams();  // Ambil ID dari URL
  const navigate = useNavigate();
  const ukm = ukmData.find((item) => item.id === parseInt(id));  // Cari UKM berdasarkan ID

  if (!ukm) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">UKM Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">ID UKM yang Anda cari tidak valid.</p>
        <button 
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300"
          onClick={() => navigate('/')}
        >
          Kembali ke Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header UKM */}
      <div className="bg-emerald-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <img src={ukm.gambar || '/default-image.jpg'} alt={ukm.nama} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg" />
          <h1 className="text-5xl font-extrabold mb-4">{ukm.nama}</h1>
          <p className="text-xl">{ukm.deskripsi}</p>
        </div>
      </div>

      {/* Section Informasi */}
      <div className="container mx-auto px-4 py-16">
        {/* Anggota */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-600 mb-6">Anggota</h2>
          {ukm.anggota && ukm.anggota.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukm.anggota.map((anggota, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{anggota.nama || 'Nama Anggota'}</h3>
                  <p className="text-gray-600">{anggota.jabatan || 'Jabatan'}</p>
                  <p className="text-sm text-gray-500">{anggota.email || 'Email'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Tidak ada data anggota.</p>
          )}
        </div>

        {/* Kegiatan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-600 mb-6">Kegiatan</h2>
          {ukm.kegiatan && ukm.kegiatan.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukm.kegiatan.map((kegiatan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{kegiatan.nama || 'Nama Kegiatan'}</h3>
                  <p className="text-gray-600 mb-2">{kegiatan.deskripsi || 'Deskripsi'}</p>
                  <p className="text-sm text-gray-500">Tanggal: {kegiatan.tanggal || 'Tidak diketahui'}</p>
                  <p className="text-sm text-gray-500">Lokasi: {kegiatan.lokasi || 'Tidak diketahui'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Tidak ada data kegiatan.</p>
          )}
        </div>

        {/* Laporan */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-600 mb-6">Laporan</h2>
          {ukm.laporan && ukm.laporan.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukm.laporan.map((laporan, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{laporan.judul || 'Judul Laporan'}</h3>
                  <p className="text-gray-600 mb-2">{laporan.isi || 'Isi laporan'}</p>
                  <p className="text-sm text-gray-500">Tanggal: {laporan.tanggal || 'Tidak diketahui'}</p>
                  <p className="text-sm text-gray-500">Penulis: {laporan.penulis || 'Tidak diketahui'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Tidak ada data laporan.</p>
          )}
        </div>

        {/* Forum (jika ada) */}
        {ukm.forum && ukm.forum.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">Forum</h2>
            <div className="space-y-4">
              {ukm.forum.map((post, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.judul || 'Judul Post'}</h3>
                  <p className="text-gray-600 mb-2">{post.isi || 'Isi post'}</p>
                  <p className="text-sm text-gray-500">Penulis: {post.penulis || 'Tidak diketahui'}</p>
                  <p className="text-sm text-gray-500">Tanggal: {post.tanggal || 'Tidak diketahui'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tombol Kembali */}
        <div className="text-center">
          <button 
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition duration-300"
            onClick={() => navigate('/')}
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailUKM;