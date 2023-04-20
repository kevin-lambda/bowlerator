"use-client"

import "./globals.css"
import "@picocss/pico/css/pico.min.css"
import "bulma/css/bulma.min.css"
import { useCronitor } from "@cronitorio/cronitor-rum-nextjs"

// this is how you use... any? css in react.
import { Navbar, Footer } from "../components/index"

export const metadata = {
  title: "Bowlerator",
  description: "Bowl meal ideas, fast and easy!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useCronitor("8ab20f019d3ec66a9196a1919d34cfa7")

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
