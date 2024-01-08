type TSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  size?: TSize
}

const getSize = (size: TSize) => {
  switch (size) {
    case 'sm':
      return 'px-2 py-1'
    case 'md':
      return 'py-1.5 px-4'
    case 'lg':
      return 'py-2 px-6'
  }
}

const Loader = () => {
  return (
    <div className='flex justify-center items-center backdrop-blur-md'>
      <div className='w-6 h-6 border-4 border-sky-500 border-t-4 border-t-gray-500 rounded-full animate-spin' />
    </div>
  )
}

const Button = ({ loading, size = 'md', ...props }: ButtonProps) => {
  return (
    <button
      className={`${getSize(
        size,
      )} bg-transparent hover:bg-gray-950 dark:hover:bg-gray-100 hover:text-white dark:hover:text-black hover:border-white dark:hover:border-black text-black dark:text-white border border-black dark:border-gray-400 rounded-md transition-all duration-500 shadow`}
      {...props}
    >
      {loading ? <Loader /> : props.children}
    </button>
  )
}

export default Button
