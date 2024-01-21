"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import copy from "clipboard-copy";

export default function Home() {
  const router = useRouter();
  const textCopied = useState(false);

  useEffect(() => {
    const { text } = router.query || {};

    if (text) {
      copy(text);

      // Wait for a moment before closing the page
      setTimeout(() => {
        window.close();
      }, 1000);
    }
  }, [router.isReady]);

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
