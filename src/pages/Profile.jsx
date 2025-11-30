import { useUser } from "../data/UserContext";

export default function Profile() {
  const { user } = useUser(); // gunakan "user" sesuai UserContext

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">

        {/* USER INFO */}
        <h2 className="text-3xl font-bold text-center mb-2">{user.nama}</h2>
        <p className="text-center text-gray-600">{user.email}</p>
        <p className="text-center text-gray-500 text-sm mt-1">
          User ID: <span className="font-semibold">{user.id}</span>
        </p>

        <hr className="my-6" />

        {/* KEANGGOTAAN */}
        <h3 className="text-xl font-semibold mb-2">Keanggotaan UKM</h3>
        {user.listAnggota.length > 0 ? (
          user.listAnggota.map((ukm, i) => <p key={i}>• {ukm}</p>)
        ) : (
          <p className="text-gray-500">Belum terdaftar sebagai anggota UKM</p>
        )}

        <hr className="my-6" />

        {/* KEGIATAN */}
        <h3 className="text-xl font-semibold mb-2">Kegiatan Diikuti</h3>
        {user.listKegiatan.length > 0 ? (
          user.listKegiatan.map((k, i) => <p key={i}>• {k}</p>)
        ) : (
          <p className="text-gray-500">Belum mengikuti kegiatan apapun</p>
        )}
      </div>
    </div>
  );
}
