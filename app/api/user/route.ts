import { NextRequest, NextResponse } from 'next/server'

import UserService from '@/api-services/UserService'

export const GET = async (req: NextRequest) => {
  try {
    const accessToken = req.headers.get('authorization')

    const user = await UserService.getUser(accessToken)

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
