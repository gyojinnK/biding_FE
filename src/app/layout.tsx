import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers/providers";
import Loading from "@/components/ui/loading";
import { GlobalAlertDialog } from "@/components/ui/alert-dialog";
import SessionProviders from "@/components/providers/session-provider";
import ThemeSwitcher from "@/components/theme-switcher";
import ThemeSwitcherHoverCard from "@/components/theme-switcher-hover-card";

// /login - 로그인
// /me - 마이페이지
// /goods - 상품페이지 (카테고리 뎁스 생각하기)
// /products - 상품 등록하기
// /auctions
// /chatings

export const metadata: Metadata = {
  title: "Biding | Home",
  description: "중고상품 거래 및 경매 플랫폼",
  icons: {
    icon: "/favicon.ico",
  },
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body className={pretendard.className}>
        <Providers>
          <SessionProviders>{children}</SessionProviders>
          <Toaster />
          <Loading />
          <GlobalAlertDialog />
          <ThemeSwitcherHoverCard />
        </Providers>
      </body>
    </html>
  );
}
