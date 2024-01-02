import { getServerSession, Session } from 'next-auth'
import { redirect } from 'next/navigation'

import AuthLayout from '@/components/AuthLayout'
import Routes from '@/routes'
import ShopService from '@/services/ShopService'
import UserService from '@/services/UserService'

import options from '../api/auth/[...nextauth]/options'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const session = (await getServerSession(options)) as Session
    const categories = await ShopService.getUniqueCateries()
    const user = await UserService.getMe(session?.accessToken)
    return (
      <AuthLayout profile={user} categories={categories}>
        {children}
      </AuthLayout>
    )
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}
