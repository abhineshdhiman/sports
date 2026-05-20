import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sports',
  description: 'Sports blogs',
}

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Sports
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-xl">
        Welcome to Sports — your destination for engaging sports blogs, news, and insights. Stay tuned for the latest updates, share your favorite stories, and join our newsletter!
      </p>
    </main>
  )
}