import { NextResponse } from 'next/server';
import { db } from '@/drizzle/index';
import { orderTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function DELETE(req: Request){
   const { searchParams } = new URL(req.url)

   const  trackingNumber = searchParams.get('trackingNumber')
   console.log("Tracking Number:", trackingNumber);
    if(!trackingNumber){
        return NextResponse.json({ error: 'Please Provide tracking number', success: false}, { status: 400})
    }
    const existingOrder = await db.select()
    .from(orderTable)
    .where(eq( orderTable.trackingNumber, trackingNumber))

    if(!existingOrder){
        return NextResponse.json({ success: false, error: 'No Order Found'}, { status: 400 })
    }
  const deletedOrder =   await db.delete(orderTable)
    .where(eq( orderTable.trackingNumber, trackingNumber))
    .returning()
    
  return NextResponse.json({ success: true, data: deletedOrder }, { status: 200 })
}