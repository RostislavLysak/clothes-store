import { NextRequest, NextResponse } from 'next/server'

// import UserService from '@/ApiService/UserService'
import { IRequestService, RequestService } from '@/services/RequestService'
// import ServerService from '@/services/ServerService'
import UserService from '@/services/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { img } = await req.json()

    // const user = await UserService.updateImage({
    //   img,
    //   accessToken: headers?.authorization,
    // })

    const options: IRequestService = {
      method: 'POST',
      body: {
        img,
      },
    }

    // const user = await RequestService.call(
    //   '/user/updateImage',
    //   // { method: 'POST', body: { firstName, lastName } },
    //   {...options}
    // )
    const user = await UserService.updateImage(options)
    console.log('BACK', user)


    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
