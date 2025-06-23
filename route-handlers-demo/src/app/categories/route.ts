
export const dynamic = "force-static" // This ensure that the response is cached and served instantly to all
export async function GET() {
    // This data will typically come from a database
    const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Garden" },
  ];
  return Response.json(categories)
}

// since this data rarely changes, every request to this endpoint will trigger a new database query which is inneficient, to avoid this, we can use caching,
// also there is no caching during development