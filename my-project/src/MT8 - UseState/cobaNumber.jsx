import { useState } from "react";

export default function CobaNumber() {
    const [age, setAge] = useState(0);

    const tambah = () => setAge(age + 1);
    const kurang = () => setAge(age - 1);

    return (
        <div>
            <h1>Umur: {age}</h1>
            <button onClick={tambah}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    );
}