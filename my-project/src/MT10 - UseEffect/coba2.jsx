//  Penggunaan dari useState dengan effect

import React, { useEffect, useState } from "react";

export default function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [kurang, setKurang] = useState(0);
  
  useEffect(() => {
    console.log(`Count saat ini: ${count}`);
  },[kurang]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count: {kurang}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setKurang(kurang - 1)}>Kurangi</button>
    </div>
  );
}
