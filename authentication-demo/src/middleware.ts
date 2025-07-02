import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
const isProtectedRoute = createRouteMatcher(["/user-profile"])
// We can also invert the protected logic by doing this
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"])
const isAdminRoute =  createRouteMatcher(["/admin(.*)"])
export default clerkMiddleware( async (auth, req) => {
// if(isProtectedRoute(req)){
//   await auth.protect() // This will redirect the sue rto the sign in page automatically if they are not signed in
// }
if(!isPublicRoute(req)){
  // await auth.protect()
  // no we protect all route to be protected by specifying all routes that should be public
  // Now if you even want more control over whhat your application does based on user authentication status, you can use the auth argument in your middleware
  const { userId, redirectToSignIn } = await auth();
  if(!userId && !isPublicRoute(req)){
    // Now you can add custom logic to run before redirecting
    // This good include logging unauthorized access attempts for security monitoring
    // Routing users to region specific signin pages
    // Or handlng maintenance windows for specific routes,
    // or whatever might be relevant for your application
    return redirectToSignIn();
  }
}
if(isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "admin"){
const url = new URL("/", req.url);
return NextResponse.redirect(url)
}
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
// This will help us access auth data and configure protected routes later