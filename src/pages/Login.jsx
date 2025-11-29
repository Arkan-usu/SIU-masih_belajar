import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormContainer = ({ children, title }) => (
  <div className="min-h-screen bg-green-800 flex items-center justify-center p-6">
    <div className="bg-green-300 p-8 rounded-xl shadow-xl max-w-sm w-full">
      <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  </div>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // 🔥 tambahkan ini

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
        onClick={() => navigate("/")}
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
