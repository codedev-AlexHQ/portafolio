import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrés A. Huancahuari Q. - Desarrollador de Software",
  description: "Portfolio de Andrés Alexander Huancahuari Q. - Desarrollador de Software con experiencia en Java, Python, PHP, Kotlin, JavaScript y frameworks modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
