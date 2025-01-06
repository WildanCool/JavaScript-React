import { useState } from "react";

export default function Barang() {
  const [items, setItems] = useState(["Roti ", "Kue ", "Kopi"]);

  return (
    <div>
      <p>Aku Punya : {items}</p>
    </div>
  );
}
