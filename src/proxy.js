import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/dashboard", "/cart", "/checkOut"];

// This function can be marked `async` if using `await` inside
export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const reqPath = req.nextUrl.pathname;
  const isAuthenticated = Boolean(token);
  const isPrivateReq = privateRoute.some((route) => reqPath.startsWith(route));

  if (!isAuthenticated && privateRoute) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url),
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/cart/:path*", "/checkOut/:path*"],
};
