'use client'

import Image from 'next/image'

import useScrollHeader from '@/hooks/useScrollHeader'
import { useRouter } from '@/navigation'
import Routes from '@/routes'

import Button from '../Button/Button'
import LanguageToggle from '../LanguageToggle/LanguageToggle'

interface UnauthorizedhLayoutProps extends React.PropsWithChildren {
  t: {
    signIn: string
    signUp: string
  }
}

export default function UnauthorizedhLayout({
  t,
  children,
}: UnauthorizedhLayoutProps) {
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
        <div className='flex [&>button]:mx-1'>
          <LanguageToggle />
          <Button size='sm' onClick={() => router.push(`/${Routes.login}`)}>
            {t.signIn}
          </Button>
          <Button size='sm' onClick={() => router.push(`/${Routes.register}`)}>
            {t.signUp}
          </Button>
        </div>
      </header>
      <main className='flex flex-col justify-center items-center h-[calc((100vh)-(80px))] mt-20'>
        {children}
      </main>
    </>
  )
}
