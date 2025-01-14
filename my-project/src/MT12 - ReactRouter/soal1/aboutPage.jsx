import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
function AboutPage() {
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
      <h2>Ini adalah halaman about</h2>
    </>
  );
}

export default AboutPage;
