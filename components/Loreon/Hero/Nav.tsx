import Link from 'next/link'
import React from 'react'
import { MobileNav } from '../MobileNav'

const Nav = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-blue-500 font-medium text-xl">
          Loreon Learning
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900">
            Terms of use
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/signin"
            className="px-5 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-50 transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            Sign up
          </Link>
        </div>

        <MobileNav />
      </header>
  )
}

export default Nav