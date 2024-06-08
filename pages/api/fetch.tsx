import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default function Fetch() {
  const [catImageUrl, setCatImageUrl] = useState("");

  const fetchCatImage = async (): Promise<SearchCatImage> => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await response.json();
    return result[0];
  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="text-4xl font-bold">猫の画像アプリ</h1>
        <Image src={catImageUrl} width={500} height={500} alt="猫の画像" />
        <button
          style={{ marginTop: 18 }}
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          本日の猫さん
        </button>
      </div>
    </main>
  );
}
