import { NextRequest, NextResponse } from 'next/server'

import UserService from '@/api-services/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { img, email } = await req.json()

    const user = await UserService.updateImage({ img, email })

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
