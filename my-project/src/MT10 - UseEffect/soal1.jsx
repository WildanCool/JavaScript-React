// Soal Gambar 1
import React, { useState, useEffect } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Efek dijalankan`);
  }); // Tidak ada dependency array

  const handleTambah = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>
      <button onClick={handleTambah}>Tambah</button>
    </div>
  );
};

export default Counter2;
