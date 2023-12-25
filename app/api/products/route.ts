import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/prisma'

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams
  const category = searchParams.get('category')

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { category } : {}),
      },
    })

    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}

