import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';  // Footer sudah diimpor, tapi belum digunakan—saya tambahkan di bawah jika perlu

import Home from "./pages/Home";
import DetailUKM from './pages/DetailUKM';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Anggota from "./pages/Anggota";  // Tambahan import
import Forum from "./pages/Forum";      // Tambahan import
import Kegiatan from "./pages/Kegiatan"; // Tambahan import
import Laporan from "./pages/Laporan";   // Tambahan import

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  const fullScreen =
    location.pathname === "/login" || location.pathname === "/register";

  const handleNavigate = (page) => navigate(page);
  const handleLogout = () => navigate("/login");

  return (
    <div className="min-h-screen bg-white">
      {!fullScreen && <Navbar toggleSidebar={toggleSidebar} />}

      <div className={!fullScreen ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ukm/:id" element={<DetailUKM />} />  {/* Tambahan route untuk DetailUKM */}
          <Route path="/anggota" element={<Anggota />} />  {/* Tambahan route */}
          <Route path="/forum" element={<Forum />} />      {/* Tambahan route */}
          <Route path="/kegiatan" element={<Kegiatan />} /> {/* Tambahan route */}
          <Route path="/laporan" element={<Laporan />} />   {/* Tambahan route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navigate={handleNavigate}
        onLogout={handleLogout}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Tambahkan Footer jika diperlukan, tapi hanya untuk halaman non-fullScreen */}
      {!fullScreen && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
