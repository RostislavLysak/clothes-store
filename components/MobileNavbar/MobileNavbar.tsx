import According from '@/components/MobileNavbar/According'
import { Link } from '@/navigation'
import Routes from '@/routes'
import Image from 'next/image'
import LanguageToggle from '../LanguageToggle/LanguageToggle'

type TNavbar = {
  title: string
  type: string[]
}

type MobileNavbarProps = {
  navbar: TNavbar[]
  onClose?: () => void
}

const MobileNavbar = ({ onClose, navbar }: MobileNavbarProps) => {
  return (
    <div
      id='navbar'
      className='fixed top-0 pt-28 flex flex-col items-center min-w-[150px] h-screen overflow-y-scroll'
    >
      <Link href={Routes.root} className='absolute top-8' onClick={onClose}>
        <Image
          priority
          width={100}
          height={24}
          src='/vercel.svg'
          alt='Vercel Logo'
          className='dark:invert m-4 w-[100px] h-[24px]'
        ></Image>
      </Link>

      <div className='my-4'>
        {navbar.map((item) => (
          <According key={item.title} content={item.type} onClose={onClose}>
            {item.title}
          </According>
        ))}
      </div>

      <LanguageToggle onClose={onClose} />
    </div>
  )
}

export default MobileNavbar
