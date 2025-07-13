import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const storedCookie = cookies();
    (await storedCookie).delete('token');
    return NextResponse.json({ success: true, message: "Logged out successfully." }, { status: 200 });
}