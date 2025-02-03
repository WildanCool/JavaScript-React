import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const storedFoodData = JSON.parse(localStorage.getItem("foodData")) || [];
    setFoods(storedFoodData);
  }, []);

  const handleDelete = (index) => {
    const updatedFoods = foods.filter((_, i) => i !== index);
    localStorage.setItem("foodData", JSON.stringify(updatedFoods));
    setFoods(updatedFoods);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Semua Data Makanan
      </h1>
      <Link to="/">
        <button className="text-blue-500 mb-2">Kembali</button>
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama Makanan</th>
              <th className="py-3 px-6 text-left">Harga</th>
              <th className="py-3 px-6 text-left">Deskripsi</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {foods.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-600">
                  Tidak ada data makanan.
                </td>
              </tr>
            ) : (
              foods.map((food, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-3 px-6">{index + 1}</td>
                  <td className="py-3 px-6">{food.foodName}</td>
                  <td className="py-3 px-6">{food.price}</td>
                  <td className="py-3 px-6">{food.description}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <Link
                      to={`/updatePage/${index}`}
                      className="text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 transition duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodList;
