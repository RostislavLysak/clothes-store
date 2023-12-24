'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import axios from 'axios'

import { capitalize } from '@/utils'

import Button from '../Button/Button'

export type TCategory = {
  category: string
}

type CategoriesListProps = {
  onClose?: () => void
  title?: string
}

const getUniqueCategories = async () => {
  const res = await axios.get('/api/categories')

  return res.data
}

export const CategoriesList = ({
  onClose,
  title = 'Categories',
}: CategoriesListProps) => {
  const { slug } = useParams()
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<TCategory[]>([])

  useEffect(() => {
    getUniqueCategories().then(setData)
  }, [])

  return (
    <div className='flex flex-col p-6'>
      <div className='flex justify-center'>
        <Button
          className={`w-fit text-lg text-gray-400 font-bold font-sans lg:pointer-events-none ${
            open ? 'mb-4' : ''
          }`}
          onClick={() => setOpen(!open)}
        >
          {title}
        </Button>
      </div>
      <div
        className={`flex flex-col lg:overflow-visible lg:h-auto ${
          !open ? 'overflow-hidden h-0' : ''
        }`}
      >
        {data.map((item) => (
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
