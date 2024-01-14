'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'

import { capitalizeAll } from '@/utils'

import Button from '../Button/Button'
import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter } from '@/navigation'

type TNavbar = {
  title: string
  type: string[]
}

type NavbarProps = {
  navbar: TNavbar[]
  onClose?: () => void
}

export const Navbar = ({ onClose, navbar }: NavbarProps) => {
  const { slug } = useParams()
  const searchParams = useSearchParams()
  const conditinalType = useCallback(
    () =>
      navbar.find((nav) => nav.title === searchParams.get('type'))?.type ??
      navbar[0].type,
    [searchParams],
  )
  const [selectedTitle, setSelectedTitle] = useState(
    searchParams.get('type') ?? '',
  )
  const [selectedType, setSelectedType] = useState(conditinalType)
  const router = useRouter()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('type', selectedTitle))
  }, [pathname])

  return (
    <div className='flex flex-col p-6'>
      <div className='absolute top-24 left-1/2 -translate-x-1/2 md:-translate-x-0 md:static flex justify-center space-x-3'>
        {navbar.map((item) => (
          <Button
            key={item.title}
            className={`w-fit text-lg ${
              selectedTitle === item.title ? 'text-blue-300' : 'text-gray-400'
            } font-bold font-sans border-none`}
            onClick={() => {
              router.push(
                pathname + '?' + createQueryString('type', item.title),
              )
              setSelectedTitle(item.title)
              setSelectedType(item.type)
            }}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <div
        id='navbar'
        className={`h-screen w-screen flex justify-start md:w-auto md:h-auto md:flex-row items-center md:overflow-visible overflow-y-scroll md:overflow-x-scroll md:overflow-y-auto`}
      >
        <div className='flex flex-col gap-4 h-20 whitespace-nowrap md:w-auto mx-auto md:h-auto md:flex-row items-center justify-center'>
          {selectedType.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`text-base hover:text-blue-300 md:w-fit xl:text-lg mt-2 ${
                slug === item ? 'text-blue-300' : ''
              }`}
              onClick={onClose}
            >
              {capitalizeAll(item)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
