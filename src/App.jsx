import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { UserProvider } from "./data/UserContext"; // <== konteks user

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DetailUKM from "./pages/DetailUKM";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword"; // Tambahkan import ini
import Profile from "./pages/Profile";
import Anggota from "./pages/Anggota";
import Forum from "./pages/Forum";
import Kegiatan from "./pages/Kegiatan";
import Laporan from "./pages/Laporan";
import AdminPage from "./pages/AdminPage";
import AuthGuard from "./components/AuthGuard";

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [anggotaTerdaftar, setAnggotaTerdaftar] = useState(false);
  const [kegiatanTerdaftar, setKegiatanTerdaftar] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  // Tambahkan "/forgot-password" ke fullScreen untuk konsistensi dengan login/register
  const fullScreen =
    location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password";

  const handleNavigate = (page) => navigate(page);
  const handleLogout = () => navigate("/login");

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar tampil kecuali login & register */}
      {!fullScreen && <Navbar toggleSidebar={toggleSidebar} />}

      <div className={!fullScreen ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ukm/:id" element={<DetailUKM />} />
          <Route path="/anggota" element={<Anggota setAnggotaTerdaftar={setAnggotaTerdaftar}/>} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/kegiatan" element={<Kegiatan setKegiatanTerdaftar={setKegiatanTerdaftar} />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Tambahkan route ini */}
          <Route path="/profile" element={<Profile anggota={anggotaTerdaftar} kegiatan={kegiatanTerdaftar}/>} />

          <Route 
            path="/admin" 
            element={
              <AuthGuard>
                <AdminPage />
              </AuthGuard>
            } 
          />
        </Routes>
        {/* Seluruh route berada dalam UserProvider */}
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ukm/:id" element={<DetailUKM />} />
            <Route path="/anggota" element={<Anggota />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navigate={handleNavigate}
        onLogout={handleLogout}
      />

      {/* Overlay klik untuk menutup sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Footer hanya untuk halaman biasa */}
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
