import { redirect } from 'next/navigation'

import AuthLayout from '@/components/AuthLayout'
import Routes from '@/routes'
import * as api from '@/services/server'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const categories = await api.shop.getUniqueCateries()
    const user = await api.user.getMe()
    return (
      <AuthLayout profile={user} categories={categories}>
        {children}
      </AuthLayout>
    )
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}
