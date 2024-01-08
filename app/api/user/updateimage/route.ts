import { NextRequest, NextResponse } from 'next/server'

import UserService from '@/ApiService/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { img, headers } = await req.json()

    const user = await UserService.updateImage({
      img,
      accessToken: headers?.authorization,
    })

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
