import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const [userId, setUserId] = useState(""); // State untuk menyimpan input userId
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (userId) {
      navigate(`/profile/${userId}`); // Navigasi ke halaman user berdasarkan input userId
    } else {
      navigate("/error");
    }
  };

  return (
    <>
      <nav className="flex w-full h-12 *:w-1/2 *:text-center *:content-center">
        <Link to="/" className="bg-blue-400 ">
          Home
        </Link>
        <Link to="/about" className="bg-blue-400">
          About
        </Link>
        <Link to="/dashboard" className="bg-blue-400">
          Dashboard
        </Link>
      </nav>
      <h2>Ini adalah halaman pertama</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleNavigate}>Go to User Page</button>
    </>
  );
}

export default HomePage;
