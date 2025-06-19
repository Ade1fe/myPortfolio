
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Deife Damisi Damilola | Frontend & Mobile Developer Portfolio",
  description:
    "Portfolio of Oluwadamisi Damilola, Frontend & Mobile App Developer specializing in React.js and Flutter development in Lagos, Nigeria.",
  keywords: [
    "Frontend Developer in Lagos",
    "React Developer Portfolio",
    "Flutter Developer Nigeria",
    "Mobile App Developer",
    "JavaScript Developer",
    "React.js Portfolio",
    "Flutter Projects",
    "Oluwadamisi Damilola Developer",
  ],
  authors: [{ name: "Oluwadamisi Damilola" }],
  creator: "Oluwadamisi Damilola",
  openGraph: {
    title: "Deife Damisi Damilola | Frontend & Mobile Developer",
    description: "Creative Frontend & Mobile App Developer specializing in React.js and Flutter.",
    url: "https://deife.netlify.app",
    siteName: "Deife Damisi Portfolio",
    type: "website",
    images: [
      {
        url: "https://deife.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deife Damisi Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damisi Damilola | Frontend & Mobile Developer",
    description: "Creative Frontend & Mobile App Developer specializing in React.js and Flutter.",
    images: ["https://deife.netlify.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  )
}
