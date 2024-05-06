import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isTranslateRoute = createRouteMatcher([
  '/translate(.*)',
])

export default clerkMiddleware((auth, req) => {
  if(isTranslateRoute(req)) auth().protect()
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};