import axios from "axios";
import { useState, useEffect } from "react";

function CobaAxios() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }, []);
  }, [posts]);

  return (
    <div>
      <h1>HAlo</h1>
      <ul>
        {posts.map((product) => (
          <li key={product.id}>
            {product.title}
            <img src={product.image} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CobaAxios;
