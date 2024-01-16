import { Link } from '@/navigation'
import { TProduct } from '@/plugins/types/requests'

type TSize = 'sm' | 'md'

interface ProductProps {
  product: TProduct
  size?: 'sm' | 'md'
}

const getSize = (size: TSize) => {
  switch (size) {
    case 'sm':
      return {
        p: 'p-4',
        w: 'w-1/4 lg:w-1/3',
        imgWidth: 'max-w-[80px] md:max-w-[150px]',
        fontTitle: 'text-sm lg:text-base line-clamp-2',
      }
    case 'md':
      return {
        p: 'p-6',
        w: 'w-5/12 lg:w-1/5',
        imgWidth: 'max-w-full',
        fontTitle: 'text-sm md:text-base xl:text-lg font-semibold md:font-bold',
      }
  }
}

export const Product = ({ product, size = 'md' }: ProductProps) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`flex flex-col justify-between items-center text-center max-w-full ${
        getSize(size).w
      } ${getSize(size).p} border border-sky-50 rounded-md mx-2 my-4`}
    >
      <img
        src={product.img}
        alt={product.category}
        className={`${getSize(size).imgWidth} rounded-md`}
      />
      <div className='flex flex-col justify-between h-full'>
        <p className={`${getSize(size).fontTitle} mt-2 md:mt-4`}>
          {product.title}
        </p>
        <p className='mt-1 font-sans font-bold text-gray-800 dark:text-gray-300 hover:text-gray-300 dark:hover:text-white'>
          {product.price} $
        </p>
      </div>
    </Link>
  )
}
