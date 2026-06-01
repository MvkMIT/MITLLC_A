import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
// @ts-ignore: CSS module declarations are not present in this project config
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Maganti Group — IT Consulting & Staffing Solutions",
  description:
    "Premier technology consulting and talent acquisition services. We deliver excellence that drives digital transformation for businesses worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/MG.png",
        type: "image/png",
      },
    ],
    apple: "/MG.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
