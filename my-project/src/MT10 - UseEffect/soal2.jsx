// Soal Gambar 2

import React, { useState, useEffect } from "react";

const CounterLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  },[count]); // Dependency array berisi count
  
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

export default CounterLogger;
