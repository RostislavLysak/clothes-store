import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

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
      <button
        className='text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </header>
  )
}
