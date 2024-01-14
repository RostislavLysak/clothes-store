import React, { Suspense } from 'react'

import { redirect } from 'next/navigation'

import { getTranslation } from '@/plugins/ui/i18n'
import Routes from '@/routes'

import View from './view'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'
import UserService from '@/services/UserService'
import ProfileLoader from './loading'

const Page = async () => {
  try {
    const subKeys = translationSubKeys.profilePage
    const t = await getTranslation(subKeys, 'Profile.form')

    const user = await UserService.getMe()
    return (
      <Suspense fallback={<ProfileLoader />}>
        <View t={t} data={user} />
      </Suspense>
    )
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}

export default Page
