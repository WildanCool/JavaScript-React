export default function Input({ input, type }) {
  return (
    <input
      placeholder={input}
      type={type}
      className="w-full h-8 p-1 rounded text-gray-500 border border-gray-300"
    ></input>
  );
}
