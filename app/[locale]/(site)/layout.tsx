import { redirect } from 'next/navigation'

import AuthLayout from '@/components/AuthLayout'
import { getTranslation } from '@/plugins/ui/i18n'
import Routes from '@/routes'
import { translationSubKeys } from '@/plugins/ui/i18n/translations'
import UserService from '@/services/UserService'
import ShopService from '@/services/ShopService'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const subKeys = translationSubKeys.header
    const t = await getTranslation(subKeys, 'Header')

    const categories = await ShopService.getUniqueCategories()
    const brands = await ShopService.getUniqueBrands()

    const navbar = [
      {
        title: 'Brands',
        type: [...brands],
      },
      {
        title: 'Categories',
        type: [...categories],
      },
    ]

    const user = await UserService.getMe()
    return (
      <AuthLayout t={t} profile={user} navbar={navbar}>
        {children}
      </AuthLayout>
    )
  } catch (error) {
    redirect(`/${Routes.login}`)
  }
}
