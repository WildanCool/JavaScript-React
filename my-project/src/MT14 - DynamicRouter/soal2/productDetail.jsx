import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product)
    return <div className="text-center text-lg text-gray-600">Loading...</div>;

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-screen-md">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg w-full h-auto max-h-64 object-contain"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-between px-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-500 mt-1">In stock</p>
              <p className="text-xl font-bold text-gray-800 mt-2">${product.price}</p>

              <div className="flex items-center mt-4 space-x-2">
                <span className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  XS
                </span>
                <span className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  S
                </span>
                <span className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  M
                </span>
                <span className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  L
                </span>
                <span className="text-sm font-medium px-3 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
                  XL
                </span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex space-x-3">
                <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800">
                  Buy now
                </button>
                <button className="border border-gray-300 text-sm px-4 py-2 rounded-lg hover:bg-gray-100">
                  Add to bag
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Free shipping on all continental US orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
