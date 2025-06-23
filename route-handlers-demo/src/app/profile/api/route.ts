import { type NextRequest } from "next/server";
import { headers } from "next/headers";
export async function GET(request: NextRequest) {
// const requestHeaders = new Headers(request.headers)
// console.log(requestHeaders.get("Authorization"))
// console.log(requestHeaders.get("User-Agent"))

// I can also choose to use the headers function that nextJS provides
const headerList = await headers();
console.log(headerList.get("Authorization"))
// the headers returned from the headers function are read only
// To set new headers, you will need to return new response with your custom headers
return new Response("<h1>Your profile page</h1>", {
    headers: {
    "Content-Type": "text/html",
    "Set-Cookie": "theme=dark"
}
})
}
