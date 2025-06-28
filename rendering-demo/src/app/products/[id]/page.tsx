
// This async function returns an array of objects, each object represents a route we want to pre-render with the object key corresponding to our route dynamic segment
export const dynamicParams = false // the default is actually true
export async function generateStaticParams() {
   return [{ id: "1"}, { id: "2"}, { id: "3"}];
}
export default async function ProductPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
const { id } = await params;
  return (
  <h1>
    Product {id} details rendered at {new Date().toLocaleTimeString()}
  </h1>
  )
}
// Generate static params is a very powerful feature in nextS that lets you pre-render dynamic routes for static segments, it runs at build time, handle multiple dynamic segments, and can really boost my application performance, by ensuring that frequently accessed pages are pre-rendered and ready to server

// dynamicParams
// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams()
// true -  Next.js will statically render pages on demand for any dynamic segments not included in generateStaticParams
// false - Next.js will return 404 error for any dynamic segments not included in our pre-rendered list
// true
// If you're building an e-commerce site, you'll probably want to keep dynamicParams set to true
// This way, you can pre-render your most popular product pages for better performance, but still allow access to all your other products - they'll just be rendered on demand
// false
// If you're working with something like a blog where you have a smaller, more fixed number of pages, you can pre-render all of them and set dynamicParams to false

// If someone tries to access a blog post that doesn't exist, they'll get a clean 404 error instead of waiting for a page that will never exist