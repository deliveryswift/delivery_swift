import { NextResponse } from 'next/server';
import { db } from '@/drizzle/index';
import { orderTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
  
 const trackingNumber  = searchParams.get('orderId');
   if(!trackingNumber){
       return NextResponse.json({ error: 'Please Provide tracking number', success: false}, { status: 400})
   }
   console.log(trackingNumber)
   const existingOrder = await db.select()
   .from(orderTable)
   .where(eq( orderTable.trackingNumber, trackingNumber))

   if(!existingOrder){
       return NextResponse.json({ success: false, error: 'No Order Found'}, { status: 400 })
   }
   return NextResponse.json({ success: true, data: existingOrder, message: 'Order Found' }, { status: 200 })
}