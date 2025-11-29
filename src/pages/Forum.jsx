import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ukmData } from '../data/ukmData';

function ForumDetail() {
  const { id } = useParams();
  const ukm = ukmData.find((u) => u.id === parseInt(id));
  const [posts, setPosts] = useState([
    { user: 'Alice', message: 'Apa kegiatan minggu depan?', time: '2 jam lalu' },
    { user: 'Bob', message: 'Saya setuju dengan proposal baru.', time: '1 jam lalu' }
  ]);
  const [newPost, setNewPost] = useState('');

  if (!ukm) return <div className="text-center py-16">UKM tidak ditemukan.</div>;

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { user: 'Anda', message: newPost, time: 'Baru saja' }]);
      setNewPost('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Link to={`/ukm/${id}`} className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">← Kembali ke {ukm.nama}</Link>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Forum {ukm.nama}</h1>
      <div className="max-w-2xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition duration-300">
            <div className="flex items-center mb-2">
              <span className="font-semibold text-indigo-600">{post.user}</span>
              <span className="text-gray-500 ml-2">{post.time}</span>
            </div>
            <p className="text-gray-700">{post.message}</p>
          </div>
        ))}
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-4 border rounded-lg mt-4"
          placeholder="Tulis komentar..."
        />
        <button onClick={handlePost} className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">Kirim</button>
      </div>
    </div>
  );
}

export default ForumDetail;