import "./globals.css"
import "@picocss/pico/css/pico.min.css"
import "bulma/css/bulma.min.css"

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
