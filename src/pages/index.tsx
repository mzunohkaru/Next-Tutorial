import Image from "next/image";
import { Inter } from "next/font/google";

import { Footer } from "@/src/components/Footer";
import { Links } from "@/src/components/Links";
import { Header } from "@/src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      // イベントのターゲットをコンソールに出力
      console.log(event.target);
      // デフォルトのイベントを防止
      event.preventDefault();
      alert("Hello");
    },
    []
  );

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "red";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}

      <p>{count}</p>

      <button
        className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white"
        onClick={increment}
      >
        Increment
      </button>

      <button
        className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white"
        onClick={handleClick}
      >
        Event
      </button>

      <Links />

      <Footer
        page="index"
        code={<code className="font-mono font-bold">pages/index.tsx</code>}
      />
    </main>
  );
}