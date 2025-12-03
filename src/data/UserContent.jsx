import { useUser } from "../data/UserContext";

export default function UserContent() {
  const { anggotaUkm, kegiatanUser } = useUser();

  return (
    <div className="p-10 bg-green-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Data Saya</h1>

      <h2 className="text-xl font-semibold mb-3">Keanggotaan UKM</h2>
      {anggotaUkm.length === 0 ? (
        <p className="bg-red-500 py-2 px-4 rounded-lg">Tidak terdaftar UKM</p>
      ) : (
        anggotaUkm.map((id) => <div key={id} className="bg-white text-black p-2 rounded mb-2">UKM ID: {id}</div>)
      )}

      <h2 className="text-xl font-semibold mt-6 mb-3">Kegiatan Diikuti</h2>
      {kegiatanUser.length === 0 ? (
        <p className="bg-red-500 py-2 px-4 rounded-lg">Belum ikut kegiatan</p>
      ) : (
        kegiatanUser.map((id) => (
          <div key={id} className="bg-white text-black p-2 rounded mb-2">
            Kegiatan ID: {id}
          </div>
        ))
      )}
    </div>
  );
}
