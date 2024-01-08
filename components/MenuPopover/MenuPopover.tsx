interface MenuPopoverProps extends React.PropsWithChildren {
  background?: string
  position?: string
  show: boolean
}

const MenuPopover = ({
  show,
  children,
  position = 'left-0',
  background = 'bg-slate-100/40',
}: MenuPopoverProps) => {
  return (
    <div
      className={`absolute w-fit ${position} z-10 backdrop-filter backdrop-blur-[20px] ${background} mt-6 border rounded-md  ${
        show ? 'block' : 'hidden'
      }`}
    >
      {children}
    </div>
  )
}

export default MenuPopover
