export default function Home() {
  return (
 <>
   <h1>Welcome home!</h1>
   </>
  )
}
// Route handlers
// We've learned how to route to pages
// The app router lets you create custom request handlers for your routes using a feature called route handlers
// Unlike page routes, which give us HTML content, Route Handlers let us build RESTful endpoints with complete control over the response
// Think of it like building a Node + Express app
// There's no need to set up and configure a separate server
// Route Handlers are great when making external API requests as well
// For example, if you're building an app that needs to talk to third-party services
// Route handlers run server-side, our sensitive info like private keys stays secure and never reaches the browser.
// You can think of route handlers as API routes
// Next.js supports GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS
// If an unsupported method is called,Next.js will return a 405 Method Not Allowed response
// just like page route, route handlers must live in the app folder
// Route Handlers Must Live in The app router
// They allow you to specify custom request for a given route
// They are defined in a route.ts or route.js file inside the app directory
// A route.ts file at the same route segment level as page.tsx will result in a conflict and the page will not be served, the route handler will handle the request instead, not the page router with page.tsx

// Headers in route handlers
// HTTP headers represent the metadata associated with an API request and response.
// Request Headers
// These are sent by the client, such as a web browser, to the server.They contain essential information
// about the request, which helps the server understand and process it correctly.
// e.g "User-Agent" which identifies the browser and operating system to the server. often used for browser specific content rendering and analytics
// e.g "Accept" which indicates the content types like text, video, or image formats that the client can process, this enables the server to deliver resource in a format suitable for the client
// e.g "Authorization" header used by the client to authenticate itself to the server, the carries credentials allowing controlled access to the resources

// Response Headers
// These are sent back from the server to the client. They provide information about the server and the data being sent in the response.
// "Content-Type" header which indicates the media type of the response. It tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

// Cookies in route handlers
// Cookies are small pieces of data that a server sends to a user's web browser
// The browser can store the cookies and send them back to the same server with future request
// Cookies server three main purposes
// - managing sessions (like user logins and shopping carts)
// - handlng personalization(such as user preferences and themes)
// - trackng (like recording and analyzing user behavior)

// Redirects in Route Handlers
// redirect()

// Caching in route handlers
// Route handlers are not cached by default but you can opt into caching when using the GET method
// there is no caching during development
// What if we want to update our data without rebuilding the entire application, well you can revalidate cached data using incremental static regeneration

// Caching in route handlers
// Route handlers are not cached by default but you can opt into caching when using the GET method
// Caching only works with GET methods
// Other HTTP methods like POST, PUT, or DELETE are never cached
// If you're using dynamic functions like headers() and cookies(), or working with the request object in your GET method, caching won't be applied

// Middleware
// Middleware in Next.js is a powerful feature that lets you intercept and control the flow of requests and responses throughout your application.
// It does this at a global level, significantly enhancing features like redirects, URL rewrites, authentication, headers, cookeis, and more
// very easy to create, just add middleware.ts in the src folder

// Middleware lets you specify paths where it should be active with two options
// Custom matcher config
// Conditional statements

// Routing section summary
// Route definition
// Pages and layouts
// Dynamic routes
// Route groups
// Linking and navigation
// Loading and error states
// Parallel and intercepting routes
// Route handlers and middleware

// Rendering in NextJS
// Rendering is the process of transforming the component code you write into user interfaces that users can see and interact with
// In Next.js, the tricky part to building a performant application is figuring out when and where this transformation should happen
// CSR, SSR and RSCs?

 /* Explgvgggggggggggggggggggggghhhhvvgbvvgggggggggggggggggggggggggcvfcfvccccccccccfvffcccccdccccccccvcvcvcvcvvvccvxanation of Each Term (you can include this below the comment): 
CSR (Client-Side Rendering): The browser downloads a minimal HTML page and then uses JavaScript to render the content on the client side. Common in SPAs (Single Page Applications).

SSR (Server-Side Rendering): The content is rendered on the server for each request, then sent as fully populated HTML to the browser. Good for SEO and fast first loads.

RSCs (React Server Components): New in Next.js (especially from v13+), they allow you to run some components entirely on the server without sending their code to the client, improving performance and reducing bundle size.
*/


// Drawbacks of CSR
// SEO
// When search engines crawl your site, they're mainly looking at HTML content. But with CSR, your initial HTML is basically just an empty div - not great for search engines trying to figure out what your page is about

// When you have a lot of nested components making API calls, the meaningful content might load too slowly for search engines to even catch it

// Performance
// Your browser ( the client ) has to do everything: fetch data, build the UI, make everything interactive.. that's a lot of work!

// Server-side solutions
// 1. Static Site Generation (SSG)
// 2. Server-Side Rendering (SSR)
// SSG happens during build time when you deploy your application to the server. This results in pages that are already rendered and ready to server. It's perfect for content that stays relatively stable, like blog posts

// SSR, on the other hand, renders pages on-demand when the users request them. It's ideal for personalized content like social media feeds where the HTML changes based on who's logged in.

// Drawbacks of SSR
// 1 You have to fetch everything before you can show anything
// Components cannot start rendering and then pause or "wait" while data is still being loaded
// If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page

// 2 You have to load everything before you can hydrate anything
// For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
// This means that all the Javascript for the components must be loaded on the client before you can start hydrating any of them

// 3 You have to hydrate everything before you can interact with anything
// React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree


// Drawbacks of SSR - all or nothing waterfall
// 1 We can't start rendering HTML untill all data is fetched on the server.
// 2 We need to wait for all Javascript to load on the client before hydration can begin
// 3 Every component needs to be hydrated before any of them become interactive
// These issues create an "all-or-nothing" waterfall effect that is pretty inefficient, especially when some parts of your app are slower than others

// Solutions to this
// Suspense SSR architecture
// Use the <Suspense> component to unlock two major SSR features
// 1 HTML streaming on the server
// 2 Selective hydration on the client

// HTML streaming on the server
// HTML streaming solves our first problem:
// You don't have to fetch everything before you can show anything
// If a particular section is slow and could potentially delay the initial HTML, no problem
// It can seamlessly get integrated into the stream later when it's ready

// The other hurdle
// Even with faster HTML delivery, we can't start hydrating until we've loaded all the JavaScript for the main section
// If that's a big chunk of code, we're still keeping users waiting from being able to interact with the page
// solution
// It lets you tell your bundler, "These parts of the code aren't urgent - split them into separate scripts."
// Using `React.lazy` for code splitting separates your main section's code from the Javascript bundle
// The browser can download React and most of your app's code independently, without getting stuck waiting for that main section's code.

// Selective hydration on the client
// By wrapping your main section in a `<Suspense>` component, you're not just enabling streaming but also telling React it's okay to hydrate other parts of the page before everything's ready
// This is what we call selective hydration
// It allows for the hydration of pats of the page as they become available, even before the rest of the HTML and the Javascript code are fully downloaded

// React Server Components (RSC)
// React Server Components  (RSC) represents a new architecture designed by the React team
// This approach leverages the strengths of both server and client environments to optimize efficency, load times and interactivity

// The architecture introduces a dual-component model
// - Client Components
// - Server Components
// This distinction is based not on the components' functionality but rather on their execution environment and the specific systems they are designed to interact with.
// Client Components
// Client Components are the familiar React components we've been using
// They are typically rendered on the client-side(CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
// "client components" can render on the server
// optimization strategy for client
// client components primarily operate on the client but can ( and should ) also run once on the server for better perforance
// They have full access to the client environment, such as the browser, allowing them to use state, effects, and event listeners for handling interactivity
// They can also access browser-exclusive APIs like geolocation or localStorage, allowing you to build UI for specific use cases
// In fact, the term "Client Component" doesn't signify anything new; it simply helps differentiate these components from the newly introduced Server components

// Server Components
// Server Components represent a new type of React component specifically designed to operate exclusively on the server
// And unlike client components, their code stays on the server and is never downloaded to the client
// This design choice offers multiple benefits to React applications

// Benefits of Server Components
// Since server components stay on the server, all their dependencies stay there too
// This is fantastic for users with slower connections or less powerful devices since they don't need to download, parse, and execute that JavaScript
// Plus, there's no hydration step, making your app load and become interactive faster

// Direct access to server-side resources
// Server components can talk directly to databases and file systems, making data fetching super efficient without any client-side processing
// They use the server's power and proximity to data sources to manage compute-intensive rendering tasks

// Enhanced security
// Since Server Components run only on the server, sensitive data and logic - like API keys and tokens - never leave the server

// Improved data fetching
// Server components allow you to move data fetching to the server, closer to your data source
// This can improve performance by reducing time it takes to fetch data needed for rendering, and the number of requests the client needs to make

// Caching
// When you render on the server, you can cache the results and reuse them for different users and requests
// This means better performance and lower costs since you're not re-rendering and re-fetching data all the time

// Faster initial page load and First Contentful paint
// By generating HTML on the server, users see your content immediately - no waiting for javascript to download and execute

// Improved SEO
// Search engine bots can easily read the server-rendered HTML, making your pages more indexable

// Efficient streaming
// Server Components can split the rendering process into chunks that stream to the client as they're ready
// This means users start seeing content faster instead of waiting for the entire page to render on the server

// In React Server Component Architecture
// Server components handle data fetching and static rendering, while client componets take care of rendering the interactive elements
// The beauty of this setup is that you get the best of both server and client rendering using a single language, framework, and set of APIs

// RSC key takeways
// React Server Components offer a new approach to building React apps by separating components into two: server components and client components
// Server components run exclusively on the server - they fetch data and prepare content without sending code to the browser
// This makes your ap faster because users download less code
// However, they can't handle any interactions
// Client Components, on the other hand, run in the browser and manage all the interactive parts like clicks and typing
// They also get an initial server render for faster page loads

// Key points to remember
// Every component in a Next.js app defaults to being a server component, the includes the built in page and layout that comes with evry nextJS project