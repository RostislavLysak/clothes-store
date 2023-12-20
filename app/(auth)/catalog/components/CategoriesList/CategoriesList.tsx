'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'

type CategoriesListProps = {
  categories: string[]
  title?: string
}

const CategoriesList = ({
  categories,
  title = 'Categories',
}: CategoriesListProps) => {
  const { slug } = useParams()
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col p-6'>
      <div className='flex justify-center'>
        <button
          className={`w-fit text-lg text-gray-400 font-bold font-sans lg:mb-4 ${
            open ? 'mb-4' : ''
          }`}
          onClick={() => setOpen(!open)}
        >
          {title}
        </button>
      </div>
      <div
        className={`flex flex-col lg:overflow-visible lg:h-auto ${
          !open ? 'overflow-hidden h-0' : ''
        }`}
      >
        {categories.map((item: string) => (
          <Link
            key={item}
            href={'/catalog/' + item}
            className={`text-base border-2 border-t-0 first-of-type:border-t-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 lg:border-none lg:bg-transparent lg:hover:bg-transparent lg:w-fit lg:focus:bg-transparent xl:text-lg p-2 ${
              slug === item ? 'text-blue-300' : ''
            }`}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesList
