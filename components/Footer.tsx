import Link from 'next/link'

type Props = {}

const currentYear = new Date().getFullYear()

const footerLinks: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer({}: Props) {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-700 text-sm">
          &copy; {currentYear} <span className="font-semibold">Sports</span>. All rights reserved.
        </div>
        <nav className="flex flex-wrap gap-4">
          {footerLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.46 5.93c-.8.36-1.67.6-2.58.71a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08 4.48 4.48 0 0 0-7.63 4.08A12.72 12.72 0 0 1 3.1 4.86a4.48 4.48 0 0 0 1.39 5.98c-.7-.02-1.36-.22-1.94-.54v.05a4.48 4.48 0 0 0 3.6 4.39c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.19 0-.37-.01-.56a9.1 9.1 0 0 0 2.23-2.31z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-500 hover:text-blue-700 transition-colors"
          >
            <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.405 0 22.675 0" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}