//  Penggunaan dari useState tanpa effect depedency

import React, { useEffect, useState } from "react";

export default function CounterNoEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count saat ini: ${count}`);
  })
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
