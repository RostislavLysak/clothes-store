import { NextResponse } from 'next/server'

import prisma from '@/prisma'

export const GET = async () => {
  try {
    const products = await prisma.product.findMany()

    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
