'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import useScrollHeader from '@/hooks/useScrollHeader'
import { TUser } from '@/plugins/types/requests'
import Routes from '@/routes'

import { Navbar } from '../Navbar/Navbar'
import { DesktopHeader } from './Headers/DesktopHeader'
import { MobileHeader } from './Headers/MobileHeader'
import { THeader } from '@/plugins/ui/i18n/translations'

const navlinks = [
  {
    href: Routes.root,
  },
]

type TNavbar = {
  title: string
  type: string[]
}

interface AuthLayoutProps extends React.PropsWithChildren {
  t: THeader
  navbar: TNavbar[]
  profile: TUser
}

export default function AuthLayout({
  t,
  profile,
  children,
  navbar,
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
        <MobileHeader t={t} show={show} profile={profile} navbar={navbar} />
      )}
      <main className='mt-24'>
        {isPageWide ? <Navbar navbar={navbar} /> : null}
        {children}
      </main>
    </>
  )
}
