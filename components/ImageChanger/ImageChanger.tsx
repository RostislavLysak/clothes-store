import { useRef, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { TUpdateImage } from '@/plugins/types/requests'
import AddBoxIcon from '@/plugins/ui/icons/AddBoxIcon'
import ProfileIcon from '@/plugins/ui/icons/ProfileIcon'
import UserService from '@/services/UserService'
import { readAsDataURL } from '@/utils'

import Button from '../Button/Button'

type ProfileProps = {
  data: TUpdateImage
}

type TMenu = {
  action: () => void
  label: string
}

const ImageChanger = ({ data }: ProfileProps) => {
  const { refresh } = useRouter()
  const ref = useRef<HTMLInputElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const { img, email } = data

  const menu: TMenu[] = [
    {
      label: 'Upload a photo',
      action: () => {
        ref.current?.click()
        setOpen((prev) => !prev)
      },
    },
    {
      label: 'Remove a photo',
      action: async () => {
        setOpen((prev) => !prev)
        await UserService.updateImage({ email, img: '' })
        refresh()
      },
    },
  ]

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    const file = files?.[0]

    if (file) {
      const base64 = (await readAsDataURL(file)) as string

      await UserService.updateImage({ email, img: base64 })

      refresh()
    }
  }

  return (
    <div className='relative w-fit p-3 mb-6 border rounded-md'>
      {!img ? (
        <ProfileIcon width={40} />
      ) : (
        <Image
          src={img}
          width={40}
          height={40}
          alt='profile'
          className='w-10 h-10'
        />
      )}
      <Button
        type='button'
        className='absolute w-0 h-0 right-5 bottom-5'
        onClick={() => setOpen((prev) => !prev)}
      >
        <AddBoxIcon />
      </Button>
      <div
        className={`absolute w-fit left-0 z-10 backdrop-filter backdrop-blur-[20px] bg-slate-100/40 mt-6 border rounded-md  ${
          open ? 'block' : 'hidden'
        }`}
      >
        {menu.map((item) => (
          <Button
            key={item.label}
            type='button'
            className='w-40 text-center p-4 py-2 hover:bg-slate-400 first-of-type:rounded-t-md last-of-type:rounded-b-md'
            onClick={item.action}
          >
            {item.label}
          </Button>
        ))}
        <input
          ref={ref}
          type='file'
          className='hidden'
          accept='image/png, image/jpeg'
          onChange={handleChangeFile}
        />
      </div>
    </div>
  )
}

export default ImageChanger
