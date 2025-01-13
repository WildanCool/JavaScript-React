import { useEffect, useState } from "react";

// Custom hook untuk mengatur tema
export function useTheme(initialTheme) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    function handleLight() {
      setTheme(true);
    }
    function handleDark() {
      setTheme(false);
    }

    window.addEventListener("light", handleLight);
    window.addEventListener("dark", handleDark);

    return () => {
      window.removeEventListener("light", handleLight);
      window.removeEventListener("dark", handleDark);
    };
  }, []); // Array dependensi kosong memastikan hanya dijalankan sekali

  return theme;
}

export default function GantiTheme() {
  const isTheme = useTheme(true); // Nilai awal tema adalah true (light)

  function handleClick() {
    const nextTheme = !isTheme;
    window.dispatchEvent(new CustomEvent(nextTheme ? "light" : "dark"));
    console.log("Tema Sekarang: " + (nextTheme ? "light" : "dark"));
  }

  return <button onClick={handleClick}>{isTheme ? "Dark" : "Light"}</button>;
}
