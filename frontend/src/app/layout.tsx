import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "MUSAI CEOS VOTE",
  description: "MUSAI Team CEOS Election Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Pretendard 웹폰트 CDN 설정 */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard-dynamic-subset.css"
          crossOrigin="anonymous"
        />
      </head>
      {/* 데스크탑 & 태블릿에서는 375px 고정, 모바일에서는 폰 화면에 따라 조정 */}
      <body className="h-[100vh] flex justify-center items-center  bg-white">
        <main className="min-w-[375px] max-w-[415px] lg:max-w-[375px] h-full bg-grey1000">
          {children}
        </main>
      </body>
    </html>
  );
}
