import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { METADATA } from "@/constant/metadata";

export const metadata: Metadata = {
  title: {
    template: "Sturing | %s",
    default: "Sturing : 스터링 | 모집부터 진행까지 올인원 스터디 플랫폼",
  },
  description: METADATA.description,
  metadataBase: new URL(METADATA.url),
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: METADATA.url,
    siteName: METADATA.title,
    images: [
      {
        url: METADATA.imageUrl,
        width: 800,
        height: 600,
      },
    ],
    locale: METADATA.locale,
    type: METADATA.type,
  },
  creator: METADATA.creator,
  generator: METADATA.generator,
  publisher: METADATA.publisher,
  applicationName: METADATA.publisher,
  keywords: METADATA.keywords,
  icons: {
    icon: METADATA.imageUrl,
  },
  verification: {
    google: METADATA.googleSiteVerification,
    other: {
      "naver-site-verification": METADATA.naverSiteVerification,
    },
  },
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <SessionProvider>
        <body className={`${pretendard.variable} font-pretendard bg-[#f5f5f5] min-w-screen flex flex-col items-center`}>
          <main className="w-screen sm:w-[600px] bg-white min-h-screen shadow-xl relative">
            <div className="w-[inherit] flex-col inline-flex max-h-dvh">
              <div className="w-[inherit] overflow-auto scrollbar-hide">{children}</div>
            </div>
          </main>
          <div id="modal"></div>
          <ToastContainer />
        </body>
      </SessionProvider>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="afterInteractive" />
    </html>
  );
}
