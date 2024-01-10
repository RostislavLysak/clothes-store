import { NextRequest, NextResponse } from 'next/server'
import { IRequestService } from '@/services/RequestService'
import UserService from '@/services/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { lastName, firstName } = await req.json()

    const options: IRequestService = {
      method: 'POST',
      body: {
        firstName,
        lastName,
      },
    }

    const user = await UserService.updateProfile(options)

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
