import React from 'react'

import { redirect } from 'next/navigation'

import { getTranslation } from '@/plugins/ui/i18n'
import Routes from '@/routes'
import * as api from '@/services/server'

import View from './view'

const Page = async () => {
  try {
    const data = ['firstName', 'lastName', 'button'] as const
    const t = await getTranslation(data, 'Profile.form')

    const user = await api.user.getMe()
    return <View t={t} data={user} />
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}

export default Page
