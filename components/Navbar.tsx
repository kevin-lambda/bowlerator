import React from "react"
import Link from "next/link"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/bowlerator" role="button">
            Demo Now
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
