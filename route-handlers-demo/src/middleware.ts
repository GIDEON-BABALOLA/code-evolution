import { NextResponse } from "next/server"; // nextResponse extends the standard response API
import type { NextRequest } from "next/server";
// Define middleware function that accept a NextRequest type request
export function middleware(request: NextRequest){
  // use of cookies and headers in middleware
  // Let's modify our middleware to handle user preferences for themes and add a custom header for all responses
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme")
  if(!themePreference){
    response.cookies.set("theme", "dark")
  }
  response.headers.set("custom-header", "custom-value")
  return response
  //  if(request.nextUrl.pathname === "/profile"){
  //   return NextResponse.redirect(new URL("/hello", request.nextUrl))
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl))
  //   if I try rewrite, the url in the browser will not change
  // }
  //  First approach
  //    return NextResponse.redirect(new URL("/", request.url))
}
// First appproach
// We create a config that then tells nextJS to apply this to the profile route
// export const config = {
//   matcher: "/profile"
// }