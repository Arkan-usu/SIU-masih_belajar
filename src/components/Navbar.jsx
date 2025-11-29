import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const NavItem = ({ label, page }) => (
    <button
      onClick={() => navigate(page)}
      className="px-6 py-3 bg-green-600 text-black font-bold rounded-full hover:bg-green-700 shadow-md text-sm transition"
    >
      {label}
    </button>
  );

  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-white flex items-center px-6 shadow-md z-50 border-b ">

      <h2 className="text-4xl font-bold text-blue-500 ml-2">SIU</h2>

      <div className="flex flex-1 justify-center gap-20">
        <NavItem label="Home" page="/" />
        <NavItem label="Laporan" page="/laporan" />
        <NavItem label="Anggota" page="/anggota" />
        <NavItem label="Kegiatan" page="/kegiatan" />
      </div>

      <button
        onClick={toggleSidebar}
        className="ml-auto bg-green-600 w-10 h-10 rounded-full text-black text-xl flex items-center justify-center hover:bg-green-700 transition"
      >
        ☰
      </button>
    </div>
  );
}
