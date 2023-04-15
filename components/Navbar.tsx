import React from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/Bowlerator-logos_black-crop.png"

function Navbar() {
  return (
    <nav className="the-navbar">
      <ul>
        <li>
          <Link href="/">
            <Image src={logo} alt="logo" width={129} />
          </Link>
        </li>
      </ul>
      <ul className="nav-links">
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
          <Link href="/bowlerator" role="button" id="nav-button">
            Demo
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
