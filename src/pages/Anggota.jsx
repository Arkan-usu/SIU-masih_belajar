import { ukmData } from '../data/ukmData';

function Anggota() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Daftar Anggota UKM</h1>
      {ukmData.map((ukm) => (
        <div key={ukm.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{ukm.nama}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukm.anggota.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                <img src="https://via.placeholder.com/100" alt={person.nama} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{person.nama}</h3>
                <p className="text-gray-600">{person.jabatan}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Anggota;