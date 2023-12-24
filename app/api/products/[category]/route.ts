import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/prisma'

type TParams = {
  params: {
    category: string
  }
}

export const GET = async (req: NextRequest, { params }: TParams) => {
  try {
    const product = await prisma.product.findMany({
      where: {
        category: params.category,
      },
    })

    return NextResponse.json(product)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
