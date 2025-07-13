import { NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { eq } from "drizzle-orm";
import { orderTable } from "@/drizzle/schema";

export async function PUT(req: Request) {
  const  body  = await req.json();
  const searchParams = new URL(req.url).searchParams
  const trackingNumber = searchParams.get("trackingNumber");
  const { location, time } = body;
  if (!trackingNumber || !location || !time) {
    return NextResponse.json(
      { success: false, error: "Missing tracking number or location" },
      { status: 400 }
    );
  }

  const order = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, trackingNumber)) as Array<{ locations: Array<{ place: string; time: string }>; trackingNumber: string; updatedAt?: Date }>;

  if (order.length === 0) {
    return NextResponse.json(
      { success: false, error: "No Order Available" },
      { status: 404 }
    );
  }
  const updatedLocation = [ ...order[0].locations, { place: location, time } ];

  await db
    .update(orderTable)
    .set({ locations: updatedLocation, updatedAt: new Date() })
    .where(eq(orderTable.trackingNumber, trackingNumber));

  return NextResponse.json(
    { success: true, message: "Location added successfully." },
    { status: 202 }
  );
}
