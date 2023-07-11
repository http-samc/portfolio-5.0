import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "admin @ smrth.dev",
  robots: "noindex,nofollow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children} </main>
      </body>
    </html>
  );
}
