import "./globals.css";
export const metadata = {
  title: "Nekozuma",
  description: "The collection  of 5555 NFTs on the Solana blockchain.",
  openGraph: {
    title: "Nekozuma",
    description: "The collection  of 5555 NFTs on the Solana blockchain.",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
