import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link href={"/dashboard"}>Dashboard</Link>
         <Link href={"/about"}>About</Link>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
// Every component  in a Next.js app defaults to being a server component

// Summary
// In the RSC architecture and by extension in the Next.js app router, components are server components by default
// To create client components, add the  "use client" directive at the top of the file
// Server components are rendered exclusively on the server
// Client components are rendered once on the server and then on the client

// Rendering lifecycle of server and client components in nextJS
// In simpler terms, we'll explore how they come to life on your screen
// When we talk about React Server Components (RSC), we're dealing with three key players:

// - your browser ( the client )
// - Next.js(our framework)
// - React(our library)

// Server rendering strategies
// Static
// Dynamic 
// Streaming

// Static Rendering
// static rendering is a server rendering strategy where we generate HTML pages when building our application
// Think of it as preparing all your content in advance - before any user visits your site
// Once built, these pages can be cached by CDNs and served instantly to users
// With this approach,the same pre-rendered page can be shared among different users, giving your app a significant boost.
// Static rendering perfect for things like blog posts, e-commerce product listings, documentation, and marketing pages

// How  to statically render?
// Static rendering is the default strategy in the app router
// All routes are automatically prepared at build time without any additional setup
// "Hold on - you keep talking about generating HTML at build time", but we haven't bult our application yet, right? We're just runnin it in development mode

// Prefetching
// Prefetching is a technique that preloads routes in the background as their links become visible
// For static routes like ours, Next.js automatically prefetches and caches the whole route
// When our home page loads, Next.js is already prefetching about and dashboard routes for instant navigation

// Dynamic rendering
// Dynamic rendering is a sever rendering strategy where routes are rendered uniquely for each user when they make a request
// It is useful when you need to show personalized data or information that's only available at request time ( and not ahead of time during prerendering) - things like cookies or URL search parameters

// News websites, personalied shopping pages, and social media feeds are some examples where dynamic rendering is beneficial

// How to dynamically render
// Next.js automatically siwtches to dynamic rendering for an entire route when it detects what we call a "dynamic function" or "dynamic API"
// In Next.js, these dynamic functions are:
// cookies()
// headers()
// connection()
// draftMode()
// searchParams prop
// after which is new API
// Using any of these automatically opts your entire route into dynamic rendering at request time
// Dynamically rendered pages are not generated during build time

// Dynamic rendering summary
// Dynamic rendering is a strategy where the HTML is generated at request time
// Next.js automatically enables it when it encounters dynamic functions like cookies, headers, connection, draftMode, after or searchParams prop.
// Dynamic rendering is great for personalied content like social media feeds
// You don't have to stress about choosing between static and dynamic rendering
// Next.js automatically selects the optimal rendering startegy for each route based on the features and APIs you're using
// If you want to force a route to be dynamically renderes, you can use the `export const dynamic = "force-dynamic" config at the top of your page.

// generateStaticParams()
// generateStaticParams is a function that
// - works alongside dynamic route segments
// - to generate static routes during build time
// - instead of on demand at request time
// - giving us a nice performance boost

// Streaming
// streaming is a strategy that allows for progressive UI rendering from the server
// Work is broken down into smaller chunks and streamed to the client as soon as ther're ready
// This means users can see parts of the page right away, without waiting for everything to load
// It's particularly powerful for improving initial page load times and handling UI elements that depend on slower data fetches, which would normally hold up the entire route
// Streaming comes built right into the App Router

// Server and client composition patterns
// server components
// fetching data
// accessing backend resources directly
// keeping sensitive information(like access tokens and API keys) secure on the server
// handling large dependencies server-side - which means less JavaScript for users to download

// Client components
// adding interactivity
// handling event listeners ( like onClick(), onChange())
// managing state and lifecycle effects  ( using hooks like useState)
// such as useReducer(), useEffect()
// working with browse-specific APIs
// implementing custom hooks
// Using React class components

// Server-only code
// some code is specifically designed to run exclusively on the server
// Think about modules or functions that work with multiple libraries, handle environment variables, communicate directly with databases, or process sensitive information
// Since JavaScript modules can be shared between server and client components, code meant for the server could accidentally find its way to the client.
// This is bad news as it can bloat yout javascript bundle, expose your secret keys, database queries, and sensitive business login
// It's super important to keep server-only code separate from client side code

// Server-only package is the solution
// Throws a build-time eror if someone accidentally imports server code into a client component

// Context providers
// context providers typically live near the root of an application to share global state and logic
// For example, tour application's theme
// However, react context isn't supported in server components
// If you try to crate a context at your applicatio's root, you'll run into an error
// The solution is to create your context and render its provider inside a dedicated client component

//Clent-only code
// Just like how we need to keep certain operations server side, it's equally crucial to keep some functionality strictly on the client side
// Client-only code works with browser-specific features - think DOM manipulation, window object interaction, or localStorage operations
// These features aren't available on the server, so we need to make sure such code runs only on the client side to avoid server-side rendering errors

//Client Component Placement
// The strategic placement of client components in the component tree, this is super important for optimizing the performance of your application

// since server components can't handle state and interactivity, we need client components to fill this gap
// The key recommendation here is to position thse client components lower in your component tree

// Common misconception
// When you mark a component with use client, it doesn't just affect that component, but also affect every child component in the component tree below it

// Interleaving client and server components in nextJS