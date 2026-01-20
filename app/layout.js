import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "will you be my valentine?",
  description: "A cute valentine proposal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
