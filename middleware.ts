import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { getUrl } from "./lib/utils";

const publicRoutes = [
  { path: "/auth", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/pricing", whenAuthenticated: "next" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/auth";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === pathname);
  const token =
    request.cookies.get("authjs.session-token") ||
    request.cookies.get("__Secure-authjs.session-token");

  if (!token && publicRoute) {
    return NextResponse.next();
  }

  if (!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/app";
    return NextResponse.redirect(redirectUrl);
  }

  if (token && !publicRoute) {
    // TODO Checar se o JWT está expirado
    // Se sim, remover o cookie e redirecionar para /auth
    // Ou aplicar estratégia de refresh
    const selectedCompany = request.cookies.get("SELECTED_COMPANY_ID")?.value;
    if (!selectedCompany) {
      if (pathname !== "/app/setup") {
        return NextResponse.redirect(
          new URL(getUrl("/app/setup"), request.url)
        );
      }
    }

    if (pathname === "/") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/app";
      return NextResponse.redirect(redirectUrl);
    }
  }
  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
