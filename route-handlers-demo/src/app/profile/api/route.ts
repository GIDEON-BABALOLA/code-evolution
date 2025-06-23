import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
// const requestHeaders = new Headers(request.headers)
// console.log(requestHeaders.get("Authorization"))
// console.log(requestHeaders.get("User-Agent"))

// I can also choose to use the headers function that nextJS provides
const headerList = await headers();
console.log(headerList.get("Authorization"))
const theme = request.cookies.get("theme")
console.log(theme); // this gets logged { name: 'theme', value: 'dark' }
// Another way to set cookies, and get cookies
const cookieStore = await cookies();
cookieStore.set("resultPerPage", "20")
console.log(cookieStore.get("resultPerPage")) // and this returns { name: 'resultPerPage', value: '20', path: '/' }
// the headers returned from the headers function are read only
// To set new headers, you will need to return new response with your custom headers
return new Response("<h1>Your profile page</h1>", {
    headers: {
    "Content-Type": "text/html",
    "Set-Cookie": "theme=dark"
}
})
}
