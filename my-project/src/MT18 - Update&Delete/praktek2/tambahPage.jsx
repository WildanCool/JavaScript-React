import { useState } from "react";

export default function AddFood() {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // Format harga menjadi nominal rupiah
    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);

    const newFood = { foodName, price: formattedPrice, description };
    const existingFoods = JSON.parse(localStorage.getItem("foodData")) || [];

    localStorage.setItem(
      "foodData",
      JSON.stringify([...existingFoods, newFood])
    );

    alert("Makanan berhasil ditambahkan!");
    setFoodName("");
    setPrice("");
    setDescription("");
  };

  const hapusSemua = () => {
    localStorage.clear();
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Tambah Makanan
        </h2>

        <input
          type="text"
          placeholder="Nama Makanan"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        />

        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        />
        
        <textarea
          placeholder="Deskripsi"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4"
        >
          Tambah Makanan
        </button>

        <button
          onClick={hapusSemua}
          className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Hapus Semua Data
        </button>
      </div>
    </div>
  );
}
