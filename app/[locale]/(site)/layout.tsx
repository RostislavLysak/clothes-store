import { redirect } from 'next/navigation'

import AuthLayout from '@/components/AuthLayout'
import { getTranslation } from '@/plugins/ui/i18n'
import Routes from '@/routes'
import * as api from '@/services/server'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const subKeys = translationSubKeys.header
    const t = await getTranslation(subKeys, 'Header')

    const categories = await api.shop.getUniqueCateries()
    const user = await api.user.getMe()
    return (
      <AuthLayout t={t} profile={user} categories={categories}>
        {children}
      </AuthLayout>
    )
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}
