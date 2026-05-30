import type { Metadata } from "next";
import { Cairo, Pacifico } from "next/font/google";
import "./globals.css";

const LOGO_URL = 'https://static.readdy.ai/image/f01d069de9648afc1fc061d75fe35c05/f141cd39aba6c917f1071efe3f465f97.png';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const cairo = Cairo({
  weight: ['400', '500', '700', '800'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: "المجد ستار للخدمات الأمنية",
  description: "شريكك الموثوق في الحماية والحراسة وتقديم الحلول الأمنية المتكاملة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/png" href={LOGO_URL} />
      </head>
      <body className={`${cairo.variable} ${pacifico.variable} antialiased font-[family-name:var(--font-cairo),sans-serif]`}>
        {children}
      </body>
    </html>
  );
}