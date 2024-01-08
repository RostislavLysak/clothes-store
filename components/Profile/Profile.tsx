'use client'

import { useRef, useState } from 'react'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { useClickAway } from '@/hooks/useClickAway'
import { TUser } from '@/plugins/types/requests'
import ProfileIcon from '@/plugins/ui/icons/ProfileIcon'
import Routes from '@/routes'

import Button from '../Button/Button'
import MenuPopover from '../MenuPopover/MenuPopover'

type ProfileProps = {
  t: {
    logout: string
    profile: string
  }
  profile: TUser
}

type TNavlink = {
  href: string
  title: string
}

const Profile = ({ t, profile }: ProfileProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { img } = profile
  const ref = useRef(null)

  const menu: TNavlink[] = [
    {
      title: t.profile,
      href: Routes.profile,
    },
  ]

  useClickAway(setOpen, ref)

  return (
    <div ref={ref} className='relative'>
      <Button
        type='button'
        className={`${!img && 'p-2'} border rounded-md cursor-pointer`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {!img ? (
          <ProfileIcon />
        ) : (
          <Image
            src={img}
            width={44}
            height={44}
            alt='Profile'
            className='w-11 h-11 rounded-md'
          />
        )}
      </Button>

      <MenuPopover show={open} position='right-0'>
        {menu.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className='block px-8 py-2 hover:bg-slate-400 first-of-type:rounded-t-md'
            onClick={() => setOpen((prev) => !prev)}
          >
            {item.title}
          </Link>
        ))}
        <Button
          type='button'
          className='block w-full p-8 py-2 hover:bg-slate-400 rounded-b-md'
          onClick={() => {
            signOut()
            setOpen((prev) => !prev)
          }}
        >
          {t.logout}
        </Button>
      </MenuPopover>
    </div>
  )
}

export default Profile
