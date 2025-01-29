import { useState } from "react";
import variants from "../data/variants";

export default function CopyText() {
  const [number, setNumber] = useState("");

  const handleCopy = () => {
    const num = parseInt(number, 10);
    if (variants[num]) {
      navigator.clipboard.writeText(variants[num]);
    } else {
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <input
        type="number"
        min="1"
        max="30"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="border p-2 rounded w-full text-center"
        placeholder="Введите число (1-30)"
      />
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Скопировать
      </button>
    </div>
  );
}
