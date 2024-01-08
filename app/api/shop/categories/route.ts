import { NextResponse } from 'next/server'

import ShopService from '@/ApiService/ShopService'

export const GET = async () => {
  try {
    const categories = await ShopService.getUniqueCategories()

    return NextResponse.json(categories)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: e.status })
  }
}
