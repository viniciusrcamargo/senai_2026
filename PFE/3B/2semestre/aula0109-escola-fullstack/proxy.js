import { NextResponse } from "next/server";
import { obterUsuarioSessao } from "./app/lib/auth";

export function proxy(request) {
    const { pathname } = request.nextUrl;

    if (pathname === "/login" || pathname === "/registro") {
        return NextResponse.next();
    }

    if (!obterUsuarioSessao(request)) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        url.search = "";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
