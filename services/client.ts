'use client'

import { getSession } from 'next-auth/react'

import { Options } from './BaseService'
import UserService from './UserService'
import ShopService from './ShopService'

const context = async () => {
  const headers: Options['headers'] = {}

  const session = await getSession()

  const accessToken = session?.accessToken

  if (accessToken) {
    headers['authorization'] = `Bearer ${accessToken}`
  }

  return headers
}

// export const shop = new ShopService(context)
// export const user = new UserService(context)
