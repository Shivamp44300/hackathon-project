
import "./globals.css";
import Providers from "@/app/_context/Providers";
export const metadata = {
  title: "GateWay",
  description: "Empowering Connections with Seamless Integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"/>

      </head>
      <body >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
