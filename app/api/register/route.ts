import { NextRequest, NextResponse } from 'next/server'

import AuthService from '@/api-services/AuthService'

export const POST = async (req: NextRequest) => {
  try {
    const { email, lastName, password, firstName } = await req.json()

    const user = await AuthService.register({
      email,
      lastName,
      password,
      firstName,
    })

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 403 })
  }
}
