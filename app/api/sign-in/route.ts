import { NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { adminTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { comparePassword } from "@/lib/bcrypt";
import { generateToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "All fields are required", success: false },
      { status: 400 }
    );
  }

  const user = await db
    .select()
    .from(adminTable)
    .where(eq(adminTable.email, email))
    .limit(1);

  if (user.length === 0) {
    return NextResponse.json(
      { error: "Invalid email or password", success: false },
      { status: 401 }
    );
  }

  const isPasswordValid = await comparePassword(password, user[0].password);

  if (!isPasswordValid) {
    return NextResponse.json(
      { error: "Invalid email or password", success: false },
      { status: 401 }
    );
  }

  const token = await generateToken({ email, isAdmin: user[0].isAdmin });
  const cookieStore = await cookies();
  cookieStore.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'strict',
    maxAge: 3 * 24 * 60 * 60, // 3 days
  });

  return NextResponse.json({ success: true, message: 'Sign in successfully', token, data: user[0] }, { status: 200 });
}