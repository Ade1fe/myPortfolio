import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"

import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://deife.netlify.app"),
  title: "Damisi Damilola | React and Flutter Developer",
  description:
    "Portfolio of Oluwadamisi Damilola, a frontend and mobile app developer building responsive React interfaces and polished Flutter products from Lagos, Nigeria.",
  keywords: [
    "Damisi Damilola portfolio",
    "React developer portfolio",
    "Flutter developer Nigeria",
    "Frontend developer Lagos",
    "Mobile app developer portfolio",
  ],
  authors: [{ name: "Oluwadamisi Damilola" }],
  creator: "Oluwadamisi Damilola",
  openGraph: {
    title: "Damisi Damilola | React and Flutter Developer",
    description: "Frontend and mobile product work focused on responsive systems, clean UX, and polished implementation.",
    url: "/",
    siteName: "Damisi Damilola Portfolio",
    type: "website",
    images: [
      {
        url: "/aboutme.jpg",
        width: 1200,
        height: 1200,
        alt: "Oluwadamisi Damilola portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damisi Damilola | React and Flutter Developer",
    description: "Frontend and mobile product work focused on responsive systems, clean UX, and polished implementation.",
    images: ["/aboutme.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
