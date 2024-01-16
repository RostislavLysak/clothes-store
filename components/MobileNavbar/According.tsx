'use client'

import { Link } from '@/navigation'
import ArrowDropDownIcon from '@/plugins/ui/icons/ArrowDropDownIcon'
import { capitalizeAll } from '@/utils'
import { useParams } from 'next/navigation'
import { useState } from 'react'

interface AccordingProps extends React.PropsWithChildren {
  content: string[]
  onClose?: () => void
}

type ArrowIconProps = {
  show: boolean
}

const ArrowIcon = ({ show }: ArrowIconProps) => {
  return (
    <>
      {show ? (
        <div className='-rotate-180 transition-all duration-500'>
          <ArrowDropDownIcon />
        </div>
      ) : (
        <div className='transition-all duration-500'>
          <ArrowDropDownIcon />
        </div>
      )}
    </>
  )
}

const According = ({ content, onClose, children }: AccordingProps) => {
  const { slug } = useParams()
  const [show, setShow] = useState(false)

  return (
    <div className='flex flex-col my-4'>
      <button
        className='flex text-center font-bold'
        onClick={() => setShow((prev) => !prev)}
      >
        {children}
        <ArrowIcon show={show} />
      </button>
      {content.map((item) => (
        <div key={item} className={`${show ? 'flex' : 'hidden'} flex-col py-2`}>
          <Link
            href={`/${item}`}
            onClick={onClose}
            className={`${slug === item ? 'text-blue-300' : ''}`}
          >
            {capitalizeAll(item)}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default According
