import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const tambah = () => setCount(count + 1);
  const kurang = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Umur: {count}</h1>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurangi</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export function LoginStatus() {
  const [status, setStatus] = useState("Logged out");

  const toggleStatus = () => {
    setStatus((prevStatus) =>
      prevStatus === "Logged out" ? "Logged in" : "Logged out"
    );
  };

  return (
    <div>
      <h1>Status: {status}</h1>
      <button onClick={toggleStatus}>
        {status === "Logged out" ? "Login" : "Logout"}
      </button>
    </div>
  );
}

export function SimpleCalculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const tambah = () => setResult(Number(num1) + Number(num2));
  const kurang = () => setResult(Number(num1) - Number(num2));
  const kali = () => setResult(Number(num1) * Number(num2));
  const bagi = () => setResult(Number(num1) / Number(num2));

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
      <button onClick={kali}>Kali</button>
      <button onClick={bagi}>Bagi</button>
      <p>Hasil: {result}</p>
    </div>
  );
}
