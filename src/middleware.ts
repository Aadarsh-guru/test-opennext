// proxy.ts (Place this in your project root or src/ folder)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    // 1. Log the HTTP method and the path of the incoming request
    console.log(`[PROXY LOG] ${request.method} -> ${request.nextUrl.pathname}`);

    // 2. Pass the request along to its intended destination unchanged
    return NextResponse.next();
}

// Optional: Explicitly exclude static assets and internal Next.js files to keep your logs clean
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (optional, remove if you want to log API routes too)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
