import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026학년도 광양고 윈터스쿨",
  description: "광양고등학교 2026학년도 윈터스쿨 운영 및 신청 안내",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
