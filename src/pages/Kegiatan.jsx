import React from 'react';
import { ukmData } from '../data/ukmData';

function Kegiatan() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Daftar Kegiatan</h1>
      {ukmData.map((ukm) => (
        <div key={ukm.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{ukm.nama}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukm.kegiatan.map((keg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{keg.nama}</h3>
                <p className="text-gray-500 mb-2">{keg.tanggal}</p>
                <p className="text-gray-700">{keg.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Kegiatan;