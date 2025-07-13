
import { NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { eq } from "drizzle-orm";
import { orderTable } from "@/drizzle/schema";

export async function PUT(req: Request) {
  const  newAmount  = await req.json();
  const searchParams = new URL(req.url).searchParams
  const trackingNumber = searchParams.get("trackingNumber");


  if (!newAmount || !trackingNumber ) {
    return NextResponse.json(
      { success: false, error: "Missing tracking number or new price" },
      { status: 400 }
    );
  }
  const order = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, trackingNumber)) ;

  if (order.length === 0) {
    return NextResponse.json(
      { success: false, error: "No Order Available" },
      { status: 404 }
    );
  }
 

  await db
    .update(orderTable)
    .set({ amount: newAmount, updatedAt: new Date() })
    .where(eq(orderTable.trackingNumber, trackingNumber));

  return NextResponse.json(
    { success: true, message: "Refund changed successfully." },
    { status: 202 }
  );
}
