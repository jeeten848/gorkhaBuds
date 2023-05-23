import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            Gorkha Buds
        </div>

        <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/identify">Identify</Link>
        </div>

    </nav>
  )
}
