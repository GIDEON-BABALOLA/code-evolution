import Image from "next/image";

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

// Request Memoization
// This means you can fetch data wherever you need it in your component tree without worrying about duplicate network requests
// React will only make the actual fetch once and reuse the result for subsequent calls during the same render pass
// It's a React feature and thereby included in Next.js
// Lets you write data-fetching code exactly where you need it rather than having to centralize fetches and pass data down through props


// Loading and Error states in server components
// While client components require you to manage these states with separate variables and conditional rendering, server components make this process much cleaner
// To implement a loading state, all we need to do is define and export a React component in the loading.tsx
// For handling errors, define and export a React component in error.tsx


// Two common patterns for data fetching
// Sequential
// Parallel
// Sequential: requests in a component tree are dependent on each other. This can lead to longer loading times
// Parallel: requests in a route are eagerly initiated and will load data at the same time. This reduces the total time it takes to load data

// Sequential fetching
// we create a posts component
// - fetches all posts
// - for each post, fetch author using the userId property
// - example of sequential fetching because we need the userId from
//  each post before we can fetch its author


// Fetching from a database
// We've looked at how to fetch data from API endpoints using Fetch API
// Let's dive into fetching data from a database in Server Components
// What we're about to cover is super important - it's the foundation for data mutations and server actions coming up next
// Two key reasons why fetching data directly from a database is powerful
// 1. Server components have direct access to server-side resources, which makes database interactions seamless
// 2. Since everything happens on the server, we don't need API routes or worry exposing sensitive information to the client

// We're going to be working with two super helpful tools - SQLite and Prisma

// SQLite
// A simple, file-based database to store information in your project
// It doesn't require server or a complex setup and it's perfect for learning and prototyping
// Prisma
// A tool that makes it really easy to talk to your database
// It's like a translator that helps your code communicate with SQLite
// steps to use
// npm install prisma -D
// npx prisma init --datasource-provider sqlite
// npx prisma migrate dev --name init

// Data mutations
// When we work with data, we're typically performing what we call CRUD operations:
// - Create
// - Read
// - Update
// - Delete
// To really appreciate the app router's approach to data mutations, it's worth looking at how we've traditionally handled data mutations in React
// This comparison will help us appreciate the benefits of the app router approach
// Server Actions
// Server Actions are asynchronous functions that are executed on the server
// They can be called in server and cleint components to handle form submissions and data mutations in Next.js applications
// You should use server actions when you:
// - need to perform secure database operations
// - want to reduce API boilerplate code
// - need progressive enhancement for forms
// - want to optimize performance


// Server Actions convention
// A server action can be defined with the React "use server" directive
// you can place the directive
// - at the top of an async function to mark the function as a Server Action, or
// - at the top of a separate file to mark all exports of that file as Server Actions

// Server Actions benefits
// Simplified code: they dramatically simplify your code as there is no need for separate API routes or client-side state management form data
// Improved security: they boost security by keeping sensitive operations server-side, away form potential threats
// Better performance: they improve performance because there's less Javascript running on the client, leading to faster load times and better core web vitals
// Progressive enhancement: forms keep working even if JavaScript is turned off in the browser - making your apps more accessible and resilient. 

// Pending state with useFormStatus
// useFormStatus is a React hook that gives us status information about the last form submission
// const status = useFormStatus()
// - pending: a boolean that indicates if the parent <form> is currently submitting
// - data: an object containing the form's submission data
// - method: a string ( either "get" or "post" ) showing the HTTP method being used
// - action: a reference to the function that was passed to the parent <form>'s action prop
// We'll use "pending" to disable our submit button while the form is being processed.

// Form validation with useActionState
// we want to know how to handle error here in server actions
// useActionState is a React hook that allows us to update state based on the result of a form action
// It is particularly helpful for handling form validation and error messages

// Sepearting server actions
// when we use useActionState and pass in create product, the createProduct function automatically receives the previous state as the first argument

// Pending (useFormStatus) vs isPending   (useActionState)
// Both can help us determine if a form is being submitted and let us disable the submit button - but there's an interesting difference between them
// The pending state from useFormStatus is specifically for form submissions
// isPending from useActionState can be used with any Action, not just form submissions.
// Go with pending from useFormStatus when you're building reusable components that are meant to live inside forms. For example, submit buttons or loading spinners that you'll want to use across different forms in your application.
// Choose isPending from useActionState when you need to keep track of server actions that aren't necessarily related to form submissions. It gives you that extra flexibility

// Updating an existing product with server actions

// Optimistic updates with useOptimistic hook
// useOptimistic Hook
// useOptimistic is a React Hook that provides a way to optimistically update the UI while an asynchronous action is underway
// This technique helps make our apps feel more responsive, especially when working with forms
// Instead of making users wait for server responses, we can show them the expected result right away.

// Form Component
// For our final topic on data mutations and data fetching in NextJS, let's take a look at the newly introduced form component in nextJS
// The Form component is built on top of the HTML form element
// comes with some powerful features that makes it perfect for modern web applications
// - It automatically prefetches loading UI
// - It handles client-side navigation on form submission
// - It provides progressive enhancement out of the box
