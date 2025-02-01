import { useState } from "react";

export default function CopyText() {
  const [number, setNumber] = useState("");

  const handleCopy = async () => {
    const num = parseInt(number, 10);
    if (num >= 0 && num <= 31) {
      try {
        // Загружаем содержимое файла из публичной директории
        const response = await fetch(`/texts/${num}.txt`);
        if (!response.ok) {
          throw new Error("Файл не найден");
        }
        const textToCopy = await response.text();
        
        // Копируем текст в буфер обмена
        await navigator.clipboard.writeText(textToCopy);
      } catch (err) {
      }
    } else {
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <input
        type="number"
        min="0"
        max="30"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="border p-2 rounded w-full text-center"
      />
      <button
        onClick={handleCopy}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        .
      </button>
    </div>
  );
}