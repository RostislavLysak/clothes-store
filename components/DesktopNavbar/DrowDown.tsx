'use client'

import { useState } from 'react'
import Button from '../Button/Button'
import { Link } from '@/navigation'
import { capitalizeAll } from '@/utils'
import { useParams } from 'next/navigation'

type DropwDownProps = {
  title: string
  content: string[]
}

const DrowDown = ({ title, content }: DropwDownProps) => {
  const { slug } = useParams()

  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  return (
    <div
      className='flex flex-col relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button>{title}</Button>
      {isDropdownVisible && (
        <div className='absolute top-full left-1/2 -translate-x-1/2 flex items-center flex-wrap w-96 p-2 bg-black dark:bg-white rounded-md text-white dark:text-black transition-all duration-300 shadow-md'>
          {content.map((item) => (
            <div key={item} className='flex justify-center w-1/3 p-2'>
              <Link
                onClick={handleMouseLeave}
                href={`/${item}`}
                className={`py-2 hover:text-blue-300 ${
                  slug === item ? 'text-blue-300' : ''
                }`}
              >
                {capitalizeAll(item)}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DrowDown
