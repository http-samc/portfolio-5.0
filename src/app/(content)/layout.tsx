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
        <main className="min-h-screen flex flex-col justify-between max-w-[800px] mx-auto">
          <Header />
          <section className="h-full mt-14 p-6">{children}</section>
          <Footer />
        </main>
      </Providers>
    </>
  );
}
