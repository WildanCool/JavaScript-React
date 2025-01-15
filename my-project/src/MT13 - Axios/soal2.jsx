import axios from "axios";
import { useState, useEffect } from "react";

function AxiosCard() {
  const [posts, setPosts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const productsWithCount = response.data.map((product) => ({
          ...product,
          count: 0,
        }));
        setPosts(productsWithCount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const addProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const reduceProduct = (id) => {
    setPosts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const formatDollar = (angka) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(angka);
  };

  const calculateTotal = (price, count) => {
    return price * count;
  };

  const calculateGrandTotal = () => {
    return posts.reduce((total, product) => {
      return total + calculateTotal(product.price, product.count);
    }, 0);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center gap-12 mt-12 px-4">
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {posts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-lg p-5 w-full bg-white transform transition hover:scale-105 min-h-[350px]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 object-contain rounded-t-md mb-4 cursor-pointer"
              onClick={() => openModal(product)} // membuka modal saat gambar diklik
            />
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-4">
              Harga: <span className="font-bold">{formatDollar(product.price)}</span>
            </p>

            {/* Tombol tambah dan kurang hanya ditampilkan jika modal tidak aktif */}
            {!selectedProduct && (
              <div className="flex items-center justify-between">
                <button
                  onClick={() => reduceProduct(product.id)}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition"
                >
                  Kurang
                </button>
                <p className="text-black font-bold text-base text-center w-10">
                  {product.count}
                </p>
                <button
                  onClick={() => addProduct(product.id)}
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition"
                >
                  Tambah
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Rincian Total Harga */}
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-4xl w-full bg-white mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Rincian Total Harga:
        </h2>

        {posts
          .filter((product) => product.count > 0)
          .map((product) => (
            <p key={product.id} className="text-gray-800 text-sm mb-2">
              {product.title} x {product.count} ={" "}
              <span className="font-bold">{formatDollar(calculateTotal(product.price, product.count))}</span>
            </p>
          ))}

        <hr className="my-4 border-t-2" />

        {posts.some((product) => product.count > 0) ? (
          <p className="text-lg font-semibold text-gray-900">
            Total Keseluruhan: <span className="font-bold">{formatDollar(calculateGrandTotal())}</span>
          </p>
        ) : (
          <p className="text-gray-600 text-sm">
            Belum ada barang yang ditambahkan.
          </p>
        )}
      </div>

      {/* Modal for product image */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick} // Menutup modal jika klik di luar modal
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-96 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AxiosCard;
