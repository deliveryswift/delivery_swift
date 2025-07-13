import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";



export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || 'none'
  
  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }
  const protectRoutes = [
    '/admin',
    '/admin/order',
    '/admin/sign-up',
    '/admin/add-order',
    '/admin/refund',
  ].includes(request.nextUrl.pathname);

  // If the user is not authenticated and trying to access protected routes, redirect to sign-in
    if(protectRoutes && token === 'none'){
    const signInUrl = new URL('/admin/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }

  const decoded = await verifyToken(token)

  //check if the user is authenticated
  if(!decoded && protectRoutes) {
    const signInUrl = new URL('/admin/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }
  // check if the user is an admin
  if (decoded && !decoded.isAdmin && protectRoutes) {
    const signInUrl = new URL('/admin/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }


    return NextResponse.next();
 
}