import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")!;

  if (host === "2phone.engineering") {
    return NextResponse.rewrite(new URL("/2phone-engineering", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/2phone-engineering")) {
    return NextResponse.redirect(
      `https://2phone.engineering${request.nextUrl.pathname}`
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
