'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import useScrollHeader from '@/hooks/useScrollHeader'
import { TCategory, TUser } from '@/plugins/types/requests'
import Routes from '@/routes'

import { CategoriesList } from '../CategoriesList/CategoriesList'
import { DesktopHeader } from './Headers/DesktopHeader'
import { MobileHeader } from './Headers/MobileHeader'

const navlinks = [
  {
    href: Routes.root,
  },
]

interface AuthLayoutProps extends React.PropsWithChildren {
  t: {
    logout: string
    profile: string
  }
  categories: TCategory[]
  profile: TUser
}

export default function AuthLayout({
  t,
  profile,
  children,
  categories,
}: AuthLayoutProps) {
  const { show } = useScrollHeader()
  const isPageWide = useMediaQuery('(min-width: 900px')

  return (
    <>
      {isPageWide ? (
        <DesktopHeader
          t={t}
          show={show}
          profile={profile}
          navlinks={navlinks}
        />
      ) : (
        <MobileHeader
          t={t}
          show={show}
          profile={profile}
          categories={categories}
        />
      )}
      <main className='mt-24'>
        {isPageWide ? <CategoriesList categories={categories} /> : null}
        {children}
      </main>
    </>
  )
}
