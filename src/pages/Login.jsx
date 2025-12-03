import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; // Jika belum install, npm install react-hot-toast

import { useUser } from "../data/UserContext"; // ⬅️ tambah ini

const FormContainer = ({ children, title }) => (


  <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 flex items-center justify-center p-6">
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-sm w-full">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </div>
  </div>
);
export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isAdmin, setIsAdmin] = useState(false); // State untuk pilih login sebagai admin
const navigate = useNavigate();


// Handler untuk login
const handleLogin = () => {
// Validasi dasar
if (!email || !password) {
toast.error("Email dan password harus diisi!");
return;
}


if (isAdmin) {
  // Validasi kredensial admin (ganti dengan API call atau hardcode untuk testing)
  if (email === "admin@example.com" && password === "admin123") { // Ganti dengan kredensial nyata
    localStorage.setItem('admin_token', 'admin_logged_in'); // Simpan token admin
    toast.success("Login sebagai admin berhasil!");
    navigate("/admin"); // Navigasi langsung ke admin
  } else {
    toast.error("Kredensial admin salah!");
  }
} else {
  // Login sebagai user biasa (ganti dengan API call)
  console.log("Login sebagai user:", email, password);
  toast.success("Login berhasil!");
  navigate("/"); // Navigasi ke home
}

};


return (
<FormContainer title="Login">
<Toaster /> {/* Untuk notifications */}


  <input
    className="w-full p-3 my-2 rounded-lg bg-white"
    placeholder="Email"
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    className="w-full p-3 my-2 rounded-lg bg-white"
    placeholder="Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  {/* Checkbox untuk login sebagai admin */}
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      id="admin-login"
      checked={isAdmin}
      onChange={(e) => setIsAdmin(e.target.checked)}
      className="mr-2"
    />
    <label htmlFor="admin-login" className="text-sm text-white">Login sebagai Admin</label>
  </div>

  {/* Link Lupa Password */}
  <div className="text-right mb-4">
    <button
      onClick={() => navigate("/forgot-password")}
      className="text-sm text-blue-600 hover:underline"
    >
      Lupa Password?
    </button>
  </div>

  <button
    onClick={handleLogin}
    className="w-full p-3 mt-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
  >
    {isAdmin ? "Login sebagai Admin" : "Login"}
  </button>

  <button
    onClick={() => navigate("/register")}
    className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
  >
    Go to Register
  </button>

  <button
    onClick={() => navigate("/")}
    className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
  >
    Back to Home
  </button>
</FormContainer>

);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { loginUser } = useUser(); // ⬅️ context

  const handleLogin = () => {
    if (!email) return alert("Isi email terlebih dahulu!");

    loginUser({ email }); // ⬅️ simpan email ke context
    navigate("/profile");
  };

  return (
    <FormContainer title="Login">
      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Password"
        type="password"
      />

      <button
        onClick={handleLogin}
        className="w-full p-3 mt-4 bg-green-800 text-white rounded-lg"
      >
        Login
      </button>

      <button
        onClick={() => navigate("/register")}
        className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
      >
        Go to Register
      </button>

      <button
        onClick={() => navigate("/")}
        className="w-full p-3 mt-2 bg-red-500 text-white rounded-lg"
      >
        Back to Home
      </button>
    </FormContainer>
  );
}

