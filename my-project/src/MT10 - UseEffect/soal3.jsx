// Soal Gambar 3

import React, { useState, useEffect } from "react";

const TextLogger = () => {
  const [text, setText] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  //   const [pharagraphs, setParagraphs] = useState([]);

  useEffect(() => {
    console.log(`Input berubah menjadi: ${text}`);
  }, [text]);

  const handleUpdateText = () => {
    setUpdatedText(text);
    console.log(`Update Text : ${text}`);
  };

  //   useEffect(() => {
  //     if (text) {
  //       setParagraphs((prevParagraphs) => [...prevParagraphs, text]);
  //     }
  //   }, [text]);

  return (
    <div className="flex justify-center">
      <div className="border border-black px-4 py-7 w-[350px] bg-gray-100">
        <input
          className="w-full h-8 p-1 rounded text-gray-500 border border-gray-300"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ketik sesuatu..."
        />

        <p className="mt-4">Hasil : {text}</p>

        {/* {pharagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))} */}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded"
          onClick={handleUpdateText}
        >
          Update Text
        </button>

        <hr />

        <p className="mt-4">Hasil : {updatedText}</p>
      </div>
    </div>
  );
};

export default TextLogger;
