'use client'

import { useEffect } from 'react'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useScrollHeader from '@/hooks/useScrollHeader'
import Routes from '@/routes'

import Button from '../Button/Button'
import Loader from '../Loader'

export default function UnauthorizedhLayout({
  children,
}: React.PropsWithChildren) {
  const { show } = useScrollHeader()

  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(Routes.root)
    }
  }, [status])

  if (status === 'loading') {
    return <Loader />
  }

  return (
    <>
      <header
        className={`fixed z-10 flex justify-between items-center w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
          !show ? '-top-24' : 'top-0'
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
        <div>
          <Button
            className='px-2 py-1 mt-2 mx-1 border rounded-md'
            onClick={() => router.push('/login')}
          >
            Sign In
          </Button>
          <Button
            className='px-2 py-1 mt-2 mx-1 border rounded-md'
            onClick={() => router.push('/register')}
          >
            Sign Up
          </Button>
        </div>
      </header>
      <main className='flex flex-col justify-center items-center h-screen'>
        {children}
      </main>
    </>
  )
}
