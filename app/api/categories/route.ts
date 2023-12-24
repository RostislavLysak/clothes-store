import { NextResponse } from 'next/server'

import prisma from '@/prisma'

export const GET = async () => {
  try {
    const categories = await prisma.product.findMany({
      distinct: ['category'],
      select: {
        category: true,
      },
    })

    return NextResponse.json(categories)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
