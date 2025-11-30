import { useState } from "react";
import { ukmData } from "../data/ukmData";
import { useUser } from "../data/UserContext";

export default function Kegiatan() {
  const [data, setData] = useState(ukmData);
  const { user, addKegiatan } = useUser();

  const handleDaftar = (ukmId, namaKegiatan) => {
    // temukan UKM dari data master
    const ukm = data.find((u) => u.id === ukmId);
    if (!ukm) return;

    // 1) CEK: apakah user sudah terdaftar sebagai anggota di UKM ini?
    if (!user.listAnggota.includes(ukm.nama)) {
      // Reminder — jangan ubah UI, beri alert sederhana
      alert(
        `Anda harus mendaftar sebagai anggota "${ukm.nama}" terlebih dahulu sebelum mengikuti kegiatan ini.`
      );
      return;
    }

    // 2) Cegah double-register berdasarkan nama kegiatan di context
    if (user.listKegiatan.includes(namaKegiatan)) {
      return;
    }

    // 3) Update local UI state supaya tombol berubah (tidak merubah ukmData asli)
    const updated = data.map((u) =>
      u.id === ukmId
        ? {
            ...u,
            kegiatan: u.kegiatan.map((k) =>
              k.nama === namaKegiatan ? { ...k, terdaftar: true } : k
            ),
          }
        : u
    );
    setData(updated);

    // 4) Simpan ke context (nama kegiatan)
    addKegiatan(namaKegiatan);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Daftar Kegiatan UKM
      </h1>

      {data.map((ukm) => (
        <div key={ukm.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{ukm.nama}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ukm.kegiatan.map((keg, index) => {
              const sudahIkut = user.listKegiatan.includes(keg.nama);

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{keg.nama}</h3>
                  <p className="text-gray-600 mb-4">{keg.deskripsi}</p>

                  <button
                    onClick={() => handleDaftar(ukm.id, keg.nama)}
                    disabled={sudahIkut}
                    className={`px-4 py-2 rounded-lg text-sm shadow-md transition w-full
                      ${sudahIkut
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}
                  >
                    {sudahIkut ? "Sudah Terdaftar" : "Ikuti Kegiatan"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
