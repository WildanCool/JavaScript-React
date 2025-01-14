import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <>
      <nav className="flex w-full h-12 *:w-1/2 *:text-center *:content-center">
        <Link to="/" className="bg-blue-400">
          Home
        </Link>
        <Link to="/about" className="bg-blue-400">
          About
        </Link>
        <Link to="/dashboard" className="bg-blue-400">
          Dashboard
        </Link>
      </nav>
      <h2>Halaman Dashboard Utama</h2>
      <Link to="/dashboard/settings" className="bg-blue-400">
        Settings
      </Link>
      {/* Tambahkan Outlet untuk merender rute anak */}
      {/* <Outlet /> */}
    </>
  );
}

export default DashboardPage;
