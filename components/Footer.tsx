import React from "react"
import Image from "next/image"
import logo from "../assets/Bowlerator-logos_black-crop.png"
import Link from "next/link"

function Footer() {
  return (
    <footer className="the-footer">
      <div className="container footer-container">
        <ul>
          <Image src={logo} alt="logo" width={150} />
        </ul>
        <ul>
          <li>
            This is the design concept of a bowl generation app for quick and
            easy meals!
          </li>
        </ul>
        <ul>
          <Link href="/credits">Image credits</Link>
        </ul>
        <ul>
          <li>
            Made by <a href="https://github.com/kevin-lambda">Kevin L</a>
          </li>
          {` · `}
          <li>
            Code licensed{" "}
            <a href="https://github.com/kevin-lambda/bowlerator/blob/main/LICENSE.md">
              MIT
            </a>
          </li>
          {` · `}
          <li>©2023</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
