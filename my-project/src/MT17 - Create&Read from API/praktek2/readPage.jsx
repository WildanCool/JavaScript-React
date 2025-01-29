import React, { useState, useEffect } from "react";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Mengambil data dari localStorage, jika tidak ada, set data kosong
    const storedFoodData = JSON.parse(localStorage.getItem("foodData")) || [];
    setFoods(storedFoodData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">Semua Data Makanan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.length === 0 ? (
          <p className="text-center text-xl text-gray-600 col-span-3">Tidak ada data makanan.</p>
        ) : (
          foods.map((food, index) => (
            <div
              key={index}
              className="food-item bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800">{food.foodName}</h3>
              <p className="mt-2 text-lg text-gray-700">
                <strong>Harga:</strong> {food.price}
              </p>
              <p className="mt-2 text-lg text-gray-700">
                <strong>Deskripsi:</strong> {food.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodList;
