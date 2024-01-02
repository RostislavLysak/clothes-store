import { useState } from 'react'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import { TUser } from '@/plugins/types/requests'
import ProfileIcon from '@/plugins/ui/icons/ProfileIcon'
import Routes from '@/routes'

import Button from '../Button/Button'

type ProfileProps = {
  profile: TUser
}

type TNavlink = {
  href: string
  title: string
}

const menu: TNavlink[] = [
  {
    title: 'Profile',
    href: Routes.profile,
  },
]

const Profile = ({ profile }: ProfileProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { img } = profile
  return (
    <div>
      <Button
        type='button'
        className={`relative ${!img && 'p-2'} border rounded-md cursor-pointer`}
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
      <div
        className={`absolute right-4 z-10 backdrop-filter backdrop-blur-[20px] bg-slate-100/40 mt-6 border rounded-md  ${
          open ? 'block' : 'hidden'
        }`}
      >
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
          className='block p-8 py-2 hover:bg-slate-400 rounded-b-md'
          onClick={() => {
            signOut()
            setOpen((prev) => !prev)
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Profile
