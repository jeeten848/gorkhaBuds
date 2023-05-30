import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <Link href='/'>Gorkha Buds</Link> 
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
