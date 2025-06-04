
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deife Damisi Damilola | Frontend & Mobile Developer Portfolio",
  description:
    "Portfolio of Oluwadamisi Damilola, Frontend & Mobile App Developer specializing in React.js and Flutter development in Lagos, Nigeria",
  keywords: ["Frontend Developer", "Mobile App Developer", "React.js", "Flutter", "TypeScript", "Lagos Nigeria"],
  authors: [{ name: "Oluwadamisi Damilola" }],
  creator: "Oluwadamisi Damilola",
  openGraph: {
    title: "Deife Damisi Damilola | Frontend & Mobile Developer",
    description: "Creative Frontend & Mobile App Developer specializing in React.js and Flutter",
    url: "https://deife.netlify.app",
    siteName: "Deife Damisi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damisi Damilola | Frontend & Mobile Developer",
    description: "Creative Frontend & Mobile App Developer specializing in React.js and Flutter",
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
