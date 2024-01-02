'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useScrollHeader from '@/hooks/useScrollHeader'
import Routes from '@/routes'

import Button from '../Button/Button'

export default function UnauthorizedhLayout({
  children,
}: React.PropsWithChildren) {
  const { show } = useScrollHeader()

  const router = useRouter()

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
          className='dark:invert m-4 w-[100px] h-[24px]'
        />
        <div className='[&>button]:mx-1'>
          <Button size='sm' onClick={() => router.push(`/${Routes.login}`)}>
            Sign In
          </Button>
          <Button size='sm' onClick={() => router.push(`/${Routes.register}`)}>
            Sign Up
          </Button>
        </div>
      </header>
      <main className='flex flex-col justify-center items-center h-[calc((100vh)-(80px))] mt-20'>
        {children}
      </main>
    </>
  )
}
