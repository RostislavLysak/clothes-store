import { redirect } from 'next/navigation'

import AuthLayout from '@/components/AuthLayout'
import { getTranslation, translation } from '@/plugins/ui/i18n'
import Routes from '@/routes'
import * as api from '@/services/server'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const data = ['profile', 'logout'] as const
    const t = await getTranslation(data, 'Header')

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
