import { NextRequest, NextResponse } from 'next/server'

import { register } from '@/services/auth'

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json()

    const user = await register({ name, email, password })

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 403 })
  }
}
