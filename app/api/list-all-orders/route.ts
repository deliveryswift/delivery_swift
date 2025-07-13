import { NextResponse } from "next/server";
import { db } from "@/drizzle/index";
import { orderTable } from "@/drizzle/schema";

export async function GET() {
  const orders = await db
    .select()
    .from(orderTable);
 
    if(orders.length === 0){
        return NextResponse.json({ success: true, message: 'No Order Available', data: []}, { status: 404})
    }
  return NextResponse.json({ success: true, data: orders }, { status: 200 });
}
