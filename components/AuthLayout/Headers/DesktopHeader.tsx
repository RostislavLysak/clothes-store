import Image from 'next/image'
import Link from 'next/link'

import LanguageToggle from '@/components/LanguageToggle/LanguageToggle'
import Profile from '@/components/Profile/Profile'
import { TUser } from '@/plugins/types/requests'
import { THeader } from '@/plugins/ui/i18n/translations'
import DesktopNavbar from '@/components/DesktopNavbar/DesktopNavbar'

type TNavlink = {
  href: string
  title?: string
}

type TNavbar = {
  title: string
  type: string[]
}

interface IHeaderProps {
  t: THeader
  navlinks: TNavlink[]
  profile: TUser
  show: boolean
  navbar: TNavbar[]
}

export const DesktopHeader = ({
  t,
  show,
  profile,
  navlinks,
  navbar,
}: IHeaderProps) => {
  return (
    <header
      className={`fixed z-10 flex justify-between items-center w-full border-b p-4 px-8 backdrop-blur-md transition-all duration-500 ${
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
                className='dark:invert m-4 w-[100px] h-[24px]'
              ></Image>
            </Link>
          ),
        )}
      </nav>
      <div className='flex items-center justify-center [&>*]:mx-2'>
        <DesktopNavbar navbar={navbar} />
        <LanguageToggle />
        <Profile t={t} profile={profile} />
      </div>
    </header>
  )
}
