import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Մարի և Սևակ",
  description: "Մարի և Սևակ",
  openGraph: {
    title: "Մարիի և Սևակի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://site-up-l012.vercel.app",
    siteName: "Մարի և Սևակ",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
