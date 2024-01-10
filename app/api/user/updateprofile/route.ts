import { NextRequest, NextResponse } from 'next/server'

// import UserService from '@/ApiService/UserService'
import { IRequestService, RequestService } from '@/services/RequestService'
// import ServerService from '@/services/ServerService'
import UserService from '@/services/UserService'

export const POST = async (req: NextRequest) => {
  try {
    const { lastName, firstName } = await req.json()
    console.log('ROUTE', lastName, firstName)
    // const user = await UserService.updateProfile({
    //   lastName,
    //   firstName,
    //   accessToken: headers?.authorization,
    // })

    const options: IRequestService = {
      method: 'POST',
      body: {
        firstName,
        lastName,
      },
    }

    // const user = await RequestService.call(
    //   '/user/updateProfile',
    //   // { method: 'POST', body: { firstName, lastName } },
    //   {...options}
    // )

    const user = await UserService.updateProfile(options)
    console.log('BACK', user)

    return NextResponse.json(user)
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 404 })
  }
}
