import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { Options } from './BaseService'
import UserService from './UserService'
import ShopService from './ShopService'

const context = async () => {
  const headers: Options['headers'] = {}

  const session = await getServerSession(options)

  const accessToken = session?.accessToken

  if (accessToken) {
    headers['authorization'] = `Bearer ${accessToken}`
  }

  return headers
}

// export const shop = new ShopService(context)
// export const user = new UserService(context)
