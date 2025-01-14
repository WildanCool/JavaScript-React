import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
function NotFoundPage() {
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
      <h2 className="text-4xl">Error 404</h2>
      <p>Halaman Tidak Ditemukan</p>
      <Link to="/" className="bg-blue-400 rounded-xl">
        Pergi Ke Home
      </Link>
    </>
  );
}

export default NotFoundPage;
