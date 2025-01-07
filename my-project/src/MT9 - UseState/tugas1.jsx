import { useState } from "react";

const Card = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Produk A",
      price: 20000,
      image: "https://via.placeholder.com/300x200",
      count: 0,
    },
    {
      id: 2,
      title: "Produk B",
      price: 30000,
      image: "https://via.placeholder.com/300x200",
      count: 0,
    },
    {
      id: 3,
      title: "Produk C",
      price: 50000,
      image: "https://via.placeholder.com/300x200",
      count: 0,
    },
  ]);

  const addProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const reduceProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  const calculateTotal = (price, count) => {
    return price * count;
  };

  const calculateGrandTotal = () => {
    return products.reduce((total, product) => {
      return total + calculateTotal(product.price, product.count);
    }, 0);
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-10">
      <div className="flex justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-lg p-5 w-96"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>

            <p className="text-gray-600 mb-3">
              Harga: {formatRupiah(product.price)}
            </p>

            <div className="flex">
              <button
                onClick={() => reduceProduct(product.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Kurang
              </button>
              <p className="text-black w-14 flex justify-center items-center font-bold">
                {product.count}
              </p>
              <button
                onClick={() => addProduct(product.id)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Tambah
              </button>
            </div>

            <p className="text-gray-600 mt-3">
              Total Harga:{" "}
              {formatRupiah(calculateTotal(product.price, product.count))}
            </p>
          </div>
        ))}
      </div>

      <div className="border border-gray-300 rounded-lg shadow-lg p-5 w-[1220px] mb-10">
        <h2 className="text-lg font-semibold">Rincian Total Harga:</h2>
        {products.map((product) => (
          <p key={product.id} className="text-gray-700 mb-2">
            {product.title} x {product.count} ={" "}
            {formatRupiah(calculateTotal(product.price, product.count))}
          </p>
        ))}

        <hr />

        <p className="text-lg font-semibold mt-2">
          Total Keseluruhan: {formatRupiah(calculateGrandTotal())}
        </p>
      </div>
    </div>
  );
};

export default Card;
