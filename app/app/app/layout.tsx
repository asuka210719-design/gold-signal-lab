import "./globals.css";

export const metadata = {
  title: "Gold Signal Lab",
  description: "XAUUSD trading scenario dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
