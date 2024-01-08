import { NextResponse } from 'next/server'

import ShopService from '@/ApiService/ShopService'

export const GET = async () => {
  try {
    const products = await ShopService.getProducts()

    return NextResponse.json(products)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
