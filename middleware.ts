import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes explicitly
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",         // Make home route public
  "/about-us(.*)",
  "/blogs(.*)",
  "/privacy-policy(.*)",
  "/real-estate(.*)",
  "/sales-systems(.*)",
  "/job-seekers(.*)",
  "/talent-outsourcing(.*)",
  "/get-started(.*)",
  "/application-form(.*)",
  "/job-listings(.*)",
  "/terms-and-conditions(.*)",
  "/api(.*)"   // Make all API routes public
]);

export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Protect only /admin-dashboard and its sub-routes
  if (path.startsWith("/admin-dashboard")) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
