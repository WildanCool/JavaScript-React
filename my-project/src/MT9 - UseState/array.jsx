import { useState } from "react";

const SimpleName = () => {
  const [names, setNames] = useState(["Perdana", "Muhammad"]);

  return (
    <div>
      <h1>Daftar Nama :</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={() => setNames([...names, "Wildanu"])}
        className="px-4 py-2 bg-blue-500 text-white rounded">Tambah Nama</button>
    </div>
  );
};

export default SimpleName;