'use client'

import { useEffect } from 'react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useScrollHeader from '@/hooks/useScrollHeader'
import linking from '@/routes/linking'

import Loader from '../Loader'

export default function UnauthorizedhLayout({
  children,
}: React.PropsWithChildren) {
  const { show } = useScrollHeader()

  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(linking.dashboard.root)
    }
  }, [status])

  if (status === 'loading') {
    return <Loader />
  }

  return (
    <>
      <header
        className={`fixed top-0 z-10 flex w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
          !show && '-top-24'
        }`}
      >
        <Image
          priority
          width={100}
          height={24}
          src='/vercel.svg'
          alt='Vercel Logo'
          className='dark:invert m-4'
        />
      </header>
      <main className='mt-32'>{children}</main>
    </>
  )
}
