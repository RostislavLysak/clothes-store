import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button/Button'

type TNavlink = {
  href: string
  title?: string
}

interface IHeaderProps {
  navlinks: TNavlink[]
  show: boolean
}

export const DesktopHeader = ({ show, navlinks }: IHeaderProps) => {
  return (
    <header
      className={`fixed z-10 flex justify-between w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
        !show ? '-top-24' : 'top-0'
      }`}
    >
      <nav className='flex'>
        {navlinks.map((item, index) =>
          item.title ? (
            <Link
              key={item.title}
              href={item.href}
              className='hover:-translate-y-0.5 p-2 m-2'
            >
              {item.title}
            </Link>
          ) : (
            <Link key={index} href={item.href}>
              <Image
                priority
                width={100}
                height={24}
                src='/vercel.svg'
                alt='Vercel Logo'
                className='dark:invert m-4'
              ></Image>
            </Link>
          ),
        )}
      </nav>

      <Button onClick={() => signOut()}>Sign Out</Button>
    </header>
  )
}
