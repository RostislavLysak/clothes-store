import DrowDown from './DrowDown'

type TNavbar = {
  title: string
  type: string[]
}

type DesktopNavbarProps = {
  navbar: TNavbar[]
}

const DesktopNavbar = ({ navbar }: DesktopNavbarProps) => {
  return (
    <div className='flex gap-4 relative'>
      {navbar.map((item) => (
        <DrowDown key={item.title} title={item.title} content={item.type} />
      ))}
    </div>
  )
}

export default DesktopNavbar
