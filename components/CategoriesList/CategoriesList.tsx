'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { TCategory } from '@/plugins/types/requests'
import { capitalize } from '@/utils'

import Button from '../Button/Button'

type CategoriesListProps = {
  categories: TCategory[]
  onClose?: () => void
  title?: string
}

export const CategoriesList = ({
  onClose,
  categories,
  title = 'Categories',
}: CategoriesListProps) => {
  const { slug } = useParams()

  return (
    <div className={`flex flex-col p-6`}>
      <div className='flex justify-center'>
        <Button
          className={`w-fit text-lg text-gray-400 font-bold font-sans border-none`}
        >
          {title}
        </Button>
      </div>
      <div
        className={`flex items-center justify-center lg:overflow-visible lg:h-auto`}
      >
        {categories.map((item) => (
          <Link
            key={item.category}
            href={`/${item.category}`}
            className={`text-base hover:text-blue-300 lg:w-fit xl:text-lg p-2 ${
              slug === item.category ? 'text-blue-300' : ''
            }`}
            onClick={onClose}
          >
            {capitalize(item.category)}
          </Link>
        ))}
      </div>
    </div>
  )
}
