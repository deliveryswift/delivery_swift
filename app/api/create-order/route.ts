import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { orderTable } from "@/drizzle/schema";
import { generateSecureEightDigitString } from "@/lib/generateEightNumber";
import { db } from "@/drizzle/index";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    address,
    receivingCountry,
    amount,
    packageWeight,
    sendingCountry,
    locations,
    paymentMethod
   
  } = body;
  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !receivingCountry ||
    !amount ||
    !packageWeight ||
    !sendingCountry ||
    !locations ||
    !paymentMethod
 
  ) {
    return NextResponse.json(
      { error: "All fields are required", success: false },
      { status: 400 }
    );
  }
  const orderRef = "DS" + `${generateSecureEightDigitString()}`;
const newLocation = [locations]
  const existRef = await db
    .select()
    .from(orderTable)
    .where(eq(orderTable.trackingNumber, orderRef))
    .limit(1);
  if (existRef.length === 1) {
    return NextResponse.json(
      { success: false, error: "Order Already exist, Try again" },
      { status: 400 }
    );
  }
  const order = await db.insert(orderTable).values({
    name, email, phone, address,
     receivingCountry, amount, packageWeight, paymentMethod, sendingCountry,
     locations: newLocation, trackingNumber: orderRef, updatedAt: new Date()
  })
 
  return NextResponse.json({ success: true, message: 'Order created successfully', data:order}, { status: 201})
}