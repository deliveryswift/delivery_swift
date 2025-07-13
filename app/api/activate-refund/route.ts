import { orderTable } from "@/drizzle/schema";
import { db } from "@/drizzle/index";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url)
const trackingNumber = searchParams.get('trackingNumber')
 
console.log("Tracking Number:", trackingNumber);
  if (!trackingNumber) {
    return NextResponse.json(
      { success: false, error: "Tracking number is required" },
      { status: 400 }
    );
  }

  const order = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, trackingNumber))
    .limit(1);
  if (order.length === 0) {
    return NextResponse.json(
      { success: false, error: "No Order Available" },
      { status: 404 }
    );
  }

  const setRefund = !order[0].refund
const refundMessage = setRefund ? 'Refunded Successfully' : 'Refund Canceled'

  await db.update(orderTable)
    .set({ refund: setRefund, updatedAt: new Date(), status: setRefund ? 'Refunding' : 'Delivering' })
    .where(eq(orderTable.trackingNumber, trackingNumber));

    return NextResponse.json({ success: true, message: refundMessage, data: order[0] }, { status: 202 });
}
