'use client'

import { useState } from 'react'

import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button/Button'
import { CategoriesList } from '@/components/CategoriesList/CategoriesList'
import { useDisableScroll } from '@/hooks/useDisableScroll'
import Routes from '@/routes'

interface IHeaderProps {
  show: boolean
}

export const MobileHeader = ({ show }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  useDisableScroll(isOpen)

  return (
    <header
      className={`fixed z-10 flex justify-between items-center w-full border-b p-4 backdrop-blur-md transition-all duration-500 ${
        !show && !isOpen ? '-top-24' : 'top-0'
      }`}
    >
      <Link href={Routes.root}>
        <Image
          priority
          width={100}
          height={24}
          src='/vercel.svg'
          alt='Vercel Logo'
          className='dark:invert m-4'
        />
      </Link>

      <section className={`flex lg:hidden h-fit px-2`}>
        <div className='space-y-2' onClick={handleClick}>
          <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
          <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
        </div>

        <div
          className={
            isOpen
              ? 'fixed inset-0 z-50 flex flex-col justify-center items-center w-full h-screen bg-white dark:bg-black'
              : 'hidden'
          }
        >
          <div
            className='absolute top-0 right-0 px-8 py-8'
            onClick={() => setIsOpen(false)}
          >
            <svg
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-8 w-8 text-gray-600'
            >
              <line y1='6' x2='6' x1='18' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <CategoriesList onClose={() => setIsOpen(false)} />

          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      </section>
    </header>
  )
}
