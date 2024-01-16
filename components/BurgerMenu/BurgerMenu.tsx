interface BurgerMenuProps extends React.PropsWithChildren {
  show: boolean
  onOpen: () => void
  onClose: () => void
}

const BurgerMenu = ({ show, onOpen, onClose, children }: BurgerMenuProps) => {
  return (
    <section className={`flex xl:hidden h-fit px-2 py-4`}>
      <div className='space-y-2 cursor-pointer' onClick={onOpen}>
        <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
        <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
        <span className='block h-0.5 w-8 animate-pulse bg-slate-950 dark:bg-gray-300'></span>
      </div>

      <div
        className={
          show
            ? 'fixed inset-0 z-50 flex flex-col justify-center items-center w-full h-screen bg-white dark:bg-black'
            : 'hidden'
        }
      >
        <div className='absolute top-0 right-0 px-8 py-8' onClick={onClose}>
          <svg
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='h-8 w-8 text-gray-600'
          >
            <line y1='6' x2='6' x1='18' y2='18' />
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </div>
        {children}
      </div>
    </section>
  )
}

export default BurgerMenu
