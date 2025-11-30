import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../data/UserContext"; // ⬅️ tambah ini

const FormContainer = ({ children, title }) => (
  <div className="min-h-screen bg-green-800 flex items-center justify-center p-6">
    <div className="bg-green-300 p-8 rounded-xl shadow-xl max-w-sm w-full">
      <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  </div>
);

export default function Register() {
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
      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

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

      <input className="w-full p-3 my-2 rounded-lg bg-white"
        placeholder="Confirm Password"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button
        onClick={handleRegister}
        className="w-full p-3 mt-4 bg-green-800 text-white rounded-lg"
      >
        Register
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
