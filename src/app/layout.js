import "./globals.css";

export const metadata = {
  title: "Copiar Comanda",
  description: "Criado para apenas copiar sua comanda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
