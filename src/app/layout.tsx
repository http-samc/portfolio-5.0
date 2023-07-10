import Footer from "./Footer";
import Header from "./Header";
import Providers from "./Providers";
import { red_hat_display, roboto_mono } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "smrth.dev",
  description:
    "(Samarth Chitgopekar || smrth || http-samc || OVO Sam)'s personal site.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${red_hat_display.variable} ${roboto_mono.variable} max-w-[800px] mx-auto`}
      >
        <Providers>
          <main className="h-screen flex flex-col justify-between">
            <Header />
            <section className="h-full mt-14 p-6">{children}</section>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
