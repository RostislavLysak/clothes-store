import { NextRequest, NextResponse } from 'next/server'

import { IRequestService } from '@/services/RequestService'
import UserService from '@/services/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { img } = await req.json()

    const options: IRequestService = {
      method: 'POST',
      body: {
        img,
      },
    }

    const user = await UserService.updateImage(options)
    console.log('BACK', user)

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
