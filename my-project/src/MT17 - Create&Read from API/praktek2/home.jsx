import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Selamat Datang di Aplikasi Makanan
      </h1>
      <div className="space-y-4">
        <Link
          to="/create"
          className="bg-blue-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Tambah Makanan
        </Link>
        <Link
          to="/read"
          className="bg-green-600 text-white text-lg py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          Lihat Data Makanan
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
