import React from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Providers from "@/components/layout/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <div className="fixed top-0 h-[4.5rem] w-full bg-background/80 z-40 backdrop-blur-md"></div>
        <main className="min-h-screen flex flex-col justify-between max-w-[800px] mx-auto">
          <Header />
          <section className="h-full mt-14 p-6">{children}</section>
          <Footer />
        </main>
      </Providers>
    </>
  );
}
