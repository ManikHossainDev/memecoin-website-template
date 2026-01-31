import "./globals.css";

export const metadata = {
  title: "ANTS Token | Community-Driven Digital Asset",
  description: "ANTS - A community-driven digital asset ecosystem built on fairness, transparency, and long-term cooperation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
