import { useRef, useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useClickAway } from '@/hooks/useClickAway'
import AddBoxIcon from '@/plugins/ui/icons/AddBoxIcon'
import ProfileIcon from '@/plugins/ui/icons/ProfileIcon'
import * as api from '@/services/client'
import { readAsDataURL } from '@/utils'

import Button from '../Button/Button'
import MenuPopover from '../MenuPopover/MenuPopover'

type ProfileProps = {
  img: string
}

type TMenu = {
  action: () => void
  label: string
}

const ImageChanger = ({ img }: ProfileProps) => {
  const { refresh } = useRouter()
  const ref = useRef(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  useClickAway(setOpen, ref)

  const menu: TMenu[] = [
    {
      label: 'Upload a photo',
      action: () => {
        inputRef.current?.click()
        setOpen((prev) => !prev)
      },
    },
    {
      label: 'Remove a photo',
      action: async () => {
        setOpen((prev) => !prev)
        await api.user.updateImage({ img: '' })
        refresh()
      },
    },
  ]

  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const file = files?.[0]

    if (file) {
      const base64 = (await readAsDataURL(file)) as string

      await api.user.updateImage({ img: base64 })

      refresh()
    }
  }

  return (
    <div ref={ref} className='relative w-fit p-3 mb-6 border rounded-md'>
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

      <MenuPopover show={open}>
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
          type='file'
          ref={inputRef}
          className='hidden'
          accept='image/png, image/jpeg'
          onChange={handleChangeFile}
        />
      </MenuPopover>
    </div>
  )
}

export default ImageChanger
