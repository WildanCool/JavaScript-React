import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductList() {
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="flex flex-col items-center gap-12 mt-12 px-4">
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {posts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-lg p-5 w-full bg-white transform transition hover:scale-105 min-h-[350px]"
          >
            {/* Klik gambar menuju ke halaman detail */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-contain rounded-t-md mb-4 cursor-pointer"
              />
            </Link>

            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-700 mb-4">
              Harga:{" "}
              <span className="font-bold">{formatDollar(product.price)}</span>
            </p>

            {/* Tombol tambah dan kurang */}
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
              <span className="font-bold">
                {formatDollar(calculateTotal(product.price, product.count))}
              </span>
            </p>
          ))}

        <hr className="my-4 border-t-2" />

        {posts.some((product) => product.count > 0) ? (
          <p className="text-lg font-semibold text-gray-900">
            Total Keseluruhan:{" "}
            <span className="font-bold">
              {formatDollar(calculateGrandTotal())}
            </span>
          </p>
        ) : (
          <p className="text-gray-600 text-sm">
            Belum ada barang yang ditambahkan.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
