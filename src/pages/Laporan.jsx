import React from 'react';
import { ukmData } from '../data/ukmData';

function Laporan() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Laporan UKM</h1>
      {ukmData.map((ukm) => (
        <div key={ukm.id} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{ukm.nama}</h2>
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Kegiatan</th>
                  <th className="px-4 py-2 text-left">Peserta</th>
                  <th className="px-4 py-2 text-left">Biaya</th>
                </tr>
              </thead>
              <tbody>
                {ukm.laporan.map((lap, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{lap.kegiatan}</td>
                    <td className="px-4 py-2">{lap.peserta}</td>
                    <td className="px-4 py-2">{lap.biaya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Laporan;