'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const navLinks: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Categories', href: '/categories' },
  { name: 'Newsletter', href: '/newsletter' },
]

export default function Header({}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Sports Logo"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">Sports</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-6 w-6 text-gray-900 transition-transform ${mobileOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block w-full py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}