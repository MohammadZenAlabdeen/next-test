import type { Metadata } from "next";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <div className="flex h-full w-full justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
