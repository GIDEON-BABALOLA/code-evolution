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


