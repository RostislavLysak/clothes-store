import React from 'react'

import { getServerSession, Session } from 'next-auth'
import { redirect } from 'next/navigation'

import options from '@/app/api/auth/[...nextauth]/options'
import Routes from '@/routes'
import UserService from '@/services/UserService'

import View from './view'

const Page = async () => {
  try {
    const session = (await getServerSession(options)) as Session
    const user = await UserService.getMe(session?.accessToken)
    return <View data={user} />
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}

export default Page
