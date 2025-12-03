import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'; // Jika belum install, jalankan npm install react-hot-toast
import { useUser } from "../data/UserContext"; // ⬅️ tambah ini

const FormContainer = ({ children, title }) => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-700 flex items-center justify-center p-6">
    <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-sm w-full">
      <h2 className="text-center text-3xl font-bold mb-6 text-white">{title}</h2>
      {children}
    </div>
  </div>
);

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // Fungsi validasi email sederhana
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handler untuk register
  const handleRegister = () => {
    // Validasi input
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Semua field harus diisi!");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Email tidak valid!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password minimal 6 karakter!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi password tidak cocok!");
      return;
    }

    // Simulasi register (ganti dengan API call ke backend, misalnya axios.post('/api/register', { username, email, password }))
    console.log("Register dengan:", { username, email, password });
    toast.success("Registrasi berhasil! Silakan login.");
    
    // Reset form dan navigasi ke login
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTimeout(() => navigate("/login"), 2000); // Delay 2 detik untuk feedback
  const navigate = useNavigate();
  const { registerUser } = useUser(); // ⬅️ dari context

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!username || !email || !password || !confirm) return alert("Lengkapi semua data!");
    if (password !== confirm) return alert("Password tidak sama!");

    registerUser({ username, email, password });
    navigate("/login");
  };

  return (
    <FormContainer title="Register">
      <Toaster /> {/* Untuk notifications */}
      
      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        className="w-full p-3 my-2 rounded-lg bg-white"

      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <input
        className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}

      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Confirm Password"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="w-full p-3 mt-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        className="w-full p-3 mt-4 bg-green-800 text-white rounded-lg"
      >
        Register
      </button>

      <button
        onClick={() => navigate("/login")}
        className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
      >
        Go to Login
      </button>

      <button
        onClick={() => navigate("/")}
        className="w-full p-3 mt-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
      >
        Back to Home
      </button>
    </FormContainer>
  );
}