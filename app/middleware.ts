import {
  NextRequest,
  NextResponse,
} from "next/server";

const protectedRoutes = [
  "/dashboard",
];

const roleRoutes = {
  "/dashboard/tenant":
    "TENANT",

  "/dashboard/landlord":
    "LANDLORD",

  "/dashboard/admin":
    "ADMIN",
};

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      "accessToken"
    )?.value;

  const pathname =
    request.nextUrl.pathname;

  const isProtected =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

  if (!token && isProtected) {
    return NextResponse.redirect(
      new URL(
        "/auth/login",
        request.url
      )
    );
  }

  /**
   * Later:
   * Decode JWT
   */

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};