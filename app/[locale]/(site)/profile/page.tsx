import React from 'react'

import { redirect } from 'next/navigation'

import { getTranslation } from '@/plugins/ui/i18n'
import Routes from '@/routes'
import * as api from '@/services/server'

import View from './view'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'

const Page = async () => {
  try {
    const subKeys = translationSubKeys.profilePage
    const t = await getTranslation(subKeys, 'Profile.form')

    const user = await api.user.getMe()
    return <View t={t} data={user} />
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}

export default Page
