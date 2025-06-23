export const dynamic = "force-static"
export const revalidate = 10; // This will revalidate the data after 10 seconds, also this does not work in development mode
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString()});
}

// now no caching by default and nextJS does not cache by default, also there is no caching during development