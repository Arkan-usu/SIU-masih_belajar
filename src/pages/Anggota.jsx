import { useState } from "react";
import { ukmData } from "../data/ukmData";
import { useUser } from "../data/UserContext";

function Anggota() {
  const [data, setData] = useState(ukmData);
  const { user, addAnggota } = useUser();

  const handleDaftar = (ukmId) => {
    const ukm = data.find((u) => u.id === ukmId);
    if (!ukm) return;
    if (user.listAnggota.includes(ukm.nama)) return;

    const updated = data.map((u) =>
      u.id === ukmId ? { ...u, terdaftarAnggota: true } : u
    );
    setData(updated);
    addAnggota(ukm.nama);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Daftar Anggota UKM
      </h1>

      {data.map((ukm) => {
        const sudahTerdaftar =
          ukm.terdaftarAnggota || user.listAnggota.includes(ukm.nama);

        return (
          <div key={ukm.id} className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-indigo-600">
                {ukm.nama}
              </h2>
              <button
                onClick={() => handleDaftar(ukm.id)}
                disabled={sudahTerdaftar}
                className={`px-4 py-2 rounded-lg text-sm shadow-md transition
                  ${sudahTerdaftar
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-green-700 hover:bg-green-800 text-white"}`}
              >
                {sudahTerdaftar ? "Terdaftar" : "Daftar Anggota"}
              </button>
            </div>

            {/* UI ANGGOTA TETAP SAMA */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ukm.anggota.map((person, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
                >
                  <img
                    src="https://via.placeholder.com/100"
                    alt={person.nama}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {person.nama}
                  </h3>
                  <p className="text-gray-600">{person.jabatan}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Anggota;
