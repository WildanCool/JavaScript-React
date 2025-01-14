import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useParams, Link } from "react-router-dom";

function ProfilePage() {
  const { userId } = useParams();

  return (
    <div>
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
      <h1>User Page</h1>
      <p>Ini adalah halaman profil untuk pengguna dengan ID: {userId}</p>
    </div>
  );
}

export default ProfilePage;
