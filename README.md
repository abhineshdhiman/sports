# Sports

**Sports** is a modern sports blog built with Next.js 15 (App Router) and Contentful as the CMS. The site is designed for sports-interested end users and features blog reading, social sharing, and newsletter signup.

---

## 🚀 Quick Start

1. **Clone the repository:**

   ```
   git clone https://github.com/your-org/sports.git
   cd sports
   ```

2. **Copy environment variables:**

   ```
   cp .env.example .env.local
   ```

3. **Fill in Contentful credentials in `.env.local`:**

   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_DELIVERY_TOKEN`

4. **Install dependencies:**

   ```
   npm install
   ```

5. **Run the development server:**

   ```
   npm run dev
   ```

   The app runs on [http://localhost:3010](http://localhost:3010).

---

## 🛠️ Environment Variables

All environment variables must be set in `.env.local`:

- `CONTENTFUL_SPACE_ID` — Your Contentful Space ID
- `CONTENTFUL_DELIVERY_TOKEN` — Your Contentful Content Delivery API token

---

## 🏗️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Contentful
- **Data Layer:** Direct SDK calls via the [contentful](https://www.npmjs.com/package/contentful) JS SDK
- **Styling:** Tailwind CSS
- **Newsletter:** (implementation required)
- **Social Sharing:** (implementation required)

---

## 📄 Project Structure

- `/app` — Next.js App Router pages and layouts
- `/components` — UI components
- `/lib` — Contentful SDK and data utilities

---

## ⚠️ Mandatory Coding Rules

**All contributors must follow the coding rules below. Any violation will cause build errors.**

1. **'use client' Directive:**  
   Place `'use client'` as the first line in any file using React hooks, event handlers, or browser APIs.

2. **Import Paths:**  
   Always use the `@/` alias for imports. Never use relative paths.

3. **Images:**  
   Use `next/image` for all images. Never use bare `<img>` tags.

4. **Links:**  
   Use `next/link` for all internal navigation. Never use bare `<a>` tags for internal links.

5. **Fonts:**  
   Use `next/font/google`. Never use `<link>` CDN tags.

6. **No Bare React Import:**  
   Do not import React explicitly.

7. **next/dynamic:**  
   Never use `dynamic()` with `{ ssr: false }` in a Server Component. If needed, add `'use client'` at the top.

8. **Data Fetching:**  
   Use async/await in Server Components. Do not use `getServerSideProps`, `getStaticProps`, or `getInitialProps`.

9. **TypeScript:**  
   Use strict types. No `any` or implicit `any`. Define a `Props` interface/type for every component.

10. **Page Metadata:**  
    Every page must export `metadata` or `generateMetadata`.

11. **Styling:**  
    Use Tailwind CSS utility classes. Avoid inline `style={{}}` unless unavoidable.

12. **Async Params:**  
    In Next.js 15, page props (`params`, `searchParams`) are Promises.

---

## 📝 User Stories

- As a sports fan, I want to read the latest sports blog posts.
- As a user, I want to share interesting articles to social media.
- As a user, I want to sign up for a newsletter to receive updates.
- As a visitor, I want to browse posts on the home page and blog listing.

---

## 📚 Documentation

- [Next.js App Router](https://nextjs.org/docs/app)
- [Contentful JS SDK](https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)

---

## 🧑‍💻 Development

- All code must comply with the **Mandatory Coding Rules** above.
- Use the `/lib/cms.ts` file for all Contentful data fetching.
- Use the `/components` directory for all UI components.
- Use the `@/` alias for all imports.

---

## 📝 License

MIT

---

**Questions?**  
Open an issue or contact the maintainers.