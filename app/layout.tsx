import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import ApolloWrapper from "./ApolloWrapper";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add weights you plan to use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokemon finder",
  description: "For searching the pokemon with description",
  icons: {
    icon: "/pikachu.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
        suppressHydrationWarning
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
