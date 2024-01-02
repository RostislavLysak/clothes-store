import { TProduct } from '@/plugins/types/requests'
import { capitalize } from '@/utils'

interface ProductProps {
  product: TProduct
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className='flex flex-col justify-between items-center text-center w-5/12 lg:w-1/5 p-6 border border-sky-50 rounded-md mx-2 my-4'>
      <img
        src={product.img}
        alt={product.category}
        className='max-w-full rounded-md'
      />
      <div className='flex flex-col justify-between h-full'>
        <p className='text-sm md:text-base xl:text-lg font-semibold md:font-bold mt-2 md:mt-4'>
          {product.title}
        </p>
        <p className='text-sm md:text-base lg:text-sm dark:text-gray-300 mt-1 md:mt-2 line-clamp-2 xl:line-clamp-3'>
          {product.description}
        </p>
        <p className='text-sm md:text-base font-bold mt-1'>
          {capitalize(product.category)}
        </p>
      </div>
    </div>
  )
}
