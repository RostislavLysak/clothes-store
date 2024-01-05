import React from 'react'

import { redirect } from 'next/navigation'

import Routes from '@/routes'
import * as api from '@/services/server'

import View from './view'

const Page = async () => {
  try {
    const user = await api.user.getMe()
    return <View data={user} />
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}

export default Page
