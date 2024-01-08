import { useState } from 'react'

import VisibilityIcon from '@/plugins/ui/icons/VisibilityIcon'
import VisibilityOffIcon from '@/plugins/ui/icons/VisibilityOffIcon'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabledAnimated?: boolean
  helperText?: string
  label: string
  type: 'password'
}

const PasswordControl = ({
  type,
  label,
  helperText,
  disabledAnimated,
  ...props
}: InputProps) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className='grid w-full h-full rounded-md place-items-center'>
      <div className='w-72'>
        <div className='relative h-10 w-full min-w-[200px]'>
          {/* <div
            className='absolute grid w-5 h-5 place-items-center top-2/4 right-3 -translate-y-2/4 cursor-pointer'
            onClick={(e) => {
              e.preventDefault()
              setShow(!show)
            }}
          >
            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div> */}
          <input
            placeholder=' '
            type={show ? 'text' : type}
            className={`peer h-full w-full rounded-[7px] border border-white bg-transparent border-t-transparent ${
              !props.value && 'border-t-white'
            } px-3 py-2.5 font-sans text-base font-normal !text-black dark:!text-white outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 ${
              disabledAnimated &&
              'disabled:animate-bounce disabled:animate-infinite'
            }`}
            {...props}
          />
          <label
            className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight !text-black dark:!text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-base peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ${
              disabledAnimated &&
              'peer-disabled:animate-bounce peer-disabled:animate-infinite'
            }`}
          >
            <span
              className='absolute grid w-5 h-5 place-items-center top-[16px] right-3 cursor-pointer pointer-events-auto'
              onClick={(e) => {
                e.preventDefault()
                setShow(!show)
              }}
            >
              {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
            {label}
          </label>
          {helperText ? (
            <div className='text-xs w-full px-1 mt-1 text-red-700'>
              {helperText}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default PasswordControl
