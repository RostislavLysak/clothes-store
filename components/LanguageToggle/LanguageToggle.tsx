import { usePathname, useRouter } from '@/navigation'
import { useRef, useState, useTransition } from 'react'
import Button from '../Button/Button'
import { useLocale } from 'next-intl'
import { useClickAway } from '@/hooks/useClickAway'
import config from '@/config'

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
      <Button type='button' size='sm' onClick={() => setOpen((prev) => !prev)}>
        {locale.toUpperCase()}
      </Button>
      <div
        className={`absolute -left-10 z-10 backdrop-filter backdrop-blur-[20px] bg-transparent mt-6 border rounded-md  ${
          open ? 'block' : 'hidden'
        }`}
      >
        {config.locales.map((locale, index) => (
          <Button
            key={locale}
            onClick={() => onLanguageChange(locale)}
            className='flex w-full px-4 py-2 hover:bg-slate-400 first-of-type:rounded-t-md'
          >
            {languages[index]}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default LanguageToggle
