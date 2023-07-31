import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <main className="min-h-screen flex flex-col justify-between max-w-[800px] mx-auto">
          <Header />
          <section className="h-full mt-14 p-6">{children}</section>
          <Footer />
        </main>
      </Providers>
    </>
  );
}
