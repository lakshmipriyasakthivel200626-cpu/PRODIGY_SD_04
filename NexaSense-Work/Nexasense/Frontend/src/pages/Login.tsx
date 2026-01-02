// Login.tsx
import React, { useState } from "react";
import { auth } from "../firebase"; // make sure this path is correct
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // if you want to redirect

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // react-router-dom hook

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Get ID Token
      const token = await user.getIdToken();
      console.log("ID Token:", token);

      // ✅ Store token locally
      localStorage.setItem("idToken", token);

      alert("Login successful!");

      // ✅ Redirect to dashboard (example)
      navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert("Login failed: " + error.message);
        console.error("Login error:", error.message);
      } else {
        alert("Login failed: Unknown error");
        console.error("Unknown login error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
