'use client'

import { useEffect } from 'react'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import useScrollHeader from '@/hooks/useScrollHeader'
import Routes from '@/routes'

import { CategoriesList } from '../CategoriesList/CategoriesList'
import Loader from '../Loader'
import { DesktopHeader } from './Headers/DesktopHeader'
import { MobileHeader } from './Headers/MobileHeader'

const navlinks = [
  {
    href: Routes.root,
  },
]

interface AuthLayoutProps extends React.PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { show } = useScrollHeader()
  const isPageWide = useMediaQuery('(min-width: 900px')

  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace(`/${Routes.login}`)
    }
  }, [status])

  if (status === 'loading') {
    return <Loader />
  }
  return (
    <>
      {isPageWide ? (
        <DesktopHeader show={show} navlinks={navlinks} />
      ) : (
        <MobileHeader show={show} />
      )}
      <main className='mt-24'>
        <div className='flex flex-col lg:flex-row'>
          {isPageWide ? <CategoriesList /> : null}
          {children}
        </div>
      </main>
    </>
  )
}
