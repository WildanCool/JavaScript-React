import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState({
    foodName: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const storedFoodData = JSON.parse(localStorage.getItem("foodData")) || [];
    const foodToEdit = storedFoodData[index];
    if (foodToEdit) {
      setFood(foodToEdit);
    }
  }, [index]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedFoodData = JSON.parse(localStorage.getItem("foodData")) || [];

    storedFoodData[index] = food;

    localStorage.setItem("foodData", JSON.stringify(storedFoodData));

    navigate("/read");

    alert("Data Makanan berhasil diupdate!");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Edit Data Makanan
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="foodName"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nama Makanan
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={food.foodName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Harga
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={food.price}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={food.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default EditPage;
