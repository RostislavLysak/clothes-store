import { useState } from 'react'
import MobileNavbar from '@/components/MobileNavbar/MobileNavbar'
import Profile from '@/components/Profile/Profile'
import { useDisableScroll } from '@/hooks/useDisableScroll'
import { TUser } from '@/plugins/types/requests'
import { THeader } from '@/plugins/ui/i18n/translations'
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'

type TNavbar = {
  title: string
  type: string[]
}

interface IHeaderProps {
  t: THeader
  navbar: TNavbar[]
  profile: TUser
  show: boolean
}

export const MobileHeader = ({ t, show, profile, navbar }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  useDisableScroll(isOpen)

  return (
    <header
      className={`fixed z-10 flex justify-between items-center w-full border-b p-4 px-8 backdrop-blur-md transition-all duration-500 ${
        !show && !isOpen ? '-top-24' : 'top-0'
      }`}
    >
      <BurgerMenu
        show={isOpen}
        onOpen={handleClick}
        onClose={() => setIsOpen(false)}
      >
        <MobileNavbar navbar={navbar} onClose={() => setIsOpen(false)} />
      </BurgerMenu>

      <Profile t={t} profile={profile} />
    </header>
  )
}
