"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import copy from "clipboard-copy";

export default function Home() {
  const [textCopied, setTextCopied] = useState(false);

  const searchParams = useSearchParams();
  const queryText = searchParams.get("text");

  useEffect(() => {
    const closeTab = () => {
      setTimeout(() => {
        console.log("CLOSED!");
        window.close();
      }, 1000);
    };

    if (queryText) {
      navigator.clipboard.writeText(queryText).then(() => {
        setTextCopied(true);
        closeTab(); // Call the closeTab function
      });
    }
  }, [queryText]);

  return (
    <div className="flex flex-col text-center h-[100vh] justify-between p-8">
      <div>
        {textCopied ? (
          <h1 className="text-green-500">Comanda copiada!</h1>
        ) : (
          <h1>Copiando comanda...</h1>
        )}
        <p>Esta página fechará automaticamente após copiada.</p>
      </div>
      <button
        onClick={() => window.close()}
        className="bg-red-600 w-1/2 self-center rounded-2xl py-8"
      >
        Fechar agora
      </button>
    </div>
  );
}
