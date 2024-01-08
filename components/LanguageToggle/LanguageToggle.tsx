import { useRef, useState, useTransition } from 'react'

import { useLocale } from 'next-intl'

import config from '@/config'
import { useClickAway } from '@/hooks/useClickAway'
import { usePathname, useRouter } from '@/navigation'

import Button from '../Button/Button'
import MenuPopover from '../MenuPopover/MenuPopover'

type LanguageToggleProps = {
  onClose?: () => void
}

const LanguageToggle = ({ onClose }: LanguageToggleProps) => {
  const ref = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  useClickAway(setOpen, ref)

  const pathname = usePathname()
  const languages = ['English', 'Український']

  function onLanguageChange(locale: string) {
    startTransition(() => {
      router.replace(pathname, { locale })
    })

    onClose
    setOpen((prev) => !prev)
  }

  return (
    <div
      ref={ref}
      className={`relative mx-1 ${
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      }`}
    >
      <Button size='sm' type='button' onClick={() => setOpen((prev) => !prev)}>
        {locale.toUpperCase()}
      </Button>
      <MenuPopover show={open} position='-left-10' background='bg-transparent'>
        {config.locales.map((locale, index) => (
          <Button
            key={locale}
            className='flex w-full px-4 py-2 hover:bg-slate-400 first-of-type:rounded-t-md'
            onClick={() => onLanguageChange(locale)}
          >
            {languages[index]}
          </Button>
        ))}
      </MenuPopover>
    </div>
  )
}

export default LanguageToggle
