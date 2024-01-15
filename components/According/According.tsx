import { Link } from '@/navigation'
import { capitalizeAll } from '@/utils'
import { useState } from 'react'

interface AccordingProps extends React.PropsWithChildren {
  content: string[]
  onClose?: () => void
}

const According = ({ content, children, onClose }: AccordingProps) => {
  const [show, setShow] = useState(false)

  return (
    <div className='flex flex-col items-center'>
      <button
        className='text-blue-500 text-center'
        onClick={() => setShow((prev) => !prev)}
      >
        {children}
      </button>
      {content.map((item) => (
        <div
          key={item}
          className={`${
            show ? 'flex' : 'hidden'
          } flex-col items-start w-full p-2`}
        >
          <Link href={item} onClick={onClose}>
            {capitalizeAll(item)}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default According
