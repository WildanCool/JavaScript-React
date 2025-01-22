import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        // Simpan token ke localStorage jika login berhasil
        localStorage.setItem("authToken", response.data.token);

        // Redirect ke halaman produk
        navigate("/product");
      })
      .catch((error) => {
        // Tangani error jika login gagal
        setError("Login gagal! Silakan periksa username dan password Anda.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-600">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
