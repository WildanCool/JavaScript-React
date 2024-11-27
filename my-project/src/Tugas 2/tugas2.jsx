export default function Tugas2() {
  const title = "Coba JSX{}";
  const paragraf = "Ini Tugas 2";
  const tema = {
    paragraf: {
      background: "red",
      color: "green",
    },
  };

  return (
    <div>
      <img src="./img's/images.png" alt="" />
      <h1 style={{ color: "blue" }}>{title}</h1>
      <p style={tema.paragraf}>{paragraf}</p>
    </div>
  );
}
