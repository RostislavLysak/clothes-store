import { NextRequest, NextResponse } from 'next/server'

import ShopService from '@/api-services/ShopService'

export const GET = async (req: NextRequest, { params }: { params: any }) => {
  try {
    const { slug } = params
    const products = await ShopService.getByCategoryProducts(slug)

    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
